# Nexo · frontend

Landing de **Nexo**, un portal para procesar noticias, sumar gráficos y datos, y
exportar el resultado a cada red social.

## Stack

- React 19
- Vite 8
- TypeScript 7
- Archivo Variable (autoalojada con `@fontsource-variable/archivo`)

## Comandos

```bash
pnpm install
pnpm run dev        # servidor de desarrollo en http://localhost:5173
pnpm run build      # typecheck + build de producción en dist/
pnpm run preview    # sirve el build de producción
pnpm run typecheck  # solo typecheck
```

## Estructura

```
src/
  components/   Header, Hero, Steps, Features, Networks, CallToAction, Footer, Logo
  data/         content.ts con los textos y datos de la landing
  index.css     tokens de diseño + estilos
  App.tsx       composición de la página
  main.tsx      entry point; importa la fuente y el CSS
```

## Estilos

El sistema visual es **Swiss / International Typographic Style**: una sola
grotesca variable, grilla de 12 columnas, filetes de 1px, color plano y sin
radios.

El principio que gobierna todo: **la grilla alinea, no encuadra**. Ningún
bloque de contenido lleva marco; las líneas dividen zonas o datos
(tablas, baselines de gráficos, tab activo, bordes de control), nunca
celdas.

Todo el sistema vive en los custom properties del bloque `:root` de
`src/index.css`. Cambiar `--bone`, `--ink`, `--rule`, `--accent` o
`--font-stretch-condensed` reestiliza la página completa sin tocar componentes.

Hay tres superficies, y no cambian entre páginas:

| Token | Uso |
|---|---|
| `--bg` | Fondo de la app. Es el tono de las secciones de contenido principal ("01 — Flujo de trabajo"). |
| `--surface-contrast` | Tono de contraste para bandas alternas, sidebars y paneles laterales ("02 — Producto"). |
| `--surface-inverse` | Banda invertida, reservada para el CTA de cierre. |

El acento de marca todavía no está definido: `--accent` y `--accent-ink`
resuelven a tinta y hueso, así que el sitio funciona completo en monocromo.
Cuando se elija el color, alcanza con cambiar esos dos tokens.

Las reglas completas y el checklist de QA están en
`../.agents/skills/swiss/SKILL.md` y `../.agents/skills/swiss/DESIGN.md`.
