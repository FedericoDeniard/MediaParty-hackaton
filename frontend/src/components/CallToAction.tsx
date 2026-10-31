import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="section section--inverted" id="empezar">
      <div className="section__inner cta">
        <div className="cta__copy">
          <h2 className="cta__title">Sumá datos a tu próxima nota</h2>
          <p className="cta__body">
            Probalo con una nota real: glosa te muestra qué puede respaldar y qué no.
            La decisión sigue siendo tuya.
          </p>
        </div>
        <div className="cta__actions">
          <Link className="button button--solid" to="/registro">
            Crear cuenta
          </Link>
          <Link className="button button--ghost" to="/login">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </section>
  )
}
