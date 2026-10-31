# Validación de las notas: cómo integrarla

Origen: construido el 2026-10-31 en `verificador/`. Propuesta de integración con el backend de `backend/`; no está aplicada.

## Qué hace

Recibe el texto de una nota y, si los tiene, los enriquecimientos que generó el grafo (`entities`, `claims`, `timeline`, `editorial`). Devuelve un informe con:

- **Verificación por código:** para cada elemento del grafo, si existe en la nota (`ok`, `parafraseada`, `evidencia_no_encontrada`, etc.) y la cita copiada de la nota.
- **Tarjetas de datos:** cada cifra de la nota cruzada con una serie oficial. Resultados posibles: `coincide`, `difiere`, `sin_serie`, `sin_dato_oficial`, `error_fuente`. Cada tarjeta lleva la cita copiada de la nota, su párrafo y su posición.
- **Párrafos** con id y posición, para mostrar la nota y resaltar la cita.

Nunca da veredicto de verdadero o falso. El modelo (Haiku) solo propone qué cifra corresponde a qué indicador de un catálogo cerrado; el código busca el dato, compara y copia la cita.

## Fuentes de confianza

Lista cerrada en `docs/series-verificadas.md`: BCRA, datos.gob.ar (INDEC) y Banco Mundial. Todo lo que no está en el catálogo da `sin_serie`. Los datos de las series salen de copias guardadas hoy (`verificador/src/verificador/series/guardado/`); para refrescarlas antes de la demo: `cd verificador && uv run python scripts/guardar_series.py`.

## Contrato de datos

`validar_nota(cuerpo, enriquecimientos, usar_modelo=True)` devuelve un `InformeValidacion`; `informe.model_dump(mode="json")` es JSON puro. Campos principales:

| Campo | Contenido |
| --- | --- |
| `parrafos[]` | `id` (`p1`...), `orden`, `texto`, `inicio`, `fin` |
| `tarjetas[]` | `tarjeta.dicho` (valor, unidad, período), `tarjeta.serie` (fuente, id, nombre, valor, fecha del dato, enlace), `tarjeta.resultado`, `tarjeta.advertencias[]`, `cita`, `parrafo_id`, `inicio`, `fin`, `destacada`, `bloqueada` |
| `verificacion.items[]` | `nodo`, `indice`, `estado`, `cita_copiada`, `alertas[]` |
| `resumen`, `hay_bloqueos`, `avisos[]`, `version`, `modo_series` | totales y estado general |

**Las posiciones (`inicio`, `fin`) son sobre el `cuerpo` que se pasó.** Hay que pasar exactamente `articles.body`, sin recortarlo ni modificarlo.

`destacada` marca las tarjetas que merecen atención (tienen serie, o dicen que no hay dato oficial); el resto (`sin_serie`) conviene mostrarlo plegado. `bloqueada` marca una tarjeta sin cita en la nota: no se publica.

## Opción A (recomendada hoy): importarlo en el backend

1. En `backend/`: `uv add --editable ../verificador` (comparten Python 3.13).
2. En `backend/app/graph.py`, un paso después del `gather` de los cuatro nodos:

```python
import anthropic
from verificador.validar import validar_nota

async def validar(article_id: str, art: dict) -> None:
    db.set_enrichment(article_id, "validation", "running")
    try:
        hechos = {e["kind"]: e["data"] for e in db.get_enrichments(article_id)
                  if e["status"] == "done" and e["data"]}
        informe = await asyncio.to_thread(validar_nota, art["body"], hechos, usar_modelo=True)
        db.set_enrichment(article_id, "validation", "done",
                          data=informe.model_dump(mode="json"), model=f"verificador-{informe.version}")
    except Exception as e:  # la validación no puede tumbar el resto
        db.set_enrichment(article_id, "validation", "error", error=str(e))
```

y al final de `run()`: `await validar(article_id, art)`.

3. En `backend/app/main.py`, agregar `"validation"` a la lista de tipos que crea `insert_article` (`list(NODES) + ["validation"]`), porque `set_enrichment` actualiza una fila que ya existe.
4. No hace falta migración: `enrichments.kind` es texto libre. La interfaz, que ya escucha `enrichments` en tiempo real, recibe la fila `validation` como cualquier otro nodo.

## Opción B: servicio aparte

```sh
cd verificador
uv run --env-file ../backend/.env uvicorn verificador.api:crear_app --factory --port 8100
```

`POST /validar` con `{"cuerpo": "...", "enriquecimientos": {...}, "usar_modelo": true}`; también `GET /salud` y `GET /catalogo` (los indicadores y fuentes que valida el sistema). Sirve si el backend no puede agregar la dependencia.

## Cómo extenderlo

- **Un indicador nuevo:** una entrada en `series/catalogo.py` (clave, fuente, id, unidad, palabras clave, exclusiones) y su copia con `scripts/guardar_series.py`.
- **Una fuente nueva:** un cliente en `series/` con la misma forma que `bcra.py` y el nombre en `Serie.fuente`.
- **Un nodo nuevo del grafo:** un verificador con `@verificador_de("nodo")` en `verificacion.py`. Un nodo sin verificador no rompe: queda como `nodo_sin_verificador`.

## Qué falta para la demo

1. Que chisco acepte los pasos 1 a 3 (son unas 15 líneas en sus archivos; yo no los toco).
2. Que esta rama llegue a `main` (hoy está solo en la máquina de Ignacio): requiere un push y un pull request.
3. Que la interfaz muestre `validation`: tarjetas de datos con la cita resaltada por `inicio`/`fin` sobre `articles.body`.
4. Refrescar las series con red justo antes de la demo, y probar el recorrido completo dos veces.
