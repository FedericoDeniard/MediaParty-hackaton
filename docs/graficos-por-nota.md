# Qué gráficos arma el sistema para cada nota

Borrador v1 del 2026-10-31. Propuesta de Ignacio, para revisar con el equipo. Está **incompleto a propósito**: faltan los informes de fuentes de economía, política, deportes y otros temas (marcados con "pendiente"). Todo lo que figura como verificado se comprobó con llamadas reales el 2026-10-31.

## Qué problema resuelve

Hoy, con el JSON del enrichment, el sistema arma pocos gráficos y casi iguales en todas las notas. Medido sobre las 18 notas del corpus: el ranking de entidades sale en todas, la línea de tiempo en 9, la serie oficial en 2 y las proyecciones por fuente en 1. En 16 de 18 notas no hay ningún gráfico con datos externos a la nota. La solución tiene dos capas:

- **De la nota:** gráficos que salen del propio texto (lo que dice cada fuente, qué se pudo contrastar, quién aparece). Se verifican contra la nota.
- **De contexto:** datos oficiales que enriquecen la nota aunque la nota no los mencione (ejemplo: en una nota de inflación, la evolución real del salario mínimo). Salen de un catálogo cerrado de series verificadas.

## Reglas que no cambian

1. **El modelo propone y el código busca.** El modelo nunca escribe cifras. Para el contexto, el modelo solo elige de un catálogo cerrado qué tema encaja con la nota (o ninguno); el código trae las series, comprueba que estén frescas y calcula.
2. **Toda pieza lleva fuente, enlace, fecha de corte y rezago.** Si la serie tiene valores programados (por ejemplo el salario mínimo después del mes en curso), se cortan o se rotulan como programados.
3. **Ningún gráfico da veredicto.** Se muestra la razón, el cambio o la comparación; no "alcanza" ni "no alcanza".
4. **La autora decide.** Cada gráfico llega pendiente y ella lo aprueba o lo descarta, como el resto de los enriquecimientos.
5. **Si no aporta, no se arma.** Un período con una sola fuente es una frase, no un gráfico. Una serie vencida no se usa como dato actual.

## Catálogo de gráficos

### Capa de la nota

| id | Qué responde | Se arma cuando | Estado |
| --- | --- | --- | --- |
| N1 Serie con la cifra marcada | ¿Coincide lo que dice la nota con el dato oficial? | Hay una cifra con serie en el catálogo | Existe (`serie`) |
| N2 Proyecciones por fuente | ¿Qué proyecta cada fuente contra el último dato oficial? | Al menos 2 fuentes proyectan el mismo período | Prototipo A; necesita `figures` (pedido 1) para cubrir la nota 01 |
| N3 Quién habla | ¿Quién dice lo que dice la nota? | Al menos 2 fuentes nombradas | Prototipo F1; mejora con `source` (pedido 2) |
| N4 Nota anotada | ¿Dónde está lo importante y qué se pudo contrastar? | Siempre (es la vista de lectura) | Prototipo F2 |
| N5 Línea de tiempo y agenda | ¿Qué pasó y cuándo? | Al menos 3 eventos con fecha respaldada | Existe; mejora con `date_text` y `date_end` (pedido 5) |
| N6 Red de actores | ¿Quién se vincula con quién y cómo? | Al menos 8 aristas verificadas | Hoy solo ranking de entidades; la red necesita `relation_type` (pedido 3) |
| N7 Resultados y posiciones | ¿Cómo salió y cómo está la tabla? | Nota de deportes con marcadores | Necesita el nodo de deportes (pedido 6) |
| N8 Cifras por rubro | ¿Qué subió y qué bajó? | Al menos 4 cifras comparables | Necesita `figures` (pedido 1) |

### Capa de contexto (series verificadas)

Del informe de trabajo y salarios (verificado):

| id | Gráfico | Series | Notas que lo disparan | Advertencias |
| --- | --- | --- | --- | --- |
| C-T1 | Salario mínimo, haber mínimo y AUH en términos reales desde 2023-11 (base 100) | `57.1_SMVMM_0_M_34`, `58.1_MP_0_M_24`, `165.1_AAUH_0_0_3`, `148.3_INIVELNAL_DICI_M_26` | inflación, bolsillo, jubilaciones | SMVM cortado en el mes en curso (2026-10); el haber no incluye el bono; la AUH cambió de regla en 2023-24 |
| C-T2 | Cobertura de la canasta básica (SMVM y haber sobre CBT) | `57.1_...`, `58.1_...`, `150.1_CSTA_BATAL_0_D_20` | inflación, bolsillo | La canasta es por adulto equivalente; mostrar la razón |
| C-T3 | Salarios registrados reales por sector (privado, público, total) | `149.1_SOR_PRIADO_OCTU_0_25`, `149.1_SOR_PUBICO_OCTU_0_14`, `149.1_TL_REGIADO_OCTU_0_16` | paro universitario, salarios, docentes | Rezago de 3 meses; el sector público no aísla a los docentes |
| C-T4 | Transferencias a universidades en pesos constantes | `379.9_GTOS_CORR_017_7_0_M_38_20` deflactada con el IPC | paro universitario | Muy irregular por mes: usar acumulados anuales; es solo la transferencia corriente |
| C-T5 | Pobreza frente al costo de la canasta | `64.2_POBLACION_NUA_0_0_34_74`, `150.1_CSTA_BATAL_0_D_20` | pobreza, inflación | El INDEC aclaró que la diferencia entre semestres no es significativa; solo 31 aglomerados |
| C-T6 | Desocupación, informalidad y actividad | `42.3_EPH_PUNTUATAL_0_M_30`, `52.2_ASDJ_0_0_37`, `43.2_ECTAT_0_T_33` | trabajo, salarios | Rezago de 6 meses; en fracción, no en % |
| C-T7 | Ingresos por decil y desigualdad | `301.1_DECIL_4_IPPCF_0_T_12`, `301.1_DECIL_10_IPCF_0_T_13`, `65.1_CGI_0_0_21` | bolsillo, desigualdad | Sin deciles 1 y 2; rezago de 9 meses |
| C-T8 | Gasto en educación (fondo estructural) | `SE.XPD.TOTL.GD.ZS`, `SE.XPD.TOTL.GB.ZS` | paro universitario | Anual, hasta 2023: no cubre el período de la nota |

Ya verificados antes (`docs/series-verificadas.md`), para economía y finanzas: reservas internacionales, tipo de cambio mayorista y minorista, inflación mensual e interanual del BCRA, PBI del Banco Mundial. **Pendiente** el informe de economía para cerrar los gráficos de esa área (dólar contra inflación, agro, comercio exterior).
**Pendiente** también los informes de política, deportes y otros temas.

## Reglas de selección por nota

1. **Un paquete ordenado por nota:** un gráfico principal y hasta 4 secundarios. El principal es el más específico de lo que dice la nota (N2 si hay proyecciones, si no N1, si no el contexto más cercano).
2. **El contexto nunca desplaza a lo de la nota** y se limita a 2 por nota.
3. **El tema lo elige el modelo del catálogo cerrado,** con "ninguno" como respuesta válida. El código descarta la elección si la serie no existe, está vencida o le faltan puntos.
4. **Frescura mínima por serie:** si el último dato tiene más rezago que el umbral de la serie, se rotula "fondo estructural" o no se arma. El umbral lo fija el catálogo, no el modelo.
5. **N4 (nota anotada) y N3 (quién habla) son vistas de la nota y no cuentan para el tope.** A confirmar con el equipo.
6. **Cada gráfico se entrega con:** un título que dice el hallazgo (armado por código), una línea de cómo leerlo, la fuente con enlace y fecha de corte, las advertencias y una tabla equivalente.

## Matriz por nota

"Hoy" es lo que el sistema arma sin cambios. "Propuesta" es el paquete objetivo.

| Nota | Tema | Hoy | Propuesta (de la nota + contexto) | Falta |
| --- | --- | --- | --- | --- |
| 01 | Inflación de octubre | N1, N5, ranking, N3 (4 fuentes), N4 | N2 principal, N1, C-T1, C-T2 | Pedido 1 para N2; contexto de dólar pendiente |
| 02 | Inflación y proyecciones | N1, N2 (4 fuentes), N5, ranking, N3, N4 | N2 principal, N1, C-T1, C-T3 | Ninguno para N2 |
| 03 | Dólar y compra de reservas | ranking, N4 | Reservas y dólar del BCRA | Informe de economía |
| 04 | Reservas y Tesoro vendiendo dólares | N5, ranking, N3, N4 | Reservas y dólar del BCRA | Informe de economía |
| 05 | Aporte de la IA en USD | N5, ranking, N4 | PBI como referencia de la cifra | Informe de economía |
| 06 | Ventas de maíz y soja | ranking, N4 | Contexto agro | Informe de economía |
| 07 | Ley de salud mental | ranking, N3, N4 | Contexto de salud y votación | Informes de política y otros |
| 08 | Dictamen del proyecto de Defensa de la Soberanía Nacional | ranking, N3, N4 | Contexto de votaciones | Informe de política |
| 09 | Caso $LIBRA | N5, ranking, N3 | N6 (red de actores), N5 | Pedido 3 |
| 10 | Caso $LIBRA, jueces y fiscales | ranking, N4 | N6 | Pedido 3 |
| 11 | Destitución del juez Salmain | N5, ranking, N3 | N6 principal (15 vínculos con Salmain), N5 | Pedido 3 |
| 12 | Visita del Papa: actos | ranking, N3 | N5 (agenda por día) | Pedido 5; contexto de turismo pendiente |
| 13 | Visita del Papa: feriados | N5, ranking | Tarjeta de calendario de feriados 2026 (JSON oficial) | Leer el JSON campo a campo |
| 14 | Paro universitario | ranking | C-T3 y C-T4 principales, C-T8 de fondo | Ninguno para el contexto |
| 15 | CONICET | ranking, N3 | Contexto de ciencia | Informe de otros temas |
| 16 | Resultados de la fecha | ranking | N7 | Pedido 6; informe de deportes |
| 17 | Superclásico | N5, ranking, N3 | N7 (tabla) | Pedido 6; informe de deportes |
| 19 | SAOT en la Liga Profesional | N5, ranking, N3 | Quizás ninguno de contexto | Informe de deportes |

## Decisiones que necesito del equipo

1. ¿Un principal y hasta 4 secundarios, con 2 de contexto como máximo, es el tope correcto?
2. ¿N3 y N4 quedan como vistas de la nota fuera del tope?
3. ¿Quién mantiene el catálogo cerrado de contextos (series, umbral de frescura, fórmula)? Propongo que viva en `verificador/`, como el catálogo de indicadores.
4. ¿El nodo que elige el contexto va en el backend (cisco) y el constructor de gráficos en `verificador/`? Sería el pedido 7 del PR 4.
5. ¿Qué pasa con las encuestas de candidatos? Hoy no hay fuente verificada: queda fuera hasta que el informe de política diga lo contrario.
