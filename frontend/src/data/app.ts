/* ============================================================
   Copy de la mesa de trabajo.

   La voz es la del producto: directa, rioplatense, sin emoji.
   Los textos viven acá y no en los componentes, como en el resto
   del frontend.
   ============================================================ */

export const appShell = {
  navLabel: 'Secciones',
  primaryAction: 'Crear nueva nota',
  help: 'Cómo funciona',
  /** Declaración editorial del pie: cierra la navegación, no la decora. */
  manifesto: ['Las historias importan.', 'Tu mirada también.'],
  signOut: 'Salir',
}

export const appNav = [
  { to: '/app/publicados', label: 'Publicados', scope: 'published' },
  { to: '/app/borradores', label: 'Borradores', scope: 'unpublished' },
] as const

export const draftsPage = {
  title: 'Borradores',
  empty: 'No tenés borradores. Arrancá una nota.',
}

export const publishedPage = {
  title: 'Publicados',
  empty: 'No publicaste ninguna nota todavía.',
}

export const notesFilters = {
  search: 'Buscar por nombre',
  searchPlaceholder: 'Título de la nota',
  theme: 'Temática',
  allThemes: 'Todas las temáticas',
  order: 'Orden',
  recent: 'Más recientes',
  oldest: 'Más antiguas',
  noMatches: 'Ninguna nota coincide con el filtro.',
  pagination: 'Paginación de notas',
  previous: 'Anterior',
  next: 'Siguiente',
  page: (number: number) => `Página ${number}`,
  results: (from: number, to: number, total: number) =>
    `Mostrando ${from === to ? from : `${from}–${to}`} de ${total} ${total === 1 ? 'nota' : 'notas'}`,
}

export const noteRow = {
  noTheme: 'Sin temática',
  words: 'palabras',
  open: 'Ver nota',
}

export const editorPage = {
  backDrafts: 'Borradores',
  backPublished: 'Publicados',
  theme: 'Temática',
  noTheme: 'Sin temática',
  titlePlaceholder: 'Escribí el título',
  bodyPlaceholder: 'Escribí la nota…',
  saving: 'Guardando…',
  saved: 'Guardado',
  unsaved: 'Sin guardar',
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
}
