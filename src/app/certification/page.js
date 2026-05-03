"use client";

import React from "react";
import {
  ShieldCheck,
  Code2,
  Cpu,
  Users,
  ExternalLink,
  Terminal,
  Award,
  Download,
  Mail,
  ChevronRight
} from "lucide-react";

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <main className="max-w-6xl mx-auto p-4 md:p-12 pt-24">

        {/* --- HEADER --- */}
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">
            Professional Credentials
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Verified certifications validating technical expertise in Software Engineering, 
            AI, and IT Infrastructure.
          </p>
        </div>

        {/* --- TOP CERTIFICATES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topSixCerts.map((cert, index) => {
            const Icon = icons[cert.icon];

            return (
              <div
                key={index}
                className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-sm"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 z-10" />
                  <img
                    src={`/certificates/${cert.imageName}`}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Certificate+Preview";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-blue-600" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-50 text-blue-600 p-1.5 rounded-lg">
                      <Icon size={16} />
                    </span>
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-emerald-600 font-bold text-xs mb-4 flex items-center gap-1">
                    <ShieldCheck size={12} /> {cert.issuer}
                  </p>

                  <p className="text-slate-500 text-sm mb-8 leading-relaxed h-12 overflow-hidden">
                    {cert.desc}
                  </p>

                  <div className="flex justify-between items-center pt-5 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold">Issued</span>
                      <span className="text-xs font-bold text-slate-700">{cert.date}</span>
                    </div>
                    <a
                      href={`/certificates/${cert.imageName}`}
                      target="_blank"
                      className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200"
                    >
                      VIEW FULL
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- ADDITIONAL LIST --- */}
        <div className="mt-32 mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Additional certificates</h2>
            <div className="h-[2px] flex-grow bg-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moreCerts.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform"></div>
                <p className="text-sm font-bold text-slate-600 group-hover:text-slate-900">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- CLEANED FOOTER --- */}
      <footer className="bg-[#020817] text-slate-400 py-16 px-8 mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl rotate-3 shadow-lg shadow-emerald-500/20"></div>
              <span className="text-2xl font-black text-white tracking-tight">
                Loneliness <span className="text-emerald-500">ndalowa</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Frontend Developer creating high-performance, amazing digital experiences with modern web technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Profile', 'Courses', 'Education', 'Skills', 'Certification'].map((link) => (
                <li key={link} className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer group">
                  <ChevronRight size={14} className="text-slate-700 group-hover:text-emerald-400" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Resources</h4>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500 transition-all group">
                <span className="flex items-center gap-3 text-sm text-white">
                  <Download size={18} className="text-blue-500" /> Download CV
                </span>
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-emerald-500 transition-all group">
                <span className="flex items-center gap-3 text-sm text-white">
                  <Mail size={18} className="text-emerald-500" /> Contact Me
                </span>
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

const icons = { Terminal, Code2, Cpu, Users, ShieldCheck, Award };

const topSixCerts = [
  {
    title: "C++ Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "Mar 07, 2026",
    category: "Software",
    icon: "Terminal",
    imageName: "cpp.png",
    desc: "Advanced Object-Oriented Programming, polymorphism, and exception handling.",
  },
  {
    title: "Digital Literacy Advocate",
    issuer: "UNDP / IDT4M",
    date: "Feb 17, 2026",
    category: "Digital Skills",
    icon: "Award",
    imageName: "advocate.png",
    desc: "Certified digital literacy advocate focused on digital inclusion and awareness.",
  },
  {
    title: "Computer Hardware",
    issuer: "Cisco Networking Academy",
    date: "Feb 14, 2026",
    category: "Infrastructure",
    icon: "Award",
    imageName: "computer.png",
    desc: "System diagnostics, hardware installation, and preventive maintenance.",
  },
  {
    title: "English IT 2",
    issuer: "LinkedIn Learning",
    date: "Feb 12, 2026",
    category: "AI",
    icon: "Cpu",
    imageName: "english.png",
    desc: "Communication and IT understanding skills within corporate environments.",
  },
  {
    title: "Engaging Stakeholders",
    issuer: "Cisco Networking Academy",
    date: "Mar 28, 2026",
    category: "Professional",
    icon: "Users",
    imageName: "stakeholders.png",
    desc: "Project communication and stakeholder management strategies.",
  },
  {
    title: "Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2026",
    category: "Security",
    icon: "ShieldCheck",
    imageName: "cybersecurity.png",
    desc: "Network security foundations and data protection protocols.",
  },
];

const moreCerts = [
  "CSS Essentials",
  "Hardware & Upgrade Support",
  "English IT 2",
  "JavaScript 1",
  "JavaScript 2",
  "Digital Awareness",
  "Digital Awareness & Security",
  "Introduction to IoT",
];