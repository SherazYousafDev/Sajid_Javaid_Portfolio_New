import React from "react";

const MarqueeRow = ({ items, direction = "left" }) => {
  // Triple items for absolute seamlessness on ultra-wide screens
  const tripleItems = [...items, ...items, ...items];
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-row relative w-full overflow-hidden py-3 flex">
      <div className={`flex whitespace-nowrap items-center ${animationClass}`}>
        {tripleItems.map((item, index) => (
          <div
            key={index}
            className={`mx-3 px-10 py-5 rounded-full border text-[13px] font-black uppercase tracking-[0.25em] transition-all duration-700
              ${
                index % 2 === 0
                  ? "bg-primary text-[#222831] border-primary shadow-[0_0_25px_rgba(0,173,181,0.2)]"
                  : "bg-white/3 text-white border-white/10 backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.07]"
              }
            `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSlider = () => {
  const row1 = [
    "Project Management",
    "Fintech Strategy",
    "SDLC Architecture",
    "Agile Methodology",
    "QA Leadership",
    "Stakeholder Relations",
    "Change Management",
  ];

  const row2 = [
    "Market Positioning",
    "Strategic Delivery",
    "Automation Frameworks",
    "Risk Mitigation",
    "Product Validation",
    "Operational Excellence",
    "Executive Reporting",
  ];

  return (
    <section id="skills" className="w-full   overflow-hidden relative">
      <div className="flex flex-col gap-6 relative z-10">
        {/* Moving Right */}
        <MarqueeRow items={row1} direction="right" />

        {/* Moving Left */}
        <MarqueeRow items={row2} direction="left" />

        {/* Edge Fades: This makes it look "Professional" */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#222831] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#222831] to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default SkillsSlider;
