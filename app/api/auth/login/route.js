// app/api/login/route.js
import { getSupabaseClient } from 'app/lib/supabaseClient';

export async function POST(req) {
  const { email, password } = await req.json();
  const supabase = getSupabaseClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 401 });
  }

  // Call the session API to set encrypted cookie
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: data.user, session: data.session }),
  });

  return new Response(JSON.stringify({ message: 'Logged in successfully' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
