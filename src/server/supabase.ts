import { supabaseKey, supabaseUrl } from "@/app.config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(supabaseUrl, supabaseKey);
