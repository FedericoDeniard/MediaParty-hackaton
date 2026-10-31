---
name: db-modeling
description: Modelar el schema de Nexo en Postgres/Supabase — derivar entidades, aplicar 1NF/2NF/3NF y decidir qué va en jsonb. Usar al crear o modificar migraciones, al revisar el schema, o cuando haya que decidir si algo es tabla, columna o jsonb.
---

# Modelado de base de datos (Nexo)

El schema de Nexo es chico: notas, párrafos, fichas, enriquecimientos. La tentación con un
modelo así es modelar de más — partir todo en tablas, inventar joins, duplicar datos que
ya están en un `jsonb`. Esta skill es el criterio para no hacerlo, y para hacerlo bien
cuando sí hace falta partir.

Las reglas de performance, tipos, índices y RLS ya están cubiertas por
`supabase-postgres-best-practices`. Acá va sólo lo que ese skill no cubre: **cómo se
modela**.

## Principio: derivar la entidad, no inventar la tabla

Antes de crear una tabla, derivar de los requisitos qué **hechos** existen y dónde vive
cada uno. Cada hecho vive en un solo lugar. Dos Copies del mismo hecho es una anomalía de
actualización esperando.

En Nexo el flujo es: nota → párrafos → ficha (el modelo la arma) → enriquecimientos (el
código los arma) → aprobación. Cada paso tiene su tabla o su documento.

## Las 4 formas normales, aplicadas acá

### 1NF — valores atómicos, sin grupos repetidos

Una columna guarda **un** valor. Si el valor es una lista, va en tabla hija.

```sql
-- MAL: la lista de tags es un string
create table notas (id uuid primary key, titulo text not null, tags text);
-- BIEN: tags es una tabla con su FK
create table notas_tags (nota_id uuid references notas(id) on delete cascade, tag text not null);
```

**En Nexo no aplica.** No hay tags, no hay categorías, no hay M:N con lista. El único
arreglo de valores que existe son los `items` de un enriquecimiento de tipo
`puntos_clave`, y eso vive dentro de `contenido` jsonb — es un documento con forma
definida por el tipo de enriquecimiento, no una lista en una columna.

**Verificar (columnas suspicious de lista en un `text`):**

```sql
select c.relname as tabla, a.attname as columna
from pg_attribute a
join pg_class c on c.oid = a.attrelid
join pg_namespace n on n.oid = c.relnamespace
join pg_type t on t.oid = a.atttypid
where n.nspname = 'public'
  and a.attnum > 0 and not a.attisdropped
  and t.typname in ('text', 'varchar')
  and a.attname ~ '(tags|ids|categories|roles|emails|skus|list|values|items)$'
order by 1, 2;
```

Si aparece algo, ese nombre está mintiendo: es un grupo repetido disfrazado de texto.

### 2NF — sin dependencia parcial

Cada columna no-clave depende de la clave **completa**. Sólo importa cuando la PK es
compuesta.

En Nexo las PK son de una columna (`id uuid`) salvo `fichas` (PK = `nota_id`). Con PK de
una columna, la dependencia parcial no puede ocurrir: la única clave candidata es la PK
entera. **2NF no aplica** y no hay nada que verificar.

Si alguna vez una tabla crece con PK compuesta, revisá que ninguna columna no-clave
dependa de sólo una parte:

```sql
-- candidato a dependencia parcial: columnas no-PK que coinciden con el nombre de otra tabla
select c.relname as tabla, a.attname as columna_sospechosa
from pg_attribute a
join pg_class c on c.oid = a.attrelid
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and a.attnum > 0 and not a.attisdropped and not a.attname ~ '_id$'
  and exists (
    select 1 from pg_class c2
    join pg_namespace n2 on n2.oid = c2.relnamespace
    where n2.nspname = 'public' and c2.relname = a.attname || 's'
  )
order by 1, 2;
```

### 3NF — sin dependencia transitiva

Una columna no-clave no puede depender de otra columna no-clave.

```sql
-- MAL: articles.author_name depende de articles.author_id, no de articles
create table articles (
  id uuid primary key,
  author_id uuid not null references authors(id),
  author_name text  -- transitiva: depende de author_id
);

-- BIEN: el nombre vive en authors
create table articles (
  id uuid primary key,
  author_id uuid not null references authors(id)
);
```

**En Nexo esto importa en un solo lugar, y es el más importante.** La ficha tiene
`hechos`, `cifras`, `citas_textuales` y `actores`, y los enriquecimientos referencian
esos ítems por id (`usa: ["h1", "c2"]`). El `cifra_id` del `dato_oficial` apunta a una
cifra de la ficha.

La tentación es duplicar: guardar `autor_nombre` junto a `autor_id`, o copiar el
`enunciado` de un hecho al enriquecimiento que lo usa. **No.** El texto se busca por id
contra la ficha. Duplicarlo rompe en dos el mismo hecho y garantiza que se desincronicen.

**Verificar (dependencia transitiva por datos, la query que de verdad importa):**

```sql
-- si cada autor_id tiene siempre el mismo nombre, author_name es redundante
select autor_id, count(distinct autor_nombre) as distintos_nombres
from articulos
group by autor_id
having count(distinct autor_nombre) = 1;
```

Si devuelve filas, la columna redundante es alcanzable desde otra tabla y debería
borrarse.

> La tabla y las columnas del ejemplo son ilustrativas: `articulos` no existe en Nexo.
> Para correrla contra el schema real, cambiá los nombres. La query en sí funciona
> contra cualquier tabla — es `count(distinct)` agrupado, sin dependencias del motor.

**Verificar (referencias huérfanas dentro de jsonb):** como `usa` apunta a ids que viven
dentro de `fichas.contenido`, no hay FK que las proteja. Hay que chequearlas a mano:

```sql
with ids as (
  select f.nota_id, h->>'id' as id
  from fichas f, jsonb_array_elements(coalesce(f.contenido->'hechos','[]'::jsonb)) h
  union
  select f.nota_id, c->>'id' from fichas f, jsonb_array_elements(coalesce(f.contenido->'cifras','[]'::jsonb)) c
  union
  select f.nota_id, c->>'id' from fichas f, jsonb_array_elements(coalesce(f.contenido->'citas_textuales','[]'::jsonb)) c
  union
  select f.nota_id, a->>'id' from fichas f, jsonb_array_elements(coalesce(f.contenido->'actores','[]'::jsonb)) a
)
select e.id as enriquecimiento_id, u as id_huerfano
from enriquecimientos e
join fichas f on f.nota_id = e.nota_id
cross join lateral jsonb_array_elements_text(e.contenido->'items'->0->'usa') u
where not exists (select 1 from ids where ids.nota_id = e.nota_id and ids.id = u);
```

Cero filas es lo esperado. Si aparecen, hay un `usa` que no apunta a nada: se descarta
el enriquecimiento, no se inventa el texto.

> Nota: `jsonb_array_elements_text` sobre un array de objetos devuelve el objeto entero,
> no el `id`. Hay que usar `->>'id'` sobre cada elemento. Es el error más fácil de
> cometer al escribir estas queries.

### Denormalización — sólo con motivo escrito

Desnormalizar es una decisión, no un descuido. Vale cuando:

- el costo del join se midió y no es aceptable, **y**
- hay un camino de refresco definido (columna generated, trigger, o materialized view),
  **y**
- la razón queda escrita.

En Nexo, `fichas.contenido` y `enriquecimientos.contenido` son jsonb **a propósito**: la
forma del documento depende del tipo de enriquecimiento y la define el modelo, no el
schema. Eso no es denormalización — es no modelar lo que no tiene forma fija. La
diferencia: un jsonb con esquema variable y estable, contra datos relacionales que
deben ser columnas.

Si se agrega una columna que se deriva de otra en la misma tabla, definí cómo se
mantiene:

```sql
create table enriquecimientos (
  ...
  total numeric generated always as ((contenido->>'valor')::numeric) stored
);
```

> `contenido->>'valor'` devuelve `text`. Sin el cast `::numeric`, Postgres rechaza la
> columna con *"default expression is of type text"*. Para texto a número, casteá.

Sin `generated`, sin trigger y sin job de refresco, una columna desnormalizada se
desincroniza sola y nadie se entera.

## jsonb o tabla: el criterio

El test es de **estabilidad de la forma**, no de tamaño ni de conveniencia.

| Va en jsonb | Va en tabla |
|---|---|
| La forma la define el modelo y cambia por versión | La forma la define el dominio y es estable |
| Se lee entero, nunca por campo | Se consulta por campo, se filtra, se indexa |
| Se valida en la aplicación, no por el schema | Tiene invariantes que el schema debe garantizar |
| Es un documento (la ficha, un enriquecimiento) | Es un registro que se referencia (una serie, un autor) |

Aplicado a Nexo:

- `fichas.contenido` → jsonb. Es la salida del modelo, versionada, se lee entera.
- `enriquecimientos.contenido` → jsonb. La forma depende de `tipo`.
- `enriquecimientos.alertas` → jsonb. Lista de avisos, se lee entera.
- `parrafos` → tabla. Filas contiguas, se referencian por id, tienen orden.
- `notas` → tabla. Es la entidad raíz.

**El caso que importa**: `dato_oficial` tiene `serie_id` — el id de una serie oficial de
datos.gob.ar. Hoy es un string dentro del jsonb. Si más adelante hace falta saber qué
serie es, cuándo se verificó, o mostrar su nombre sin llamar a la API, ese `serie_id`
es una FK a una tabla `series` que todavía no existe. **No la anticipates**: creala
cuando aparezca la necesidad, con las columnas que sirvan.

## Detectar una tabla que sobra

El caso real de este schema: `preguntas_sin_respuesta` versus los `enriquecimientos` de
tipo `pregunta_probable` con `respuesta: null`.

Si la tabla es derivable de otra, es redundancia — el mismo hecho en dos lugares, que
se desincronizan (se aprueba la pregunta y queda en la lista de "sin respuesta").

```sql
-- ¿hay preguntas sin respuesta derivables de enriquecimientos?
select count(*) from enriquecimientos
where tipo = 'pregunta_probable' and contenido->>'respuesta' is null;
```

Si ese número es el mismo que `select count(*) from preguntas_sin_respuesta`, la tabla
está duplicando información. O se borra la tabla y se consulta el jsonb, o se borra el
`respuesta: null` del enriquecimiento y la tabla es la única fuente. **Una de las dos.**

En el schema de `docs/pipeline.md` las dos existen hoy y la pregunta aparece en
`enriquecimientos.contenido->>'pregunta'` y en `preguntas_sin_respuesta.pregunta`. Eso
es el mismo hecho en dos lugares: si la autora aprueba la pregunta, queda approved en
una tabla y "sin respuesta" en la otra. **Es la anomalía más probable de este schema.**

## Verificar: FKs sin índice

Postgres **no** indexa las columnas de FK automáticamente. Sin índice, un `DELETE` del
padre bloquea la tabla hija y un JOIN por FK hace seq scan.

```sql
select c.conrelid::regclass as tabla, a.attname as columna_fk
from pg_constraint c
join pg_class t on t.oid = c.conrelid
join pg_namespace n on n.oid = t.relnamespace
join pg_attribute a on a.attrelid = c.conrelid and a.attnum = any(c.conkey)
where c.contype = 'f' and n.nspname = 'public'
  and not exists (
    select 1 from pg_index i
    where i.indrelid = c.conrelid and i.indkey[0] = a.attnum
  )
order by 1, 2;
```

Cada fila es una FK sin índice. Es lo primero que se arregla: `create index` es barato
en una tabla chica y caro de agregar después.

## Estados: enum, no texto libre

`estado` y `tipo` son de dominio cerrado y no van a crecer. `text` con `CHECK` funciona,
pero deja que el error llegue a runtime.

```sql
create type estado_enriquecimiento as enum ('pendiente', 'aprobada', 'descartada');
create table enriquecimientos (
  ...
  estado estado_enriquecimiento not null default 'pendiente'
);
```

El enum es el tipo: el typo no compila, la comparación es rápida, y el catálogo de
valores es una lista. Si el dominio crece por etapas (`procesando`, `error`), agregar
valores al enum es `alter type ... add value`.

## Checklist antes de una migración

- [ ] Cada hecho vive en un solo lugar (no hay datos duplicados entre tablas)
- [ ] No hay columnas derivables de otras sin `generated` / trigger / job de refresco
- [ ] Las referencias dentro de jsonb (`usa`) apuntan a ids que existen
- [ ] No hay tabla derivable de otra (contar vs. derivar)
- [ ] Las PK y FKs que unen datos tienen índice
- [ ] `estado` y `tipo` son enum, no texto libre
- [ ] Lo que va en jsonb tiene forma inestable; lo demás, columnas
- [ ] Las migraciones son idempotentes (`if not exists`, `DO $$`) — ver `schema-constraints`
      en `supabase-postgres-best-practices`

## Cómo verificar en la DB local

La DB del proyecto corre en el puerto 54322:

```bash
PGPASSWORD=postgres psql -h 127.0.0.1 -p 54322 -U postgres -d postgres
```

Para probar el modelo antes de migrar, creá un schema aparte y dropealo después:

```sql
create schema prueba;
create table prueba.notas (...);
-- ... pruebas ...
drop schema prueba cascade;
```

No inventes datos en `public`: el `db reset` de Supabase los borra y las pruebas
contaminan la DB real.

## Qué NO usar para esto

- **No usar un skill de normalización genérico**: el schema tiene 6 tablas y el
  criterio es específico del dominio. Las formas normales se aplican a mano, con las
  queries de arriba.
- **No partir `fichas.contenido` en tablas**: la forma la define el modelo.
- **No agregar tablas "por si después"**: `series`, `actores`, `datos_oficiales` como
  tablas own esperan a que haya demanda.
- **No duplicar texto**: ni el nombre de un autor, ni el enunciado de un hecho, ni la
  pregunta sin respuesta.
