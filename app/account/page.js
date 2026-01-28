// app/account/page.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { decrypt } from '@/app/lib/session';
import LogoutButton from './LogoutButton';
import Navbar from '@/components/navbar';

export default function AccountPage() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) {
    redirect('/login');
  }

  let session;
  try {
    session = decrypt(sessionCookie);
  } catch {
    redirect('/login');
  }

  return (
    <main>
    <Navbar></Navbar>
    <h1>Account</h1>
    <p>Email: {session.user.email}</p>
    <p>User ID: {session.user.id}</p>
    <LogoutButton></LogoutButton>
    </main>
  );
}
