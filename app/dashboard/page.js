export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import { getSupabaseServer } from '@/lib/supabaseServer';

export default async function Dashboard() {
  const supabase = getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  return <div>Welcome {user.email}</div>;
}
