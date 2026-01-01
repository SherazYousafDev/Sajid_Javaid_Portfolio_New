import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Award,
  CheckCircle,
  School,
  Calendar,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure this is imported

const EducationCard = ({ title, school, date, delay = 0 }) => (
  <div
    className="group relative pl-8 border-l-2 border-secondary hover:border-primary transition-all duration-500 py-4 mb-4 bg-white/[0.02] rounded-r-2xl pr-6"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="absolute -left-[9px] top-6 w-4 h-4 bg-bg/80 border-2 border-secondary rounded-full group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all"></div>
    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
      <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
        {title}
      </h4>
      <span className="flex items-center gap-2 text-indigo-400 text-[10px] font-bold bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-widest">
        <Calendar size={12} /> {date}
      </span>
    </div>
    <p className="text-text font-semibold mb-1 flex items-center gap-2">
      <School size={16} className="text-text" /> {school}
    </p>
  </div>
);

const CertificateItem = ({ title, issuer, certId, delay = 0 }) => (
  <div
    className="flex flex-col p-5 bg-bg/40 border border-secondary rounded-2xl hover:border-primary/50 hover:bg-slate-800/40 transition-all group h-full"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="p-3 bg-bg/50 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 w-fit mb-4">
      <CheckCircle size={20} />
    </div>
    <h5 className="text-sm font-bold text-white leading-tight mb-2">{title}</h5>
    <p className="text-xs text-text font-medium mt-auto italic">
      {issuer}
    </p>
    {certId && (
      <span className="text-[9px] font-mono text-primary/50 mt-2 uppercase">
        ID: {certId}
      </span>
    )}
  </div>
);

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
    AOS.refresh();
  }, []);

  return (
    <section
      id="education"
      className="py-24 scroll-mt-20 border-b border-secondary"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-3">
          Qualifications
        </h2>
        <h3 className="text-3xl font-bold text-white mb-10">
          Academic & Professional
        </h3>

        {/* Premium Tab Switcher */}
        <div className="flex p-1.5 bg-bg/80 backdrop-blur-md rounded-2xl border border-secondary w-full max-w-md shadow-2xl">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "education"
                ? "bg-primary text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <GraduationCap size={18} /> Education
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-primary text-white shadow-lg shadow-indigo-500/20"
                : "text-slate-400 hover:text-primary hover:bg-bg/5"
            }`}
          >
            <Award size={18} /> Certificates
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto">
        {activeTab === "education" ? (
          <div className="max-w-3xl mx-auto space-y-4">
            <EducationCard
              title="MS in Computer Science"
              school="National College of Business Administration & Economics"
              date="2020 - 2022"
              delay={100}
            />
            <EducationCard
              title="Master's in Information Technology"
              school="Punjab University College of Information Technology"
              date="2010 - 2012"
              delay={200}
            />
            <EducationCard
              title="Bachelors of Commerce"
              school="University of Punjab"
              date="2008 - 2010"
              delay={300}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CertificateItem
              title="PMI – Generative AI For PMs"
              issuer="Project Management Institute"
              delay={100}
            />
            <CertificateItem
              title="Microsoft Certified Partner (MCP)"
              issuer="Microsoft"
              delay={200}
            />
            <CertificateItem
              title="HTML5 with JS & CSS3 Specialist"
              issuer="Microsoft"
              certId="E124-0240"
              delay={300}
            />
            <CertificateItem
              title="Python Programming"
              issuer="Test Automation University"
              certId="2019c625"
              delay={400}
            />
            <CertificateItem
              title="Introduction to Cypress"
              issuer="Test Automation University"
              certId="c2797374"
              delay={500}
            />
            <CertificateItem
              title="Certified .Net Specialist"
              issuer="EVS Learning Institute"
              delay={600}
            />
            <CertificateItem
              title="Web Engineering (PHP)"
              issuer="University of Punjab"
              delay={700}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
