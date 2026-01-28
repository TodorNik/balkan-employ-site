// app/api/session/route.js
import { serialize } from 'cookie';
import { encrypt } from '@/app/lib/session';

export async function POST(req) {
  const sessionData = await req.json();
  const encryptedSessionData = encrypt(sessionData);

  const cookie = serialize('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });

  return new Response(JSON.stringify({ message: 'Successfully set cookie!' }), {
    status: 200,
    headers: {
      'Set-Cookie': cookie,
      'Content-Type': 'application/json',
    },
  });
}
