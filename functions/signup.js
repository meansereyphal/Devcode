"use server"

import { supabaseClient } from "../lib/supabase/supabaseClient"
export default async function signUp(name, email, password, confirmPassword) {
    let err = {success: true, message: ""}
    if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
    }

    const {data, error} = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                name
            }
        }
    })

    if (error) {
        err.success = false
        err.message = error.message
        return err;
    }

    err.success = true

    return err;
}