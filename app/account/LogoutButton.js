'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST' }); // ✅ FIXED PATH
    router.replace('/login');
    router.refresh();
  }

  return <button onClick={handleLogout}>Logout</button>;
}