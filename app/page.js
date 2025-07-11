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
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <h1>Job Posts</h1>
      {Array.isArray(jobPosts) && jobPosts.map((job) => (
        <Jobpost key={job.id} id={job.id} title={job.title} description={job.description} />
      ))}
    </div>
  );
}
