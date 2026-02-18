import React, { useState, useEffect, useMemo } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Code,
  Briefcase,
  Award,
  MessageSquare,
  Menu,
  X,
  Linkedin,
  School,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = useMemo(
    () => [
      { label: "About", icon: <User size={18} />, href: "#about", id: "about" },
      {
        label: "Skills",
        icon: <Code size={18} />,
        href: "#skills",
        id: "skills",
      },
      {
        label: "Projects",
        icon: <Award size={18} />,
        href: "#projects",
        id: "projects",
      },
      {
        label: "Experience",
        icon: <Briefcase size={18} />,
        href: "#experience",
        id: "experience",
      },
      {
        label: "Certificates",
        icon: <Award size={18} />,
        href: "#certificates",
        id: "certificates",
      },
      {
        label: "Education",
        icon: <School size={18} />,
        href: "#education",
        id: "education",
      },
      {
        label: "Contact",
        icon: <MessageSquare size={18} />,
        href: "#contact",
        id: "contact",
      },
    ],
    [],
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const ContactInfo = ({ icon: Icon, text, href }) => (
    <div className="flex items-center gap-3 text-secondary hover:text-primary transition-colors cursor-pointer group/info">
      <Icon
        size={14}
        className="shrink-0 group-hover/info:scale-110 transition-transform"
      />
      {href ? (
        <a
          href={href}
          className="text-[10px] font-bold truncate tracking-wider"
        >
          {text}
        </a>
      ) : (
        <span className="text-[10px] font-bold truncate tracking-wider">
          {text}
        </span>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Header - Swapped to bg-bg/80 */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-bg/80 backdrop-blur-xl border-b border-white/5 z-[60] flex items-center justify-between px-6">
        <span className="font-black text-xl text-white tracking-tighter">
          SJ<span className="text-primary">.</span>
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 bg-primary/10 text-primary rounded-xl border border-primary/20"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Main Sidebar - Swapped to bg-bg */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-bg text-text p-6 flex flex-col 
          border-r border-secondary/20 transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "translate-x-0 shadow-2xl shadow-primary/5"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="mb-8 group">
          <div className="relative inline-block mb-4">
            <div className="hidden md:block h-16 w-16 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/5 group-hover:rotate-3 transition-transform duration-300 ">
              <img
                src="/profile.webp"
                alt="Sajid Javaid"
                className="w-full h-full object-cover  transition-all duration-500"
              />
            </div>
            {/* Status Dot - Uses emerald but keep bg-bg for border */}
            <span className="absolute -bottom-1 -right-1 h-4 w-4 bg-emerald-500 border-4 border-bg rounded-full animate-pulse"></span>
          </div>

          <h1 className="text-xl font-extrabold tracking-tight text-white leading-tight mt-8 md:mt-0">
            Ch Muhammad <br />
            <span className="text-primary">Sajid Javaid</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-4 bg-primary/50"></div>
            <span className="text-secondary text-[9px] font-black uppercase tracking-[0.2em]">
              Fintech Expert
            </span>
          </div>
        </div>

        <nav className="flex-1 flex flex-col space-y-1 overflow-visible">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`
                group flex items-center gap-4 py-2.5 px-4 rounded-xl transition-all duration-300 border
                ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary border-primary/30 shadow-[inset_0_0_10px_rgba(236,204,104,0.05)]"
                    : "text-text/60 hover:text-white hover:bg-white/5 border-transparent"
                }
              `}
            >
              <span
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "group-hover:text-text"
                }`}
              >
                {item.icon}
              </span>
              <span className="font-bold text-[11px] tracking-wide uppercase">
                {item.label}
              </span>
              <div
                className={`ml-auto w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  activeSection === item.id
                    ? "bg-primary shadow-[0_0_12px_var(--color-primary)] scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              ></div>
            </a>
          ))}
        </nav>

        {/* Contact Box - Swapped to bg-card for 'lifted' look */}
        <div className="mt-6 p-4 bg-card/50 rounded-2xl border border-secondary/20 space-y-3">
          <ContactInfo
            icon={Mail}
            text="sajid.javaid63@gmail.com"
            href="mailto:sajid.javaid63@gmail.com"
          />
          <ContactInfo icon={Phone} text="+92 333 7777230" />
          <ContactInfo icon={MapPin} text="Lahore, Pakistan" />
          <a
            href="https://www.linkedin.com/in/sajid-javaid-4895b8146/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-primary text-bg rounded-lg text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 mt-2 shadow-lg shadow-primary/10"
          >
            <Linkedin size={12} /> LinkedIn
          </a>
        </div>
      </aside>

      {/* Overlay - Swapped to bg-bg/60 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-bg/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
