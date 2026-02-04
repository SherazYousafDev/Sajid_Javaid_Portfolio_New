import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import ScrollToTop from "./components/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Certifications from "./sections/Certifications";
import SkillsSlider from "./components/SkillsSlider";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      <Sidebar />
      <main className="flex-1 lg:ml-60 overflow-x-hidden">
        <Hero />
        <SkillsSlider />
        <div className="max-w-5xl mx-auto px-6 py-8 lg:px-16 lg:py-12">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default App;
