import { useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { hero, suggestions, type SuggestionId } from '../data/content.ts'

type Decision = 'incorporada' | 'descartada'

export default function Hero() {
  const [active, setActive] = useState<SuggestionId>('dato')
  const [decisions, setDecisions] = useState<Partial<Record<SuggestionId, Decision>>>({})
  const tabsRef = useRef<HTMLDivElement>(null)
  const current = suggestions.find((suggestion) => suggestion.id === active)!
  const decision = decisions[active]

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    }
    const step = keys[event.key]
    if (!step) return

    event.preventDefault()
    const index = suggestions.findIndex((suggestion) => suggestion.id === active)
    const next = suggestions[(index + step + suggestions.length) % suggestions.length]
    setActive(next.id)
    tabsRef.current
      ?.querySelector<HTMLButtonElement>(`#sugerencia-tab-${next.id}`)
      ?.focus()
  }

  function decide(next: Decision) {
    setDecisions((prev) => ({ ...prev, [active]: next }))
  }

  function reopen() {
    setDecisions((prev) => {
      const next = { ...prev }
      delete next[active]
      return next
    })
  }

  return (
    <section className="hero" id="top">
      <div className="hero__meta">
        {hero.meta.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </h1>
          <p className="hero__lead">{hero.lead}</p>

          <div className="hero__actions">
            <Link className="button button--solid" to="/registro">
              {hero.primary}
            </Link>
            <a className="button button--ghost" href="#como-funciona">
              {hero.secondary}
            </a>
          </div>
        </div>

        <aside className="hero__demo" aria-label="Ejemplo de una sugerencia sobre una nota">
          <article className="source">
            <span className="source__badge">{hero.demo.label}</span>
            <h2 className="source__title">{hero.demo.title}</h2>
            <p className="source__meta">{hero.demo.meta}</p>
            <p className="source__body">{hero.demo.body}</p>
          </article>

          <div className="tabs" role="tablist" aria-label="Sugerencias sobre el pasaje" ref={tabsRef}>
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                role="tab"
                type="button"
                id={`sugerencia-tab-${suggestion.id}`}
                aria-selected={suggestion.id === active}
                aria-controls="sugerencia-panel"
                tabIndex={suggestion.id === active ? 0 : -1}
                className={`tab${suggestion.id === active ? ' tab--active' : ''}`}
                onClick={() => setActive(suggestion.id)}
                onKeyDown={handleKeyDown}
              >
                {suggestion.tab}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id="sugerencia-panel"
            aria-labelledby={`sugerencia-tab-${current.id}`}
            className="preview"
          >
            <div className="preview__head">
              <p className="preview__format">{current.type}</p>
              <p className="preview__status">{current.statusLabel}</p>
            </div>

            <p className="preview__body">{current.text}</p>

            <dl className="preview__meta">
              <div className="preview__meta-row">
                <dt>Aparece en la nota</dt>
                <dd>
                  <mark>{current.passage}</mark>
                </dd>
              </div>
              <div className="preview__meta-row">
                <dt>Fuente</dt>
                <dd>{current.source}</dd>
              </div>
            </dl>

            {current.chart ? (
              <>
                <div className="preview__chart" aria-hidden="true">
                  {current.chart.map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <p className="preview__detail">{current.detail}</p>
              </>
            ) : null}

            <div className="preview__actions">
              {decision ? (
                <>
                  <p className="preview__decision" role="status">
                    {decision === 'incorporada' ? 'Incorporada a la nota' : 'Descartada'}
                  </p>
                  <button className="linkbutton" type="button" onClick={reopen}>
                    Reabrir
                  </button>
                </>
              ) : (
                <>
                  {current.applicable ? (
                    <button
                      className="button button--ink"
                      type="button"
                      onClick={() => decide('incorporada')}
                    >
                      Incorporar
                    </button>
                  ) : (
                    <p className="preview__decision">{hero.demo.blocked}</p>
                  )}
                  <button
                    className="linkbutton"
                    type="button"
                    onClick={() => decide('descartada')}
                  >
                    Descartar
                  </button>
                </>
              )}
            </div>
          </div>

          <p className="hero__demo-foot">{hero.demo.foot}</p>
        </aside>
      </div>
    </section>
  )
}
