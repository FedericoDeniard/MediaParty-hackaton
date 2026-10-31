import { Node, mergeAttributes, type Editor } from '@tiptap/core'
import { NodeViewWrapper, ReactNodeViewRenderer, type NodeViewProps } from '@tiptap/react'
import ContextoCard from '../../components/graficos/ContextoCard.tsx'
import type { GraficoContexto } from '../../components/graficos/types.ts'

/* ============================================================
   Gráfico dentro de la nota.

   Un gráfico recomendado y aprobado entra al documento como una
   sección más: un nodo de bloque que guarda el gráfico entero. Así
   viaja con la nota (lectura, publicación) sin recalcular nada.

   No tiene texto: `plainText()` y el conteo de palabras solo miran
   nodos de texto, así que los gráficos no contaminan lo que el
   pipeline analiza.
   ============================================================ */

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    grafico: {
      /** Agrega el gráfico al final de la nota. */
      insertarGrafico: (grafico: GraficoContexto) => ReturnType
      /** Saca el gráfico de la nota. */
      quitarGrafico: (id: string) => ReturnType
    }
  }
}

function VistaDelGrafico({ node, deleteNode }: NodeViewProps) {
  const grafico = node.attrs.grafico as GraficoContexto | null
  if (!grafico) return null

  return (
    <NodeViewWrapper className="grafico-nota" data-grafico-id={String(node.attrs.id)} contentEditable={false}>
      <div className="grafico-nota__cabecera">
        <span className="grafico-nota__sello">Sección agregada a la nota</span>
        <button type="button" className="grafico-nota__quitar" onClick={() => deleteNode()}>
          Quitar de la nota
        </button>
      </div>
      <ContextoCard grafico={grafico} />
    </NodeViewWrapper>
  )
}

export const GraficoNota = Node.create({
  name: 'grafico',
  group: 'block',
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return { id: { default: '' }, grafico: { default: null } }
  },

  parseHTML() {
    return [{ tag: 'section[data-grafico]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['section', mergeAttributes({ 'data-grafico': String(HTMLAttributes.id ?? '') })]
  },

  addNodeView() {
    return ReactNodeViewRenderer(VistaDelGrafico)
  },

  addCommands() {
    return {
      insertarGrafico:
        (grafico) =>
        ({ commands, state }) =>
          commands.insertContentAt(state.doc.content.size, {
            type: this.name,
            attrs: { id: grafico.id, grafico },
          }),

      quitarGrafico:
        (id) =>
        ({ state, tr, dispatch }) => {
          let posicion = -1
          let tamano = 0
          state.doc.descendants((node, pos) => {
            if (posicion === -1 && node.type.name === 'grafico' && node.attrs.id === id) {
              posicion = pos
              tamano = node.nodeSize
            }
          })
          if (posicion === -1) return false
          if (dispatch) dispatch(tr.delete(posicion, posicion + tamano))
          return true
        },
    }
  },
})

/** Los ids de los gráficos que ya están en la nota. */
export function graficosEnLaNota(editor: Editor): string[] {
  const ids: string[] = []
  editor.state.doc.descendants((node) => {
    if (node.type.name === 'grafico') ids.push(String(node.attrs.id))
  })
  return ids
}

const RESALTADO_MS = 1800
const REINTENTOS = 12
const ESPERA_REINTENTO_MS = 60

/** Lleva a la sección del gráfico y la resalta un momento. Si el nodo recién se agregó, espera a que termine de dibujarse. */
export function irAlGrafico(editor: Editor, id: string, intentos = REINTENTOS): void {
  const destino = editor.view.dom.querySelector<HTMLElement>(`[data-grafico-id="${CSS.escape(id)}"]`)
  if (!destino) {
    if (intentos > 0) window.setTimeout(() => irAlGrafico(editor, id, intentos - 1), ESPERA_REINTENTO_MS)
    return
  }
  const sinAnimacion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  destino.scrollIntoView({ block: 'start', behavior: sinAnimacion ? 'auto' : 'smooth' })
  destino.classList.remove('grafico-nota--reciente')
  void destino.offsetWidth // reinicia la animación si ya estaba resaltado
  destino.classList.add('grafico-nota--reciente')
  window.setTimeout(() => destino.classList.remove('grafico-nota--reciente'), RESALTADO_MS)
}
