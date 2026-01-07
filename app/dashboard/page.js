// app/dashboard/page.js
import { cookies } from 'next/headers';
import { decrypt } from '@/lib/session';

export default async function DashboardPage() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) {
    // Redirect to login if no cookie
    return redirect('/login');
  }

  let session;
  try {
    session = decrypt(sessionCookie);
  } catch (err) {
    return redirect('/login'); // invalid cookie
  }

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <p>Your Supabase user ID is {session.user.id}</p>
    </div>
  );
}
