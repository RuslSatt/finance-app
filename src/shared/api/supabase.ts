import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_DATABASE_URL as string;
const supabaseKey = import.meta.env.VITE_DATABASE_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);
