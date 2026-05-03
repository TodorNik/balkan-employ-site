'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function ProfileForm({ profile, jobs }) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  // ✅ Profile state
  const [name, setName] = useState(profile?.name || '');
  const [experience, setExperience] = useState(profile?.experience || '');
  const [about, setAbout] = useState(profile?.about_me || '');
  const [message, setMessage] = useState('');

  // ✅ Job state
  const [title, setTitle] = useState(jobs?.title || '');
  const [description, setDescription] = useState(jobs?.description || '');

  // ✅ Profile submit (you already had this)
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
      .eq('id', user.id);

    setMessage(error ? error.message : 'Profile updated!');
  }

  // ✅ Job submit (your code — fixed placement)
  async function handleJobSubmit(e) {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage('Not logged in');
      return;
    }

    let error;

    if (jobs) {
      ({ error } = await supabase
        .from('jobs')
        .update({
          title,
          description,
        })
        .eq('user_id', user.id));
    } else {
      ({ error } = await supabase
        .from('jobs')
        .insert({
          user_id: user.id,
          title,
          description,
        }));
    }

    setMessage(error ? error.message : jobs ? 'Job updated!' : 'Job created!');
  }

  // ✅ EVERYTHING UI must be inside return
  return (
    <div>

      {/* PROFILE FORM */}
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
          Save Profile
        </button>
      </form>

      {/* JOB SECTION */}
      <hr className="my-6" />

      <h2 className="text-xl font-bold">
        {jobs ? 'Edit Your Job' : 'Create Job'}
      </h2>

      <form onSubmit={handleJobSubmit} className="space-y-4 mt-4">
        <input
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job title"
        />

        <textarea
          className="border p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job description"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          {jobs ? 'Update Job' : 'Create Job'}
        </button>
      </form>

      {/* MESSAGE */}
      {message && <p className="mt-4">{message}</p>}

    </div>
  );
}