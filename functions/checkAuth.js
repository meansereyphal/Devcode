'use server'
import { supabaseClient } from "../lib/supabase/supabaseClient"

export default async function checkAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    return { auth: true, session };
}