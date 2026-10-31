# Plan hasta la demo de las 19:00

Borrador del 2026-10-31, 13:10. Origen: conversación del equipo. Supuestos a confirmar: la demo es a las 19:00 y dura tres minutos; el código se congela a las 17:30.

## Qué mostramos

Una periodista pega una nota y el sistema la enriquece con material respaldado. Ella decide qué entra. Un lector abre la nota publicada, pregunta y ve el pasaje que sostiene la respuesta.

Reglas que no se rompen: el modelo propone y el código verifica y copia la cita; sin cita no hay enriquecimiento; nunca hay veredicto de verdadero o falso; decide siempre una persona.

## La nota de la demo

La nota 1 (inflación de octubre según las consultoras) sirve para un solo caso completo:

- Dos cifras coinciden con la serie del BCRA: la inflación de septiembre (1,9%) y la de agosto (1,7%).
- Las estimaciones de las consultoras para octubre no tienen dato oficial todavía: el INDEC lo publica el 12 de noviembre. El sistema lo dice y no rellena.
- Otras cifras de la nota (por ejemplo el acumulado del año) quedan "sin serie" y se señalan.
- Las claves de respuestas correctas están en `corpus/claves/01.json`.

Plan B: la nota 4 (dólar). Su variación del lunes 26/10 se parece a la del BCRA (+$11,50 contra +$12,21) pero no es la misma medición: cierre de mercado frente a valor de referencia. La tarjeta tiene que aclararlo.

Corrección: antes decía que la nota 3 traía las reservas de US$ 50.580 millones. Eso salía de otro medio y no está en las notas del corpus.

## Qué construimos y en qué orden

| Hora | Bloque | Está listo cuando |
| --- | --- | --- |
| 13:10 a 14:00 | Decisiones: modelo y clave, reparto, ramas, demo local o desplegada | Hay clave de un modelo con salida estructurada y cada persona sabe su bloque |
| 13:30 a 14:30 | 1. Backend base: FastAPI, ingesta en párrafos, guardado, endpoints de notas | `POST /notas` devuelve la nota con sus párrafos identificados y `GET /notas/{id}` la recupera |
| 14:30 a 15:45 | 2. Ficha, catálogo de indicadores, comparador y verificación | La nota 1 devuelve tarjetas con cifra, serie, período, cita y enlace; dos "coinciden", una queda sin dato oficial y otra "sin serie" |
| 15:45 a 16:45 | 3. Puntos clave y preguntas probables con su pasaje, y la bandeja | Cada pieza lleva un pasaje que el código comprobó; una pregunta queda sin respuesta en la bandeja |
| 16:45 a 17:30 | 4. Aprobación y página de lectura con resaltado | La autora aprueba una pieza y descarta otra; el lector pregunta y ve el pasaje resaltado |
| 17:30 | Se congela el código | Solo se corrigen errores |
| 17:30 a 18:30 | Ensayo dos veces, plan B grabado, diapositiva de quién paga | La demo de tres minutos sale completa dos veces seguidas |
| 18:30 a 19:00 | Colchón | Nada nuevo |

El frontend arranca a las 14:00 con datos de ejemplo tomados de las claves, sin esperar al backend.

## Reparto sugerido

- **Backend A (Ignacio):** bloques 1 y 2 hasta el comparador.
- **Backend B:** ficha con el modelo, puntos clave y preguntas (bloque 3).
- **Frontend y diseño:** pantalla de la autora (tarjetas, aprobar y descartar) y página de lectura con resaltado.
- **Periodismo:** revisar las claves de la nota 3, validar las preguntas y los extras, y ensayar el recorrido.
- **Negocio:** diapositiva de quién paga y cuánto, y el guion de tres minutos.

## Qué se corta si hay atraso (en este orden)

1. Series de datos.gob.ar: nos quedamos solo con las del BCRA.
2. Preguntas probables: quedan los puntos clave.
3. Resaltado fino del pasaje: alcanza con marcar el párrafo completo.
4. Despliegue en la nube: la demo corre en una notebook.

Nunca se corta la aprobación humana ni la regla de que sin cita no hay respuesta.

## Riesgos y cómo los cubrimos

| Riesgo | Cobertura |
| --- | --- |
| No hay clave del modelo a las 14:00 | Si no hay, se pide a los mentores o a la organización. Es la decisión más urgente |
| El modelo inventa una cifra | La verificación en código la bloquea; se mide contra las claves |
| La API del BCRA no responde en la demo | Se guarda una copia de las respuestas verificadas de hoy y la interfaz avisa que usa datos guardados |
| Mala conexión en el lugar | La demo corre local, sin depender de la nube |
| La demo se pasa de tres minutos | Se ensaya con cronómetro y se corta lo que sobre |

## Guion de la demo (tres minutos)

1. La periodista pega la nota 1 (20 segundos).
2. Aparecen las tarjetas: dos cifras coinciden con la serie, la estimación de octubre queda sin dato oficial y otra cifra queda sin serie. Se muestra la cita copiada de la nota y el enlace a la serie (60 segundos).
3. Aprueba un extra, descarta otro: el paso humano (30 segundos).
4. Publica y se abre la página de lectura. El lector pregunta y la nota resalta el pasaje (40 segundos).
5. Otra pregunta no tiene respuesta: el chat lo dice y la pregunta llega a la bandeja de la autora (20 segundos).
6. Diapositiva: quién paga, cuánto y el mapa del portal (10 segundos).

## Decisiones pendientes

1. Proveedor del modelo y clave (límite: 14:00).
2. Si la demo corre local o desplegada (propuesta: local, con despliegue solo si sobra tiempo).
3. Quién hace el frontend y quién la ficha.
4. Confirmar que la demo es a las 19:00 y el congelamiento a las 17:30.
5. Base de datos: SQLite local en la demo, con Supabase como mejora si hay tiempo.
