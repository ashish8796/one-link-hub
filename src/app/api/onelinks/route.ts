import getSupabaseClient from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";


export const GET = async () => {
  try {
    return new NextResponse("Ok");
  } catch (error) {
    console.log(error);
  }
};
