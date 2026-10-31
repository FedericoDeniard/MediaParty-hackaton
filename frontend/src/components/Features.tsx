import { features } from '../data/content.ts'

export default function Features() {
  return (
    <section className="section" id="producto">
      <div className="section__inner">
        <header className="section__head">
          <p className="section__index">02 — Producto</p>
          <div className="section__content">
            <h2 className="section__title">Todo lo que hay entre la fuente y el post</h2>
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

              {feature.kind === 'chart' && (
                <div className="feature__chart" aria-hidden="true">
                  <span style={{ height: '30%' }} />
                  <span style={{ height: '45%' }} />
                  <span style={{ height: '40%' }} />
                  <span style={{ height: '62%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '80%' }} />
                </div>
              )}

              {feature.kind === 'quote' && (
                <blockquote className="feature__quote">
                  <p>La demanda eléctrica récord coincidió con la mayor inversión en
                  planta solar del país.</p>
                </blockquote>
              )}

              {feature.kind === 'formats' && (
                <ul className="feature__formats">
                  <li>1080 x 1350</li>
                  <li>280 caracteres</li>
                  <li>3000 caracteres</li>
                </ul>
              )}

              {feature.kind === 'team' && (
                <ul className="feature__team">
                  <li>MA</li>
                  <li>LT</li>
                  <li>SR</li>
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
