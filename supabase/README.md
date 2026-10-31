# glosa · db

Base de datos local de **glosa** con la [Supabase CLI](https://supabase.com/docs/reference/cli/supabase-cli).

La CLI de Supabase espera que el proyecto viva en una carpeta llamada `supabase/`
dentro de la raíz del repo, así que esta carpeta se llama `supabase/` y no `db/`.
La configuración y los seeds viven acá; las migraciones, seeds adicionales,
tests y functions tienen su propia carpeta.

## Stack

- Supabase CLI 2.122 (instalada como devDependency)

## Comandos

```bash
pnpm install
pnpm run start          # levanta el stack local (Postgres, API, Studio, Storage)
pnpm run stop           # frena el stack
pnpm run status         # muestra URLs y claves del stack local
pnpm run reset          # resetea la DB local y reaplica migraciones + seed
pnpm run diff           # genera una migración a partir del diff con la shadow DB
pnpm run migration:new  # crea una migración nueva (pede el nombre)
pnpm run types:gen      # genera tipos TypeScript desde la DB local
```

El stack local levanta:

- Postgres en `http://127.0.0.1:54322`
- API / REST en `http://127.0.0.1:54321`
- Studio en `http://127.0.0.1:54323`
- Mailpit en `http://127.0.0.1:54324`

## Estructura

```
config.toml        # configuración del proyecto (puertos, auth, seed, etc.)
seed.sql           # datos iniciales, se aplican en cada `db reset`
seeds/             # seeds adicionales (usuario de prueba)
migrations/        # migraciones SQL, una por archivo <timestamp>_<nombre>.sql
tests/             # tests de base en pgTAP
functions/         # edge functions (una carpeta por función)
```

## Migraciones

```bash
pnpm run migration:new -- add_articles_table
# editá el archivo generado en migrations/
pnpm run reset      # aplica las migraciones contra la DB local
```

Los archivos se nombran `<timestamp>_<nombre>.sql` y se aplican en orden
cronológico. `pnpm run diff` genera el archivo comparando la DB local contra
la shadow DB, para no escribir el SQL a mano.

## Auth local

- Email y contraseña, sin usuarios anónimos (`enable_anonymous_sign_ins = false`).
- Confirmación de email desactivada (`enable_confirmations = false`).
- `site_url` apunta a `http://localhost:5173` y los redirects incluyen
  `localhost` y `127.0.0.1` en el puerto de Vite.
- Contraseña mínima: 8 caracteres.

## Seeds

`config.toml` carga `seed.sql` y todos los archivos de `seeds/*.sql` en cada
`db reset`. El seed de desarrollo crea un usuario de prueba ya confirmado:

| Email | Contraseña |
|---|---|
| `user@test.com` | `password123` |

El usuario vive en `seeds/001_test_user.sql` y es idempotente. Para aplicarlo
sin resetear la base alcanza con ejecutarlo contra el Postgres local:

```bash
psql postgresql://postgres:postgres@127.0.0.1:54322/postgres -f seeds/001_test_user.sql
```
