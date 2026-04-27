create table public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null
);
