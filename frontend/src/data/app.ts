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
  signOut: 'Salir',
}

export const appNav = [
  { to: '/app/notas', label: 'Mis notas', end: true },
  { to: '/app/publicadas', label: 'Publicadas', end: false },
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
  title: 'Enriquecimientos',
  empty: 'Todavía no hay nada que aprobar en esta nota.',
  approve: 'Aprobar',
  discard: 'Descartar',
  restore: 'Reabrir',
  unanswered: 'La nota no responde esta pregunta.',
  approved: 'Aprobado',
  discarded: 'Descartado',
}

export const notesPageTitles: Record<string, string> = {
  '01': 'Mis notas',
  '02': 'Publicadas',
}
