import React, { useEffect } from "react";
import {
  Trophy,
  ExternalLink,
  Shield,
  CreditCard,
  Smartphone,
  Briefcase,
  Activity,
  Globe,
  Database,
  Layout,
} from "lucide-react";
import AOS from "aos";

const ProjectCard = ({ title, desc, icon: Icon, delay = 0 }) => (
  <div
    className="group p-8 bg-bg/40 backdrop-blur-md rounded-2xl border border-secondary hover:border-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.05)] transition-all duration-500"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-slate-800/50 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <ExternalLink
        size={18}
        className="text-slate-600 group-hover:text-primary transition-colors"
      />
    </div>
    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
      {title}
    </h4>
    <p className="text-text text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
      {desc}
    </p>
  </div>
);

const Projects = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS after render
  }, []);

  const projectData = [
    {
      icon: CreditCard,
      title: "Axe Credit Portal",
      desc: "Participated in discussions for scope and workshops with Axefinance ACP and Deloitte under Accenture leadership for new Al-Rajhi Bank modules.",
    },
    {
      icon: Smartphone,
      title: "Digital Onboarding",
      desc: "Led the stability of DAON SDK upgradation for Retail Banking, improving document scanning and liveliness for selfie biometrics.",
    },
    {
      icon: Globe,
      title: "JS BANK (Bahrain)",
      desc: "Successfully managed end-to-end execution and QA for Trade Finance modules, including LC Initialization, UAM, and Bulk Transfers.",
    },
    {
      icon: Briefcase,
      title: "Corporate Banking KFHB",
      desc: "Managed the timely delivery of Corporate Onboarding and post-onboarding digital banking features.",
    },
    {
      icon: Shield,
      title: "Benefit Payment (CAS/PSP)",
      desc: "Managed the incorporation of new Benefit requirements for CAS and PSP beneficiaries and billers.",
    },
    {
      icon: Smartphone,
      title: "Finance Applications",
      desc: "Delivered native iOS and Android Retail Banking apps with installment calculators for Auto, Real Estate, and Mazaya applications.",
    },
    {
      icon: Database,
      title: "Financial Matrix (HRM & ERP)",
      desc: "Explored SAP B1, Oracle, and Odoo ERP systems to finalize features via comparison reports for the next revamp version.",
    },
    {
      icon: Activity,
      title: "Joompa Fitness App",
      desc: "Led PMO and QA efforts for a Malaysia-based AI Trainer App, ensuring functionality within budget, scope, and time.",
    },
    {
      icon: Briefcase,
      title: "Vision Bank (AGTB)",
      desc: "Finalized Phase 1 and Phase 2 requirements for Account Services, UAM, and Bulk Transfers for Abu Dhabi Global Market bank.",
    },
    {
      icon: Layout,
      title: "Medicines POS System",
      desc: "Conducted market research and coordinated cross-functional teams to implement intuitive design improvements for user adoption.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 scroll-mt-20 border-b border-secondary"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16" data-aos="fade-right">
        <div className="p-3 bg-bg/10 rounded-xl text-primary shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <Trophy size={24} />
        </div>
        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
            Key Milestones
          </h2>
          <h3 className="text-2xl font-bold text-white">Major Achievements</h3>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            desc={p.desc}
            icon={p.icon}
            delay={index * 100} // stagger animation
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
