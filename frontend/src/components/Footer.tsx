import Wordmark from './Wordmark.tsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Wordmark />
        </div>

        <p className="footer__note">Proyecto del hackatón MediaParty</p>
      </div>
    </footer>
  )
}
