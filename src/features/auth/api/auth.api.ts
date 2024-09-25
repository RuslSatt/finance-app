import { supabase } from '@/shared/api/supabase';

export class AuthApi {
    static async signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        return { data, error };
    }

    static async signUp(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });

        return { data, error };
    }
}
