import React from "react";
import {
  Briefcase,
  Layers,
  Zap,
  Terminal,
  Database,
  Code,
  Activity,
  PenTool,
} from "lucide-react";

const SkillGroup = ({ title, skills, icon: Icon }) => (
  <div className="group bg-[#0f172a]/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 hover:scale-103 cursor-pointer">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-slate-800/50 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <h4 className="font-bold text-white tracking-tight text-lg">{title}</h4>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((s, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-slate-900/50 text-slate-400 text-[11px] font-bold uppercase tracking-wider rounded-lg border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-200 transition-all"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 scroll-mt-20 border-b border-slate-900"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-indigo-600/10 rounded-xl text-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Zap size={24} />
        </div>
        <div>
          <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
            Expertise & Stack
          </h2>
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Category 1: Project Management */}
        <SkillGroup
          title="Project Management"
          icon={Briefcase}
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

        {/* Category 2: Data & DB */}
        <SkillGroup
          title="Data & DB"
          icon={Database}
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

        {/* Category 3: QA Test / Automation */}
        <SkillGroup
          title="QA Test / Automation"
          icon={Activity}
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

        {/* Category 4: Development */}
        <SkillGroup
          title="Development"
          icon={Code}
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

        {/* Category 5: CI/CD */}
        <SkillGroup
          title="CI/CD"
          icon={Terminal}
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

        {/* Category 6: Designs & Prototyping / Others */}
        <SkillGroup
          title="Designs, Prototyping & Others"
          icon={PenTool}
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
