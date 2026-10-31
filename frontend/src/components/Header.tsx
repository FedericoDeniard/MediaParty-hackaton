import Logo from './Logo.tsx'

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
          <Logo />
          <span className="header__wordmark">Nexo</span>
        </a>

        <nav className="header__nav" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} className="header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button--solid" href="#empezar">
          Empezar
        </a>
      </div>
    </header>
  )
}
