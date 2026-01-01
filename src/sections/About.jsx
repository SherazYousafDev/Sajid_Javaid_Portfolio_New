import React, { useEffect } from "react";
import AOS from "aos";
import { User } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="py-20 mb-10 scroll-mt-20 border-b border-slate-900"
    >
      <div className="max-w-3xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16" data-aos="fade-right">
          <div className="p-3 bg-indigo-600/10 rounded-xl text-primary shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <User size={24} />
          </div>
          <div>
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
              Professional Profile
            </h2>
            <h3 className="text-2xl font-bold text-white">About Me</h3>
          </div>
        </div>

        {/* Hero Statement */}
        <div className="relative mb-10" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
            13+ years of experience driving innovation in{" "}
            <span className="text-primary">FinTech</span> and digital banking
            transformation.
          </h3>
        </div>

        {/* Main Content with Accent Line */}
        <div className="relative pl-8">
          {/* Gradient Accent Line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-600 via-blue-500 to-transparent rounded-full"
            data-aos="fade-down"
            data-aos-delay="150"
          ></div>

          <p
            className="text-xl font-medium mb-6 text-text leading-relaxed text-justify [text-justify:inter-character] [hyphens:auto] max-w-2xl"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            A highly accomplished software project manager with a proven track
            record of successfully leading end-to-end software development
            projects throughout SDLC. With over 13 years of experience,
            including the FinTech domain, I am proficient in Agile
            methodologies, strategic planning, resource optimization, and
            stakeholder communication. Skilled in risk management and fostering
            a collaborative team environment, I drive innovation and achieve
            project success with minimal scope creep.
          </p>

          <p
            className="text-lg text-text/50 leading-relaxed max-w-2xl"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Proficient in Agile methodologies with a focus on strategic
            planning, resource optimization, and stakeholder communication. I
            bridge the gap between complex business requirements and
            high-performance technical delivery.
          </p>
        </div>

        {/* Focus Areas / Trust Badges */}
        <div
          className="flex flex-wrap gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col">
            <span className="text-primary font-bold text-lg">FinTech</span>
            <span className="text-xs uppercase tracking-widest font-bold text-text/40">
              Domain Expert
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-primary font-bold text-lg">Agile</span>
            <span className="text-xs uppercase tracking-widest font-bold text-text/40">
              Methodology
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-primary font-bold text-lg">SDLC</span>
            <span className="text-xs uppercase tracking-widest font-bold text-text/40">
              End-to-End
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
