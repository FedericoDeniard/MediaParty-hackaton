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
grotesca variable, grilla de 12 columnas, hairlines de 1px, color plano y sin
radios.

Todo el sistema vive en los custom properties del bloque `:root` de
`src/index.css`. Cambiar `--bone`, `--ink`, `--rule`, `--accent` o
`--font-stretch-condensed` reestiliza la página completa sin tocar componentes.

El acento de marca todavía no está definido: `--accent` y `--accent-ink`
resuelven a tinta y hueso, así que el sitio funciona completo en monocromo.
Cuando se elija el color, alcanza con cambiar esos dos tokens.

Las reglas completas y el checklist de QA están en
`../.agents/skills/swiss/SKILL.md` y `../.agents/skills/swiss/DESIGN.md`.
