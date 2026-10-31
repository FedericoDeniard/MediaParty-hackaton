# Series y APIs verificadas con llamadas reales

Verificado el 2026-10-31 con llamadas reales desde el servidor (sin autenticación). No hay ningún identificador de memoria: todos salen de una respuesta de la API.

## API de series de tiempo de datos.gob.ar

Base: `https://apis.datos.gob.ar/series/api/`. Búsqueda: `search/?q=<texto>&limit=<n>`. Datos: `series/?ids=<id>&limit=<n>&sort=desc&format=json`.

| Indicador | Id de serie | Último dato devuelto | Observación |
| --- | --- | --- | --- |
| IPC nacional, nivel general (base dic. 2016, índice) | `148.3_INIVELNAL_DICI_M_26` | 2026-08: 12276,766 | La inflación mensual se calcula con el código a partir del índice |
| IPC nacional, variación acumulada desde diciembre | `145.3_INGNACIOR_DICI_M_57` | hasta 2026-08 | Devuelve la serie hasta agosto |
| IPC núcleo nacional | `148.3_INUCLEONAL_DICI_M_19` | hasta 2026-08 | |
| IPC regulados nacional | `148.3_IREGULANAL_DICI_M_22` | hasta 2026-08 | |
| Salario mínimo vital y móvil mensual | `57.1_SMVMM_0_M_34` | 2027-04: 437000 | La serie trae valores con fecha futura: parecen programados. Confirmar antes de usarla |

Cuidados:

- El IPC de septiembre ya se publicó, pero la serie llega hasta agosto: hay rezago de un mes o más.
- `175.1_DR_ESTANSE_0_0_20` (dólar) dice en la búsqueda que llega a 2026-08-31, pero al pedir los últimos datos devuelve octubre de 2025. No es confiable para el tipo de cambio actual.
- La búsqueda devuelve muchas series parecidas. El código no debe elegir una por búsqueda libre: hay que usar un catálogo cerrado de ids verificados.

## API del Banco Central v4.0 (estadísticas monetarias)

Base: `https://api.bcra.gob.ar/estadisticas/v4.0/`. Lista de variables: `Monetarias`. Datos: `Monetarias/<idVariable>?limit=<n>`. Respondió HTTP 200 sin autenticación.

| Variable | idVariable | Último dato devuelto |
| --- | --- | --- |
| Reservas internacionales (millones de US$) | 1 | 2026-10-28: 50603 (27/10: 50579) |
| Tipo de cambio mayorista de referencia | 5 | 2026-10-30: 1537,3487 |
| Tipo de cambio minorista (promedio vendedor) | 4 | 2026-10-30: 1562,04 |
| Inflación mensual (%) | 27 | 2026-09-30: 1,9 (agosto 1,7; julio 2,1) |
| Inflación interanual (%) | 28 | 2026-09-30: 33,4 |

## API del Banco Mundial (World Development Indicators)

Verificado el 2026-10-31. Base: `https://api.worldbank.org/v2/country/ARG/indicator/<id>?format=json&per_page=20&mrv=6`. Sin autenticación. La base (fuente 2) figura actualizada el 2026-10-08. Los datos son **anuales**.

| Indicador | Id | Último año con dato |
| --- | --- | --- |
| Inflación, precios al consumidor (% anual) | `FP.CPI.TOTL.ZG` | 2024: 219,88 |
| Crecimiento del PIB (% anual) | `NY.GDP.MKTP.KD.ZG` | 2025: 4,37 |
| Desempleo total (% de la fuerza laboral, estimación modelada de la OIT) | `SL.UEM.TOTL.ZS` | 2025: 7,145 |
| Gasto público en educación (% del PIB) | `SE.XPD.TOTL.GD.ZS` | 2023: 5,00 |
| PIB (US$ corrientes) | `NY.GDP.MKTP.CD` | 2025: 683.097.891.618 |
| Pobreza a US$ 3,00 por día (PPA 2021, % de la población) | `SI.POV.DDAY` | 2024: 1,0 |

Cuidados: sirve para cifras anuales y estructurales (PIB, desempleo, gasto educativo), no para datos mensuales ni diarios. El rezago va de uno a tres años según el indicador. Sus definiciones no siempre coinciden con las del INDEC (por ejemplo, el desempleo es una estimación modelada de la OIT), así que la tarjeta tiene que nombrar la fuente y la definición.

## Fuentes de confianza: lista cerrada

El sistema solo valida contra fuentes de esta lista y solo con indicadores verificados que figuren en el catálogo:

**Nivel 1: datos oficiales y de organismos internacionales** (se cruzan por código y pueden dar "coincide" o "difiere")

1. BCRA (API de estadísticas v4.0).
2. INDEC y otros organismos oficiales, a través de la API de series de tiempo de datos.gob.ar.
3. Banco Mundial (World Development Indicators).
4. Censo Nacional de Población, Hogares y Viviendas 2022 (INDEC). Verificado el 2026-10-31: está publicado en el catálogo de datos.gob.ar (dataset `censo-nacional-de-poblacion-hogares-y-viviendas-2022`, modificado el 2026-08-03) como un CSV por provincia (24 archivos), más diccionarios de variables y categorías y documentos metodológicos en PDF. No es una serie de tiempo ni una API de consulta: son tablas que se descargan una vez. Todavía no se abrieron los CSV, así que no se sabe qué agregados traen (por ejemplo población total o por provincia).

**Nivel 2: encuestas y estimaciones de consultoras** (se muestran con su fuente; no se presentan como dato oficial)

Las encuestas y estimaciones privadas no tienen una API ni una serie estable. Entran solo desde un **fichero curado a mano** con: consultora o institución, estudio, fecha de campo, tamaño de la muestra, margen de error, indicador, valor y enlace a la ficha técnica. Una persona del equipo (periodismo) decide qué consultoras entran a la lista. Los criterios mínimos propuestos son que publique su metodología y su ficha técnica, que tenga trayectoria verificable y que sea posible llegar a la publicación original. La tarjeta lo rotula "encuesta de [institución], [fecha], muestra de N" y nunca da "coincide" ni "difiere" con un dato oficial. Todavía no hay ninguna consultora cargada.

Todo lo que no esté en el catálogo da "sin serie". No se busca en la web abierta, y el modelo nunca aporta un valor oficial: propone el indicador, y el código busca, compara y copia.

## Qué fuente para qué

- Reservas, dólar e inflación reciente: API del BCRA. Es la más fresca.
- Series históricas del IPC, núcleo y regulados: datos.gob.ar.
- Cifras anuales y estructurales (PIB, desempleo, gasto en educación, pobreza): Banco Mundial.
- Salarios, jubilaciones y el resto: sin serie verificada todavía. Si una nota usa una cifra de ese tipo, el resultado es "sin serie".

## Primeros cruces con las notas

Corrección: una versión anterior de este documento decía que la nota 3 trae las reservas de US$ 50.580 millones. Eso salía de otro medio, no de las notas del corpus. Las notas 3 y 4 no mencionan ese dato.

- Notas 1 y 2: la inflación de septiembre fue 1,9% y la de agosto 1,7%. La serie del BCRA (variable 27) da 1,9 y 1,7: coinciden. Son los únicos cruces que hoy dan "coincide".
- Nota 4: dice que el lunes 26/10 el dólar mayorista subió $11,50 (0,75%) frente al viernes. El mayorista de referencia del BCRA (variable 5) pasó de 1528,26 (23/10) a 1540,48 (26/10): sube $12,21 (0,80%). Se parece pero no coincide, y además no es la misma medición: la nota habla del cierre de mercado y la serie es el valor de referencia. Si se muestra, la tarjeta tiene que aclararlo.
- Las estimaciones de inflación de octubre (notas 1 y 2) no tienen dato oficial todavía: el INDEC lo publica el 12 de noviembre.
