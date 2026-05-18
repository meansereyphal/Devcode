import supabase from "@supabase/supabase-js";

export const supabaseAdmin = supabase.createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ADMIN
);