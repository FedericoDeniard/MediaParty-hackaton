import type { JSONContent } from '@tiptap/core'

/* ============================================================
   El modelo de una nota.

   `doc` es el documento de Tiptap y es la única fuente de verdad.
   El texto plano nunca se guarda: se deriva con `getText`, que ya
   corta por línea en blanco como espera la ingestión del pipeline.

   Los estados son dominio cerrado: uniones de literales, no
   `enum` (el tsconfig exige `erasableSyntaxOnly`).
   ============================================================ */

export type NoteStatus = 'draft' | 'review' | 'published'

export type EnrichmentType = 'puntos_clave' | 'pregunta_probable' | 'dato_oficial'

export type EnrichmentStatus = 'pendiente' | 'aprobada' | 'descartada'

export interface Note {
  id: string
  title: string
  doc: JSONContent
  status: NoteStatus
  niche: string | null
  wordCount: number
  createdAt: string
  updatedAt: string
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

/* ---- Etiquetas ---- */

export const noteStatusLabels: Record<NoteStatus, string> = {
  draft: 'Borrador',
  review: 'En revisión',
  published: 'Publicada',
}

export const enrichmentTypeLabels: Record<EnrichmentType, string> = {
  puntos_clave: 'Puntos clave',
  pregunta_probable: 'Pregunta probable',
  dato_oficial: 'Dato oficial',
}

/* ============================================================
   Semillas.

   Los textos salen del corpus de pruebas (`corpus/notas/`): 19
   notas reales de la semana del 24 al 31 de octubre de 2026,
   usadas acá sólo para que la mesa de trabajo arranque con
   contenido y no con líneas deguidado.

   Cada piece de enriquecimiento cita un fragmento literal del
   documento, que es lo que el editor resalta al aprobarla.
   ============================================================ */

export const seedNotes: Note[] = [
  {
    id: 'n-01',
    title: 'A cuánto llegará el índice de inflación de octubre según las consultoras',
    status: 'review',
    niche: 'economía',
    createdAt: '2026-10-27T14:20:00.000Z',
    updatedAt: '2026-10-31T09:12:00.000Z',
    doc: textDoc([
      paragraph(
        'Luego de que la inflación se ubicara en 1,9% en septiembre, un salto intermensual respecto del 1,7% de agosto, la expectativa para octubre está centrada en si podrá lograrse una desaceleración. Hasta la tercera semana del mes, los relevamientos de las consultoras son optimistas al respecto, aunque no anticipan una baja abrupta. Sin embargo, el Gobierno podría lograr el segundo dato más bajo del último año.',
      ),
      paragraph(
        'Las estimaciones privadas ubican la variación mensual de octubre en 1,8%, una desaceleración de 0,1 puntos porcentuales, muy leve, aún lejos de la expectativa oficial de que la inflación comenzara en algún mes del 2026 en cero.',
      ),
      heading(2, 'Nuevas proyecciones'),
      paragraph(
        'El dato de 1,8% se repite en distintos relevamientos. La diferencia con el mes anterior sería acotada, aunque el alcanzaría al Gobierno para mostrar una desaceleración.',
      ),
      paragraph(
        'El número tendría un peso político y económico por su comparación con los registros recientes. Según las estimaciones privadas, octubre podría convertirse en el segundo dato más bajo de 2026 y de los últimos doce meses.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-02',
    title: 'La inflación se resiste a bajar del 2%',
    status: 'draft',
    niche: 'economía',
    createdAt: '2026-10-24T10:05:00.000Z',
    updatedAt: '2026-10-30T17:41:00.000Z',
    doc: textDoc([
      paragraph(
        'La inflación argentina parece encontrar dificultades para profundizar su desaceleración. Después de alcanzar el 1,7% mensual en agosto, el índice de precios al consumidor volvió a subir en septiembre, cuando fue 1,9%, y las primeras estimaciones privadas para octubre anticipan un resultado similar.',
      ),
      paragraph(
        'Aunque el ritmo de aumento de los precios se mantiene por debajo del 2%, los economistas no esperan una reducción significativa en los últimos meses de 2026 y advierten que el escenario de 2027 dependerá, en buena medida, de la evolución del dólar, los precios internacionales de la energía y la incertidumbre propia de un año electoral.',
      ),
      paragraph(
        'El próximo dato oficial se conocerá el 12 de noviembre, cuando el Indec publique la inflación correspondiente a octubre. Por ahora, los relevamientos de las consultoras privadas ubican el incremento mensual entre 1,8% y 2%, prácticamente en línea con septiembre.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-03',
    title: 'Con cambios, el Senado aprobó y giró a Diputados la reforma a la ley de salud mental',
    status: 'draft',
    niche: 'política',
    createdAt: '2026-10-29T08:30:00.000Z',
    updatedAt: '2026-10-31T08:02:00.000Z',
    doc: textDoc([
      paragraph(
        'El Senado aprobó y giró en revisión a la Cámara de Diputados la reforma de la Ley Nacional de Salud Mental (26.657), un proyecto enviado por el Poder Ejecutivo pero que sufrió severas modificaciones en el recinto mismo de la Cámara alta.',
      ),
      paragraph(
        'La iniciativa fue aprobada poco antes de la 1 de la madrugada por 42 votos a favor, aportados por el oficialismo y sus aliados, y 21 en contra, todos del kirchnerismo.',
      ),
      quote(
        'Por lo pronto, el proyecto que pasará en revisión a la Cámara de Diputados ya no es el que redactó la Casa Rosada con la intención de levantar la prohibición en la creación de manicomios que había establecido la ley sancionada por el kirchnerismo en 2010.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-04',
    title: 'Visita del papa León XIV: cómo quedan los feriados de noviembre',
    status: 'published',
    niche: 'sociedad',
    createdAt: '2026-10-26T11:00:00.000Z',
    updatedAt: '2026-10-29T19:26:00.000Z',
    doc: textDoc([
      paragraph(
        'Tras haber sido intervenido quirúrgicamente hace dos semanas por un cáncer de pulmón, el Sumo Pontífice confirmó su visita a la Argentina del 8 al 11 de noviembre: recorrerá la ciudad de Buenos Aires, la provincia de Buenos Aires —donde encabezará una misa en Luján— y Córdoba.',
      ),
      paragraph(
        'En el marco de mucha expectativa en torno a la primera visita papal desde Juan Pablo II, el Ejecutivo declaró de “interés nacional” la visita oficial de León XIV y las actividades oficiales, institucionales, protocolares y de organización vinculadas a su llegada.',
      ),
      paragraph(
        'Además, producto de lo que definió como “la superposición con los desplazamientos laborales, educativos y comerciales propios de una jornada hábil”, fijó tres feriados.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-05',
    title: 'La calculadora del Superclásico',
    status: 'published',
    niche: 'deportes',
    createdAt: '2026-10-30T09:15:00.000Z',
    updatedAt: '2026-10-30T21:03:00.000Z',
    doc: textDoc([
      paragraph(
        'El Superclásico en la Bombonera de este domingo 1° de noviembre se desarrollará en un punto crucial del torneo. Boca Juniors recibirá a River Plate por la 15ª fecha del Torneo Clausura con los ojos de ambos puestos en las distintas tablas de la Liga Profesional de Fútbol.',
      ),
      paragraph(
        'Antes del inicio de la anteúltima jornada, con todavía seis puntos en disputa, el Millonario aparece cuarto en la Zona B con 23 puntos detrás de Rosario Central (28), Argentinos Juniors (28) y Gimnasia La Plata (25).',
      ),
      paragraph(
        'Los de Núñez hoy figuran 7° en la Tabla Anual con 52 puntos y dentro de la zona de clasificación a la Sudamericana. Boca Juniors (57), Argentinos Juniors (57) y Rosario Central (56) estarían metiéndose en la Libertadores 2027 por esa vía.',
      ),
    ]),
    wordCount: 0,
  },
  {
    id: 'n-06',
    title: 'La Liga Profesional usará el fuera de juego semiautomático desde la final del Clausura',
    status: 'review',
    niche: 'deportes',
    createdAt: '2026-10-30T12:40:00.000Z',
    updatedAt: '2026-10-31T11:48:00.000Z',
    doc: textDoc([
      paragraph(
        'La Liga Profesional de Fútbol (LPF) de la Argentina incorporará el sistema de Fuera de Juego Semiautomático (SAOT, por sus siglas en inglés) a su plataforma VAR a partir de la final del Torneo Clausura 2026, programada para el 12 de diciembre en el Estadio Diego Armando Maradona de La Plata, con implementación total en todas las canchas desde el Clausura 2027.',
      ),
      paragraph(
        'El SAOT funciona con una plataforma basada en inteligencia artificial y datos deportivos. El sistema construye una réplica digital del partido en tiempo real y permite analizar “cada jugada de fuera de juego con precisión milimétrica, optimizando los tiempos de revisión y respaldando la toma de decisiones arbitrales”, según el comunicado oficial de la LPF.',
      ),
    ]),
    wordCount: 0,
  },
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
