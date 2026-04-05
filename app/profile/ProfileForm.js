'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function ProfileForm({ profile }) {
  const supabase = createClientComponentClient();

  const [name, setName] = useState(profile?.name || '');
  const [experience, setExperience] = useState(profile?.experience || '');
  const [about, setAbout] = useState(profile?.about_me || '');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('profiles')
      .update({
        name,
        experience,
        about_me: about,
      })
      .eq('id', user.id); // 🔒 must match your RLS

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Profile updated!');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        className="border p-2 w-full"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Experience"
      />

      <textarea
        className="border p-2 w-full"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="About me"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}