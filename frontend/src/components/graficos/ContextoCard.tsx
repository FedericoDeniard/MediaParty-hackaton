import { useId, useMemo, type CSSProperties } from 'react'
import type { BarraContexto, GraficoContexto, SerieContexto } from './types.ts'
import { etiquetaDeDatos } from './etiqueta.ts'
import './graficos.css'

/* ============================================================
   Gráfico de contexto horizontal.

   Dibuja el JSON que arma el verificador (`GraficoContexto`) sin
   recalcular nada: el título, los números y la fuente ya vienen
   listos. Líneas con etiquetas directas al final (sin leyenda) o
   barras, siempre con su tabla equivalente, la fuente con enlace y
   las advertencias.

   La animación es solo de entrada y se apaga con
   `prefers-reduced-motion`.
   ============================================================ */

const numero = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 2 })

const NOMBRES_CORTOS: Record<string, string> = {
  smvm: 'Salario mínimo',
  haber: 'Haber mínimo',
  auh: 'AUH',
  privado: 'Privado',
  publico: 'Público',
  registrado: 'Total registrado',
}

const COLORES = ['var(--ctx-ink)', 'var(--ctx-dato-fuerte)', 'var(--ctx-gris)']

function nombreCorto(serie: SerieContexto): string {
  return NOMBRES_CORTOS[serie.clave] ?? serie.nombre
}

function mesCorto(mes: string): string {
  return new Date(`${mes}-01`)
    .toLocaleDateString('es-AR', { month: 'short', year: '2-digit', timeZone: 'UTC' })
    .replace('.', '')
}

function cambioTexto(cambio: number | null): string {
  if (cambio === null) return ''
  const signo = cambio > 0 ? '+' : '−'
  return `${signo}${numero.format(Math.abs(Math.round(cambio * 10) / 10))}%`
}

function plural(cantidad: number, uno: string, varios: string): string {
  return `${cantidad} ${cantidad === 1 ? uno : varios}`
}

interface Escala {
  lo: number
  hi: number
  paso: number
}

function escalaEnCuatro(min: number, max: number): Escala {
  const bruto = (max - min || 1) / 4
  const potencia = 10 ** Math.floor(Math.log10(bruto))
  const paso = [1, 2, 2.5, 5, 10].map((m) => m * potencia).find((x) => x >= bruto) ?? potencia * 10
  return { paso, lo: Math.floor(min / paso) * paso, hi: Math.ceil(max / paso) * paso }
}

function retraso(indice: number, cada = 120): CSSProperties {
  return { animationDelay: `${indice * cada}ms` }
}

/* ---- líneas ---- */

const L = { ancho: 640, alto: 320, izq: 48, der: 150, arriba: 26, abajo: 38 }

function Lineas({ grafico }: { grafico: GraficoContexto }) {
  const dibujo = useMemo(() => {
    const meses = [...new Set(grafico.series.flatMap((s) => s.puntos.map((p) => p.x)))].sort()
    const valores = grafico.series.flatMap((s) => s.puntos.map((p) => p.y))
    if (grafico.referencia !== null) valores.push(grafico.referencia)
    const { lo, hi, paso } = escalaEnCuatro(Math.min(...valores), Math.max(...valores))
    const x = (mes: string) =>
      L.izq + ((L.ancho - L.izq - L.der) * meses.indexOf(mes)) / Math.max(meses.length - 1, 1)
    const y = (valor: number) => L.arriba + (L.alto - L.arriba - L.abajo) * (1 - (valor - lo) / (hi - lo))
    const marcas: number[] = []
    for (let v = lo; v <= hi + 1e-9; v += paso) marcas.push(Number(v.toFixed(4)))

    const finales = grafico.series
      .map((serie, i) => {
        const ultimo = serie.puntos[serie.puntos.length - 1]
        return { serie, i, x: x(ultimo.x), y: y(ultimo.y) }
      })
      .sort((a, b) => a.y - b.y)
    // Las etiquetas del final no se pisan: se separan hacia abajo, atadas a su línea por el color.
    const etiquetas = finales.reduce<((typeof finales)[number] & { yEtiqueta: number })[]>((acc, f) => {
      const previo = acc[acc.length - 1]
      const yEtiqueta = previo && f.y - previo.yEtiqueta < 30 ? previo.yEtiqueta + 30 : f.y
      return [...acc, { ...f, yEtiqueta }]
    }, [])

    return { meses, x, y, marcas, etiquetas }
  }, [grafico])

  const { meses, x, y, marcas, etiquetas } = dibujo
  const cada = Math.ceil(meses.length / 6)

  return (
    <svg
      className="ctx__svg"
      viewBox={`0 0 ${L.ancho} ${L.alto}`}
      role="img"
      aria-label={grafico.titulo}
    >
      {marcas.map((v) => (
        <g key={v}>
          <line className="ctx__guia" x1={L.izq} x2={L.ancho - L.der} y1={y(v)} y2={y(v)} />
          <text className="ctx__eje" x={L.izq - 8} y={y(v) + 4} textAnchor="end">
            {numero.format(v)}
          </text>
        </g>
      ))}
      {meses.map((mes, i) =>
        // El último mes siempre; los intermedios solo si dejan lugar para que no se pisen.
        i === meses.length - 1 || (i % cada === 0 && meses.length - 1 - i >= cada) ? (
          <text key={mes} className="ctx__eje" x={x(mes)} y={L.alto - L.abajo + 18} textAnchor="middle">
            {mesCorto(mes)}
          </text>
        ) : null,
      )}
      {grafico.referencia !== null ? (
        <line
          className="ctx__referencia"
          x1={L.izq}
          x2={L.ancho - L.der}
          y1={y(grafico.referencia)}
          y2={y(grafico.referencia)}
        />
      ) : null}
      {grafico.series.map((serie, i) => {
        const color = COLORES[i % COLORES.length]
        const ultimo = serie.puntos[serie.puntos.length - 1]
        return (
          <g key={serie.clave}>
            <polyline
              className="ctx__linea"
              pathLength={1}
              style={{ stroke: color, ...retraso(i, 160) }}
              points={serie.puntos.map((p) => `${x(p.x)},${y(p.y)}`).join(' ')}
            />
            <circle
              className="ctx__punto"
              cx={x(ultimo.x)}
              cy={y(ultimo.y)}
              r={5.5}
              style={{ fill: color, ...retraso(i, 160) }}
            />
          </g>
        )
      })}
      {etiquetas.map((e, i) => (
        <g key={e.serie.clave} className="ctx__etiqueta-final" style={retraso(i + 6, 140)}>
          <text className="ctx__nombre" x={e.x + 12} y={e.yEtiqueta - 2}>
            {nombreCorto(e.serie)}
          </text>
          <text className="ctx__cambio" x={e.x + 12} y={e.yEtiqueta + 12}>
            {cambioTexto(e.serie.cambio_pct)}
          </text>
        </g>
      ))}
    </svg>
  )
}

/* ---- barras ---- */

const B = { ancho: 640, alto: 300, lados: 24, arriba: 36, abajo: 44 }

function Barras({ grafico }: { grafico: GraficoContexto }) {
  const maximo = Math.max(...grafico.barras.map((b) => b.valor))
  const hueco = (B.ancho - B.lados * 2) / grafico.barras.length
  const grosor = Math.min(70, hueco * 0.6)
  const y = (valor: number) => B.arriba + (B.alto - B.arriba - B.abajo) * (1 - valor / (maximo * 1.1))
  const base = B.alto - B.abajo

  return (
    <svg className="ctx__svg" viewBox={`0 0 ${B.ancho} ${B.alto}`} role="img" aria-label={grafico.titulo}>
      <line className="ctx__base" x1={B.lados} x2={B.ancho - B.lados} y1={base} y2={base} />
      {grafico.barras.map((barra: BarraContexto, i) => {
        const centro = B.lados + hueco * (i + 0.5)
        return (
          <g key={barra.etiqueta}>
            <rect
              className={`ctx__barra${barra.destacada ? ' ctx__barra--destacada' : ''}`}
              x={centro - grosor / 2}
              y={y(barra.valor)}
              width={grosor}
              height={base - y(barra.valor)}
              rx={12}
              style={retraso(i, 140)}
            />
            <text className="ctx__valor" x={centro} y={y(barra.valor) - 10} textAnchor="middle" style={retraso(i + 2, 140)}>
              {numero.format(Math.round(barra.valor * 100) / 100)}
            </text>
            <text
              className={`ctx__eje${barra.destacada ? ' ctx__eje--fuerte' : ''}`}
              x={centro}
              y={base + 20}
              textAnchor="middle"
            >
              {barra.etiqueta}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/* ---- ranking (barras horizontales: una posición por fila) ---- */

const R = { ancho: 640, izq: 230, der: 64, fila: 34, grosor: 20, arriba: 8 }

function Ranking({ grafico }: { grafico: GraficoContexto }) {
  const maximo = Math.max(...grafico.barras.map((b) => b.valor))
  const largo = (valor: number) => ((R.ancho - R.izq - R.der) * valor) / maximo
  const alto = R.arriba * 2 + R.fila * grafico.barras.length

  return (
    <svg className="ctx__svg" viewBox={`0 0 ${R.ancho} ${alto}`} role="img" aria-label={grafico.titulo}>
      <line className="ctx__base" x1={R.izq} x2={R.izq} y1={R.arriba} y2={alto - R.arriba} />
      {grafico.barras.map((barra: BarraContexto, i) => {
        const centro = R.arriba + R.fila * (i + 0.5)
        return (
          <g key={barra.etiqueta}>
            <text
              className={`ctx__eje${barra.destacada ? ' ctx__eje--fuerte' : ''}`}
              x={R.izq - 12}
              y={centro + 5}
              textAnchor="end"
            >
              {barra.etiqueta}
            </text>
            <rect
              className={`ctx__barra ctx__barra--horizontal${barra.destacada ? ' ctx__barra--destacada' : ''}`}
              x={R.izq}
              y={centro - R.grosor / 2}
              width={largo(barra.valor)}
              height={R.grosor}
              rx={10}
              style={retraso(i, 70)}
            />
            <text className="ctx__valor" x={R.izq + largo(barra.valor) + 10} y={centro + 5} style={retraso(i + 4, 70)}>
              {numero.format(Math.round(barra.valor * 100) / 100)}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/* ---- tarjeta ---- */

function Tabla({ grafico }: { grafico: GraficoContexto }) {
  const filas =
    grafico.visual !== 'lineas'
      ? grafico.barras.map((b) => [b.etiqueta, numero.format(Math.round(b.valor * 100) / 100), ''])
      : grafico.series.map((s) => {
          const primero = s.puntos[0]
          const ultimo = s.puntos[s.puntos.length - 1]
          return [
            nombreCorto(s),
            `${numero.format(Math.round(primero.y * 100) / 100)} (${mesCorto(primero.x)})`,
            `${numero.format(Math.round(ultimo.y * 100) / 100)} (${mesCorto(ultimo.x)})`,
          ]
        })
  const cabecera =
    grafico.visual === 'ranking'
      ? ['Posición', 'Puntos', '']
      : grafico.visual === 'barras'
        ? ['Período', 'Valor', '']
        : ['Serie', 'Primer mes', 'Último mes']

  return (
    <details className="ctx__tabla">
      <summary>Ver como tabla</summary>
      <table>
        <thead>
          <tr>
            {cabecera.map((c, i) => (
              <th key={i} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila[0]}>
              {fila.map((celda, i) => (
                <td key={i}>{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  )
}

export default function ContextoCard({ grafico }: { grafico: GraficoContexto }) {
  const idTitulo = useId()

  return (
    <article className="ctx" aria-labelledby={idTitulo}>
      <p className="ctx__sello">{etiquetaDeDatos(grafico)}</p>
      <h3 className="ctx__titulo" id={idTitulo}>
        {grafico.titulo}
      </h3>
      <p className="ctx__unidad">{grafico.unidad}</p>
      {grafico.motivos.length > 0 ? (
        <p className="ctx__motivo">Te lo sugerimos porque la nota menciona: {grafico.motivos.join(', ')}</p>
      ) : null}

      {grafico.visual === 'ranking' ? (
        <Ranking grafico={grafico} />
      ) : grafico.visual === 'barras' ? (
        <Barras grafico={grafico} />
      ) : (
        <Lineas grafico={grafico} />
      )}

      <details className="ctx__detalle">
        <summary>Fuentes y detalle</summary>
        <p className="ctx__leer">
          <strong>Cómo leerlo.</strong> {grafico.como_leerlo}
        </p>
        <Tabla grafico={grafico} />
        <ul className="ctx__fuentes">
          {grafico.fuentes.map((f) => (
            <li key={f.id}>
              <a href={f.enlace} target="_blank" rel="noopener noreferrer">
                {f.nombre}
              </a>
              {` · ${f.institucion} · último dato ${f.ultimo_dato}`}
              {f.rezago_meses > 0 ? ` (hace ${plural(f.rezago_meses, 'mes', 'meses')})` : ''}
            </li>
          ))}
        </ul>
        {grafico.advertencias.length > 0 ? (
          <ul className="ctx__avisos">
            {grafico.advertencias.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        ) : null}
      </details>
    </article>
  )
}
