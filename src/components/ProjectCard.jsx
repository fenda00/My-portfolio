import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-500"
          >
            Live Demo
            <ExternalLink size={16} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
          >
            GitHub
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;