# Agent guidance

Repo del hackatón **MediaParty**. El producto es **Nexo**: un portal que procesa noticias, suma gráficos y datos, y exporta el resultado a cada red social.

## Estructura

```
frontend/   Landing de Nexo (React 19 + Vite 8 + TypeScript 7)
backend/    API (vacío)
supabase/   Base de datos local, migraciones y edge functions
docs/       Documentación del proyecto
.agents/    Skills del repo (fuente real)
.claude/    Symlinks a .agents/skills/ para Claude Code
```

## Comandos

Cada subproyecto tiene su propio `package.json` y usa **pnpm**. El lockfile de cada uno se actualiza con `pnpm install` desde su carpeta.

```bash
cd frontend && pnpm install && pnpm run dev        # http://localhost:5173
cd frontend && pnpm run build                      # typecheck + build de producción
cd frontend && pnpm run typecheck                  # solo typecheck
cd supabase && pnpm install && pnpm run start      # stack local de Supabase
```

No hay scripts de lint ni de tests. `pnpm run build` es la verificación disponible del frontend.

## Frontend

- React 19 con Vite. `src/components/` tiene un componente por sección de la landing; `src/data/content.ts` concentra los textos y datos; `src/index.css` contiene los tokens de diseño y todos los estilos.
- El sitio es una landing estática de una sola página: `App.tsx` compone `Header`, `Hero`, `Steps`, `Features`, `Networks`, `CallToAction` y `Footer`.
- `Hero.tsx` tiene un widget de tabs accesible (`role="tablist"`, navegación por flechas, `tabindex` rotatorio). Mantenelo así si lo tocás.
- Agregá dependencias con `pnpm add <pkg>` desde `frontend/`. No edites `pnpm-lock.yaml` a mano.

## Dirección visual: Swiss

El sistema visual es **Swiss / International Typographic Style**. Antes de tocar estilos, leé `.agents/skills/swiss/SKILL.md` y `.agents/skills/swiss/DESIGN.md`.

- Una sola tipografía: **Archivo Variable**, autoalojada vía `@fontsource-variable/archivo/wdth.css` (`wght 100–900`, `wdth 62–125`). Cero requests de fuentes remotas.
- Anchura condensada (`font-stretch: 75%`) solo para display. Texto y UI siempre a `100%`.
- Grilla de 12 columnas en desktop, 8 en tablet, 4 en mobile. La asimetría es la norma: los spans desiguales son el default.
- Hairlines de `1px` separan, `2px` reservado para foco y énfasis funcional.
- Sin sombras, sin gradientes, sin glass, `border-radius: 0`.
- Color plano: fondo hueso `#F2F0EB`, tinta `#171717`, texto secundario `#5B5A55`, hairline `#C9C7C0`, borde de control `#6A6862`.
- El acento de marca **todavía no está definido**. Vive en `--accent` / `--accent-ink`, que hoy resuelven a tinta y hueso. Elegirlo es cambiar esos dos tokens.
- Todo se controla por tokens semánticos en el `:root` de `frontend/src/index.css`. No hardcodees hex en componentes.
- Accesibilidad: WCAG 2.2 AA. Foco visible de `2px`, contraste de texto `>= 4.5:1` y de bordes `>= 3:1`, targets de `44px`, `prefers-reduced-motion` respetado, reflow a `320px`.
- Antes de cerrar trabajo de UI, revisá la página en mobile y desktop, probá el foco por teclado, verificá contraste y corré `pnpm run build`.

## Skills

| Skill | Cuándo usarla |
|---|---|
| `swiss` | Cualquier cambio de UI, layout, tipografía, color o componente del frontend |
| `code-review` | Revisar cambios contra estándares del repo y contra el spec |
| `research` | Investigar un tema contra fuentes de alta confianza |
| `pr` | Escribir el cuerpo de un pull request |
| `handoff` | Dejar el contexto para otra sesión |
| `grill-me` | Cuestionar un plan o diseño antes de implementarlo |

Los skills instalados desde GitHub se registran en `skills-lock.json`. Los hechos a mano (como `swiss`) no van ahí.

## Contenido

- Los textos del frontend están en español rioplatense y viven en `src/data/content.ts`.
- Mantené la voz directa y concreta. Evitá el emoji en la interfaz.
