// app/api/auth/register/route.js
import { getSupabaseServer } from '@/lib/supabaseServer';

export async function POST(req) {
  const { email, password } = await req.json();
  const supabase = getSupabaseServer();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true });
}
