"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "~/lib/supabase.js";

const supabase = getSupabase();

export default function MasailPage() {
  const [masail, setMasail] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (supabase) {
      fetchMasail();
    }
  }, []);

  const fetchMasail = async () => {
    const { data } = await supabase.from("masail").select("*");
    setMasail(data || []);
  };

  const filtered = masail.filter((m) =>
    m.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: '20px' }}>
      <h1>Hajj & Fiqh Masā’il</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      {filtered.map((m) => (
        <div key={m.id} style={{ marginBottom: '15px' }}>
          <strong>{m.question}</strong>
          <p>{m.answer}</p>
        </div>
      ))}
    </main>
  );
}