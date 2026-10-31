import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo/wdth.css'
import './index.css'
import ContextoCard from './components/graficos/ContextoCard.tsx'
import { ejemplos } from './data/graficos-ejemplos.ts'

/* Laboratorio: los gráficos de contexto con datos reales que armó el verificador.
   Sirve para evaluar el diseño y la animación sin backend. */

const notas = Object.entries(ejemplos).sort(([a], [b]) => a.localeCompare(b))

function App() {
  const [nota, setNota] = useState(notas[0][0])
  const [corrida, setCorrida] = useState(0)
  const { titulo, datos } = ejemplos[nota]

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '32px 20px 80px' }}>
      <p style={{ margin: 0, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
        Nexo · laboratorio de gráficos de contexto
      </p>
      <h1 style={{ margin: '4px 0 16px', fontSize: 26, lineHeight: 1.2 }}>{titulo}</h1>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {notas.map(([id]) => (
          <button
            key={id}
            type="button"
            aria-pressed={id === nota}
            onClick={() => setNota(id)}
            style={{
              minHeight: 44,
              padding: '0 18px',
              borderRadius: 999,
              border: '1px solid var(--rule)',
              background: id === nota ? 'var(--ink)' : 'var(--surface)',
              color: id === nota ? 'var(--bg)' : 'var(--ink)',
              cursor: 'pointer',
              font: 'inherit',
            }}
          >
            Nota {id}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setCorrida((n) => n + 1)}
          style={{ minHeight: 44, padding: '0 18px', borderRadius: 999, border: '1px solid var(--rule)', background: 'transparent', cursor: 'pointer', font: 'inherit' }}
        >
          Repetir animación
        </button>
      </div>

      <div style={{ display: 'grid', gap: 24 }} key={`${nota}-${corrida}`}>
        {datos.contextos.map((grafico) => (
          <ContextoCard key={grafico.id} grafico={grafico} />
        ))}
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
