-- Publication date, so the timeline agent and the verificador can resolve relative dates ("el domingo").
alter table articles add column if not exists published_at date;
