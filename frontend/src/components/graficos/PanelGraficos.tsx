import { useState, type CSSProperties } from 'react'
import { useEditorState, type Editor } from '@tiptap/react'
import { Check, Plus, ShieldCheck, Sparkles } from 'lucide-react'
import FlujoMotor from './FlujoMotor.tsx'
import { pasosDeAnalisis, type FilasDeAnalisis } from './pasos.ts'
import type { GraficoContexto } from './types.ts'
import { graficosEnLaNota, irAlGrafico } from '../../lib/editor/graficoNode.tsx'
import './panel.css'

/* ============================================================
   Panel de gráficos recomendados.

   Muestra lo que el motor pensó (el recorrido) y los gráficos que
   propone. Agregar uno lo inserta en la nota como una sección y lleva
   a ella; la autora puede verlo, quitarlo o descartarlo. Nada entra a
   la nota sin que ella lo decida.

   Va dentro de `.editor__aside`, que lo deja flotando al scrollear.
   ============================================================ */

const RETRASO_VISTA_MS = 80

interface Props {
  editor: Editor | null
  filas: FilasDeAnalisis
  cuerpo?: string
  /** El análisis todavía no terminó. */
  trabajando: boolean
  /** Si se pasa, aparece el botón para (re)analizar la nota. */
  onAnalizar?: () => void
}

type Estado = 'pendiente' | 'agregado' | 'descartado'

function Recomendacion({
  grafico,
  estado,
  indice,
  onAgregar,
  onDescartar,
  onReabrir,
  onVer,
  onQuitar,
}: {
  grafico: GraficoContexto
  estado: Estado
  indice: number
  onAgregar: () => void
  onDescartar: () => void
  onReabrir: () => void
  onVer: () => void
  onQuitar: () => void
}) {
  const retraso: CSSProperties = { animationDelay: `${indice * 120}ms` }

  return (
    <li className={`pg__item pg__item--${estado}`} style={retraso}>
      <p className="pg__tipo">Contexto · datos oficiales</p>
      <h3 className="pg__item-titulo">{grafico.titulo}</h3>
      {grafico.motivos.length > 0 ? (
        <p className="pg__motivo">Te lo sugerimos porque la nota menciona: {grafico.motivos.join(', ')}.</p>
      ) : null}

      <div className="pg__acciones">
        {estado === 'pendiente' ? (
          <>
            <button className="button button--ink" type="button" onClick={onAgregar}>
              <Plus size={16} strokeWidth={1.5} aria-hidden="true" />
              Agregar a la nota
            </button>
            <button className="linkbutton" type="button" onClick={onDescartar}>
              Descartar
            </button>
          </>
        ) : null}
        {estado === 'agregado' ? (
          <>
            <span className="pg__hecho">
              <Check size={16} strokeWidth={2} aria-hidden="true" />
              En la nota
            </span>
            <button className="linkbutton" type="button" onClick={onVer}>
              Ver en la nota →
            </button>
            <button className="linkbutton" type="button" onClick={onQuitar}>
              Quitar
            </button>
          </>
        ) : null}
        {estado === 'descartado' ? (
          <button className="linkbutton" type="button" onClick={onReabrir}>
            Reabrir
          </button>
        ) : null}
      </div>
    </li>
  )
}

export default function PanelGraficos({ editor, filas, cuerpo, trabajando, onAnalizar }: Props) {
  const [descartados, setDescartados] = useState<string[]>([])

  const enLaNota = (
    useEditorState({
      editor,
      selector: ({ editor: actual }) => (actual ? graficosEnLaNota(actual).join('|') : ''),
    }) ?? ''
  ).split('|')

  const pasos = pasosDeAnalisis(filas, cuerpo)
  const recomendaciones = filas.graficos?.contextos ?? []

  function agregar(grafico: GraficoContexto) {
    if (!editor) return
    editor.chain().insertarGrafico(grafico).run()
    window.setTimeout(() => irAlGrafico(editor, grafico.id), RETRASO_VISTA_MS)
  }

  function estadoDe(id: string): Estado {
    if (enLaNota.includes(id)) return 'agregado'
    return descartados.includes(id) ? 'descartado' : 'pendiente'
  }

  return (
    <div className="panel pg">
      <p className="pg__chip">
        <Sparkles size={16} strokeWidth={1.5} aria-hidden="true" />
        Asistente IA
      </p>
      <h2 className="pg__titulo">Gráficos para tu nota</h2>
      <p className="pg__bajada">Datos oficiales que completan lo que escribiste. Vos decidís cuáles entran.</p>

      {onAnalizar ? (
        <button className="button button--ink pg__analizar" type="button" onClick={onAnalizar} disabled={trabajando}>
          {trabajando ? 'Analizando…' : 'Analizar la nota'}
        </button>
      ) : null}

      <FlujoMotor pasos={pasos} trabajando={trabajando} />

      {!trabajando && filas.graficos && recomendaciones.length === 0 ? (
        <p className="pg__vacio">Ningún dato de contexto aporta a esta nota, y está bien: no se arma un gráfico de relleno.</p>
      ) : null}

      <ul className="pg__lista">
        {recomendaciones.map((grafico, i) => (
          <Recomendacion
            key={grafico.id}
            grafico={grafico}
            indice={i}
            estado={estadoDe(grafico.id)}
            onAgregar={() => agregar(grafico)}
            onDescartar={() => setDescartados((previos) => [...previos, grafico.id])}
            onReabrir={() => setDescartados((previos) => previos.filter((id) => id !== grafico.id))}
            onVer={() => editor && irAlGrafico(editor, grafico.id)}
            onQuitar={() => editor?.commands.quitarGrafico(grafico.id)}
          />
        ))}
      </ul>

      <p className="pg__pie">
        <ShieldCheck size={14} strokeWidth={1.5} aria-hidden="true" />
        <span>Tu voz tiene la última palabra. Ningún gráfico entra a la nota sin que lo agregues.</span>
      </p>
    </div>
  )
}
