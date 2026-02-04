import React, { useEffect } from "react";
import { MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      {/* Section Header */}
      <div
        className="flex items-center gap-4 mb-16"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 shadow-[0_0_15px_rgba(0,173,181,0.1)]">
          <MessageSquare size={24} />
        </div>
        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
            Get In Touch
          </h2>
          <h3 className="text-3xl font-bold text-white">Contact Me</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Direct Contact Info */}
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-2xl font-bold text-white mb-4">
            Let's discuss your next{" "}
            <span className="text-primary">Fintech</span> project.
          </h4>
          <p className="text-text leading-relaxed mb-8 opacity-80 max-w-md">
            Open to global opportunities in Project Management, Delivery, and QA
            Leadership. Reach out via form or direct contact methods.
          </p>

          <div className="space-y-6">
            <div
              className="flex items-center gap-4 group"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="p-4 bg-card/20 border border-secondary rounded-2xl text-primary group-hover:border-primary/50 transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Email
                </p>
                <p className="text-white font-medium">
                  sajid.javaid63@gmail.com
                </p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 group"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="p-4 bg-card/20 border border-secondary rounded-2xl text-primary group-hover:border-primary/50 transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Phone
                </p>
                <p className="text-white font-medium">+92 333 7777230</p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 group"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="p-4 bg-card/20 border border-secondary rounded-2xl text-primary group-hover:border-primary/50 transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Location
                </p>
                <p className="text-white font-medium">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          className="bg-card/10 backdrop-blur-md border border-secondary p-8 rounded-3xl shadow-xl relative overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

          <form
            className="space-y-5 relative z-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-bg/50 border border-secondary rounded-xl px-4 py-3 text-white placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-bg/50 border border-secondary rounded-xl px-4 py-3 text-white placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text uppercase tracking-widest ml-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-bg/50 border border-secondary rounded-xl px-4 py-3 text-white placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text uppercase tracking-widest ml-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can I help you?"
                className="w-full bg-bg/50 border border-secondary rounded-xl px-4 py-3 text-white placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-primary hover:bg-primary/90 text-bg font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]">
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
