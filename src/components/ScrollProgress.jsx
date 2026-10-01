import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrollProgress = (window.scrollY / totalHeight) * 100;

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-9999 h-1 bg-violet-500 transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ScrollProgress;