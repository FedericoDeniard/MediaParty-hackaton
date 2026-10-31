export type NetworkId = 'x' | 'instagram' | 'linkedin'

export interface OutputSpec {
  id: NetworkId
  name: string
  format: string
  detail: string
}

export const outputs: OutputSpec[] = [
  {
    id: 'x',
    name: 'X',
    format: 'Hilo de 3 posts',
    detail: '280 caracteres por post',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    format: 'Carrusel de 4',
    detail: '1080 x 1350 px',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    format: 'Nota larga',
    detail: '3000 caracteres',
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
    title: 'Traé la noticia',
    body: 'Pegá el link de la fuente o escribí el texto. glosa arma el borrador con titular, bajada, fuente, fecha y datos clave.',
    aside: 'URL, texto o archivo',
  },
  {
    n: '02',
    title: 'Sumá el contexto',
    body: 'Elegís un gráfico, una cifra o una cita y lo insertás en el bloque que corresponde. Todo queda en un solo documento.',
    aside: 'Gráficos, cifras, citas',
  },
  {
    n: '03',
    title: 'Exportá',
    body: 'Marcá las redes y glosa genera una versión para cada una, con el formato, la extensión y el tono que esa plataforma pide.',
    aside: 'Una publicación, muchas redes',
  },
]

export type FeatureTone = 'base' | 'accent'
export type FeatureKind = 'chart' | 'quote' | 'formats' | 'team'

export interface Feature {
  n: string
  title: string
  body: string
  tone: FeatureTone
  kind: FeatureKind
  col: 1 | 2 | 7 | 8
  shift: 0 | 1 | 2
}

export const features: Feature[] = [
  {
    n: '01',
    title: 'Gráficos que se arman solos',
    body: 'Cargás los datos en una tabla y elegís plantilla. El gráfico sale con la tipografía, los colores y el tamaño que pide cada red.',
    tone: 'base',
    kind: 'chart',
    col: 1,
    shift: 0,
  },
  {
    n: '02',
    title: 'Contexto, no solo el titular',
    body: 'glosa conserva el documento fuente, las notas y las citas, así el equipo edita sobre datos y no sobre suposiciones.',
    tone: 'base',
    kind: 'quote',
    col: 8,
    shift: 1,
  },
  {
    n: '03',
    title: 'Un formato por red',
    body: 'Cada publicación sale con el largo, la relación de aspecto y las reglas de cada plataforma ya resueltas.',
    tone: 'base',
    kind: 'formats',
    col: 2,
    shift: 0,
  },
  {
    n: '04',
    title: 'Equipo y calendario',
    body: 'Editores, aprobaciones y horarios de publicación en un tablero compartido.',
    tone: 'accent',
    kind: 'team',
    col: 7,
    shift: 2,
  },
]

export interface Network {
  name: string
  rule: string
}

export const networks: Network[] = [
  { name: 'X', rule: '280 caracteres por post' },
  { name: 'Instagram', rule: '1080 x 1350 px, 30 hashtags' },
  { name: 'LinkedIn', rule: '3000 caracteres, 5 hashtags' },
  { name: 'Facebook', rule: '63.206 caracteres, 5 enlaces' },
  { name: 'Threads', rule: '500 caracteres' },
  { name: 'Bluesky', rule: '300 caracteres' },
  { name: 'Telegram', rule: '4096 caracteres' },
  { name: 'WhatsApp', rule: '4096 caracteres' },
]
