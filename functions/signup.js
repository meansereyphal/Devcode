"use server"

import { supabaseClient } from "../lib/supabase/supabaseClient"
export default async function signUp(prevSatate, formData) {
    const info = {
        name: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    }

    if (info.password !== info.confirmPassword) {
        throw new Error("Passwords do not match");
    }

    const {data, error} = await supabaseClient.auth.signUp({
        email: info.email,
        password: info.password,
        options: {
            data: {
                name: info.name
            }
        }
    })

    if (error) {
        return { success: false, message: error.message };
    }

    return { success: true, message: "User registered successfully" };
}