# Agent guidance

Repo del hackatón **MediaParty**. El producto es **glosa**: un asistente para periodistas que analiza una nota, detecta cifras y fuentes verificables, y propone datos oficiales, gráficos y contexto. Cada sugerencia se ancla a un pasaje y la persona decide qué entra; nada se publica automáticamente.

## Estructura

```
frontend/   Landing de glosa (React 19 + Vite 8 + TypeScript 7)
backend/    API (vacío)
supabase/   Base de datos local, migraciones, seeds y edge functions
docs/       Documentación del proyecto
.agents/    Skills del repo (fuente real)
.claude/    Symlinks a .agents/skills/ para Claude Code
```

## Comandos

Para desarrollo local alcanza con `just` (ver `justfile`): `just dev` levanta Supabase, el backend y el frontend; `just test` corre las pruebas; `just note 01` manda una nota del corpus al pipeline.

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
- El sitio tiene tres partes: la landing en `/` (una sola página: `App.tsx` compone `Header`, `Hero`, `Steps`, `Features`, `Verification`, `CallToAction` y `Footer`), el acceso en `/login` y `/registro`, y la **mesa de trabajo** en `/app` (sidebar, lista de notas y editor).
- `Hero.tsx` tiene un widget de tabs accesible (`role="tablist"`, navegación por flechas, `tabindex` rotatorio). Mantenelo así si lo tocás.
- El editor de notas usa **Tiptap 3.32.2** con versiones exactas: los peers exigen la misma versión en todo el árbol. Guardá sólo el JSON de Tiptap; el texto plano se deriva.
- El avatar del usuario en el sidebar se genera con **boring-avatars** a partir del nombre: variante `beam`, cuadrada y con la paleta de la app (verde, arena, hueso y gris cálido). Es decorativo; el nombre y el correo son la identidad real.
- La capa de datos del frontend es un **store mock** sobre `localStorage` (`src/lib/noteStore.ts`). La auth ya corre contra Supabase Auth local: email y contraseña, sin usuarios anónimos, con guard sobre `/app/*`.
- Agregá dependencias con `pnpm add <pkg>` desde `frontend/`. No edites `pnpm-lock.yaml` a mano.

## Dirección visual: Swiss

El sistema visual es **Swiss / International Typographic Style**. Antes de tocar estilos, leé `.agents/skills/swiss/SKILL.md` y `.agents/skills/swiss/DESIGN.md`.

- Una sola tipografía: **Archivo Variable**, autoalojada vía `@fontsource-variable/archivo/wdth.css` (`wght 100–900`, `wdth 62–125`). Cero requests de fuentes remotas.
- Anchura condensada (`font-stretch: 75%`) solo para display. Texto y UI siempre a `100%`.
- Grilla de 12 columnas en desktop, 8 en tablet, 4 en mobile. La asimetría es la norma: los spans desiguales son el default.
- **La grilla alinea, no encuadra.** Una grilla de celdas iguales con borde propio es bento grid, no Swiss. Ningún bloque de contenido lleva marco.
- Las reglas dividen zonas o datos, no bloques: filetes de tabla, baselines de gráficos, estados activos y bordes de control. `1px` para filetes, `2px` para foco y énfasis funcional.
- Sin sombras, sin gradientes, sin glass, `border-radius: 0`.
- Color plano: fondo hueso `#F2F0EB`, tinta `#171717`, texto secundario `#5B5A55`, hairline `#C9C7C0`, borde de control `#6A6862`.
- **Tres superficies y no cambian entre páginas:** `--bg` (fondo de la app, el tono de la sección "01 — Flujo de trabajo"), `--surface-contrast` (tono de contraste, el de la sección "02 — Producto": bandas alternas, sidebars, paneles laterales) y `--surface-inverse` (banda invertida, sólo el CTA de cierre). No inventes un segundo tono de fondo: para separar más usá espacio y reglas.
- Un solo plano de acento por viewport. El acento de marca es el arena `#D8C7A9` (`--accent`), con tinta encima (`--accent-ink`). Va en los planos de relleno —botones, tab activo, el cuadrado del acceso— y nunca como texto. Los gráficos mantienen su verde propio (`--chart`, `#C7DE58`): es un color de datos, no el acento.
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
| `supabase` | Cualquier tarea que toque Supabase: auth, RLS, edge functions, realtime, storage, CLI, migraciones |
| `supabase-postgres-best-practices` | Antes de escribir o cambiar algo en Postgres: esquema, tipos, índices, RLS, locks, performance |
| `db-modeling` | Modelar el schema de glosa: derivar entidades, 1NF/2NF/3NF, decidir qué va en jsonb |

Los skills instalados desde GitHub se registran en `skills-lock.json`. Los hechos a mano (como `swiss`) no van ahí.

## Contenido

- Los textos del frontend están en español rioplatense y viven en `src/data/content.ts` (landing), `auth.ts` (acceso), `app.ts` y `notes.ts` (mesa de trabajo).
- Mantené la voz directa y concreta. Evitá el emoji en la interfaz.
