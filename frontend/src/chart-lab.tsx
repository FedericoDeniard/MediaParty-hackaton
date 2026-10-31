import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo/wdth.css'
import './index.css'
import './chart-lab.css'

const CANDIDATES = [
  { id: 'ink', label: 'Tinta', value: '#171717', note: 'Referencia actual del sistema.' },
  { id: 'blue', label: 'Azul', value: '#342783', note: 'Deep indigo.' },
  { id: 'indigo', label: 'Indigo', value: '#282072', note: 'Indigo profundo.' },
  { id: 'green', label: 'Verde', value: '#C7DE58', note: 'Verde lima.' },
]

const BARS = ['30%', '45%', '40%', '62%', '58%', '80%']
const PREVIEW_BARS = ['38%', '52%', '46%', '71%', '88%']

const SURFACES = [
  { id: 'base', label: '--bg', name: 'Hueso', className: 'cmp__surface--base' },
  { id: 'contrast', label: '--surface-contrast', name: 'Ceniza', className: 'cmp__surface--contrast' },
  { id: 'inverse', label: '--surface-inverse', name: 'Tinta', className: 'cmp__surface--inverse' },
]

const RATIOS = [
  { name: 'Tinta', value: '#171717', bone: '15.74:1', contrast: '14.20:1', inverse: '1.00:1' },
  { name: 'Azul', value: '#342783', bone: '10.45:1', contrast: '9.43:1', inverse: '1.51:1' },
  { name: 'Indigo', value: '#282072', bone: '11.97:1', contrast: '10.81:1', inverse: '1.31:1' },
  { name: 'Verde', value: '#C7DE58', bone: '1.32:1', contrast: '1.19:1', inverse: '11.97:1' },
]

function Chart({ bars, color }: { bars: string[]; color: string }) {
  return (
    <div
      className="cmp__chart"
      style={{ ['--chart' as string]: color, ['--chart-baseline' as string]: color }}
    >
      {bars.map((h, i) => (
        <span key={i} style={{ height: h }} />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="cmp">
      <header className="cmp__head">
        <p className="eyebrow">Comparación de paleta de datos</p>
        <h1 className="cmp__title">Color de barras</h1>
        <p className="cmp__lead">
          Cuatro candidatos sobre las tres superficies del sistema. Las barras usan
          <code>--chart</code>; la línea de base usa <code>--chart-baseline</code>.
          WCAG 1.4.11 pide 3:1 para gráficos que transmiten información.
        </p>
      </header>

      {/* Todas las opciones juntas: una columna por candidato, una fila por superficie */}
      <section className="cmp__matrix">
        <div className="cmp__corner" />
        {CANDIDATES.map((c) => (
          <div key={c.id} className="cmp__colhead">
            <span className="cmp__swatch" style={{ background: c.value }} />
            <h2 className="cmp__name">{c.label}</h2>
            <code className="cmp__hex">{c.value}</code>
          </div>
        ))}

        {SURFACES.map((surface) => (
          <div key={surface.id} className="cmp__row">
            <div className="cmp__rowhead">
              <span className="cmp__surface-label">{surface.label}</span>
              <span className="cmp__surface-name">{surface.name}</span>
            </div>
            {CANDIDATES.map((c) => (
              <div key={c.id} className={`cmp__cell ${surface.className}`}>
                <Chart bars={surface.id === 'inverse' ? PREVIEW_BARS : BARS} color={c.value} />
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Los charts reales de la landing, uno por candidato */}
      <section className="cmp__section">
        <h2 className="cmp__section-title">En contexto de la landing</h2>
        <div className="cmp__contexts">
          {CANDIDATES.map((c) => (
            <div key={c.id} className="cmp__context" style={{ ['--chart' as string]: c.value }}>
              <div className="cmp__context-head">
                <span className="cmp__swatch cmp__swatch--sm" style={{ background: c.value }} />
                <span className="cmp__context-label">{c.label}</span>
              </div>
              <div className="cmp__context-body cmp__surface--base">
                <p className="cmp__chartlabel">preview__chart</p>
                <Chart bars={PREVIEW_BARS} color={c.value} />
                <p className="cmp__chartlabel cmp__chartlabel--gap">feature__chart</p>
                <Chart bars={BARS} color={c.value} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cmp__section">
        <h2 className="cmp__section-title">Contraste medido</h2>
        <table className="cmp__table">
          <thead>
            <tr>
              <th scope="col">Candidato</th>
              <th scope="col">Sobre hueso</th>
              <th scope="col">Sobre ceniza</th>
              <th scope="col">Sobre tinta</th>
            </tr>
          </thead>
          <tbody>
            {RATIOS.map((r) => (
              <tr key={r.value}>
                <th scope="row">
                  {r.name} <code>{r.value}</code>
                </th>
                <td className={r.bone.startsWith('1.3') ? 'cmp__fail' : ''}>{r.bone}</td>
                <td className={r.contrast.startsWith('1.1') ? 'cmp__fail' : ''}>{r.contrast}</td>
                <td>{r.inverse}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="cmp__note">
          En rojo, los valores que no llegan al 3:1 de WCAG 1.4.11 sobre superficie clara.
        </p>
      </section>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
