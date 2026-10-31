export type SuggestionId = 'dato' | 'grafico' | 'contexto'

export type SuggestionStatus = 'verificado' | 'sin-respaldo' | 'no-disponible'

export interface HeroSuggestion {
  id: SuggestionId
  tab: string
  type: string
  text: string
  passage: string
  source: string
  status: SuggestionStatus
  statusLabel: string
  chart?: number[]
  detail?: string
  applicable: boolean
}

export const hero = {
  meta: [
    'glosa · Asistente de datos',
    'MediaParty 2026',
    'El modelo sugiere · Vos decidís',
  ],
  eyebrow: 'Datos y contexto para periodistas',
  title: ['Tu nota.', 'Con el dato que le faltaba.'],
  lead: 'glosa lee tu texto, detecta las cifras y las fuentes que se pueden verificar, y te propone datos oficiales, gráficos y contexto. Cada sugerencia se apoya en un pasaje y muestra de dónde sale. Vos decidís qué entra.',
  primary: 'Probar con una nota',
  secondary: 'Ver cómo funciona',
  demo: {
    label: 'Nota · Economía',
    title: 'La inflación se resiste a bajar del 2%',
    meta: 'Borrador · 214 palabras',
    body: 'La inflación de septiembre fue 1,9%, por encima del 1,7% de agosto. Las consultoras esperan un dato similar para octubre.',
    foot: 'Ninguna sugerencia se aplica sin tu aprobación.',
    blocked: 'El dato se habilita cuando INDEC lo publique.',
  },
}

export const suggestions: HeroSuggestion[] = [
  {
    id: 'dato',
    tab: 'Dato oficial',
    type: 'Sugerencia · Dato oficial',
    text: 'El IPC de septiembre fue 1,9% mensual, según el INDEC. Tu nota menciona la cifra; la propuesta suma la fuente y la fecha del dato.',
    passage: 'La inflación de septiembre fue 1,9%',
    source: 'INDEC · Índice de precios al consumidor, septiembre de 2026',
    status: 'verificado',
    statusLabel: 'Verificado · fuente oficial',
    applicable: true,
  },
  {
    id: 'grafico',
    tab: 'Gráfico',
    type: 'Sugerencia · Gráfico',
    text: 'La serie de 2026 muestra la suba de agosto a septiembre. El gráfico entra junto al pasaje, con la serie completa y su fuente.',
    passage: '1,9%, por encima del 1,7% de agosto',
    source: 'INDEC · IPC mensual, enero a septiembre de 2026',
    status: 'verificado',
    statusLabel: 'Verificado · serie oficial',
    chart: [38, 46, 44, 57, 62, 71, 68, 82, 88],
    detail: 'Variación mensual del IPC · 2026',
    applicable: true,
  },
  {
    id: 'contexto',
    tab: 'Contexto',
    type: 'Sugerencia · Contexto',
    text: 'El dato oficial de octubre se publica el 12 de noviembre. Todavía no está disponible, así que la propuesta queda señalada.',
    passage: 'Las consultoras esperan un dato similar para octubre',
    source: 'INDEC · calendario de publicaciones de 2026',
    status: 'no-disponible',
    statusLabel: 'No disponible · todavía sin publicar',
    applicable: false,
  },
]

export interface Step {
  n: string
  title: string
  body: string
  aside: string
}

export const steps: Step[] = [
  {
    n: '01',
    title: 'Escribí la nota',
    body: 'Pegá o escribí el texto en la mesa de trabajo. glosa lo lee completo y detecta cifras, fuentes y afirmaciones que se pueden contrastar.',
    aside: 'Texto, título y temática',
  },
  {
    n: '02',
    title: 'Revisá las propuestas',
    body: 'Cada sugerencia llega con el pasaje que la origina, la fuente y el estado del dato. Si no hay respaldo, glosa te lo dice antes de que llegue a la nota.',
    aside: 'Pasaje · fuente · estado',
  },
  {
    n: '03',
    title: 'Decidí qué entra',
    body: 'Aprobás o descartás una por una. El texto cambia sólo cuando aprobás, y nada se publica automáticamente.',
    aside: 'Nada se aplica solo',
  },
]

export type FeatureTone = 'base' | 'accent'
export type FeatureKind = 'passage' | 'chart' | 'checks' | 'control'

export interface FeatureCheck {
  label: string
  value: string
}

export interface Feature {
  n: string
  title: string
  body: string
  tone: FeatureTone
  kind: FeatureKind
  col: 1 | 2 | 7 | 8
  shift: 0 | 1 | 2
  passage?: { before: string; mark: string; after: string }
  caption?: string
  checks?: FeatureCheck[]
}

export const features: Feature[] = [
  {
    n: '01',
    title: 'Cada sugerencia está anclada a un pasaje',
    body: 'glosa no escribe por arriba de tu nota: la propuesta cita el tramo exacto que la originó, así podés contrastarla en el texto antes de decidir.',
    tone: 'base',
    kind: 'passage',
    col: 1,
    shift: 0,
    passage: {
      before: 'La inflación de septiembre fue ',
      mark: '1,9%',
      after: ', por encima del 1,7% de agosto.',
    },
    caption: 'Aparece en la nota · párrafo 1',
  },
  {
    n: '02',
    title: 'Datos con serie y procedencia',
    body: 'Cuando una cifra tiene serie, la propuesta llega con el gráfico armado: el período, la unidad y la fuente que lo publicó, listos para entrar en la nota.',
    tone: 'base',
    kind: 'chart',
    col: 8,
    shift: 1,
    caption: 'Variación mensual del IPC · INDEC · 2026',
  },
  {
    n: '03',
    title: 'El modelo sugiere. El código verifica.',
    body: 'Antes de mostrarte una propuesta, glosa controla que la fuente exista, que la cifra coincida con el pasaje y que el período sea el correcto. Lo que no cierra no llega como sugerencia.',
    tone: 'base',
    kind: 'checks',
    col: 2,
    shift: 0,
    checks: [
      { label: 'Fuente', value: 'INDEC · informe disponible' },
      { label: 'Cifra', value: '1,9% coincide con el texto' },
      { label: 'Período', value: 'Septiembre de 2026' },
    ],
    caption: 'Control previo a la sugerencia',
  },
  {
    n: '04',
    title: 'La última palabra es tuya',
    body: 'Aprobás o descartás cada pieza. Si un dato no tiene respaldo o todavía no está disponible, glosa lo señala y no lo aplica. Nada se publica automáticamente.',
    tone: 'accent',
    kind: 'control',
    col: 7,
    shift: 2,
  },
]

export interface VerificationState {
  state: string
  meaning: string
  action: string
}

export const verification = {
  index: '03 — Verificación',
  title: 'El dato entra cuando se puede comprobar',
  lead: 'glosa no completa huecos con texto plausible. Cada propuesta llega con un estado y una fuente, y si el dato no aparece, se dice.',
  headers: ['Estado', 'Qué significa', 'Qué hace glosa'],
  sourcesLabel: 'Fuentes que consulta',
  sources:
    'INDEC · BCRA · Boletín Oficial · ministerios y organismos públicos · organismos internacionales · series y datos abiertos',
}

export const verificationStates: VerificationState[] = [
  {
    state: 'Verificado',
    meaning: 'La fuente existe y la cifra coincide con el pasaje.',
    action: 'Se puede incorporar a la nota.',
  },
  {
    state: 'Sin respaldo',
    meaning: 'El dato aparece, pero no hay una fuente que lo sostenga.',
    action: 'Queda señalado y no se aplica.',
  },
  {
    state: 'No disponible',
    meaning: 'La fuente todavía no publicó ese dato.',
    action: 'Avisa cuándo sale y no lo completa.',
  },
]
