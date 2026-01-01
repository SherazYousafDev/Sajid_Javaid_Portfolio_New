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
    className="group bg-card backdrop-blur-md p-8 rounded-2xl border border-secondary hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] cursor-pointer"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-bg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <h4 className="font-bold text-primary tracking-tight text-lg">{title}</h4>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((s, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-card text-text text-[11px] font-bold uppercase tracking-wider rounded-lg border border-slate-800 group-hover:border-slate-700 group-hover:text-primary transition-all"
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
    AOS.refresh(); // refresh for mapped components
  }, []);

  return (
    <section
      id="skills"
      className="py-20 scroll-mt-20 border-b border-secondary"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16" data-aos="fade-right">
        <div className="p-3 bg-bg rounded-xl text-primary  shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Zap size={24} />
        </div>
        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
            Expertise & Stack
          </h2>
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillGroup
          title="Project Management"
          icon={Briefcase}
          delay={0}
          skills={[
            "JIRA",
            "MS Project",
            "HP ALM",
            "ASANA",
            "Monday",
            "Favro",
            "Trello",
            "ClickUp",
            "MS Excel",
          ]}
        />

        <SkillGroup
          title="Data & DB"
          icon={Database}
          delay={100}
          skills={[
            "MS SQL Server 2019",
            "PostgreSQL",
            "MS Access",
            "SQLite",
            "Table Plus",
            "MySQL",
            "LINQ",
            "Entity Framework",
          ]}
        />

        <SkillGroup
          title="QA Test / Automation"
          icon={Activity}
          delay={200}
          skills={[
            "Cypress",
            "Selenium",
            "Appium",
            "BrowserStack",
            "Postman",
            "JMeter",
            "SoapUI",
            "Vysor",
            "Swagger",
            "SonarQube",
          ]}
        />

        <SkillGroup
          title="Development"
          icon={Code}
          delay={300}
          skills={[
            ".Net Framework",
            "VB.Net",
            "C#",
            "ASP.NET MVC",
            "Microservices",
            "Web API",
            "JavaScript",
            "CSS",
            "JAVA (Basic)",
            "Python (Basic)",
            "React JS (Familiar)",
          ]}
        />

        <SkillGroup
          title="CI/CD"
          icon={Terminal}
          delay={400}
          skills={[
            "SonarQube",
            "Jenkins",
            "Maven",
            "Nuget",
            "NUnit",
            "TFS",
            "GIT",
          ]}
        />

        <SkillGroup
          title="Designs, Prototyping & Others"
          icon={PenTool}
          delay={500}
          skills={[
            "Figma",
            "Adobe XD",
            "Miro",
            "DevExpress Tools",
            "Github",
            "VS Code",
            "R Studio",
            "AWS S3",
            "DAON (OCR)",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
