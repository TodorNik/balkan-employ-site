import { redirect } from 'next/navigation';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { getSupabaseServer } from '@/lib/supabaseServer';

export const dynamic = 'force-dynamic';

export default async function Profile() {
  const supabase = getSupabaseServer();

  // Get logged in user
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Get profile info
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    return <div>Error loading profile: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <Sidebar />

      <main className="p-6">
        <h1 className="text-2xl font-bold">{profile.name}</h1>

        <p className="mt-4">
          <strong>Experience:</strong> {profile.experience}
        </p>

        <p className="mt-4">
          <strong>About me:</strong> {profile.about_me}
        </p>
      </main>
    </div>
  );
}
