import { getSupabaseClient } from '@/lib/supabaseClient';

export async function POST(req) {
  const { email, password } = await req.json();
  const supabase = getSupabaseClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: 'Registered successfully' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
