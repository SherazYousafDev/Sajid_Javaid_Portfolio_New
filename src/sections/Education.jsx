import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  CheckCircle,
  School,
  Calendar,
} from "lucide-react";

const EducationCard = ({ title, school, date, location }) => (
  <div className="group relative pl-8 border-l-2 border-slate-800 hover:border-indigo-500 transition-all duration-500 py-4 mb-4 bg-white/[0.02] rounded-r-2xl pr-6">
    <div className="absolute -left-[9px] top-6 w-4 h-4 bg-[#050505] border-2 border-slate-700 rounded-full group-hover:border-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all"></div>
    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
      <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
        {title}
      </h4>
      <span className="flex items-center gap-2 text-indigo-400 text-[10px] font-bold bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full uppercase tracking-widest">
        <Calendar size={12} /> {date}
      </span>
    </div>
    <p className="text-slate-300 font-semibold mb-1 flex items-center gap-2">
      <School size={16} className="text-slate-500" /> {school}
    </p>
  </div>
);

const CertificateItem = ({ title, issuer, certId }) => (
  <div className="flex flex-col p-5 bg-[#0f172a]/40 border border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-800/40 transition-all group h-full">
    <div className="p-3 bg-slate-800/50 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 w-fit mb-4">
      <CheckCircle size={20} />
    </div>
    <h5 className="text-sm font-bold text-white leading-tight mb-2">{title}</h5>
    <p className="text-xs text-slate-500 font-medium mt-auto italic">
      {issuer}
    </p>
    {certId && (
      <span className="text-[9px] font-mono text-indigo-500/50 mt-2 uppercase">
        ID: {certId}
      </span>
    )}
  </div>
);

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="education"
      className="py-24 scroll-mt-20 border-b border-slate-900"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-3">
          Qualifications
        </h2>
        <h3 className="text-3xl font-bold text-white mb-10">
          Academic & Professional
        </h3>

        {/* Premium Tab Switcher */}
        <div className="flex p-1.5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 w-full max-w-md shadow-2xl">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "education"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <GraduationCap size={18} /> Education
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <Award size={18} /> Certificates
          </button>
        </div>
      </div>

      {/* Tab Content with Animation */}
      <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === "education" ? (
          <div className="max-w-3xl mx-auto space-y-4">
            <EducationCard
              title="MS in Computer Science"
              school="National College of Business Administration & Economics"
              date="2020 - 2022"
            />
            <EducationCard
              title="Master's in Information Technology"
              school="Punjab University College of Information Technology"
              date="2010 - 2012"
            />
            <EducationCard
              title="Bachelors of Commerce"
              school="University of Punjab"
              date="2008 - 2010"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CertificateItem
              title="PMI – Generative AI For PMs"
              issuer="Project Management Institute"
            />
            <CertificateItem
              title="Microsoft Certified Partner (MCP)"
              issuer="Microsoft"
            />
            <CertificateItem
              title="HTML5 with JS & CSS3 Specialist"
              issuer="Microsoft"
              certId="E124-0240"
            />
            <CertificateItem
              title="Python Programming"
              issuer="Test Automation University"
              certId="2019c625"
            />
            <CertificateItem
              title="Introduction to Cypress"
              issuer="Test Automation University"
              certId="c2797374"
            />
            <CertificateItem
              title="Certified .Net Specialist"
              issuer="EVS Learning Institute"
            />
            <CertificateItem
              title="Web Engineering (PHP)"
              issuer="University of Punjab"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
