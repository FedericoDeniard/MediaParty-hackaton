import { useCallback, useEffect, useRef, useState } from 'react'
import type { EjemploDeNota } from '../../data/graficos-ejemplos.ts'
import type { FilasDeAnalisis } from './pasos.ts'

/* ============================================================
   Análisis simulado con datos reales.

   Mientras el backend no guarde la fila `graficos`, esto reproduce
   cómo llegarían las filas reales (afirmaciones, entidades,
   validación, gráficos) con los datos que arma el verificador. El día
   que el backend las escriba, la UI recibe las mismas filas por
   tiempo real y este gancho se reemplaza por esa suscripción: el
   panel y el recorrido no cambian.
   ============================================================ */

const LLEGADAS_MS = [600, 1500, 2600, 3800]

export function useAnalisisSimulado(ejemplo: EjemploDeNota | undefined) {
  const [filas, setFilas] = useState<FilasDeAnalisis>({})
  const [trabajando, setTrabajando] = useState(false)
  const timers = useRef<number[]>([])

  const limpiar = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer))
    timers.current = []
  }, [])

  useEffect(() => {
    limpiar()
    setFilas({})
    setTrabajando(false)
    return limpiar
  }, [ejemplo, limpiar])

  const analizar = useCallback(() => {
    if (!ejemplo) return
    limpiar()
    setFilas({})
    setTrabajando(true)

    const { claims, entities, timeline, validation } = ejemplo.filas
    const etapas: FilasDeAnalisis[] = [
      { claims },
      { claims, entities, timeline },
      { claims, entities, timeline, validation },
      { claims, entities, timeline, validation, graficos: ejemplo.datos },
    ]
    etapas.forEach((etapa, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setFilas(etapa)
          if (i === etapas.length - 1) setTrabajando(false)
        }, LLEGADAS_MS[i]),
      )
    })
  }, [ejemplo, limpiar])

  return { filas, trabajando, analizar }
}
