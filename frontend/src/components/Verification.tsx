import { verification, verificationStates } from '../data/content.ts'

export default function Verification() {
  return (
    <section className="section section--base" id="verificacion">
      <div className="section__inner">
        <header className="section__head">
          <p className="section__index">{verification.index}</p>
          <div className="section__content">
            <h2 className="section__title">{verification.title}</h2>
            <p className="section__lead">{verification.lead}</p>
          </div>
        </header>

        <div className="checks">
          <div className="checks__head" aria-hidden="true">
            {verification.headers.map((header) => (
              <span key={header}>{header}</span>
            ))}
          </div>

          <ul>
            {verificationStates.map((state) => (
              <li key={state.state} className="checks__row">
                <span className="checks__state">{state.state}</span>
                <span className="checks__meaning">{state.meaning}</span>
                <span className="checks__action">{state.action}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="sources">
          <span className="sources__label">{verification.sourcesLabel}</span>
          <span className="sources__list">{verification.sources}</span>
        </p>
      </div>
    </section>
  )
}
