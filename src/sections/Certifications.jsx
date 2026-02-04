import React, { useState } from "react";
import { X, Trophy } from "lucide-react";

const CertificateCard = ({ title, issuer, certId, index, image, onOpen }) => (
  <div
    onClick={onOpen}
    className="group relative bg-[#393E46]/20 border border-white/5 rounded-xl overflow-hidden hover:border-[#00adb5]/40 transition-all duration-300 cursor-pointer"
  >
    {/* Adjusted Aspect Ratio: Changed from 2/1 to 16/10 for more height */}
    <div className="relative aspect-16/10 w-full overflow-hidden bg-[#222831]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#222831] via-transparent to-transparent opacity-40"></div>
    </div>

    {/* Content Area */}
    <div className="p-5">
      {" "}
      {/* Increased padding slightly for the larger card */}
      <h5 className="text-[14px] font-bold text-white group-hover:text-[#00adb5] transition-colors leading-tight line-clamp-1 mb-4">
        {title}
      </h5>
      <div className="flex justify-between items-center pt-3 border-t border-white/5">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          {issuer}
        </p>
        <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded">
          {certId}
        </span>
      </div>
    </div>
  </div>
);

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certs = [
    {
      title: "Project Management Professional",
      issuer: "PMI",
      certId: "PMP-AI-2024",
      image: "/cert/pmp.jpeg",
    },
    {
      title: "PMI – Generative AI For PMs",
      issuer: "PMI",
      certId: "AI-GEN-2024",
      image: "/cert/G_AI.jpg",
    },
    {
      title: "Microsoft Certified Partner (MCP)",
      issuer: "Microsoft",
      certId: "MSFT-8892",
      image: "/cert/mcp.jpg",
    },
    {
      title: "HTML5 with JS & CSS3 Specialist",
      issuer: "Microsoft",
      certId: "E124-0240",
      image: "/cert/MS.jpg",
    },
    // {
    //   title: "Python Programming",
    //   issuer: "TAU",
    //   certId: "2019c625",
    //   image: "/certs/python.jpg",
    // },
    // {
    //   title: "Introduction to Cypress",
    //   issuer: "TAU",
    //   certId: "c2797374",
    //   image: "/certs/cypress.jpg",
    // },
  ];

  return (
    <section id="certificates" className="py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[#00adb5] mb-4">
              <Trophy size={18} />
              <span className="text-xs font-bold tracking-[0.4em] uppercase">
                Credentials
              </span>
            </div>
            <h3 className="text-5xl lg:text-5xl font-black text-white tracking-tighter leading-[0.9]">
              Certifications & <br />
              <span className="text-slate-500">Expertise.</span>
            </h3>
          </div>

          <div className="lg:max-w-sm lg:text-right">
            <p className="text-slate-400 text-md leading-relaxed">
              A collection of professional validations across Project
              Management, AI Integration, and Quality Assurance.
            </p>
          </div>
        </div>

        {/* Updated Grid: Switched to 2 columns on desktop to make cards wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <CertificateCard
              key={index}
              index={index}
              {...cert}
              onOpen={() => setSelectedImg(cert.image)}
            />
          ))}
        </div>
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#222831]/98 backdrop-blur-md"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white/40 hover:text-[#00adb5] transition-colors">
            <X size={44} />
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg}
              className="w-full h-auto rounded-lg shadow-2xl border border-white/5"
              alt="Full View"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
