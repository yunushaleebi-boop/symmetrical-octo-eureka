import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "";

export function getSupabase() {
  const isValidUrl =
    supabaseUrl.startsWith("http://") || supabaseUrl.startsWith("https://");

  if (!isValidUrl) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}
