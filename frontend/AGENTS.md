# Agent guidance · frontend

Landing de **Nexo**: procesa una noticia, le suma gráficos y datos, y la exporta lista para cada red social. También tiene las pantallas de acceso (`/login` y `/registro`) y la **mesa de trabajo** (`/app`): sidebar, lista de notas y editor rich text.

## Stack

- React 19
- Vite 8
- TypeScript 7 (strict, `noUnusedLocals`, `verbatimModuleSyntax`, `erasableSyntaxOnly`)
- React Router 7 (`react-router-dom`), rutas `/`, `/login`, `/registro` y `/app/*`
- Tiptap 3.32.2 (`@tiptap/*`) para el editor de notas. Versiones **exactas**: los peers exigen la misma versión en todo el árbol.
- `lucide-react` para los iconos (`strokeWidth={1.5}`, `currentColor`, 24 viewBox)
- `@supabase/supabase-js` 2.118.0 para la auth (email y contraseña, sin anónimos)
- CSS plano con custom properties. Sin framework de estilos, sin CSS-in-JS, sin Tailwind.

## Comandos

```bash
pnpm install
pnpm run dev        # servidor de desarrollo en http://localhost:5173
pnpm run build      # typecheck + build de producción en dist/
pnpm run preview    # sirve el build de producción
pnpm run typecheck  # solo typecheck
cd ../supabase && pnpm run start   # stack local de Supabase (auth)
```

No hay lint ni tests. `pnpm run build` es la verificación.

## Estructura

```
src/
  components/   Landing, Header, Hero, Steps, Features, Networks, CallToAction, Footer, Logo
  components/   AuthPage, AuthForm, AuthField, AuthCheckbox  (pantallas de acceso)
  components/   AuthProvider, RequireSession  (sesión de Supabase y guard)
  components/app/  AppShell, Sidebar, NoteList, NoteRow, NoteEditor,
                    EditorToolbar, EnrichmentPanel  (mesa de trabajo)
  data/         content.ts con los textos y datos de la landing
                auth.ts con los textos, campos y reglas de login/registro
                app.ts con el copy de la mesa de trabajo
                notes.ts con el modelo de nota, los labels y las semillas
  lib/          supabase.ts (cliente)
                noteStore.ts (store mock sobre localStorage)
                editor/useEditorKit.ts, editor/extensions.ts
  index.css     tokens de diseño + estilos
  App.tsx       rutas de la app
  main.tsx      entry point; importa la fuente, el CSS y monta el router
public/
  favicon.svg
```

`dist/`, `node_modules/` y `*.tsbuildinfo` son generados e ignorados.

## Mesa de trabajo · `/app`

Es el área autenticada. La landing en `/` no se toca.

| Ruta | Pantalla |
|---|---|
| `/app/notas` | Lista de notas en filas de datos |
| `/app/notas/nueva` | Crea la nota y redirige a su editor |
| `/app/notas/:id` | Editor de la nota |
| `/app/publicadas` | Lista filtrada por `status = 'published'` |

- **El sidebar es un campo sólido de `--surface-contrast`** separado del contenido por un filete. Marca, acción primaria, navegación, declaración editorial y sesión son áreas de una grilla de cinco: en mobile pasa a una banda de tres filas y se ocultan lema, declaración, ayuda y conteos.
- **La navegación marca el estado activo con el acento de marca** (`--accent`) y tinta encima, más peso y color de la etiqueta: el color no es el único indicador. La acción primaria es una fila más, no un botón relleno, y los conteos van en numerales tabulares.
- **Las notas son filas de datos**, no cards: nombre a la izquierda, valor a la derecha, filete entre filas, numerales tabulares.
- **El editor es el cuerpo de la nota**, no una caja: el texto va sobre `--bg` y la toolbar se apoya con un filete.
- **El panel de enriquecimientos** es `--surface-contrast`, como el `.panel` que ya existía.
- Los estados de la toolbar se marcan con **plano de tinta**, no con el verde: el acento queda para los datos del documento y nunca es el único indicador de un estado.

### El editor

Tiptap v3, headless: no trae styles propios, cada nodo se estiliza desde `index.css` con los tokens.

- `doc` (JSON de Tiptap) es la **única fuente de verdad**. El texto plano nunca se guarda: se deriva con `getText`, que corta por línea en blanco como espera la ingestión del pipeline.
- **Autosave con debounce de 800ms.** El estado ("Guardando…" / "Guardado 15:04") es texto en la barra, no un toast.
- El título es un `<input>` aparte; el `h1` oculto lleva el texto para la navegación por encabezados.
- **Al aprobar una pieza, su pasaje se resalta en el cuerpo** con el verde de datos (`--chart`, 11.97:1 con la tinta encima). Es una decoración de ProseMirror (`Pasaje` en `lib/editor/extensions.ts`): el texto no cambia, se sigue pudiendo verificar.
- Al cambiar de nota en la misma ruta, el editor **se recarga**: `useEditor` sólo lee `content` al crearse, así que `useEditorKit` lo resincroniza por `contentKey`.
- Atajos de teclado: Tiptap ya trae `Mod-b/i/u`, `Mod-Shift-s`, `Mod-Shift-7/8/9` y `Mod-z/y`. `Atajos` suma `Mod-k` (enlace), `Mod-Alt-1/2/3` (títulos) y `Mod-Shift-0` (párrafo).

### Datos

`lib/noteStore.ts` es un store **mock** sobre `localStorage`: las notas y las piezas sobreviven al refresh y la app anda sin backend. La interfaz es angosta a propósito (`listNotes` / `getNote` / `createNote` / `updateNote` / `listEnrichments` / `setEnrichmentStatus`); cuando llegue Supabase se cambia la implementación, no las pantallas.

Las semillas salen de `corpus/notas/` (19 notas reales de la semana del 24 al 31 de octubre de 2026, usadas sólo para pruebas).

### Autenticación

Supabase Auth con email y contraseña, sin usuarios anónimos. `AuthProvider.tsx` mantiene la sesión con `onAuthStateChange`; `RequireSession.tsx` protege `/app/*` y redirige a `/login` guardando el destino en `location.state`. Si ya hay sesión, `/login` y `/registro` redirigen a `/app/notas`.

- La confirmación de email está desactivada en local: la cuenta queda activa al crearse.
- El nombre del registro va en `user_metadata` y se usa sólo para mostrar. Nunca para autorización.
- El cliente vive en `lib/supabase.ts` y usa únicamente la publishable key. Nunca `service_role`.
- Env: `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY` en `.env`; los valores locales están en `.env.example`.
- Usuario de prueba: `user@test.com` / `password123`, en `../supabase/seeds/001_test_user.sql`.

## Pantallas de acceso

`/login` y `/registro` comparten `AuthPage.tsx` y se diferencian por el `mode`
(`login` | `register`), con el copy en `src/data/auth.ts`.

- Dos columnas: la editorial (70%) con el titular en escala póster y un cuadrado de acento rotado por detrás, y la mesa de trabajo (30%) con el formulario.
- El plano de acento (`--accent`) va **por debajo** del texto: nunca lo tapa. Es el único plano de color de la pantalla.
- Los campos son controles reales: llevan filete inferior de 1px, no un marco.
- Los requisitos de contraseña **no** son una lista: es una línea que va bajando de a un requisito mientras el usuario escribe (`field__rule`). El estado en vivo vive en `AuthField.tsx` y las reglas en `authRuleTests`.
- El submit llama a Supabase Auth: `signInWithPassword` en login y `signUp` en registro. Muestra carga en el botón y errores mapeados en `authErrorMessages`.

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
- **Un solo plano de acento por viewport.** El acento de marca es el arena `#D8C7A9` (`--accent`) con tinta encima (`--accent-ink`). Sólo como plano de relleno, nunca como texto. Los gráficos van con su verde de datos (`--chart`), que es independiente. Para cambiarlo, tocá esos dos tokens y verificá el contraste de lo que va encima.
- **Tres superficies, fijas entre páginas:** `--bg` es el fondo de la app (el tono de "01 — Flujo de trabajo"); `--surface-contrast` es el tono de contraste (el de "02 — Producto"), para bandas alternas, sidebars y paneles laterales; `--surface-inverse` es la banda invertida, reservada al CTA de cierre. No sumes un segundo tono de fondo: separá con espacio y reglas. Para un sidebar, `.layout` y `.panel` ya están implementados en `src/index.css`.
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
6. En el editor, no guardes el texto plano: `doc` es la fuente de verdad.
