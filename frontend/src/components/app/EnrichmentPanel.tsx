import { useRef, useState } from 'react'
import {
  Check,
  Landmark,
  List,
  MessageCircleQuestion,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import {
  enrichmentTypeLabels,
  type Enrichment,
  type EnrichmentStatus,
  type EnrichmentType,
} from '../../data/notes.ts'
import { enrichmentPanel } from '../../data/app.ts'
import type { EnrichmentRow } from '../../lib/enrich.ts'

export interface Analysis {
  state: 'idle' | 'running' | 'error'
  rows: EnrichmentRow[]
  error?: string
}

const typeIcons: Record<EnrichmentType, typeof List> = {
  puntos_clave: List,
  pregunta_probable: MessageCircleQuestion,
  dato_oficial: Landmark,
}

const stateLabels: Record<EnrichmentStatus, string> = {
  pendiente: enrichmentPanel.pending,
  aprobada: enrichmentPanel.approved,
  descartada: enrichmentPanel.discarded,
}

export default function EnrichmentPanel({
  items,
  onApprove,
  onDiscard,
  onRestore,
  analysis,
  onAnalyze,
}: {
  /** Sin `onAnalyze` (la vista previa) el panel no ofrece analizar. */
  analysis?: Analysis
  onAnalyze?: () => void
  items: Enrichment[]
  onApprove: (id: string) => void
  onDiscard: (id: string) => void
  onRestore: (id: string) => void
}) {
  const [open, setOpen] = useState(true)
  const [picked, setPicked] = useState<string | null>(null)
  const rows = useRef(new Map<string, HTMLButtonElement>())

  /* Lo que espera una decisión va primero: es lo que se viene a hacer
     acá. Lo resuelto queda abajo, en el orden en que llegó. */
  const ordered = [...items].sort(
    (a, b) => Number(a.status !== 'pendiente') - Number(b.status !== 'pendiente'),
  )

  const active = ordered.find((item) => item.id === picked) ?? ordered[0] ?? null

  /* Resolver una pieza deja seleccionada la siguiente sin aplicar y
     lleva el foco con ella: el botón que tenía el foco desaparece. */
  function resolve(id: string, action: (id: string) => void) {
    const next = ordered.find((item) => item.status === 'pendiente' && item.id !== id)
    const target = next?.id ?? id

    action(id)
    setPicked(target)
    requestAnimationFrame(() => rows.current.get(target)?.focus())
  }

  return (
    <div className="panel">
      <button
        className="assistant__bar"
        type="button"
        aria-expanded={open}
        aria-controls="asistente"
        onClick={() => setOpen(!open)}
      >
        <span className="assistant__chip">
          <Sparkles size={16} strokeWidth={1.5} aria-hidden="true" />
          {enrichmentPanel.label}
        </span>
        <span className="assistant__chevron" aria-hidden="true">
          {open ? (
            <Minus size={16} strokeWidth={1.5} />
          ) : (
            <Plus size={16} strokeWidth={1.5} />
          )}
        </span>
      </button>

      <div className="assistant" id="asistente" hidden={!open}>
        <h2 className="assistant__title">{enrichmentPanel.title}</h2>
        <p className="assistant__lead">{enrichmentPanel.lead}</p>

        {analysis && onAnalyze ? (
          <div className="assistant__analyze">
            <button
              className="button button--ghost"
              type="button"
              disabled={analysis.state === 'running'}
              aria-busy={analysis.state === 'running'}
              onClick={onAnalyze}
            >
              {analysis.state === 'running'
                ? enrichmentPanel.analyzing
                : items.length > 0
                  ? enrichmentPanel.reanalyze
                  : enrichmentPanel.analyze}
            </button>

            {/* El estado se dice con texto, no sólo con color. */}
            <div role="status" aria-live="polite">
              {analysis.state === 'error' ? (
                <p className="assistant__steps-error">
                  {enrichmentPanel.analyzeError}: {analysis.error}
                </p>
              ) : null}
              {analysis.state === 'running' || analysis.rows.some((row) => row.status === 'error') ? (
                <ul className="assistant__steps">
                  {analysis.rows.map((row) => (
                    <li key={row.kind} className={`assistant__step assistant__step--${row.status}`}>
                      <span>{enrichmentPanel.steps[row.kind] ?? row.kind}</span>
                      <span>{enrichmentPanel.stepStatus[row.status]}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ) : null}

        {items.length === 0 ? (
          <p className="assistant__empty">{enrichmentPanel.empty}</p>
        ) : (
          <>
            <ul className="assistant__list">
              {ordered.map((item) => {
                const Icon = typeIcons[item.type]

                return (
                  <li
                    key={item.id}
                    className={`assistant__item assistant__item--${item.status}`}
                  >
                    <button
                      className="assistant__pick"
                      type="button"
                      ref={(element) => {
                        if (element) rows.current.set(item.id, element)
                        else rows.current.delete(item.id)
                      }}
                      aria-current={item.id === active?.id ? 'true' : undefined}
                      aria-controls="asistente-sugerencia"
                      onClick={() => setPicked(item.id)}
                    >
                      <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                      <span className="assistant__pick-label">
                        {enrichmentTypeLabels[item.type]}
                      </span>
                      <span className="assistant__mark">
                        {item.status === 'aprobada' ? (
                          <Check size={16} strokeWidth={2} aria-hidden="true" />
                        ) : null}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            {active ? (
              <div
                className={`suggestion suggestion--${active.status}`}
                id="asistente-sugerencia"
              >
                <p className="suggestion__state">{stateLabels[active.status]}</p>

                <p className="suggestion__text">{active.text}</p>

                {active.citation ? (
                  <p className="suggestion__source">
                    {enrichmentPanel.citation}: «{active.citation}»
                  </p>
                ) : (
                  <p className="suggestion__source suggestion__source--missing">
                    {enrichmentPanel.unanswered}
                  </p>
                )}

                <div className="suggestion__actions">
                  {active.status === 'pendiente' ? (
                    <>
                      <button
                        className="button button--ink"
                        type="button"
                        onClick={() => resolve(active.id, onApprove)}
                      >
                        <Check size={16} strokeWidth={1.5} aria-hidden="true" />
                        {enrichmentPanel.approve}
                      </button>
                      <button
                        className="linkbutton suggestion__discard"
                        type="button"
                        onClick={() => resolve(active.id, onDiscard)}
                      >
                        {enrichmentPanel.discard}
                      </button>
                    </>
                  ) : (
                    <button
                      className="linkbutton"
                      type="button"
                      onClick={() => onRestore(active.id)}
                    >
                      {enrichmentPanel.restore}
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </>
        )}

        <p className="assistant__foot">
          <ShieldCheck size={14} strokeWidth={1.5} aria-hidden="true" />
          <span>{enrichmentPanel.foot}</span>
        </p>
      </div>
    </div>
  )
}
