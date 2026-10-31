export default function Wordmark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span className={`wordmark${size === 'lg' ? ' wordmark--lg' : ''}`}>
      glosa<span className="wordmark__bracket" aria-hidden="true">]</span>
    </span>
  )
}
