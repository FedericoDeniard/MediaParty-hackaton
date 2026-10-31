# glosa · frontend

Landing de **glosa**, el asistente que analiza una nota periodística, detecta
cifras y fuentes verificables, y propone datos oficiales, gráficos y contexto.
Cada sugerencia se ancla al pasaje que la origina y la autora decide si entra.
Incluye las pantallas de acceso y la mesa de trabajo con editor de notas.

## Stack

- React 19
- Vite 8
- TypeScript 7
- React Router 7
- Supabase Auth (`@supabase/supabase-js`, email y contraseña)
- Tiptap 3.32.2 (editor de notas)
- boring-avatars (avatar generado del usuario)
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
  components/   Landing, Header, Hero, Steps, Features, Verification, CallToAction, Footer, Logo
  components/   AuthPage, AuthForm, AuthField, AuthCheckbox  (pantallas de acceso)
  components/   AuthProvider, RequireSession  (sesión de Supabase y guard)
  components/app/  AppShell, Sidebar, UserAvatar, NoteList, NoteRow, NoteEditor,
                    EditorToolbar, EnrichmentPanel  (mesa de trabajo)
  data/         content.ts con los textos y datos de la landing
                auth.ts con los textos, campos, reglas y errores de login/registro
                app.ts con el copy de la mesa de trabajo
                notes.ts con el modelo de nota, los labels y las semillas
  lib/          supabase.ts (cliente)
                noteStore.ts (store mock sobre localStorage)
                editor/useEditorKit.ts, editor/extensions.ts
  index.css     tokens de diseño + estilos
  App.tsx       rutas de la app
  main.tsx      entry point; importa la fuente, el CSS y monta el router
```

## Landing

`/` presenta el producto en cinco bloques: hero con una demo interactiva de
sugerencias (dato oficial, gráfico y contexto, con estado verificado o no
disponible y decisión de incorporar o descartar), pasos del flujo, producto,
verificación y cierre.

Los textos y el contenido de la demo viven en `src/data/content.ts`. El widget
del hero conserva el patrón de tabs accesible: `role="tablist"`, navegación con
flechas y `tabindex` rotatorio.

## Pantallas de acceso

`/login` y `/registro` son rutas de la misma app y comparten `AuthPage.tsx`: el
`mode` (`login` | `register`) elige el copy de `src/data/auth.ts`.

La composición es de dos columnas: la editorial (70%) con el titular en escala
póster y un cuadrado de acento rotado que lo cruza, y la mesa de trabajo (30%)
con el formulario. Las pestañas "Ingresar" y "Crear cuenta" son links a las dos
rutas.

El formulario llama a Supabase Auth: `signInWithPassword` en login y `signUp`
en registro. Muestra el estado de carga en el botón y traduce los errores de
Supabase a copy en `authErrorMessages`. Los requisitos de contraseña no son una
lista: son una línea que va bajando de a un requisito mientras el usuario
escribe, y el campo de confirmación avisa cuando las contraseñas no coinciden.

## Autenticación

Supabase Auth con email y contraseña. No hay usuarios anónimos:
`enable_anonymous_sign_ins = false` en `../supabase/config.toml` y el provider
rechaza cualquier sesión con `is_anonymous`.

- `AuthProvider` restaura la sesión con `onAuthStateChange` y expone
  `{ status, user, signOut }`. La sesión se persiste en `localStorage` (SPA sin
  SSR).
- `RequireSession` protege `/app/*`: sin sesión redirige a `/login` y guarda el
  destino en `location.state`. Si ya hay sesión, `/login` y `/registro`
  redirigen a `/app/notas`.
- En el registro, el nombre va en `user_metadata` y se usa sólo para mostrar.
  Nunca para autorización.
- La confirmación de email está desactivada en local: la cuenta queda activa al
  crearse.
- El cliente vive en `src/lib/supabase.ts` y usa únicamente la publishable key.
  Nunca `service_role`.
- El guard es de UX: la barrera real de los datos será RLS cuando las notas
  pasen de `localStorage` a Postgres.
- En un proyecto hosted, activá la confirmación de email y configurá SMTP. En
  local queda desactivada para no depender de Mailpit en cada registro.

Las variables van en `.env` (los valores locales no son secretos):

```bash
VITE_SUPABASE_URL=http://127.0.0.1:54321
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

Para probar, levantá el stack local (`cd ../supabase && pnpm run start`) y usá
el usuario de prueba `user@test.com` / `password123`.

## Mesa de trabajo

`/app` es el área de trabajo: sidebar con la navegación, lista de notas y
editor.

- `/app/borradores` — notas sin publicar: borradores y en revisión.
- `/app/notas/:id` — editor de la nota.
- `/app/publicados` — notas ya publicadas.

Cada lista se puede buscar por nombre, filtrar por temática y ordenar por fecha.
La temática es un dominio cerrado y se edita desde la barra del editor. La lista
pagina de a 5 notas por página.

Los datos de las notas salen de un store mock sobre `localStorage`, así que la
mesa de trabajo anda sin backend una vez que hay sesión; el acceso necesita el
stack local de Supabase. Los textos de `src/data/notes.ts` salen del corpus de
pruebas (`../corpus/notas/`). Una nota nueva no se persiste hasta que se escribe
el título o el cuerpo.

El pie del sidebar muestra la sesión con un avatar generado por
`boring-avatars` a partir del nombre (o del correo): variante `beam`,
cuadrada, con la paleta de la app (verde, arena, hueso y gris cálido). Es
decorativo; el nombre y el correo son la identidad real.

El editor es headless: cada nodo y cada marca se estiliza desde `index.css`
con los tokens del sistema, así que el documento se ve como el resto del
producto y no como un editor pegado adentro. Guarda sólo el JSON de Tiptap y
deriva el texto plano cuando hace falta.

Al aprobar una pieza de enriquecimiento, el pasaje que la respalda se resalta
en el cuerpo con el verde de datos. El resaltado es una decoración: el texto no
cambia y se sigue pudiendo verificar contra la nota.

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

El acento de marca es el arena `#D8C7A9` (`--accent`) con tinta encima
(`--accent-ink`). Va en los planos de relleno: botones, tab activo y el
cuadrado de las pantallas de acceso. Los gráficos mantienen su verde propio
(`--chart`, `#C7DE58`), que es un color de datos y no el acento. Para
cambiar el acento alcanza con modificar esos dos tokens.

Las reglas completas y el checklist de QA están en
`../.agents/skills/swiss/SKILL.md` y `../.agents/skills/swiss/DESIGN.md`.
