import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Services", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-4xl font-bold"
          >
            Aisha<span className="text-violet-500">.</span>
          </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer text-gray-300 hover:text-white transition relative group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#0b1229] px-6 py-5 space-y-5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-violet-500 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;