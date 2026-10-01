import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#050816] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold transition hover:text-violet-400"
        >
          Aisha<span className="text-violet-500">.</span>
        </a>

        {/* Social Links */}
        <div className="flex gap-5 text-xl">

          {/* GitHub */}
          <a
            href="https://github.com/fenda00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition hover:-translate-y-1 hover:text-violet-500"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aisha-sillah-8b587138a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition hover:-translate-y-1 hover:text-violet-500"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sillah_fenda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 transition hover:-translate-y-1 hover:text-violet-500"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Aisha. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;