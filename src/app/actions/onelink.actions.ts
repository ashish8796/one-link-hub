"use server";

import getSupabaseClient from "@/lib/supabase";

export async function getAllOneLinks() {
  try {
    const supabase = getSupabaseClient();
    const data = await supabase.from("onelinks").select();
    return data;
  } catch (error) {
    console.log(error);
  }
}
