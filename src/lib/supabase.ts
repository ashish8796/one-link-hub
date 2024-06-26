import { supabaseKey, supabaseUrl } from "@/app.config";
import { createClient } from "@supabase/supabase-js";

const getSupabaseClient = () => {
  return createClient(supabaseUrl, supabaseKey);
};

export default getSupabaseClient;
