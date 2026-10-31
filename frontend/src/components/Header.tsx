import { Link } from 'react-router-dom'
import Wordmark from './Wordmark.tsx'

const links = [
  { href: '#producto', label: 'Producto' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#redes', label: 'Redes' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#top">
          <Wordmark size="lg" />
        </a>

        <nav className="header__nav" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} className="header__link" href={link.href}>
              {link.label}
            </a>
          ))}
          <Link className="header__link" to="/login">
            Iniciar sesión
          </Link>
        </nav>

        <Link className="button button--solid" to="/registro">
          Empezar
        </Link>
      </div>
    </header>
  )
}
