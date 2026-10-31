import { CheckCheck, X } from 'lucide-react'
import {
  enrichmentStatusLabels,
  enrichmentTypeLabels,
  type Enrichment,
} from '../../data/notes.ts'
import { enrichmentPanel } from '../../data/app.ts'

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
  const pending = items.filter((item) => item.status === 'pendiente')
  const resolved = items.filter((item) => item.status !== 'pendiente')

  return (
    <div className="panel">
      <p className="panel__title">{enrichmentPanel.title}</p>

      {items.length === 0 ? (
        <p className="panel__empty">{enrichmentPanel.empty}</p>
      ) : null}

      {pending.length > 0 ? (
        <ul className="panel__list">
          {pending.map((item) => (
            <li key={item.id} className="piece">
              <p className="piece__type">{enrichmentTypeLabels[item.type]}</p>
              <p className="piece__text">{item.text}</p>
              {item.citation ? (
                <p className="piece__citation">«{item.citation}»</p>
              ) : (
                <p className="piece__citation piece__citation--missing">
                  {enrichmentPanel.unanswered}
                </p>
              )}

              <div className="piece__actions">
                <button
                  className="linkbutton linkbutton--on"
                  type="button"
                  onClick={() => onApprove(item.id)}
                >
                  <CheckCheck size={16} aria-hidden="true" />
                  {enrichmentPanel.approve}
                </button>
                <button
                  className="linkbutton"
                  type="button"
                  onClick={() => onDiscard(item.id)}
                >
                  <X size={16} aria-hidden="true" />
                  {enrichmentPanel.discard}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {resolved.length > 0 ? (
        <ul className="panel__list panel__list--resolved">
          {resolved.map((item) => (
            <li key={item.id} className="piece piece--resolved">
              <p className="piece__type">{enrichmentTypeLabels[item.type]}</p>
              <p className="piece__text">{item.text}</p>
              <p className={`piece__state piece__state--${item.status}`}>
                {enrichmentStatusLabels[item.status]}
              </p>
              <button
                className="linkbutton linkbutton--quiet"
                type="button"
                onClick={() => onRestore(item.id)}
              >
                {enrichmentPanel.restore}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
