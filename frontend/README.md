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
  components/   Landing, Header, Hero, Steps, Features, Networks, CallToAction, Footer, Logo
  components/   AuthPage, AuthForm, AuthField, AuthCheckbox  (pantallas de acceso)
  data/         content.ts con los textos y datos de la landing
                auth.ts con los textos, campos y reglas de login/registro
  index.css     tokens de diseño + estilos
  App.tsx       rutas de la app
  main.tsx      entry point; importa la fuente, el CSS y monta el router
```

## Pantallas de acceso

`/login` y `/registro` son rutas de la misma app y comparten `AuthPage.tsx`: el
`mode` (`login` | `register`) elige el copy de `src/data/auth.ts`.

El diseño está completo; la lógica de autenticación todavía no. El submit no
manda nada y `TODO(auth)` en `AuthForm.tsx` marca dónde entra la llamada real a
Supabase Auth.

Lo que sí es real es el feedback en vivo del formulario: los requisitos de
contraseña no son una lista, son una línea que va bajando de a un requisito
mientras el usuario escribe, y el campo de confirmación avisa cuando las
contraseñas no coinciden.

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
