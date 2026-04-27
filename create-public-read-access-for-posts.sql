create policy "Public read access for posts"
on public.posts
for select
using (true);
