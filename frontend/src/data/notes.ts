import type { JSONContent } from '@tiptap/core'
import { corpusNote, corpusNotes } from './corpus.ts'

/* ============================================================
   El modelo de una nota.

   `doc` es el documento de Tiptap y es la única fuente de verdad.
   El texto plano nunca se guarda: se deriva con `getText`, que ya
   corta por línea en blanco como espera la ingestión del pipeline.

   Los estados son dominio cerrado: uniones de literales, no
   `enum` (el tsconfig exige `erasableSyntaxOnly`).
   ============================================================ */

export type NoteStatus = 'draft' | 'review' | 'published'

/* Las temáticas son un dominio cerrado: la lista de una nota y el
   filtro de la mesa de trabajo salen de acá. */
export type NoteTheme =
  | 'politica'
  | 'economia'
  | 'sociedad'
  | 'deportes'
  | 'cultura'
  | 'comunidad'
  | 'medioambiente'
  | 'tecnologia'

export const noteThemes: NoteTheme[] = [
  'politica',
  'economia',
  'sociedad',
  'deportes',
  'cultura',
  'comunidad',
  'medioambiente',
  'tecnologia',
]

/* Las secciones de la mesa de trabajo. `unpublished` agrupa los
   borradores y las notas en revisión: todo lo que todavía no salió. */
export type NoteScope = 'all' | 'unpublished' | 'published'

export type EnrichmentType = 'puntos_clave' | 'pregunta_probable' | 'dato_oficial'

export type EnrichmentStatus = 'pendiente' | 'aprobada' | 'descartada'

export interface Note {
  id: string
  title: string
  doc: JSONContent
  status: NoteStatus
  theme: NoteTheme | null
  wordCount: number
  createdAt: string
  updatedAt: string
  /** Una publicación archivada deja las listas sin borrar su contenido. */
  archivedAt?: string
}

export interface Enrichment {
  id: string
  noteId: string
  type: EnrichmentType
  text: string
  /** Texto literal de la nota que respalda la pieza. Es lo que se resalta. */
  citation: string | null
  status: EnrichmentStatus
}

/* ---- Construcciones de documento ---- */

export function textDoc(blocks: JSONContent[]): JSONContent {
  return { type: 'doc', content: blocks }
}

export function paragraph(text: string): JSONContent {
  return { type: 'paragraph', content: [{ type: 'text', text }] }
}

export function heading(level: 2 | 3, text: string): JSONContent {
  return { type: 'heading', attrs: { level }, content: [{ type: 'text', text }] }
}

export function quote(text: string): JSONContent {
  return { type: 'blockquote', content: [paragraph(text)] }
}

/* ---- Texto y conteo ---- */

function docText(node: JSONContent): string {
  if (typeof node.text === 'string') return node.text
  if (!node.content) return ''
  return node.content.map(docText).join(' ')
}

export function countWords(doc: JSONContent): number {
  return docText(doc).split(/\s+/).filter(Boolean).length
}

/* Avance de la nota para la lista: el primer tramo del texto, sin
   saltos de línea, cortado en una palabra entera. */
export function excerpt(doc: JSONContent, max = 180): string {
  const text = docText(doc).replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`
}

/* ---- Etiquetas ---- */

export const noteThemeLabels: Record<NoteTheme, string> = {
  politica: 'Política',
  economia: 'Economía',
  sociedad: 'Sociedad',
  deportes: 'Deportes',
  cultura: 'Cultura',
  comunidad: 'Comunidad',
  medioambiente: 'Medioambiente',
  tecnologia: 'Tecnología',
}

export const enrichmentTypeLabels: Record<EnrichmentType, string> = {
  puntos_clave: 'Puntos clave',
  pregunta_probable: 'Pregunta probable',
  dato_oficial: 'Dato oficial',
}

/* ============================================================
   Semillas.

   Los textos salen del corpus de pruebas (`corpus/notas/`): 18
   notas reales de la semana del 24 al 31 de octubre de 2026,
   usadas acá sólo para que la mesa de trabajo arranque con
   contenido y no con líneas de cuidado.

   Cada pieza de enriquecimiento cita un fragmento literal del
   documento, que es lo que el editor resalta al aprobarla.
   ============================================================ */

const handSeeds: Note[] = [
  {
    id: 'n-01',
    title: 'A cuánto llegará el índice de inflación de octubre según las consultoras',
    status: 'review',
    theme: 'economia',
    createdAt: '2026-10-27T14:20:00.000Z',
    updatedAt: '2026-10-31T09:12:00.000Z',
    doc: corpusNote('01').doc,
    wordCount: 0,
  },
  {
    id: 'n-02',
    title: 'La inflación se resiste a bajar del 2%',
    status: 'draft',
    theme: 'economia',
    createdAt: '2026-10-24T10:05:00.000Z',
    updatedAt: '2026-10-30T17:41:00.000Z',
    doc: corpusNote('02').doc,
    wordCount: 0,
  },
  {
    id: 'n-03',
    title: 'Con cambios, el Senado aprobó y giró a Diputados la reforma a la ley de salud mental',
    status: 'draft',
    theme: 'politica',
    createdAt: '2026-10-29T08:30:00.000Z',
    updatedAt: '2026-10-31T08:02:00.000Z',
    doc: corpusNote('07').doc,
    wordCount: 0,
  },
  {
    id: 'n-04',
    title: 'Visita del papa León XIV: cómo quedan los feriados de noviembre',
    status: 'published',
    theme: 'sociedad',
    createdAt: '2026-10-26T11:00:00.000Z',
    updatedAt: '2026-10-29T19:26:00.000Z',
    doc: corpusNote('13').doc,
    wordCount: 0,
  },
  {
    id: 'n-05',
    title: 'La calculadora del Superclásico',
    status: 'published',
    theme: 'deportes',
    createdAt: '2026-10-30T09:15:00.000Z',
    updatedAt: '2026-10-30T21:03:00.000Z',
    doc: corpusNote('17').doc,
    wordCount: 0,
  },
  {
    id: 'n-06',
    title: 'La Liga Profesional usará el fuera de juego semiautomático desde la final del Clausura',
    status: 'review',
    theme: 'deportes',
    createdAt: '2026-10-30T12:40:00.000Z',
    updatedAt: '2026-10-31T11:48:00.000Z',
    doc: corpusNote('19').doc,
    wordCount: 0,
  },
  {
    id: 'n-07',
    title: 'Con un dólar más demandado, el Banco Central pausa la compra de reservas',
    status: 'review',
    theme: 'economia',
    createdAt: '2026-10-28T09:10:00.000Z',
    updatedAt: '2026-10-30T16:40:00.000Z',
    doc: textDoc([
      paragraph(
        'En un contexto en el que el dólar se mantiene demandado, el Banco Central (BCRA) se abstuvo de comprar reservas en el mercado cambiario local por tercer día consecutivo, algo inédito desde que comenzó a aplicar su plan de acumulación el 3 de enero pasado.',
      ),
      paragraph(
        'La entidad que conduce Santiago Bausili reportó nuevamente que cerró sus operaciones “sin intervención”, como había hecho el lunes, cuando el billete había abierto con un alza cercana al 1% en respuesta a la fuerte devaluación que registraba ese día el real en Brasil.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-08',
    title: 'El Banco Central no compró reservas y el Tesoro habría vendido dólares',
    status: 'published',
    theme: 'economia',
    createdAt: '2026-10-26T08:30:00.000Z',
    updatedAt: '2026-10-29T18:05:00.000Z',
    doc: textDoc([
      paragraph(
        'El Banco Central (BCRA) se abstuvo hoy de comprar reservas ante un dólar que, en respuesta al vuelco registrado ayer en la elección en Brasil, se mantuvo muy demandado y en alza durante toda la jornada en la plaza local.',
      ),
      paragraph(
        'Fue al cabo de una rueda en la que el dólar mayorista abrió bajo fuerte presión y cerró a $1532 para la compra y $1541 para la venta, con un aumento de $11,50 (0,75%) respecto de su nivel de cierre del viernes.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-09',
    title:
      'Según un estudio privado, la IA podría aportar USD 17.700 millones a la economía argentina hacia 2030',
    status: 'published',
    theme: 'tecnologia',
    createdAt: '2026-10-29T11:00:00.000Z',
    updatedAt: '2026-10-30T09:40:00.000Z',
    doc: textDoc([
      paragraph(
        'La inteligencia artificial (IA) podría generar un impacto económico de USD 17.714 millones en la Argentina en 2030, el equivalente al 2,13% del PBI proyectado para ese año. La estimación forma parte de un estudio de la Universidad de San Andrés (UdeSA).',
      ),
      paragraph(
        'El cálculo suma dos componentes: el gasto en productos y servicios de IA y su efecto derrame sobre la productividad. Si no se aplica ninguna de las recomendaciones del informe, el impacto llegaría a USD 12.708 millones en 2030, un 1,5% del PBI.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-10',
    title: 'El maíz lleva vendido el 65% de la producción y la soja, el 50%',
    status: 'draft',
    theme: 'economia',
    createdAt: '2026-10-29T08:30:00.000Z',
    updatedAt: '2026-10-31T07:55:00.000Z',
    doc: textDoc([
      paragraph(
        'El mercado internacional de granos atraviesa una etapa de presión bajista por el avance de la cosecha estadounidense, las perspectivas de una mayor oferta y la toma de ganancias de los fondos de inversión.',
      ),
      paragraph(
        'Según Dante Romano, profesor e investigador del Centro de Agronegocios y Alimentos de la Universidad Austral, el maíz conserva un desempeño comercial relativamente sólido, mientras que la soja muestra un ritmo de ventas más lento.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-11',
    title: 'Tras ceder cambios, el Gobierno dictaminó el proyecto Malvinas',
    status: 'review',
    theme: 'politica',
    createdAt: '2026-10-27T15:00:00.000Z',
    updatedAt: '2026-10-30T20:15:00.000Z',
    doc: textDoc([
      paragraph(
        'El oficialismo consiguió este miércoles el dictamen de mayoría del proyecto de Defensa de la Soberanía Nacional, que busca, entre otros puntos, defender los recursos naturales en las Islas Malvinas.',
      ),
      paragraph(
        'Tras varias conexiones a los bloques aliados, el texto quedó listo para ser tratado en el recinto y la fecha tentativa que manejan los libertarios es el jueves 12 de noviembre.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-12',
    title:
      'Martínez de Giorgi cerró el caso $LIBRA solo un día después de que el fiscal pidió los sobreseimientos',
    status: 'published',
    theme: 'politica',
    createdAt: '2026-10-27T12:00:00.000Z',
    updatedAt: '2026-10-28T19:30:00.000Z',
    doc: textDoc([
      paragraph(
        'El juez federal Marcelo Martínez de Giorgi cerró el caso $LIBRA el viernes pasado. Sobreseyó a Javier y a Karina Milei, y al resto de los acusados, con un fallo de 60 hojas basado en un dictamen del fiscal del caso, Eduardo Taiano.',
      ),
      paragraph(
        'El dato más notable es su fecha: está firmado el día anterior a la sentencia de los sobreseimientos.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-13',
    title: 'Caso $LIBRA: jueces, fiscales y vínculos con el poder',
    status: 'draft',
    theme: 'politica',
    createdAt: '2026-10-24T10:00:00.000Z',
    updatedAt: '2026-10-27T22:10:00.000Z',
    doc: textDoc([
      paragraph(
        'El fallo del juez Marcelo Martínez de Giorgi, que sobreseyó a Javier y Karina Milei en el caso $LIBRA sin que quedara en pie un acusador que pudiera apelarlo, es el final de una compleja ingeniería judicial.',
      ),
      paragraph(
        'El 4 de septiembre pasado, la Sala I de la Cámara Federal, en su primer día con los nuevos jueces nombrados por el propio Milei, confirmó la decisión de apartar del expediente a cinco inversores que pedían ser reconocidos como querellantes.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-14',
    title: 'Salmain no podía seguir siendo juez: los acusadores analizaron el fallo',
    status: 'draft',
    theme: 'politica',
    createdAt: '2026-10-31T09:00:00.000Z',
    updatedAt: '2026-10-31T12:20:00.000Z',
    doc: textDoc([
      paragraph(
        'La destitución de Gastón Salmain, el exjuez federal de Rosario procesado por presuntos pedidos de coimas vinculados con su actuación en la causa Attila, motivó una serie de cuestionamientos sobre los mecanismos de selección y control de los magistrados.',
      ),
      paragraph(
        'El Jurado de Enjuiciamiento de Magistrados de la Nación resolvió este jueves 29 de octubre, por unanimidad, remover a Salmain por haber ocultado su paso por el Poder Judicial y una sanción de cesantía impuesta por la Corte Suprema en 2002.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-15',
    title: 'La visita del papa León XIV: actos en CABA y provincia y operativo de seguridad',
    status: 'published',
    theme: 'sociedad',
    createdAt: '2026-10-31T07:30:00.000Z',
    updatedAt: '2026-10-31T11:10:00.000Z',
    doc: textDoc([
      paragraph(
        'El obispo auxiliar de San Isidro y secretario general de la Conferencia Episcopal Argentina, Raúl Pizarro, adelantó que el papa León XIV tendrá dos recorridos en papamóvil por la avenida del Libertador durante su visita a la Ciudad de Buenos Aires.',
      ),
      paragraph(
        'Pizarro, que coordina la preparación eclesial del viaje, explicó en Radio Mitre que la jornada de mayor convocatoria será el lunes 9 de noviembre.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-16',
    title: 'Los universitarios comienzan hoy un nuevo paro que se extenderá durante una semana',
    status: 'review',
    theme: 'sociedad',
    createdAt: '2026-10-28T06:45:00.000Z',
    updatedAt: '2026-10-30T18:00:00.000Z',
    doc: textDoc([
      paragraph(
        'Los docentes universitarios y preuniversitarios iniciarán este miércoles una semana de paro nacional, en medio del reclamo sindical por la aplicación de la Ley de Financiamiento Universitario, la recomposición salarial y la asignación de recursos.',
      ),
      paragraph(
        'La medida, impulsada por la Federación Nacional de Docentes, Investigadores y Creadores Universitarios (CONADU Histórica), se extenderá hasta el lunes 3 de noviembre.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-17',
    title:
      'Distinguieron a dos proyectos del CONICET: un software para epilepsia y una molécula para lesiones medulares',
    status: 'published',
    theme: 'tecnologia',
    createdAt: '2026-10-26T10:30:00.000Z',
    updatedAt: '2026-10-29T09:15:00.000Z',
    doc: textDoc([
      paragraph(
        'El desarrollo de un software para planificar la estimulación cerebral en pacientes con epilepsia resistente a fármacos obtuvo el primer puesto de la sexta edición del Premio Merck-CONICET de Innovación en Ciencias de la Salud.',
      ),
      paragraph(
        'La distinción recayó en el proyecto NViES, encabezado por el investigador Mariano Fernández Corazza. La convocatoria reunió 84 iniciativas científicas y tecnológicas vinculadas con la salud.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-18',
    title:
      'Argentinos alcanzó a Boca en la Tabla Anual y complicó a River: todos los goles de la fecha 14',
    status: 'draft',
    theme: 'deportes',
    createdAt: '2026-10-28T21:00:00.000Z',
    updatedAt: '2026-10-30T23:40:00.000Z',
    doc: textDoc([
      paragraph(
        'Se completó la fecha 14 del Torneo Clausura y arden las tablas con diversas definiciones: quiénes estarían llegando a los octavos de final del certamen y la lucha por la clasificación a las copas internacionales.',
      ),
      paragraph(
        'La actividad comenzó el viernes con la victoria de Gimnasia y Esgrima La Plata por 2-0 ante Sarmiento de Junín. El resultado le permitió al Lobo acercarse a los puestos de copas internacionales.',
      ),
    ]),
    wordCount: 0,
  },
]

/* El resto del corpus entra como borrador, con la temática de su
   sección en `docs/corpus-prueba.md` y la fecha de publicación. */
const corpusMeta: Record<string, [theme: NoteTheme, date: string]> = {
  '03': ['economia', '2026-10-28'],
  '04': ['economia', '2026-10-26'],
  '05': ['economia', '2026-10-29'],
  '06': ['economia', '2026-10-29'],
  '08': ['politica', '2026-10-27'],
  '09': ['politica', '2026-10-27'],
  '10': ['politica', '2026-10-24'],
  '11': ['politica', '2026-10-31'],
  '12': ['sociedad', '2026-10-31'],
  '14': ['sociedad', '2026-10-28'],
  '15': ['sociedad', '2026-10-26'],
  '16': ['deportes', '2026-10-28'],
}

export const seedNotes: Note[] = [
  ...handSeeds,
  ...corpusNotes
    .filter((note) => note.number in corpusMeta)
    .map((note): Note => {
      const [theme, date] = corpusMeta[note.number]
      const at = `${date}T12:00:00.000Z`
      return {
        id: `n-corpus-${note.number}`,
        title: note.title,
        doc: note.doc,
        status: 'draft',
        theme,
        wordCount: 0,
        createdAt: at,
        updatedAt: at,
      }
    }),
]

export const seedEnrichments: Enrichment[] = [
  {
    id: 'e-01',
    noteId: 'n-01',
    type: 'puntos_clave',
    text: 'Octubre se ubicaría en 1,8% mensual, la segunda marca más baja en más de un año.',
    citation: 'Las estimaciones privadas ubican la variación mensual de octubre en 1,8%',
    status: 'aprobada',
  },
  {
    id: 'e-02',
    noteId: 'n-01',
    type: 'pregunta_probable',
    text: '¿Cuándo se publica el dato oficial de octubre?',
    citation: null,
    status: 'pendiente',
  },
  {
    id: 'e-03',
    noteId: 'n-01',
    type: 'dato_oficial',
    text: 'IPC de octubre: 1,8% según relevamientos privados; el dato oficial se publica el 12 de noviembre.',
    citation: 'El dato de 1,8% se repite en distintos relevamientos',
    status: 'pendiente',
  },
  {
    id: 'e-04',
    noteId: 'n-06',
    type: 'puntos_clave',
    text: 'El SAOT llega con la final del Clausura 2026 y es total desde el Clausura 2027.',
    citation: 'a partir de la final del Torneo Clausura 2026',
    status: 'aprobada',
  },
  {
    id: 'e-05',
    noteId: 'n-06',
    type: 'pregunta_probable',
    text: '¿Qué costo tendrá la implementación en cada estadio?',
    citation: null,
    status: 'pendiente',
  },
  {
    id: 'e-06',
    noteId: 'n-03',
    type: 'puntos_clave',
    text: 'La prohibición de crear manicomios se mantiene, y la internación sigue siendo excepcional.',
    citation: 'Esa restricción seguirá vigente y se considera a la internación como una medida de carácter excepcional',
    status: 'pendiente',
  },
  {
    id: 'e-07',
    noteId: 'n-05',
    type: 'dato_oficial',
    text: 'River marcha 7° en la Tabla Anual con 52 puntos, dentro de la zona Sudamericana.',
    citation: 'Los de Núñez hoy figuran 7° en la Tabla Anual con 52 puntos',
    status: 'aprobada',
  },
  {
    id: 'e-08',
    noteId: 'n-02',
    type: 'pregunta_probable',
    text: '¿Qué peso tiene la estacionalidad en el precio de los alimentos?',
    citation: null,
    status: 'pendiente',
  },
]
