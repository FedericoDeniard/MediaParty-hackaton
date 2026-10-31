-- Run in Supabase SQL editor.

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  url text,
  niche text,                -- filled by parse node if null
  lang text not null default 'es',
  created_at timestamptz default now()
);

create table if not exists enrichments (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references articles(id) on delete cascade,
  kind text not null,        -- entities | claims | timeline | editorial
  status text not null default 'pending',  -- pending | running | done | error
  data jsonb,
  error text,
  model text,
  updated_at timestamptz default now(),
  unique (article_id, kind)
);

create index if not exists enrichments_article_idx on enrichments(article_id);

-- Frontend subscribes to this table to animate progress.
alter publication supabase_realtime add table enrichments;
