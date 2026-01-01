import React, { useEffect } from "react";
import AOS from "aos";
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    AOS.refresh(); // refresh for this section
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center pt-16 pb-20 border-b border-slate-900 mb-16">
      <div className="relative z-10 max-w-5xl px-6 py-8 lg:px-52 lg:py-6">
        {/* Availability Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/40 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-secondary"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for New Projects
        </div>

        {/* Main Content */}
        <div
          className="mb-10 text-white"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <span className="block text-2xl lg:text-3xl font-medium mb-2 tracking-tight text-slate-300">
            Hi, I'm
          </span>

          <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Sajid <span className="text-primary">Javaid</span>
          </h2>

          <p className="text-xl text-text leading-relaxed max-w-2xl border-l-2 border-secondary pl-6 backdrop-blur-sm">
            A{" "}
            <span className="text-white font-semibold">
              Senior Project Manager
            </span>{" "}
            with 13+ years of experience specialized in Digital Banking, Agile
            delivery, and high performance QA management.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-5 items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#experience"
            className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/50 transition-all shadow-lg  cursor-pointer"
          >
            Explore My Work
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="/Sajid-Javaid-CV.pdf"
              download="Sajid-Javaid-CV.pdf"
              className="group flex items-center gap-3 bg-bg backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-all border border-secondary cursor-pointer"
              title="Download CV"
            >
              Download CV
              <Download
                size={20}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>

            <a
              href="mailto:sajid.javaid63@gmail.com"
              className="p-4 rounded-full border border-secondary text-slate-400 hover:text-primary hover:border-primary transition-all bg-slate-900/50 backdrop-blur-md"
              title="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Experience Counters */}
        <div
          className="flex gap-12 mt-16 pt-10 border-t border-slate-900"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div>
            <p className="text-2xl font-bold text-primary">13+</p>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">
              Years Experience
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-primary">50+</p>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">
              Sprints Delivered
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-primary">Lahore</p>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">
              Current Base
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
