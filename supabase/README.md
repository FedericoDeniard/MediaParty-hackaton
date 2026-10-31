# Nexo · db

Base de datos local de **Nexo** con la [Supabase CLI](https://supabase.com/docs/reference/cli/supabase-cli).

La CLI de Supabase espera que el proyecto viva en una carpeta llamada `supabase/`
dentro de la raíz del repo, así que esta carpeta se llama `supabase/` y no `db/`.
Los archivos del proyecto (config, migraciones, seed) están en la raíz de esta
carpeta, sin subcarpetas anidadas.

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
