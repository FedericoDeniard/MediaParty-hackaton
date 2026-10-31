import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { EditorContent } from '@tiptap/react'
import type { JSONContent } from '@tiptap/core'
import '@fontsource-variable/archivo/wdth.css'
import './index.css'
import PanelGraficos from './components/graficos/PanelGraficos.tsx'
import { useAnalisisSimulado } from './components/graficos/useAnalisisSimulado.ts'
import { ejemplos } from './data/graficos-ejemplos.ts'
import { useEditorKit } from './lib/editor/useEditorKit.ts'

/* Laboratorio: el editor real de la nota (con el nodo `grafico`) y el panel flotante, con datos reales
   que armó el verificador. Sirve para evaluar el flujo completo sin backend:
   analizar, ver el recorrido, agregar un gráfico a la nota y volver a él. */

const notas = Object.entries(ejemplos).sort(([a], [b]) => a.localeCompare(b))

function docDe(cuerpo: string): JSONContent {
  return {
    type: 'doc',
    content: cuerpo
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((parrafo) => ({ type: 'paragraph', content: [{ type: 'text', text: parrafo.trim() }] })),
  }
}

function App() {
  const [clave, setClave] = useState(notas[0][0])
  const ejemplo = ejemplos[clave]
  const contenido = useMemo(() => docDe(ejemplo.cuerpo), [ejemplo])
  const { filas, trabajando, analizar } = useAnalisisSimulado(ejemplo)

  const editor = useEditorKit({ content: contenido, contentKey: clave, onChange: () => {}, fragments: [] })

  return (
    <div className="editor">
      <header className="editor__bar">
        <h1 className="editor__heading">{ejemplo.titulo}</h1>
        <nav style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }} aria-label="Notas de ejemplo">
          {notas.map(([id]) => (
            <button
              key={id}
              type="button"
              aria-pressed={id === clave}
              onClick={() => setClave(id)}
              style={{
                minHeight: 40,
                padding: '0 18px',
                borderRadius: 999,
                border: '1px solid var(--rule)',
                background: id === clave ? 'var(--ink)' : 'var(--surface)',
                color: id === clave ? 'var(--bg)' : 'var(--ink)',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Nota {id}
            </button>
          ))}
        </nav>
      </header>

      <div className="editor__body">
        <div className="editor__canvas">
          <EditorContent editor={editor} />
        </div>
        <aside className="editor__aside">
          <PanelGraficos
            editor={editor}
            filas={filas}
            cuerpo={ejemplo.cuerpo}
            trabajando={trabajando}
            onAnalizar={analizar}
          />
        </aside>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
