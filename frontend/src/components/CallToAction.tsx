import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="section section--inverted" id="empezar">
      <div className="section__inner cta">
        <div className="cta__copy">
          <h2 className="cta__title">Empezá a publicar mejor hoy</h2>
          <p className="cta__body">
            Probalo con una noticia real y mirá las ocho versiones que salen.
          </p>
        </div>
        <div className="cta__actions">
          <Link className="button button--solid" to="/registro">
            Crear cuenta
          </Link>
          <a className="button button--ghost" href="#top">
            Hablar con el equipo
          </a>
        </div>
      </div>
    </section>
  )
}
