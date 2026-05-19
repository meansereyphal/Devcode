import { supabaseClient } from '../lib/supabase/supabaseClient';

export default async function signIn(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        return { success: false, message: error.message }
    }

    return { success: true, user: data.user };
}