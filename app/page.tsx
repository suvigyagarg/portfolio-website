import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2">
    <div className="max-w-[1650px] w-full">
      <FloatingNav
      navItems={navItems}
      />
      <Hero/>
      <Skills/>
      <RecentProjects/>
      <WorkExperience/>
    </div>
   </main>
  );
}
