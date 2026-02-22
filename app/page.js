import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import Jobpost from '@/components/jobpost';

import { getSupabaseServer } from '@/lib/supabaseServer';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = getSupabaseServer();

  const { data: jobPosts, error } = await supabase
    .from('jobs')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    return <div>Failed to load jobs: {error.message}</div>;
  }
//
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
            {jobPosts.map((job) => (
              <li key={job.id}>
                <Jobpost
                  id={job.id}
                  title={job.title}
                  description={job.description}
                  className="border border-gray-300 p-4 bg-white shadow-sm rounded-lg"
                />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
