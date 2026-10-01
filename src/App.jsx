import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <ThemeToggle />



      <div className="bg-[#050816] text-white overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;