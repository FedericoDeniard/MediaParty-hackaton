/* ============================================================
   Copy de la mesa de trabajo.

   La voz es la del producto: directa, rioplatense, sin emoji.
   Los textos viven acá y no en los componentes, como en el resto
   del frontend.
   ============================================================ */

export const appShell = {
  wordmark: 'Nexo',
  /** Etiqueta de la zona de trabajo, sobre el índice de la grilla. */
  workspace: 'Mesa de trabajo',
  primaryAction: 'Crear nueva nota',
  help: 'Cómo funciona',
  /** Declaración editorial del pie: cierra la navegación, no la decora. */
  manifesto: ['Las historias importan.', 'Tu mirada también.'],
  signOut: 'Salir',
}

export const appNav = [
  { to: '/app/notas', label: 'Mis notas', count: 'all' },
  { to: '/app/publicadas', label: 'Publicadas', count: 'published' },
] as const

export const notesPage = {
  index: '01',
  title: 'Mis notas',
  lead: 'Todo lo que estás escribiendo, con el estado de cada nota al día.',
  empty: 'Todavía no hay notas. Arrancá una.',
}

export const publishedPage = {
  index: '02',
  title: 'Publicadas',
  lead: 'Las notas que ya salieron, con lo que aprobaste en cada una.',
  empty: 'No publicaste ninguna nota todavía.',
}

export const editorPage = {
  back: 'Mis notas',
  titlePlaceholder: 'Escribí el título',
  bodyPlaceholder: 'Escribí la nota…',
  saving: 'Guardando…',
  saved: 'Guardado',
  saveError: 'No se pudo guardar',
  newNote: 'Nota nueva',
  words: 'palabras',
  table: 'Tabla',
  insertTable: 'Insertar tabla',
  deleteTable: 'Borrar tabla',
  addRow: 'Agregar fila',
  addColumn: 'Agregar columna',
}

export const enrichmentPanel = {
  /** Marca del panel: el asistente que propone, no el que decide. */
  label: 'Asistente IA',
  title: 'Otra mirada a tu nota',
  lead: 'Ideas para afinar tu texto, sin perder tu voz.',
  empty: 'Todavía no hay sugerencias para esta nota.',
  pending: 'Sugerencia · sin aplicar',
  approved: 'Sugerencia · aplicada',
  discarded: 'Sugerencia · descartada',
  approve: 'Aprobar sugerencia',
  discard: 'Descartar sugerencia',
  restore: 'Reabrir sugerencia',
  citation: 'Aparece en la nota',
  unanswered: 'La nota no responde esta pregunta.',
  foot: 'Tu voz tiene la última palabra. Ningún cambio se publica automáticamente.',
  analyze: 'Analizar nota',
  reanalyze: 'Volver a analizar',
  analyzing: 'Analizando…',
  analyzeError: 'No se pudo analizar la nota',
  /** Qué hace cada agente del backend, para el estado en vivo. */
  steps: {
    entities: 'Actores y vínculos',
    claims: 'Afirmaciones',
    timeline: 'Línea de tiempo',
    editorial: 'Mirada editorial',
    figures: 'Cifras',
    validation: 'Cruce con datos oficiales',
    graficos: 'Gráficos',
  } as Record<string, string>,
  stepStatus: {
    pending: 'en espera',
    running: 'en curso',
    done: 'listo',
    error: 'falló',
  } as Record<string, string>,
}

export const notesPageTitles: Record<string, string> = {
  '01': 'Mis notas',
  '02': 'Publicadas',
}
