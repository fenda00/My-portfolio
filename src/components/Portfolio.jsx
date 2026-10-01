import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="bg-[#050816] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[6px] text-violet-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Here are some of my favorite projects built with modern frontend
            technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-gray-700 bg-[#111827] transition-all duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10"
            >

              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-5 bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-black transition hover:scale-110"
                  >
                    <FaGithub />
                  </a>

                  {/* Live Project */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-xl transition hover:scale-110 hover:bg-violet-600"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Category */}
                <span className="text-sm text-violet-400">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-600/20 px-3 py-1 text-sm text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;