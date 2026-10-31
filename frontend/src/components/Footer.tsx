import Logo from './Logo.tsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo size={32} />
          <span className="footer__wordmark">Nexo</span>
        </div>

        <nav className="footer__nav" aria-label="Pie de página">
          <a href="#producto">Producto</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#redes">Redes</a>
        </nav>

        <p className="footer__note">Proyecto del hackatón MediaParty</p>
      </div>
    </footer>
  )
}
