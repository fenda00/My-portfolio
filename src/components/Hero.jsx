import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] pt-20"
    >
      {/* Decorative Glows */}
      <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-32 w-32 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-20 w-20 animate-bounce rounded-full bg-pink-500/20 blur-2xl" />

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[6px] text-violet-400">
            Welcome
          </p>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
            Hi, I'm
            <span className="block text-violet-500">
              Aisha
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
            <span className="text-gray-300">
              I'm{" "}
            </span>

            <span className="text-violet-500">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "UI Engineer",
                  "Creative Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-gray-400">
            I create beautiful, fast and responsive web experiences using
            React, Tailwind CSS and modern frontend technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#contact"
              className="rounded-full bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700"
            >
              Hire Me
            </a>

            <button
              type="button"
              className="rounded-full border border-violet-500 px-8 py-4 transition hover:bg-violet-600"
            >
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex gap-6 text-2xl">
            <a
              href="https://github.com/fenda00"
              aria-label="GitHub"
              className="transition hover:text-violet-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aisha-sillah-8b587138a"
              aria-label="LinkedIn"
              className="transition hover:text-violet-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/sillah_fenda"
              aria-label="Instagram"
              className="transition hover:text-violet-500"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Image Glow */}
            <div className="absolute inset-0 animate-pulse rounded-full bg-violet-500 opacity-30 blur-3xl" />

            {/* Profile Image */}
            <img
              src="/profile.png"
              alt="Aisha"
              className="relative h-72 w-72 rounded-full border-4 border-violet-500 object-cover sm:h-80 sm:w-80 lg:h-105 lg:w-105"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-violet-500">
          <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-violet-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;