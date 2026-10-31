import { ETIQUETAS_FASE, type Paso } from './pasos.ts'
import './panel.css'

/* ============================================================
   "Así piensa el motor": los pasos del análisis a medida que llegan.

   Solo existe mientras el motor trabaja: muestra los pasos y tres
   puntos que laten. Cuando termina, el panel lo quita y deja solo los
   gráficos recomendados. La animación se apaga con
   `prefers-reduced-motion`.
   ============================================================ */

export default function FlujoMotor({ pasos }: { pasos: Paso[] }) {
  return (
    <section className="flujo" aria-label="Así piensa el motor">
      <h3 className="flujo__resumen">Así piensa el motor sobre tu nota…</h3>
      <ol className="flujo__pasos" aria-live="polite">
        {pasos.map((paso, i) => (
          <li key={`${paso.fase}-${i}`} className={`flujo__paso flujo__paso--${paso.fase}`}>
            <span className="flujo__fase">{ETIQUETAS_FASE[paso.fase]}</span>
            <span className="flujo__texto">{paso.texto}</span>
          </li>
        ))}
        <li className="flujo__pensando" aria-label="El motor está trabajando">
          <i />
          <i />
          <i />
        </li>
      </ol>
    </section>
  )
}
