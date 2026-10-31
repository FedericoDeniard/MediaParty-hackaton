import { features } from '../data/content.ts'

const chart = [30, 45, 40, 62, 58, 80]

export default function Features() {
  return (
    <section className="section section--contrast" id="producto">
      <div className="section__inner">
        <header className="section__head">
          <p className="section__index">02 — Producto</p>
          <div className="section__content">
            <h2 className="section__title">Todo lo que glosa suma a tu nota</h2>
          </div>
        </header>

        <div className="features">
          {features.map((feature) => (
            <article
              key={feature.n}
              className={`feature feature--${feature.tone}`}
              data-col={feature.col}
              data-shift={feature.shift}
            >
              <span className="feature__index">{feature.n}</span>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__body">{feature.body}</p>

              {feature.kind === 'passage' && feature.passage && (
                <>
                  <blockquote className="feature__passage">
                    {feature.passage.before}
                    <mark>{feature.passage.mark}</mark>
                    {feature.passage.after}
                  </blockquote>
                  <p className="feature__caption">{feature.caption}</p>
                </>
              )}

              {feature.kind === 'chart' && (
                <>
                  <div className="feature__chart" aria-hidden="true">
                    {chart.map((height, index) => (
                      <span key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <p className="feature__caption">{feature.caption}</p>
                </>
              )}

              {feature.kind === 'checks' && feature.checks && (
                <>
                  <p className="feature__caption">{feature.caption}</p>
                  <ul className="feature__checks">
                    {feature.checks.map((check) => (
                      <li key={check.label}>
                        <span className="feature__check-label">{check.label}</span>
                        <span className="feature__check-value">{check.value}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
