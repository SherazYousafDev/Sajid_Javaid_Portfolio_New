import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const words = useMemo(
    () => [
      "Senior Project Manager",
      "Fintech Solutions Expert",
      "QA Strategy Leader",
      "Scrum Master",
    ],
    [],
  );

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 80;
  const PAUSE_TIME = 1000;

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    const i = loopNum % words.length;
    const fullWord = words[i];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(fullWord.substring(0, text.length + 1));
          if (text === fullWord) {
            setTimeout(() => setIsDeleting(true), PAUSE_TIME);
          }
        } else {
          setText(fullWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-bg" // Changed to theme variable
    >
      {/* --- PROFESSIONAL BLUEPRINT PATTERN --- */}
      {/* 1. Main Grid - Uses Primary Color at low opacity */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* 3. Radial Fade - Anchored to your new bg color */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_20%,var(--color-bg)_85%)]"></div>

      {/* 4. Warm Golden Glow behind content */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          {/* Availability Badge */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-secondary/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Projects
          </div>

          <div className="mb-8" data-aos="fade-right" data-aos-delay="200">
            <span className="block text-2xl lg:text-3xl font-medium mb-3 tracking-tight text-text/80">
              Hi, I'm
            </span>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter leading-none text-white mb-6">
              Sajid <span className="text-primary">Javaid</span>
            </h1>

            {/* TYPING AREA */}
            <div className="border-l-2 border-secondary pl-6">
              <div className="min-h-10 flex items-center">
                <p className="text-2xl lg:text-3xl text-white font-semibold tracking-tight">
                  A <span className="text-white italic">{text}</span>
                  <span className="ml-1 inline-block w-0.75 h-8 bg-primary animate-pulse align-middle"></span>
                </p>
              </div>
              <p className="mt-4 text-xl text-text/70 leading-relaxed max-w-lg">
                With <span className="text-white font-bold">13+ years</span> of
                experience specialized in Digital Banking, Agile delivery, and
                executive-level QA management.
              </p>
            </div>
          </div>

          {/* CTA Group */}
          <div
            className="flex flex-wrap gap-5 items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#experience"
              className="group flex items-center gap-3 bg-primary text-bg px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-md"
            >
              Explore My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="/Sajid-Javaid-CV.pdf"
                target="_blank"
                className="flex items-center gap-3 bg-transparent text-white px-6 py-4 rounded-xl font-bold hover:bg-card transition-all border border-secondary"
              >
                <Download size={18} /> Resume
              </a>
              <a
                href="mailto:sajid.javaid63@gmail.com"
                className="p-4 rounded-xl border border-secondary text-text/60 hover:text-primary hover:border-primary transition-all bg-card/30 backdrop-blur-md"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex gap-12 mt-16 pt-10 border-t border-secondary/30">
            <div>
              <p className="text-3xl font-black text-primary">13+</p>
              <p className="text-[10px] font-bold text-text/40 uppercase tracking-[0.2em] mt-1">
                Years Exp.
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">50+</p>
              <p className="text-[10px] font-bold text-text/40 uppercase tracking-[0.2em] mt-1">
                Sprints
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">PMP</p>
              <p className="text-[10px] font-bold text-text/40 uppercase tracking-[0.2em] mt-1">
                Certified
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="relative group">
            <div className="relative w-72 h-96 lg:w-105 lg:h-135 overflow-hidden rounded-3xl border border-white/5 shadow-2xl bg-card">
              <img
                src="/profile.webp"
                alt="Sajid Javaid"
                className="w-full h-full object-cover grayscale-75 hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl hidden lg:block">
              <p className="text-primary font-black text-2xl leading-none tracking-tighter">
                PMP®
              </p>
              <p className="text-[9px] text-white/40 uppercase font-black tracking-widest mt-1">
                Global Standard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
