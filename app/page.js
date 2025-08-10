import Image from "next/image";
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar'; 
import Jobpost from "@/components/jobpost";

export default function Home() {
  const jobPosts = [
    { id: 1, title: "Frontend Developer", description: "Develop awesome UIs with React." },
    { id: 2, title: "Backend Developer", description: "Build robust APIs with Node.js." },
    { id: 3, title: "Fullstack Developer", description: "Work across the entire stack." },
  ];
//test
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <ul class="main">
      {Array.isArray(jobPosts) &&
    jobPosts.map((job) => (
      <li class ="complist" key={job.id}>
        <Jobpost
          id={job.id}
          title={job.title}
          description={job.description}
          className="border border-gray-300 p-4 bg-white shadow-sm rounded-lg"
        />
      </li>
  
    ))}
  </ul>
    </div>
  );
}
