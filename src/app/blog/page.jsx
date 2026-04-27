import { getSupabase } from "@/lib/supabase";

export default async function BlogPage() {
  const supabase = getSupabase();

  if (!supabase) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Blog / Lessons</h1>
        <p>
          Supabase is not configured. Set valid NEXT_PUBLIC_SUPABASE_URL and
          NEXT_PUBLIC_SUPABASE_ANON_KEY values in your .env file.
        </p>
      </main>
    );
  }

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error loading posts</p>;
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Blog / Lessons</h1>

      {posts?.length === 0 && <p>No posts yet</p>}

      {posts?.map((post) => (
        <div key={post.id} style={{ marginBottom: 20 }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  );
}
