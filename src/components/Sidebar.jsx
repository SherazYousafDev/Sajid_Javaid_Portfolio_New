import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Code,
  Briefcase,
  Award,
  GraduationCap,
  MessageSquare,
  Menu,
  X,
  Linkedin,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Track which section is in view to highlight the nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", icon: <User size={18} />, href: "#about", id: "about" },
    {
      label: "Skills",
      icon: <Code size={18} />,
      href: "#skills",
      id: "skills",
    },
    {
      label: "Experience",
      icon: <Briefcase size={18} />,
      href: "#experience",
      id: "experience",
    },
    {
      label: "Projects",
      icon: <Award size={18} />,
      href: "#projects",
      id: "projects",
    },
    {
      label: "Education",
      icon: <GraduationCap size={18} />,
      href: "#education",
      id: "education",
    },
    {
      label: "Contact",
      icon: <MessageSquare size={18} />,
      href: "#contact",
      id: "contact",
    },
  ];

  return (
    <>
      {/* Mobile Header - Glass effect */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0a0f1d]/80 backdrop-blur-md border-b border-white/5 z-60 flex items-center justify-between px-6">
        <span className="font-bold text-white tracking-tighter">SJ.</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-500/30"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0f1d] text-white p-8 flex flex-col 
        border-r border-white/5 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Brand Logo & Name */}
        <div className="mb-10 group cursor-default">
          <div className="relative inline-block mb-6">
            <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-xl font-black shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-transform">
              SJ
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-emerald-500 border-2 border-[#0a0f1d] rounded-full"></div>
          </div>

          <h1 className="text-xl font-extrabold tracking-tight leading-none text-white">
            Ch Muhammad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Sajid Javaid
            </span>
          </h1>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.25em] mt-3 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-slate-700"></span>
            Fintech Expert
          </p>
        </div>

        {/* Dynamic Navigation */}
        <nav className="flex-1 space-y-1.5 overflow-y-hidden scrollbar-hide py-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`
                group flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-300
                ${
                  activeSection === item.id
                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent"
                }
              `}
            >
              <span
                className={`${
                  activeSection === item.id
                    ? "text-indigo-400"
                    : "text-slate-500 group-hover:text-slate-300"
                }`}
              >
                {item.icon}
              </span>
              <span className="font-bold text-[13px] tracking-wide uppercase">
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></div>
              )}
            </a>
          ))}
        </nav>

        {/* Premium Contact Card */}
        <div className="mt-8 p-3 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl border border-white/[0.05] space-y-4">
          <div className="flex items-center gap-3 text-slate-400 hover:text-indigo-300 transition-colors cursor-default">
            <Mail size={14} className="shrink-0" />
            <span className="text-[10px] font-bold truncate">
              sajid.javaid63@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 hover:text-indigo-300 transition-colors cursor-default">
            <Phone size={14} className="shrink-0" />
            <span className="text-[10px] font-bold tracking-widest">
              +92 333 7777230
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 hover:text-indigo-300 transition-colors cursor-default">
            <MapPin size={14} className="shrink-0" />
            <span className="text-[10px] font-bold">Lahore, Pakistan</span>
          </div>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-2 bg-slate-800/50 hover:bg-indigo-600/20 border border-slate-700 hover:border-indigo-500/50 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            <Linkedin size={12} /> LinkedIn
          </a>
        </div>
      </aside>

      {/* Modern Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
