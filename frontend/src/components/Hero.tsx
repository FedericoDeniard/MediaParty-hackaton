import { useRef, useState, type KeyboardEvent } from 'react'
import { outputs, type NetworkId } from '../data/content.ts'

export default function Hero() {
  const [active, setActive] = useState<NetworkId>('x')
  const tabsRef = useRef<HTMLDivElement>(null)
  const current = outputs.find((output) => output.id === active)!

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
    const index = outputs.findIndex((output) => output.id === active)
    const next = outputs[(index + step + outputs.length) % outputs.length]
    setActive(next.id)
    tabsRef.current?.querySelector<HTMLButtonElement>(`#tab-${next.id}`)?.focus()
  }

  return (
    <section className="hero" id="top">
      <div className="hero__meta">
        <span>Nexo · Portal de noticias</span>
        <span>MediaParty 2026</span>
        <span>Una fuente · Ocho destinos</span>
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">De la noticia al post</p>
          <h1 className="hero__title">
            Una noticia.
            <br />
            Todos los formatos.
          </h1>
          <p className="hero__lead">
            Nexo procesa la noticia, le suma gráficos y datos, y la exporta lista para
            publicar en cada red social. Sin copiar, pegar y reescribir cinco veces.
          </p>

          <div className="hero__actions">
            <a className="button button--solid" href="#empezar">
              Empezar gratis
            </a>
            <a className="button button--ghost" href="#como-funciona">
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="hero__demo" aria-label="Ejemplo de una noticia exportada">
          <article className="source">
            <span className="source__badge">Fuente</span>
            <h2 className="source__title">La energía solar creció 34% en el primer semestre</h2>
            <p className="source__meta">Informe sectorial · 12 de marzo</p>
          </article>

          <span className="hero__arrow" aria-hidden="true">
            ↓
          </span>

          <div className="tabs" role="tablist" aria-label="Redes de destino" ref={tabsRef}>
            {outputs.map((output) => (
              <button
                key={output.id}
                role="tab"
                type="button"
                id={`tab-${output.id}`}
                aria-selected={output.id === active}
                aria-controls="preview-panel"
                tabIndex={output.id === active ? 0 : -1}
                className={`tab${output.id === active ? ' tab--active' : ''}`}
                onClick={() => setActive(output.id)}
                onKeyDown={handleKeyDown}
              >
                {output.name}
              </button>
            ))}
          </div>

          <div role="tabpanel" id="preview-panel" aria-labelledby={`tab-${current.id}`} className="preview">
            <p className="preview__format">{current.format}</p>
            <p className="preview__body">
              La energía solar creció 34% en el primer semestre, impulsada por nuevas
              instalaciones industriales. El sector espera cerrar el año con su mejor
              marca histórica.
            </p>
            <div className="preview__chart" aria-hidden="true">
              <span style={{ height: '38%' }} />
              <span style={{ height: '52%' }} />
              <span style={{ height: '46%' }} />
              <span style={{ height: '71%' }} />
              <span style={{ height: '88%' }} />
            </div>
            <p className="preview__detail">{current.detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
