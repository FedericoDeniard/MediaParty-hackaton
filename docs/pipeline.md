# Enriquecer la nota: diseño del backend

Borrador de diseño, 2026-10-31. Origen: conversación del equipo. Reemplaza la versión anterior, que apuntaba a redes sociales. Es una propuesta para revisar antes de construir.

## Qué hace el producto

La periodista escribe su nota y la sube al portal. El sistema la enriquece con material útil para quien la lee, y cada pieza de ese material se apoya en un pasaje de la nota o en una serie oficial. La autora aprueba o descarta cada pieza. La página de lectura muestra la nota con lo aprobado.

## Reglas que no se rompen

1. El modelo propone. El código busca, compara y copia la cita. Una cita nunca la escribe un modelo.
2. Sin cita no hay enriquecimiento. Si no hay respaldo, el sistema lo dice y no rellena.
3. Ninguna pieza da veredicto de verdadero o falso. Decide siempre una persona.
4. Nada de datos inventados. Las series y los endpoints se verifican con llamadas reales.
5. Las series se piden desde el servidor, nunca desde el navegador.

## Tres tipos de enriquecimiento

Se eligen por lo que se puede respaldar. Un contexto "de conocimiento general" que escribe el modelo de memoria no tiene respaldo, así que queda fuera de la primera versión.

| Tipo | Qué es | De dónde sale el respaldo |
| --- | --- | --- |
| Puntos clave | Tres a cinco ideas centrales de la nota | Pasaje de la nota |
| Preguntas probables | Lo que un lector se preguntaría, con su respuesta | Pasaje de la nota. Si la nota no responde, la pregunta va a la lista de "preguntas sin respuesta" para la autora |
| Datos oficiales | Cada cifra de la nota, con lo que dice la serie oficial, el período, la cita y el enlace | Serie de datos.gob.ar (o del BCRA) |

"Preguntas sin respuesta" es un extra para la autora: le muestra qué huecos tiene su nota antes de publicarla.

## Flujo

```
nota -> 1. Ingesta -> 2. Ficha -> 3. Enriquecimientos (en paralelo) -> 4. Verificación -> 5. Aprobación -> página de lectura
         (código)     (modelo +    puntos clave / preguntas /            (código)          (persona)
                       código)     datos oficiales
```

### 1. Ingesta (solo código)

- Normalizar saltos de línea a `\n`. Guardar ese texto: toda verificación se hace contra él.
- Partir en párrafos por línea en blanco. Cada párrafo: `id` (`p1`, `p2`...), `orden`, `texto`, `inicio`, `fin`.
- Entrada: texto plano. Si llega HTML o Markdown, limpiarlo antes.

### 2. Ficha de la nota (una llamada al modelo)

```
Ficha {
  tema: string
  tesis: string
  hechos: [{ id, enunciado, parrafo_id, cita }]
  cifras: [{ id, valor_textual, indicador, periodo, lugar, parrafo_id }]
  citas_textuales: [{ id, quien, texto, parrafo_id }]
  actores: [{ id, nombre, rol, parrafo_id }]
}
```

- El modelo devuelve `parrafo_id` y un fragmento literal. No devuelve posiciones: los modelos cuentan mal.
- El código busca el fragmento en ese párrafo, guarda `inicio` y `fin`, y reemplaza el fragmento por el texto copiado de la nota. Si no lo encuentra, descarta el ítem.

### 3. Enriquecimientos (una llamada o rutina por tipo, en paralelo)

Cada unidad declara de qué ítems de la ficha sale, con `usa: ["h1", "c2"]`. Para citar textual, el modelo escribe un marcador `{{q1}}` y el código lo reemplaza por la cita literal.

```
Unidad { texto: string, usa: string[] }

PuntosClave { items: Unidad[] }                       // 3 a 5
PreguntaProbable { pregunta: string, respuesta: Unidad | null }   // null = la nota no responde
DatoOficial {                                          // lo arma el código, no el modelo
  cifra_id, serie_id, valor_serie, fecha_dato, enlace,
  resultado: "coincide" | "difiere" | "sin_serie",
  cita_nota                                            // copiada de la nota
}
```

Datos oficiales, paso a paso:

1. El modelo ya dejó en la ficha el indicador, el período y el lugar de cada cifra.
2. El código busca en la API de series de tiempo de datos.gob.ar y se queda con candidatos.
3. Un identificador de serie solo se usa si está verificado con una llamada real. No se inventa ninguno.
4. El código compara el valor de la nota con el de la serie y copia los datos. `difiere` muestra los dos números y no dice cuál está mal.
5. Si no hay serie, el resultado es `sin_serie` y se señala. No se rellena.

### 4. Verificación (solo código)

| Chequeo | Cómo |
| --- | --- |
| Referencias | Cada id de `usa` existe en la ficha |
| Citas | Todo texto entre comillas aparece literal en la nota |
| Cifras | Los números de cada pieza (formato argentino, `%`, `$`) están en la nota |
| Respuestas | Una respuesta sin pasaje que la sostenga se convierte en `null` |

Resultado por pieza: `ok`, `con_alertas` o `bloqueada`.

### 5. Aprobación (la persona)

Cada pieza arranca en `pendiente`. La autora la pasa a `aprobada` o `descartada`. Si edita una pieza, se vuelve a verificar. Solo lo aprobado aparece en la página de lectura.

## Tablas (carpeta `db/`)

- `notas`: id, titulo, texto, creada_en.
- `parrafos`: id, nota_id, orden, texto, inicio, fin.
- `fichas`: nota_id, contenido (jsonb), modelo, creada_en.
- `enriquecimientos`: id, nota_id, tipo, contenido (jsonb), cita, enlace, estado (`pendiente`, `aprobada`, `descartada`), alertas (jsonb), creada_en.
- `preguntas_sin_respuesta`: id, nota_id, pregunta, estado.

## API mínima

- `POST /notas` con `{ titulo, texto }` -> `{ id, parrafos }`.
- `POST /notas/:id/enriquecer` -> ficha y enriquecimientos con estado y alertas.
- `GET /notas/:id` -> nota, párrafos, ficha y enriquecimientos.
- `PATCH /enriquecimientos/:id` con `{ estado }` o `{ contenido }`.
- `GET /notas/:id/lectura` -> nota con solo lo aprobado, y los pasajes para resaltar.

## Orden de trabajo

| Bloque | Está listo cuando |
| --- | --- |
| 1. Ingesta y base | Una nota se guarda y se ve en una página con sus párrafos identificados |
| 2. Ficha y verificación | Una nota devuelve su ficha con citas ubicadas, y una cita inventada se descarta |
| 3. Puntos clave y preguntas probables | Aparecen con su pasaje, y una pregunta sin respuesta queda en la lista |
| 4. Datos oficiales | Una cifra devuelve su serie, período, cita y enlace, y una cifra sin serie queda señalada |
| 5. Aprobación y página de lectura | La autora aprueba una pieza y descarta otra, y la lectura muestra la nota con la pieza aprobada resaltando su pasaje |

Si algo se atrasa, se recorta de abajo hacia arriba en el bloque 4. La aprobación humana no se recorta.

## Antes de construir hay que verificar

- La API de series de tiempo de datos.gob.ar: qué serie está vigente para el IPC y para los otros indicadores de la nota de ejemplo.
- El modelo elegido con salida estructurada, sobre tres párrafos de prueba.

## Decisiones abiertas

1. Lenguaje y framework del backend (propuesta: TypeScript con zod).
2. Proveedor del modelo y su clave.
3. Base de datos y dónde corre el backend.
4. Nota de ejemplo para la demo: con tres cifras y una sin respaldo posible, y cinco preguntas de prueba, una sin respuesta en la nota.
