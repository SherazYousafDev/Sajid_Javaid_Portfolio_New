import React, { useEffect } from "react";
import AOS from "aos";
import {
  Briefcase,
  Zap,
  Terminal,
  Database,
  Code,
  Activity,
  PenTool,
  
} from "lucide-react";

/* =======================
    Skill Group Component
======================= */
const SkillGroup = ({ title, skills, icon: Icon, delay = 0 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="group relative bg-white/[0.03] backdrop-blur-xl p-7 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden"
  >
    {/* Decorative background glow on hover */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="relative p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/20">
          <Icon size={22} />
        </div>
        <h4 className="font-extrabold text-white tracking-tight text-lg group-hover:text-primary transition-colors">
          {title}
        </h4>
      </div>
      
    </div>

    <div className="flex flex-wrap gap-2.5">
      {skills.map((s, i) => (
        <span
          key={i}
          className="px-3.5 py-1.5 bg-white/5 text-white/70 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/5 group-hover:border-primary/20 group-hover:text-white transition-all duration-300 hover:bg-primary/10"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

/* =======================
    Skills Section
======================= */
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 scroll-mt-20 border-b border-white/5 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-16" data-aos="fade-right">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-primary"></div>
          <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px]">
            Technical Arsenal
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Expertise &{" "}
          <span className="italic font-light text-primary">Tech Stack.</span>
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillGroup
          title="Project Mgmt"
          icon={Briefcase}
          delay={0}
          skills={[
            "JIRA",
            "MS Project",
            "HP ALM",
            "Asana",
            "Monday",
            "Trello",
            "ClickUp",
          ]}
        />

        <SkillGroup
          title="Data & DB"
          icon={Database}
          delay={100}
          skills={[
            "SQL Server",
            "PostgreSQL",
            "SQLite",
            "Table Plus",
            "MySQL",
            "LINQ",
            "EF Core",
          ]}
        />

        <SkillGroup
          title="QA & Automation"
          icon={Activity}
          delay={200}
          skills={[
            "Cypress",
            "Selenium",
            "Appium",
            "Postman",
            "JMeter",
            "SoapUI",
            "Swagger",
          ]}
        />

        <SkillGroup
          title="Development"
          icon={Code}
          delay={300}
          skills={[
            ".Net",
            "C#",
            "VB.Net",
            "ASP.NET MVC",
            "Microservices",
            "Web API",
            "React JS",
          ]}
        />

        <SkillGroup
          title="DevOps & CI/CD"
          icon={Terminal}
          delay={400}
          skills={[
            "Jenkins",
            "SonarQube",
            "Maven",
            "Nuget",
            "NUnit",
            "TFS",
            "Git",
          ]}
        />

        <SkillGroup
          title="Design & Tools"
          icon={PenTool}
          delay={500}
          skills={[
            "Figma",
            "Adobe XD",
            "Miro",
            "DevExpress",
            "Github",
            "VS Code",
            "AWS S3",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
