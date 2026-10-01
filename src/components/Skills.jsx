import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    level: "Advanced",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: "Intermediate",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: "Intermediate",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: "Beginner",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: "Beginner",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    level: "Intermediate",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0b1324] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-violet-400">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Here are some of the technologies and tools I use to build
            modern, responsive and user-friendly web experiences.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-gray-700 bg-[#111827] p-6 transition duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-3xl text-violet-400 transition duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

              {/* Level */}
              <p className="mt-2 text-sm text-gray-500">
                {skill.level}
              </p>

              {/* Progress Bar */}
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width:
                      skill.level === "Advanced"
                        ? "90%"
                        : skill.level === "Intermediate"
                          ? "75%"
                          : "55%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className="h-full rounded-full bg-violet-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;