import { networks } from '../data/content.ts'

export default function Networks() {
  return (
    <section className="section section--base" id="redes">
      <div className="section__inner">
        <header className="section__head">
          <p className="section__index">03 — Destinos</p>
          <div className="section__content">
            <h2 className="section__title">Un clic, todas las redes</h2>
            <p className="section__lead">
              Nexo conoce los límites de cada plataforma y ajusta el contenido para que
              entre completo. Si sumás un canal nuevo, el formato se actualiza solo.
            </p>
          </div>
        </header>

        <ul className="networks">
          {networks.map((network) => (
            <li key={network.name} className="network">
              <span className="network__name">{network.name}</span>
              <span className="network__rule">{network.rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
