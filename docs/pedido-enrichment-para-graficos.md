# Pedido al backend: datos extra en el enrichment para armar mejores gráficos

**Pedido de Ignacio Miste** al equipo de backend (agentes de enrichment). Fecha: 2026-10-31. Estado: propuesta, sin implementar y sin acordar. Todo lo de abajo es para discutir: si algo no cierra, se cambia.

## Por qué lo pido

Hoy los gráficos que se pueden armar con el JSON del enrichment son básicos (serie oficial, línea de tiempo, ranking de entidades). Se auditaron las 18 salidas de `docs/enrichments/` y el límite no está en el dibujo sino en los datos: lo que no viene estructurado se tiene que adivinar con expresiones regulares sobre el texto de cada afirmación, y eso falla.

Evidencia, sobre las 18 notas del corpus:

- **Cifras sin estructura.** El verificador deduce el indicador por palabras clave dentro de la frase. En la nota 01 ninguna de las siete cifras en % de octubre se asignó a un indicador, tampoco las dos proyecciones mensuales ("…ubican la inflación de octubre en 1,8% mensual, una desaceleración de 0,1 puntos porcentuales…" y "…marcaría una suba de 1,8% en octubre"). En la nota 02 se asignaron cuatro de nueve. Resultado: un gráfico de "qué proyecta cada consultora contra el último dato oficial" funciona en la nota 02 y no en la 01, que es la de la demo.
- **"Sin fuente" poco confiable.** `needs_source` va de 11% a 100% de las afirmaciones según la nota; en las notas 08 y 16 marca todas, incluidos los resultados de partidos, y en la 02 marca como "sin fuente" que el Indec publicará el dato el 12 de noviembre.
- **Relaciones imposibles de agrupar.** Hay 210 textos de relación distintos en el corpus (`pertenece a`, `integra`, `acusó a`, `sobreseyó a`, `venció a`…). No se puede armar una red de actores coloreada por tipo de vínculo.
- **Eventos que se pierden.** El verificador descarta los eventos con día cuando la nota no escribe la fecha completa ("el domingo"). La nota 16 pasó de 16 eventos graficables a menos de 3.
- **Entidades sin rol ni tipo de organización.** Para distinguir una consultora de un medio hubo que excluir a Infobae con una regex sobre la descripción.

## Resumen del pedido

| # | Qué | Gráfico que habilita | Prioridad |
| --- | --- | --- | --- |
| 1 | Cifras estructuradas (valor, rango, unidad, indicador, período, fuente, tipo, rubro) | Proyecciones por fuente contra el dato oficial; comparación por rubro; marcadores deportivos | Alta |
| 2 | Quién dice cada afirmación (`source_id`, `source_kind`) | "Sin fuente" calculado por código; gráfico de voces en la nota | Alta |
| 3 | Aristas con tipo de relación (`relation_type`) | Red de actores y vínculos | Media |
| 4 | Entidades con rol, alias y tipo de organización | Mapa de presencia; ranking sin ruido; mejor conteo de menciones | Media |
| 5 | Eventos con fecha literal, fin de rango y entidades | Agenda por día; cronología por actor | Media |
| 6 | Nodo de deportes (partidos y posiciones), solo para esa sección | Resultados de la fecha y tabla | Baja |

Si el tiempo no alcanza para todo, **1 y 2 son lo único que cambia la demo** (la nota 01). El resto puede esperar.

## Detalle

Todos los campos nuevos son **opcionales con valor por defecto**, para no romper a quien lea hoy `enrichments`. No hace falta migración: `enrichments.kind` es texto libre y `data` es jsonb.

### 1. Cifras estructuradas

Un nodo nuevo `figures`, que corre en paralelo con los demás (no suma latencia), con una entrada por cifra de la nota:

```python
class Figure(BaseModel):
    text: str                 # fragmento literal de la nota donde está la cifra
    paragraph_index: int
    value: float
    value_min: float | None   # solo si la nota da un rango ("entre 1,8% y 2%")
    value_max: float | None
    unit: Literal["percent", "ars", "usd", "count", "points", "goals", "other"]
    indicator: str            # "inflación mensual", "dólar mayorista", "puntos en la tabla"
    period: str | None        # ISO parcial: 2026, 2026-10, 2026-10-26
    source_id: str | None     # id de un EntityNode; None si la nota la da como dato propio
    kind: Literal["observed", "projection", "change", "target"]
    subject: str | None       # rubro, equipo o lugar al que se refiere ("carnes", "Vélez")
```

Cómo se verifica (lo hace el verificador, por código): `text` aparece literal en la nota; `value` aparece en ese fragmento (formato argentino, `%`, `$`); `source_id` existe en `entities` y su nombre o alias figura en el pasaje; `period` es una fecha válida. `indicator`, `unit`, `kind` y `subject` son etiquetas del modelo y se muestran como tales.

Criterio de hecho: las cifras de octubre de las notas 01 y 02 salen con fuente, rango y `kind="projection"`, y el gráfico de proyecciones por fuente aparece en las dos.

### 2. Quién dice cada afirmación

Dos campos opcionales en `Claim`:

```python
source_id: str | None = None        # id de EntityNode que lo dice; None si la nota lo afirma sin atribuir
source_kind: Literal["official", "consultancy", "person", "media", "document"] | None = None
```

Se verifica igual que en el pedido 1: la entidad tiene que aparecer nombrada en el pasaje de la afirmación. Con esto "sin fuente citada" deja de depender del criterio del modelo (`needs_source`) y pasa a ser un hecho comprobable en el texto.

Criterio de hecho: en la nota 16, los resultados de partidos ya no salen todos "sin fuente".

### 3. Tipo de relación en las aristas

```python
relation_type: Literal["membership", "accusation", "decision", "versus", "location", "visit", "other"] = "other"
```

`relation` sigue siendo el texto libre. Referencias: `membership` (integra, preside, representa, pertenece), `accusation` (acusó, denunció), `decision` (destituyó, sobreseyó, ordenó, aprobó), `versus` (venció a, enfrenta), `location` (ubicado en), `visit` (visitará, viaja a). La dirección ya existe: `source` actúa sobre `target`.

Criterio de hecho: en la nota 11 (Salmain, 36 aristas) todas las aristas quedan en una de las siete familias, y `other` es minoría.

### 4. Entidades: rol, alias y tipo de organización

```python
role: Literal["protagonist", "source", "mentioned"] = "mentioned"
aliases: list[str] = []   # "EcoGo" para "Eco Go"; "Milei" para "Javier Milei"
org_kind: Literal["consultancy", "government", "media", "club", "company", "ngo", "other"] | None = None
```

El verificador cuenta las menciones por código usando nombre y alias, así que `mentions` (que hoy estima el modelo) deja de usarse. Los alias se verifican contra la nota: un alias que no aparece se marca.

### 5. Eventos: fecha literal, fin de rango y entidades

```python
date_text: str | None = None      # la fecha tal como figura en la nota: "el domingo", "del 8 al 11 de noviembre"
date_end: str | None = None       # ISO parcial, solo para rangos y agendas
entity_ids: list[str] = []        # actores y lugares del evento
```

Para resolver fechas relativas ("el domingo") hace falta que el agente de timeline reciba la **fecha de publicación de la nota**. Ya está previsto en el PR 3 (guardarla en `articles` y pasarla al verificador y al timeline).

Criterio de hecho: la agenda de la visita del Papa (nota 13, del 8 al 11 de noviembre) sale completa, y la nota 16 recupera sus eventos con día.

### 6. Nodo de deportes

Solo cuando `niche == "deportes"`, con el mecanismo de prompts por nicho que ya existe:

```python
class Match(BaseModel):
    text: str                 # fragmento literal
    paragraph_index: int
    home: str
    away: str
    home_score: int | None
    away_score: int | None
    date: str | None
    competition: str | None   # "Torneo Clausura", "Tabla Anual"
    round: str | None         # "fecha 14"
    venue: str | None

class Standing(BaseModel):
    text: str
    paragraph_index: int
    team: str
    points: int | None
    position: int | None
    zone: str | None          # "Zona A", "Grupo B"
```

Se verifica por código: `text` literal en la nota y los marcadores y puntos presentes en el fragmento.

## Reglas que se mantienen

- El modelo propone; el código busca, compara y copia la cita. Sin cita no hay punto en un gráfico.
- Ningún campo nuevo da veredicto de verdadero o falso.
- No se usa `confidence` ni sentimiento por nota para graficar: son autoevaluaciones del modelo y parecen un veredicto.

## Dónde implementarlo (a decidir)

- **Pedidos 1 y 2:** dos caminos.
  - (a) En el backend, con el nodo `figures` y los campos de `Claim`.
  - (b) Ignacio lo implementa en `verificador/src/verificador/propuesta.py`, que ya corre dentro de la validación con `usar_modelo=True` (PR 3) y no toca los agentes del backend.
- **Pedidos 3, 4, 5 y 6:** tocan `backend/app/schemas.py` y los prompts, así que los decide el equipo de backend.

El plan de la demo (`docs/plan-demo-19hs.md`) fija el congelamiento del código a las 17:30, a confirmar.

## Qué necesito de ustedes

1. ¿Los pedidos 1 y 2 van por el backend (a) o por el verificador (b)?
2. ¿Alcanza el tiempo para 3, 4 y 5, o los dejamos para después de la demo?
3. ¿Las enumeraciones propuestas (en inglés, como `type` de las entidades) les sirven, o prefieren otras?

Contacto: Ignacio Miste.
