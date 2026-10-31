import type { Editor } from '@tiptap/react'
import { CORPUS_DE_NOTA } from '../../data/corpusDeNota.ts'
import { ejemplos } from '../../data/graficos-ejemplos.ts'
import PanelGraficos from './PanelGraficos.tsx'
import { useAnalisisSimulado } from './useAnalisisSimulado.ts'

/* Cuando el backend guarde la fila `graficos`, esto se reemplaza por esa fila y desaparece el mapa. */
const EJEMPLO_DE_NOTA = CORPUS_DE_NOTA

function PanelConEjemplo({ editor, claveDeEjemplo }: { editor: Editor | null; claveDeEjemplo: string }) {
  const ejemplo = ejemplos[claveDeEjemplo]
  const { filas, trabajando, analizar } = useAnalisisSimulado(ejemplo)
  // El paso de lectura cuenta el texto que la autora tiene en el editor ahora, no el del ejemplo.
  const cuerpo = editor?.getText({ blockSeparator: '\n\n' }) || ejemplo.cuerpo

  return (
    <PanelGraficos editor={editor} filas={filas} cuerpo={cuerpo} trabajando={trabajando} onAnalizar={analizar} />
  )
}

export default function PanelGraficosDeNota({ editor, noteId }: { editor: Editor | null; noteId: string }) {
  const clave = EJEMPLO_DE_NOTA[noteId]
  if (!clave || !ejemplos[clave]) return null
  return <PanelConEjemplo key={noteId} editor={editor} claveDeEjemplo={clave} />
}
