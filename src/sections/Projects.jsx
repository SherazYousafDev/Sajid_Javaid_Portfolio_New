import React from "react";
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

const ProjectCard = ({ title, desc, icon: Icon }) => (
  <div className="group p-8 bg-[#0f172a]/40 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.05)] transition-all duration-500">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-slate-800/50 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <ExternalLink
        size={18}
        className="text-slate-600 group-hover:text-indigo-400 transition-colors"
      />
    </div>
    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
      {title}
    </h4>
    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
      {desc}
    </p>
  </div>
);

const Projects = () => (
  <section
    id="projects"
    className="py-20 scroll-mt-20 border-b border-slate-900"
  >
    {/* Section Header */}
    <div className="flex items-center gap-4 mb-16">
      <div className="p-3 bg-indigo-600/10 rounded-xl text-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
        <Trophy size={24} />
      </div>
      <div>
        <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
          Key Milestones
        </h2>
        <h3 className="text-2xl font-bold text-white">Major Achievements</h3>
      </div>
    </div>

    {/* Project Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        icon={CreditCard}
        title="Axe Credit Portal"
        desc="Participated in discussions for scope and workshops with Axefinance ACP and Deloitte under Accenture leadership for new Al-Rajhi Bank modules."
      />
      <ProjectCard
        icon={Smartphone}
        title="Digital Onboarding"
        desc="Led the stability of DAON SDK upgradation for Retail Banking, improving document scanning and liveliness for selfie biometrics."
      />
      <ProjectCard
        icon={Globe}
        title="JS BANK (Bahrain)"
        desc="Successfully managed end-to-end execution and QA for Trade Finance modules, including LC Initialization, UAM, and Bulk Transfers."
      />
      <ProjectCard
        icon={Briefcase}
        title="Corporate Banking KFHB"
        desc="Managed the timely delivery of Corporate Onboarding and post-onboarding digital banking features."
      />
      <ProjectCard
        icon={Shield}
        title="Benefit Payment (CAS/PSP)"
        desc="Managed the incorporation of new Benefit requirements for CAS and PSP beneficiaries and billers."
      />
      <ProjectCard
        icon={Smartphone}
        title="Finance Applications"
        desc="Delivered native iOS and Android Retail Banking apps with installment calculators for Auto, Real Estate, and Mazaya applications."
      />
      <ProjectCard
        icon={Database}
        title="Financial Matrix (HRM & ERP)"
        desc="Explored SAP B1, Oracle, and Odoo ERP systems to finalize features via comparison reports for the next revamp version."
      />
      <ProjectCard
        icon={Activity}
        title="Joompa Fitness App"
        desc="Led PMO and QA efforts for a Malaysia-based AI Trainer App, ensuring functionality within budget, scope, and time."
      />
      <ProjectCard
        icon={Briefcase}
        title="Vision Bank (AGTB)"
        desc="Finalized Phase 1 and Phase 2 requirements for Account Services, UAM, and Bulk Transfers for Abu Dhabi Global Market bank."
      />
      <ProjectCard
        icon={Layout}
        title="Medicines POS System"
        desc="Conducted market research and coordinated cross-functional teams to implement intuitive design improvements for user adoption."
      />
    </div>
  </section>
);

export default Projects;
