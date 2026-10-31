# Nexo · frontend

Landing de **Nexo**, un portal para procesar noticias, sumar gráficos y datos, y
exportar el resultado a cada red social. Incluye las pantallas de acceso y la
mesa de trabajo con editor de notas.

## Stack

- React 19
- Vite 8
- TypeScript 7
- React Router 7
- Tiptap 3.32.2 (editor de notas)
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
  components/   Landing, Header, Hero, Steps, Features, Networks, CallToAction, Footer, Logo
  components/   AuthPage, AuthForm, AuthField, AuthCheckbox  (pantallas de acceso)
  components/app/  AppShell, Sidebar, NoteList, NoteRow, NoteEditor,
                    EditorToolbar, EnrichmentPanel  (mesa de trabajo)
  data/         content.ts con los textos y datos de la landing
                auth.ts con los textos, campos y reglas de login/registro
                app.ts con el copy de la mesa de trabajo
                notes.ts con el modelo de nota, los labels y las semillas
  lib/          noteStore.ts (store mock sobre localStorage)
                editor/useEditorKit.ts, editor/extensions.ts
  index.css     tokens de diseño + estilos
  App.tsx       rutas de la app
  main.tsx      entry point; importa la fuente, el CSS y monta el router
```

## Pantallas de acceso

`/login` y `/registro` son rutas de la misma app y comparten `AuthPage.tsx`: el
`mode` (`login` | `register`) elige el copy de `src/data/auth.ts`.

La composición es de dos columnas: la editorial (70%) con el titular en escala
póster y un cuadrado de acento rotado que lo cruza, y la mesa de trabajo (30%)
con el formulario. Las pestañas "Ingresar" y "Crear cuenta" son links a las dos
rutas.

El diseño está completo; la lógica de autenticación todavía no. El submit entra
directo a la mesa de trabajo y `TODO(auth)` en `AuthForm.tsx` marca dónde entra
la llamada real a Supabase Auth.

Lo que sí es real es el feedback en vivo del formulario: los requisitos de
contraseña no son una lista, son una línea que va bajando de a un requisito
mientras el usuario escribe, y el campo de confirmación avisa cuando las
contraseñas no coinciden.

## Mesa de trabajo

`/app` es el área de trabajo: sidebar con la navegación, lista de notas y
editor.

- `/app/notas` — lista de notas en filas de datos.
- `/app/notas/:id` — editor de la nota.
- `/app/publicadas` — notas ya publicadas.

El editor es headless: cada nodo y cada marca se estiliza desde `index.css`
con los tokens del sistema, así que el documento se ve como el resto del
producto y no como un editor pegado adentro. Guarda sólo el JSON de Tiptap y
deriva el texto plano cuando hace falta.

Al aprobar una pieza de enriquecimiento, el pasaje que la respalda se resalta
en el cuerpo con el verde de datos. El resaltado es una decoración: el texto no
cambia y se sigue pudiendo verificar contra la nota.

Los datos salen de un store mock sobre `localStorage`, así que la mesa de
trabajo anda sin backend. Los textos de `src/data/notes.ts` salen del corpus
de pruebas (`../corpus/notas/`).

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

El acento de marca es el arena `#E6DFD1` (`--accent`) con tinta encima
(`--accent-ink`). Va en los planos de relleno: botones, tab activo y el
cuadrado de las pantallas de acceso. Los gráficos mantienen su verde propio
(`--chart`, `#C7DE58`), que es un color de datos y no el acento. Para
cambiar el acento alcanza con modificar esos dos tokens.

Las reglas completas y el checklist de QA están en
`../.agents/skills/swiss/SKILL.md` y `../.agents/skills/swiss/DESIGN.md`.
