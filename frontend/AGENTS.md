# Agent guidance · frontend

Landing de **Nexo**: procesa una noticia, le suma gráficos y datos, y la exporta lista para cada red social.

## Stack

- React 19
- Vite 8
- TypeScript 7 (strict, `noUnusedLocals`, `verbatimModuleSyntax`)
- CSS plano con custom properties. Sin framework de estilos, sin CSS-in-JS, sin Tailwind.

## Comandos

```bash
pnpm install
pnpm run dev        # servidor de desarrollo en http://localhost:5173
pnpm run build      # typecheck + build de producción en dist/
pnpm run preview    # sirve el build de producción
pnpm run typecheck  # solo typecheck
```

No hay lint ni tests. `pnpm run build` es la verificación.

## Estructura

```
src/
  components/   Header, Hero, Steps, Features, Networks, CallToAction, Footer, Logo
  data/         content.ts con los textos y datos de la landing
  index.css     tokens de diseño + estilos
  App.tsx       composición de la página
  main.tsx      entry point; importa la fuente y el CSS
public/
  favicon.svg
```

`dist/`, `node_modules/` y `*.tsbuildinfo` son generados e ignorados.

## Dirección visual: Swiss

El sistema es **Swiss / International Typographic Style**. `.agents/skills/swiss/SKILL.md` es la autoridad y `.agents/skills/swiss/DESIGN.md` tiene los valores de token; el research con fuentes está en `docs/design/swiss-style-research.md`.

Reglas que más se incumplen:

- **Todo pasa por tokens.** El `:root` de `src/index.css` define color, tipografía, espaciado, grilla, formas y movimiento. Un hex suelto en un componente es un bug.
- **Una sola familia.** Archivo Variable (`wght 100–900`, `wdth 62–125`), autoalojada con `@fontsource-variable/archivo/wdth.css`. No agregues otra fuente ni pidas nada a Google en runtime.
- **Condensado solo para display.** `font-stretch: 75%` con `font-weight` 700–850 en titulares grandes. Navegación, labels y body a `100%` y `400`–`600`.
- **Sin sombras, sin radius, sin gradientes.** `--radius: 0` y `--shadow: none`.
- **Ningún bloque de contenido lleva marco.** Sin cards, sin celdas con borde, sin chips delineados, sin badges enmarcados. Una etiqueta es tipografía, no un objeto.
- **La grilla alinea, no encuadra.** Nada de grillas de celdas iguales con borde: eso es bento grid. Usá spans desiguales, escalonamiento vertical y espacio.
- **Las reglas dividen zonas o datos.** Filetes de tabla, baselines de gráficos, tab activo, bordes de control. `1px` para filetes, `2px` para foco y énfasis funcional.
- **Un solo plano de acento por viewport.** Acento pendiente: `--accent` y `--accent-ink` resuelven a tinta/hueso hasta que se defina el color de marca. Cuando se defina, cambiá esos dos tokens y verificá el contraste del texto encima.
- **Motion mínimo.** `120ms` para feedback, `180ms` estándar, easing `cubic-bezier(0.2, 0, 0, 1)`. Se anima estado y opacidad, no la lectura.

## Accesibilidad

WCAG 2.2 AA como piso.

- Texto `>= 4.5:1`, texto grande y bordes de control `>= 3:1`. Nunca uses el hairline tenue como único indicador de un control.
- Foco visible de `2px` con offset, verificado tanto sobre fondo claro como sobre la banda invertida.
- Todo control operable por teclado, con estados default, hover, focus-visible, active y disabled.
- El widget de tabs de `Hero.tsx` debe conservar `role="tablist"`, `aria-selected`, `aria-controls`, `tabindex` rotatorio y la navegación con flechas.
- Respetá `prefers-reduced-motion: reduce` y mantené sólo el feedback necesario.
- Probá reflow a `320px` y zoom de texto al `200%`.

## Cómo trabajar acá

1. Leé `.agents/skills/swiss/SKILL.md` antes de escribir estilos.
2. Decidí grilla y jerarquía primero; el color es lo último.
3. Verificá los estados de interacción, no sólo el estado en reposo.
4. Corré `pnpm run typecheck` y `pnpm run build` antes de dar por terminada una tarea.
5. Revisá la página en `320`, `768` y `1440` px.
