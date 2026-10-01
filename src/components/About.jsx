import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaAward } from "react-icons/fa";

const cards = [
  {
    icon: <FaCode size={35} />,
    title: "Frontend Development",
    desc: "Building fast, responsive and accessible web applications with React and modern web technologies.",
  },
  {
    icon: <FaLaptopCode size={35} />,
    title: "UI Development",
    desc: "Creating clean and beautiful interfaces with Tailwind CSS and responsive design principles.",
  },
  {
    icon: <FaAward size={35} />,
    title: "Always Learning",
    desc: "Continuously improving my skills and exploring new technologies in frontend development.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#081021] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-violet-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Passionate Frontend Developer
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            I enjoy transforming ideas into elegant digital experiences.
            My goal is to create websites that are beautiful, user-friendly,
            fast, and responsive across all devices.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-gray-700 bg-[#111827] p-8 transition duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Icon */}
              <div className="mb-6 text-violet-500 transition duration-300 group-hover:scale-110">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-semibold">
                {card.title}
              </h3>

              {/* Description */}
              <p className="leading-7 text-gray-400">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-2 gap-8 text-center md:grid-cols-4"
        >
          {/* Projects */}
          <div>
            <h2 className="text-5xl font-bold text-violet-500">
              10+
            </h2>

            <p className="mt-3 text-gray-400">
              Projects
            </p>
          </div>

          {/* Learning */}
          <div>
            <h2 className="text-5xl font-bold text-violet-500">
              2+
            </h2>

            <p className="mt-3 text-gray-400">
              Years Learning
            </p>
          </div>

          {/* Responsive */}
          <div>
            <h2 className="text-5xl font-bold text-violet-500">
              100%
            </h2>

            <p className="mt-3 text-gray-400">
              Responsive
            </p>
          </div>

          {/* Passion */}
          <div>
            <h2 className="text-5xl font-bold text-violet-500">
              ∞
            </h2>

            <p className="mt-3 text-gray-400">
              Passion
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;