import { steps } from '../data/content.ts'

export default function Steps() {
  return (
    <section className="section" id="como-funciona">
      <div className="section__inner">
        <header className="section__head">
          <p className="section__index">01 — Flujo de trabajo</p>
          <div className="section__content">
            <h2 className="section__title">Tres pasos, una sola fuente de verdad</h2>
          </div>
        </header>

        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n} className="step">
              <span className="step__number">{step.n}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
              <p className="step__aside">{step.aside}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
