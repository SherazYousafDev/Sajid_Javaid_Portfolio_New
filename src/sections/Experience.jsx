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
      role: "Project / QA Manager",
      company: "AION Digital",
      date: "02/2022 - Present",
      bullets: [
        "Review BRDs and collaborate closely with team members and managers in an Agile environment to minimize gaps.",
        "Manage Sprint planning, Iteration kickoff, Retrospectives, and Release Readiness.",
        "Expertise in defining project goals, scope, approach, and overall task plans including critical path clarity.",
        "Conduct periodic reviews on project status with Team, Executive level management, and clients.",
        "Coach and motivate team members while promoting mutual support and ownership.",
      ],
    },
    {
      role: "Project Manager",
      company: "InvoZone",
      date: "09/2020 - 01/2022",
      bullets: [
        "Designed and executed effective project management processes to ensure delivery within time and budget.",
        "Managed 8 projects of varied levels simultaneously through effective time management.",
        "Coordinated with clients via daily status reports and weekly demos to address concerns.",
        "Improved Sprint planning via iteration kickoffs, retrospectives, and standups for risk analysis.",
        "Minimized functionality gaps by reviewing BRDs closely with BA and development teams.",
      ],
    },
    {
      role: "Senior SQA Engineer (APM Role)",
      company: "Zasa Solutions (Pvt.) Ltd",
      date: "10/2018 - 09/2020",
      bullets: [
        "Communicated with stakeholders in group sessions to collect project details and specifications.",
        "Analyzed user stories to create comprehensive test plans and performed functional, regression, and E2E testing.",
        "Prepared feasibility reports by converting raw specifications into realistic functional requirements.",
        "Automated stable web modules by writing scripts in Cypress with TestNG.",
        "Provided cost-effective and practical solutions to meet market standards.",
      ],
    },
    {
      role: "Test Automation Engineer",
      company: "Modemetric Pvt Ltd",
      date: "08/2016 - 10/2018",
      bullets: [
        "Transitioned to QA automation to minimize manual effort and enhance test coverage.",
        "Automated 'BI - Predictive Analysis' web modules using Selenium and statistical formulas.",
        "Performed Web-based testing including GUI, SIT, and UAT.",
        "Created JIRA dashboards to track daily and weekly progress.",
        "Scheduled weekly demo sessions with clients to align with Agile deliverables.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Modemetric Pvt Ltd",
      date: "08/2014 - 08/2016",
      bullets: [
        "Involved in Business/Functional requirement Analysis, Overall Design, and Use-Case analysis.",
        "Developed 'Predictive Analysis' modules using .NET technologies and R language.",
        "Worked on DevStudio tools for CRUD operations on meta-data changes and hierarchical grids.",
        "Developed Export-Import routine tools to help configurators export Meta to clients.",
        "Participated in internal and client meetings for demonstrations and feedback.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Modemetric Pvt Ltd",
      date: "08/2012 - 08/2014",
      bullets: [
        "Developed Web and desktop application components for the LANTERN product.",
        "Implemented statistical formulas in the 'Predictive Analysis' module using .NET and R.",
        "Worked on field selection and period option modules for report generation with predefined filters.",
        "Utilized DevStudio to perform CRUD operations on system meta-data and lookups.",
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
