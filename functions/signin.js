"use server"
import { supabaseClient } from "../lib/supabase/supabaseClient"
export default async function signIn(prevSatate, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const { data, error } = await supabaseClient.auth.signIn({ email, password });
    if (error) {
        return { success: false, message: error.message };
    }
    return { success: true, message: "User logged in successfully" };
}