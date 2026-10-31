import { useState } from 'react'
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
}: {
  items: Enrichment[]
  onApprove: (id: string) => void
  onDiscard: (id: string) => void
  onRestore: (id: string) => void
}) {
  const [open, setOpen] = useState(true)
  const [picked, setPicked] = useState<string | null>(null)

  /* Lo que espera una decisión va primero: es lo que se viene a hacer
     acá. Lo resuelto queda abajo, en el orden en que llegó. */
  const ordered = [...items].sort(
    (a, b) => Number(a.status !== 'pendiente') - Number(b.status !== 'pendiente'),
  )

  const active = ordered.find((item) => item.id === picked) ?? ordered[0] ?? null

  /* Resolver una pieza deja seleccionada la siguiente sin aplicar:
     la decisión que sigue es la próxima. */
  function resolve(id: string, action: (id: string) => void) {
    const next = ordered.find((item) => item.status === 'pendiente' && item.id !== id)
    action(id)
    setPicked(next?.id ?? id)
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
              <div className={`suggestion suggestion--${active.status}`} id="asistente-sugerencia">
                <p className="suggestion__state">{stateLabels[active.status]}</p>
                <h3 className="suggestion__title">{enrichmentTypeLabels[active.type]}</h3>

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
