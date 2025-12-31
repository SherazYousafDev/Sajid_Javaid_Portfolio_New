import React from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-16 pb-20 border-b border-slate-900 mb-16 ">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          {/* Replace this path with your video file in the public folder */}
          <source src="/hero-bg-blue.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl  px-6 py-8 lg:px-52 lg:py-6">
        {/* Animated-style tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 backdrop-blur-md text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-slate-700/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for New Projects
        </div>

        {/* Content */}
        <div className="mb-10 text-white">
          <span className="block text-2xl lg:text-3xl font-medium mb-2 tracking-tight text-slate-300">
            Hi, I'm
          </span>

          <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Sajid <span className="text-indigo-500">Javaid</span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl border-l-2 border-slate-800 pl-6 backdrop-blur-sm">
            A{" "}
            <span className="text-slate-200 font-semibold">
              Senior Project Manager
            </span>{" "}
            with 13+ years of experience specialized in Digital Banking, Agile
            delivery, and high-performance QA management.
          </p>
        </div>

        {/* Cta btns */}
        <div className="flex flex-wrap gap-5 items-center">
          <a
            href="#experience"
            className="group flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/40 cursor-pointer"
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
              className="group flex items-center gap-3 bg-slate-800/80 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-all border border-slate-700 cursor-pointer"
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
              className="p-4 rounded-full border border-slate-800 text-slate-400 hover:text-indigo-500 hover:border-indigo-500 transition-all bg-slate-900/50 backdrop-blur-md"
              title="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Experience Counter Labels */}
        <div className="flex gap-12 mt-16 pt-10 border-t border-slate-900">
          <div>
            <p className="text-2xl font-bold text-indigo-500">13+</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Years Experience
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-500">50+</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Sprints Delivered
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-500">Bahrain</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Current Base
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
