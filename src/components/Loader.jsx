import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#050816]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        {/* Loading circle */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl" />

          <div className="h-24 w-24 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
        </div>

        {/* Logo */}
        <h1 className="mt-8 text-4xl font-bold text-white">
          Aisha<span className="text-violet-500">.</span>
        </h1>

        {/* Loading text */}
        <p className="mt-3 text-sm tracking-wider text-gray-400">
          Loading Portfolio...
        </p>
      </motion.div>
    </div>
  );
};

export default Loader;