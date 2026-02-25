import React, { useEffect } from "react";
import { Calendar, Building2, CheckCircle2, Briefcase } from "lucide-react";
import AOS from "aos";

const WorkEntry = ({ role, company, date, bullets, delay = 0 }) => (
  <div
    className="relative pl-8 border-l border-secondary pb-12 last:pb-0 group transition-all duration-500 hover:-translate-y-1"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    {/* Timeline Connector */}
    <div className="absolute -left-[6.5px] top-1 w-3 h-3 bg-bg border border-secondary rounded-full group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-all duration-300"></div>

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
      <div>
        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {role}
        </h4>
        <div className="flex items-center gap-2 text-primary font-semibold mt-1">
          <Building2 size={14} />
          <span className="text-sm tracking-wide uppercase">{company}</span>
        </div>
      </div>

      <div className="inline-flex items-center gap-2 text-text text-[10px] font-bold bg-bg border border-secondary px-3 py-1.5 rounded-full uppercase tracking-widest self-start">
        <Calendar size={12} className="text-primary" />
        {date}
      </div>
    </div>

    {/* Bullet Points */}
    <div className="bg-bg border border-secondary rounded-2xl p-6 group-hover:bg-bg/40 group-hover:border-secondary/50 transition-all duration-500">
      <ul className="grid grid-cols-1 gap-4">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors"
          >
            <CheckCircle2
              size={16}
              className="text-primary/60 mt-0.5 shrink-0"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const workData = [
    {
      role: "Project Delivery Manager",
      company: "Aion Digital (a brand of Waqfe WLL)",
      date: "02/2022 - 02/2026",
      bullets: [
        "Responsible for leading and delivering multiple software projects, primarily for GCC-based FinTech clients.",
        "Ensured project alignment with business goals, regulatory requirements, and delivery timelines.",
        "Managed end-to-end software project lifecycles with a high degree of professionalism.",
      ],
    },
    {
      role: "Technical Project Manager",
      company: "InvoZone",
      date: "09/2020 - 02/2022",
      bullets: [
        "Responsible for managing software project delivery and leading cross-functional teams.",
        "Ensured effective utilization of resources to achieve project objectives within approved timelines and budgets.",
        "Handled multiple projects for international clients, serving as the primary point of coordination between clients and internal teams.",
        "Executed project planning, progress monitoring, risk management, and regular reporting to stakeholders.",
      ],
    },
    {
      role: "Senior Software Architect",
      company: "ZASA Solutions (Pvt.) Ltd.",
      date: "11/2018 - 09/2020",
      bullets: [
        "Led multiple digital transformation initiatives across healthcare solutions, Point of Sale (POS), and ERP platforms.",
        "Responsible for solution architecture and end-to-end delivery across all phases of the Software Development Life Cycle (SDLC).",
        "Designed and delivered enterprise-scale systems covering complete sales/purchase cycles for retail and wholesale financial operations.",
        "Provided technical leadership to cross-functional development and QA teams to ensure quality standards and alignment with business objectives.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Modemetric (Pvt) Limited",
      date: "08/2012 - 10/2018",
      bullets: [
        "Served as Associate Software Engineer and subsequently promoted to Senior Software Engineer.",
        "Developed modules using Microsoft .NET Framework, ASP.Net, MVC, and SQL Server.",
        "Utilized third-party components like DevExpress and Nevron for advanced software component design.",
        "Translated complex problems into precise technical solutions and software components.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 scroll-mt-20 border-b border-secondary"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16" data-aos="fade-right">
        <div className="p-3 bg-bg border-secondary rounded-xl text-primary">
          <Briefcase size={24} />
        </div>
        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
            Career Journey
          </h2>
          <h3 className="text-2xl font-bold text-white">
            Professional Experience
          </h3>
        </div>
      </div>

      {/* Work Entries */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {workData.map((item, index) => (
          <WorkEntry
            key={index}
            role={item.role}
            company={item.company}
            date={item.date}
            bullets={item.bullets}
            delay={index * 100} // stagger animation
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;