import type { Editor } from '@tiptap/react'
import { ejemplos } from '../../data/graficos-ejemplos.ts'
import PanelGraficos from './PanelGraficos.tsx'
import { useAnalisisSimulado } from './useAnalisisSimulado.ts'

/* Notas del banco de trabajo (semillas n-01 a n-18) y la nota del corpus con la que se analizaron.
   Cuando el backend guarde la fila `graficos`, esto se reemplaza por esa fila y desaparece el mapa. */
const EJEMPLO_DE_NOTA: Record<string, string> = {
  'n-01': '01',
  'n-02': '02',
  'n-03': '07',
  'n-04': '13',
  'n-05': '17',
  'n-06': '19',
  'n-07': '03',
  'n-08': '04',
  'n-09': '05',
  'n-10': '06',
  'n-11': '08',
  'n-12': '09',
  'n-13': '10',
  'n-14': '11',
  'n-15': '12',
  'n-16': '14',
  'n-17': '15',
  'n-18': '16',
}

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
