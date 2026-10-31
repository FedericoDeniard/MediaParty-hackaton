import { useEffect, useRef, useState } from 'react'
import { ETIQUETAS_FASE, type Paso } from './pasos.ts'
import './panel.css'

/* ============================================================
   "Así piensa el motor": los pasos del análisis a medida que llegan.

   Mientras trabaja muestra los pasos y tres puntos que laten; al
   terminar se pliega solo y queda como "Así pensó el motor · N pasos",
   abrible. La animación se apaga con `prefers-reduced-motion`.
   ============================================================ */

const PLIEGUE_MS = 2200

export default function FlujoMotor({ pasos, trabajando }: { pasos: Paso[]; trabajando: boolean }) {
  const [abierto, setAbierto] = useState(true)
  const habiaTrabajado = useRef(trabajando)

  /* Al terminar se pliega solo, una vez, para dejar lugar a los gráficos. */
  useEffect(() => {
    if (trabajando) {
      habiaTrabajado.current = true
      setAbierto(true)
      return
    }
    if (!habiaTrabajado.current) return
    const timer = window.setTimeout(() => setAbierto(false), PLIEGUE_MS)
    return () => window.clearTimeout(timer)
  }, [trabajando])

  if (pasos.length === 0 && !trabajando) return null

  return (
    <details
      className="flujo"
      open={abierto}
      onToggle={(event) => setAbierto((event.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="flujo__resumen">
        {trabajando ? 'Así piensa el motor sobre tu nota…' : `Así pensó el motor · ${pasos.length} pasos`}
      </summary>
      <ol className="flujo__pasos" aria-live="polite">
        {pasos.map((paso, i) => (
          <li key={`${paso.fase}-${i}`} className={`flujo__paso flujo__paso--${paso.fase}`}>
            <span className="flujo__fase">{ETIQUETAS_FASE[paso.fase]}</span>
            <span className="flujo__texto">{paso.texto}</span>
          </li>
        ))}
        {trabajando ? (
          <li className="flujo__pensando" aria-label="El motor está trabajando">
            <i />
            <i />
            <i />
          </li>
        ) : null}
      </ol>
    </details>
  )
}
