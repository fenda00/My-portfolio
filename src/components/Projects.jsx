import { FolderGit2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          title="Featured Projects"
          subtitle="Some of the projects I've built while growing as a frontend developer."
        />

        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/10 px-5 py-3 text-violet-300">
            <FolderGit2 size={20} />
            <span>Things I've built</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;