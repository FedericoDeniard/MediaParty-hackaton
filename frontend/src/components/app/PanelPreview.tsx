import { useEffect, useState } from 'react'
import EnrichmentPanel from './EnrichmentPanel.tsx'
import type { Enrichment } from '../../data/notes.ts'

const fixtures: Enrichment[] = [
  {
    id: 'e-01',
    noteId: 'n-01',
    type: 'puntos_clave',
    text: 'Octubre se ubicaría en 1,8% mensual, la segunda marca más baja en más de un año.',
    citation: 'Las estimaciones privadas ubican la variación mensual de octubre en 1,8%',
    status: 'aprobada',
  },
  {
    id: 'e-02',
    noteId: 'n-01',
    type: 'pregunta_probable',
    text: '¿Cuándo se publica el dato oficial de octubre?',
    citation: null,
    status: 'pendiente',
  },
  {
    id: 'e-03',
    noteId: 'n-01',
    type: 'dato_oficial',
    text: 'IPC de octubre: 1,8% según relevamientos privados; el dato oficial se publica el 12 de noviembre.',
    citation: 'El dato de 1,8% se repite en distintos relevamientos',
    status: 'pendiente',
  },
  {
    id: 'e-04',
    noteId: 'n-01',
    type: 'puntos_clave',
    text: 'La desaceleración sería de 0,1 puntos respecto de septiembre.',
    citation: null,
    status: 'descartada',
  },
]

export default function PanelPreview() {
  const estado = new URLSearchParams(window.location.search).get('estado')
  const [items, setItems] = useState<Enrichment[]>(
    estado
      ? fixtures.map((item) => ({ ...item, status: estado as Enrichment['status'] }))
      : fixtures,
  )

  const setStatus = (id: string, status: Enrichment['status']) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)))

  const [debug, setDebug] = useState('')

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const doc = document.documentElement
      const wide = [...document.querySelectorAll('*')]
        .map((el) => ({ el, r: el.getBoundingClientRect() }))
        .filter(({ r }) => r.right > doc.clientWidth + 0.5)
        .slice(0, 8)
        .map(
          ({ el, r }) =>
            `${el.tagName}.${el.className?.toString().slice(0, 32)} right=${Math.round(
              r.right,
            )} w=${Math.round(r.width)}`,
        )
      setDebug(
        JSON.stringify({
          innerWidth: window.innerWidth,
          clientWidth: doc.clientWidth,
          scrollWidth: doc.scrollWidth,
          wide,
        }),
      )
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <pre id="debug" hidden>
        {debug}
      </pre>
      <div className="editor__body">
      <div className="editor__canvas">
        <p>
          Luego de que la inflación se ubicara en 1,9% en septiembre, un salto intermensual
          respecto del 1,7% de agosto, la expectativa para octubre está centrada en si podrá
          lograrse una desaceleración.
        </p>
      </div>

      <EnrichmentPanel
        items={items}
        onApprove={(id) => setStatus(id, 'aprobada')}
        onDiscard={(id) => setStatus(id, 'descartada')}
        onRestore={(id) => setStatus(id, 'pendiente')}
      />
      </div>
    </>
  )
}
