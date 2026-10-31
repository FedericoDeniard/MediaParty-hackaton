import { Node, mergeAttributes, type Editor } from '@tiptap/core'
import type { Node as ProsemirrorNode } from '@tiptap/pm/model'
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
      /** Agrega el gráfico junto al párrafo que más habla de su tema (al final si ninguno lo menciona). */
      insertarGrafico: (grafico: GraficoContexto) => ReturnType
      /** Saca el gráfico de la nota. */
      quitarGrafico: (id: string) => ReturnType
    }
  }
}

const sinTildes = (texto: string) => texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

/** Los motivos llegan como "inflación (×6)": de ahí se saca la palabra que la nota usa. */
function palabrasDeLosMotivos(grafico: GraficoContexto): string[] {
  return grafico.motivos
    .map((motivo) => sinTildes(motivo.replace(/\s*\(×\d+\)\s*$/, '').trim()))
    .filter((palabra) => palabra.length > 0)
}

function contar(texto: string, palabra: string): number {
  let cantidad = 0
  for (let desde = texto.indexOf(palabra); desde !== -1; desde = texto.indexOf(palabra, desde + palabra.length)) {
    cantidad += 1
  }
  return cantidad
}

/**
 * Dónde entra el gráfico: justo después del párrafo que más habla de lo que motivó la sugerencia.
 * Si ningún párrafo menciona esas palabras, al final. Detrás de un gráfico que ya está en ese lugar,
 * para que respeten el orden en que la autora los fue agregando.
 */
function posicionDeInsercion(doc: ProsemirrorNode, grafico: GraficoContexto): number {
  const palabras = palabrasDeLosMotivos(grafico)
  const bloques: { fin: number; esGrafico: boolean; puntaje: number }[] = []
  doc.forEach((bloque, inicio) => {
    const esGrafico = bloque.type.name === 'grafico'
    const texto = esGrafico ? '' : sinTildes(bloque.textContent)
    const puntaje = palabras.reduce((suma, palabra) => suma + contar(texto, palabra), 0)
    bloques.push({ fin: inicio + bloque.nodeSize, esGrafico, puntaje })
  })

  const candidatos = bloques
    .map((bloque, i) => ({ i, puntaje: bloque.puntaje }))
    .filter((candidato) => candidato.puntaje > 0)
    .sort((a, b) => b.puntaje - a.puntaje || a.i - b.i)
  if (candidatos.length === 0) return doc.content.size

  // Prefiere un párrafo que todavía no tenga un gráfico pegado, para que no se amontonen.
  const libre = candidatos.find(({ i }) => !bloques[i + 1]?.esGrafico) ?? candidatos[0]
  let elegido = libre.i
  while (elegido + 1 < bloques.length && bloques[elegido + 1].esGrafico) elegido += 1
  return bloques[elegido].fin
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
          commands.insertContentAt(posicionDeInsercion(state.doc, grafico), {
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
const SALTO_FALLIDO_PX = 200
const ESPERA_SALTO_MS = 1100
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
  destino.scrollIntoView({ block: 'start', behavior: sinAnimacion ? 'instant' : 'smooth' })
  // Seguro: si la animación no llegó (pestaña en segundo plano, navegador sin cuadros), se salta directo.
  window.setTimeout(() => {
    if (Math.abs(destino.getBoundingClientRect().top) > SALTO_FALLIDO_PX) {
      destino.scrollIntoView({ block: 'start', behavior: 'instant' })
    }
  }, ESPERA_SALTO_MS)
  destino.classList.remove('grafico-nota--reciente')
  void destino.offsetWidth // reinicia la animación si ya estaba resaltado
  destino.classList.add('grafico-nota--reciente')
  window.setTimeout(() => destino.classList.remove('grafico-nota--reciente'), RESALTADO_MS)
}
