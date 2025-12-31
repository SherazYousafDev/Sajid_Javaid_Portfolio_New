import React from "react";
import { MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <div className="p-3 bg-indigo-600/10 rounded-xl text-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <MessageSquare size={24} />
        </div>
        <div>
          <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-1">
            Get In Touch
          </h2>
          <h3 className="text-2xl font-bold text-white">Contact Me</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Direct Contact Info */}
        <div className="space-y-8">
          <h4 className="text-xl font-bold text-white mb-4">
            Let's discuss your next{" "}
            <span className="text-indigo-500">Fintech</span> project.
          </h4>
          <p className="text-slate-400 leading-relaxed mb-8">
            Open to global opportunities in Project Management, Delivery, and QA
            Leadership.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-indigo-400 group-hover:border-indigo-500/50 transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Email
                </p>
                <p className="text-slate-200 font-medium">
                  sajid.javaid63@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-indigo-400 group-hover:border-indigo-500/50 transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Phone
                </p>
                <p className="text-slate-200 font-medium">+92 333 7777230</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-indigo-400 group-hover:border-indigo-500/50 transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Location
                </p>
                <p className="text-slate-200 font-medium">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#0f172a]/30 backdrop-blur-md border border-slate-800 p-8 rounded-3xl shadow-xl">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can I help you?"
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 group">
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
