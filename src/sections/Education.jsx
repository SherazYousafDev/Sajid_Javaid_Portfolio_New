import React, { useEffect } from "react";
import { School, Calendar, Award } from "lucide-react";
import AOS from "aos";

const Education = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const eduData = [
    {
      title: "MS in Computer Science",
      school: "National College of Business Administration & Economics",
      date: "2020 - 2022",
      description: "Specialized in Software Engineering & Data Systems.",
    },
    {
      title: "Master's in Information Technology",
      school: "Punjab University (PUCIT)",
      date: "2010 - 2012",
      description: "Focused on Enterprise Systems and IT Infrastructure.",
    },
    {
      title: "Bachelors of Commerce",
      school: "University of Punjab",
      date: "2008 - 2010",
      description: "Foundation in Business Management & Economics.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-3">
          Academic Foundation
        </h2>
        <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Education
        </h3>
        <div className="h-1 w-12 bg-primary mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Vertical Line - Perfectly Centered */}
        <div className="absolute left-[31px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-secondary/40 to-transparent"></div>

        <div className="space-y-12">
          {eduData.map((edu, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between group"
            >
              {/* Desktop Left Side */}
              <div className="hidden lg:flex w-[45%] justify-end text-right">
                {index % 2 === 0 && (
                  <div className="pr-10" data-aos="fade-right">
                    <span className="text-primary font-bold text-sm tracking-widest block mb-2">
                      {edu.date}
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-slate-400 flex items-center justify-end gap-2">
                      {edu.school}{" "}
                      <School size={18} className="text-primary/60" />
                    </p>
                  </div>
                )}
              </div>

              {/* Central Chronology Circle */}
              <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-[#222831] border-2 border-secondary group-hover:border-primary group-hover:scale-125 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
              </div>

              {/* Desktop Right Side / Mobile Full Width */}
              <div className="w-full lg:w-[45%] pl-12 lg:pl-10">
                {(index % 2 !== 0 || window.innerWidth < 1024) && (
                  <div className="lg:text-left" data-aos="fade-left">
                    {/* Mobile Date Header (Hidden on Desktop) */}
                    <span className="lg:hidden text-primary font-bold text-xs tracking-widest block mb-1">
                      {edu.date}
                    </span>

                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {edu.title}
                    </h4>

                    {/* Only show content here for right-aligned items on desktop or ALL items on mobile */}
                    {index % 2 !== 0 ? (
                      <p className="text-slate-400 flex items-center gap-2 font-medium">
                        <School size={18} className="text-primary/60" />{" "}
                        {edu.school}
                      </p>
                    ) : (
                      <div className="lg:hidden">
                        <p className="text-slate-400 flex items-center gap-2 font-medium">
                          <School size={18} className="text-primary/60" />{" "}
                          {edu.school}
                        </p>
                      </div>
                    )}

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed italic border-l border-primary/20 pl-4">
                      {edu.description}
                    </p>
                  </div>
                )}

                {/* Desktop logic for the "Right-Side gap fill" for Left-aligned items */}
                {index % 2 === 0 && (
                  <div className="hidden lg:block">
                    {/* Empty space to keep grid stable */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
