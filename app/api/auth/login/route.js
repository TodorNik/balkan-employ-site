// app/api/auth/login/route.js
import { getSupabaseServer } from '@/lib/supabaseServer';

export async function POST(req) {
  const { email, password } = await req.json();
  const supabase = getSupabaseServer();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 401 }
    );
  }

  return Response.json({ success: true });
}
