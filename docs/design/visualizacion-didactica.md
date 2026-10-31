# Visualizaciones didácticas: qué dice la investigación y qué cambiamos

Borrador del 2026-10-31. Origen: devolución de Ignacio sobre los prototipos A (proyecciones por fuente) y F (radiografía por párrafo). Es una síntesis de fuentes, no una especificación: lo que no tiene respaldo fuerte lo dice.

## Criterios, con su fuente

1. **Cada gráfico responde una pregunta del lector y la dice en el título.** Datawrapper recomienda frases simples, como si se lo contaras a un amigo, y títulos o anotaciones que digan lo que el lector tiene que ver. Evidencia: práctica de redacciones; no encontré un estudio controlado sobre títulos.
2. **Rangos como gráfico de puntos.** Un rango se dibuja con dos puntos unidos por una línea gruesa, con la explicación justo arriba. Sirve cuando importa la distancia entre valores. (Datawrapper, "range plot".)
3. **Mostrar la incertidumbre solo si cambia la lectura, y explicarla en lenguaje llano.** Si los rangos son angostos y no se solapan, suman ruido. Si hay tanta incertidumbre que no se puede comparar, no se grafica. (ONS.)
4. **Etiquetas directas en lugar de leyenda, y anotar lo que el lector debe ver.** La leyenda obliga a ir y volver con la vista. Los gráficos explicativos suelen funcionar mejor con anotaciones. Evidencia: guías de Datawrapper, Flourish y PolicyViz; no hay estudio controlado de etiquetas directas contra leyenda.
5. **Marcas finas, sin borde alrededor.** La guía de gráficos que usamos fija: barras de hasta 24 px, extremo de datos redondeado (4 px) y base recta, separación por espacio y no por trazo, guías de 1 px sólidas y discretas, un punto de 8 px o más.
6. **Sobre el redondeo no hay estudio de percepción.** Las fuentes lo tratan como decisión estética con un costo leve de precisión. El compromiso más común es redondear solo el extremo libre de la barra y dejar la base recta.
7. **El vacío se muestra como vacío.** No se rellena, y se explica por qué falta. (Nuestra regla del producto, coherente con ONS.)
8. **Cuidado con las marcas de "sin verificar".** En las pruebas de Squash (Duke Reporters' Lab), la ausencia de una marca se leyó como aval, y las etiquetas tipo verdadero o falso confundían a parte de los espectadores. Conviene describir hechos ("no nombra quién lo dice"), no dar un juicio.
9. **El resaltado de texto es un ancla, y las notas tienen que estar atadas a su pasaje.** (Blustein, Rowe y Graff, 2011.) La idea de que resaltar mucho perjudica la comprensión sale de un blog, no de un estudio.
10. **Accesibilidad.** Tabla equivalente, zonas de clic de 24 px o más, que la información no dependa solo del color.

## Qué cambia en A (el primer gráfico es el que funcionó)

- Sin borde de 2 px alrededor de las barras. Gris suave en la guía y color plano en la marca.
- Rangos como línea gruesa con extremos redondeados y un punto en cada extremo; valores únicos como punto circular. Es el patrón de Datawrapper y resuelve el pedido de "más redondeado".
- Un título que dice el hallazgo, armado por código con los datos: "Las consultoras esperan entre 1,8% y 2% para octubre, alrededor del último dato oficial (1,9%)".
- Una línea de lectura en lenguaje llano arriba: qué es cada marca.
- Anotar la línea del dato oficial y el "todavía no publicado".
- Las fuentes sin nombre en gris, para que se distingan de las nombradas.
- Si un período tiene una sola fuente, no se arma gráfico: se muestra como una frase.
- Tabla equivalente debajo.

## Por qué falla F y cómo se repiensa

F falla porque arranca de los datos que tenemos y no de una pregunta del lector: una matriz de cuadrados por tipo de afirmación es la taxonomía interna del modelo, no algo que alguien necesite saber. Además, su columna "sin fuente" la decide el modelo y puede leerse como juicio (criterio 8).

Propuestas que parten de una pregunta:

- **F1. ¿Quién habla en esta nota?** Barras por fuente con cuántas citas y atribuciones le corresponden, y debajo "voces que faltan" (ya viene en el editorial). Necesita `source_id` (pedido 2 del PR 4); hoy se aproxima por código.
- **F2. La nota anotada, con minimapa.** El texto es el gráfico: las cifras y las citas resaltadas en su lugar, tres marcas como máximo, y una tira angosta alineada con el scroll para saltar. Responde "¿dónde está lo importante?".
- **F3. Libro de cifras.** Una tabla corta: cifra, quién la dice, si hay dato oficial, con enlace al pasaje.

## Tensiones que hay que resolver con el equipo

- **Sistema Swiss.** `AGENTS.md` fija `border-radius: 0`. El redondeo de las barras choca con eso: hay que decidir si las marcas de datos son una excepción (por ejemplo un token propio para ellas). Lo decide Federico.
- **Contraste del color de datos.** El verde `#C7DE58` da 1,32:1 sobre hueso. Sin borde alrededor queda por debajo del 3:1 de WCAG 1.4.11 para objetos gráficos. Hace falta un verde más oscuro para las marcas, o etiquetas directas en tinta.

## Límites de esta investigación

No encontré estudios que midan cómo el redondeo afecta la lectura de longitudes, ni etiquetas directas contra leyenda. No pude leer completo el artículo de The Data School sobre barras redondeadas (el servidor devolvió la página vacía; solo vi el resumen del buscador). Los estudios de interfaces de verificación son pequeños.

## Fuentes

- Datawrapper, [cómo crear un range plot](https://www.datawrapper.de/academy/how-to-create-a-range-plot).
- Datawrapper, [qué considerar al usar texto en visualizaciones](https://www.datawrapper.de/blog/text-in-data-visualizations).
- Flourish, [cómo usar texto](https://flourish.studio/learn/text/).
- PolicyViz, [tres formas de anotar gráficos](https://policyviz.com/2018/04/12/three-ways-to-annotate-your-graphs/).
- ONS, [mostrar incertidumbre en gráficos](https://service-manual.ons.gov.uk/data-visualisation/guidance/showing-uncertainty-in-charts).
- Winton Centre, [comunicar la incertidumbre](https://wintoncentre.maths.cam.ac.uk/projects/communicating-uncertainty).
- Duke Reporters' Lab, [pruebas de UX de Squash](https://reporterslab.org/2019/10/28/beyond-the-red-couch-bringing-ux-testing-to-squash/).
- Blustein, Rowe y Graff, [Making sense of scholarly annotations (2011)](https://web.cs.dal.ca/~jamie/pubs/PDF/2011/MakingSense2011.pdf).
- The Data School, [los peligros de las barras redondeadas](https://thedataschool.co.uk/jonathan-allenby/the-dangers-of-rounded-bar-charts) (solo el resumen del buscador).
- Guía interna de gráficos (skill `dataviz`): especificación de marcas.
