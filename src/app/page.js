"use client";

import React, { useState } from "react";
import { 
  Mail, FileText, Share2, Eye, Download, 
  ChevronRight, Phone, MapPin, RefreshCw, 
  Code2, Database, Smartphone, Menu, X 
} from "lucide-react";

export default function Portfolio() {
  const [downloadCount, setDownloadCount] = useState(10);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cvPath = "/Loneliness_ndalowa_cv.pdf";

  const handleShare = async () => {
    const shareData = {
      title: "Loneliness Ndalowa | Portfolio",
      text: "Check out my professional frontend developer portfolio.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    try {
      if (navigator.share) { await navigator.share(shareData); } 
      else { await navigator.clipboard.writeText(window.location.href); alert("Link copied!"); }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- FLEXIBLE NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">LN</div>
            <span className="font-bold text-slate-800">L. Ndalowa</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {['Profile', 'Skills', 'Resources'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition">{item}</a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 shadow-xl">
            {['Profile', 'Skills', 'Resources'].map(item => (
              <a key={item} href="#" className="block text-sm font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">My Profile</h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Professional credentials & expertise</p>
        </div>

        {/* Grid System: Stacks on Mobile, 12-cols on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* LEFT COLUMN: IDENTITY */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-6 flex items-center justify-center bg-slate-100 rounded-full border-4 border-white shadow-md overflow-hidden">
                <img src="/pic.jpeg" alt="Loneliness" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">Loneliness Ndalowa</h2>
              <p className="text-blue-600 font-medium mb-6 text-sm md:text-base">Frontend Developer</p>
              
              <div className="space-y-4 text-left text-slate-600 mb-8 border-t border-slate-50 pt-6">
                <div className="flex items-start gap-3 text-sm">
                  <Mail size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="break-all">ndalowaloneliness@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-slate-400 shrink-0" />
                  <span>0888778512</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-slate-400 shrink-0" />
                  <span>Zomba, Malawi</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <a href={cvPath} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-sm">
                  <Eye size={18} /> View CV
                </a>
                <button onClick={handleShare} className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-500 text-sm">
                  <Share2 size={18} /> Share Profile
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* CV CARD */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">CV Document</h3>
                <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <RefreshCw size={12} /> {downloadCount} DOWNLOADS
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 md:p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
                <div className="p-4 bg-white text-blue-600 rounded-xl shadow-sm"><FileText size={28} /></div>
                <div className="text-center sm:text-left">
                  <p className="font-bold text-slate-800 text-sm md:text-base">Loneliness_ndalowa_cv.pdf</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">PDF Document • 1.4 MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <a href={cvPath} target="_blank" className="bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition flex items-center justify-center gap-2 text-sm">
                  <Eye size={18} /> Open
                </a>
                <a href={cvPath} download onClick={() => setDownloadCount(d => d+1)} className="bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-100">
                  <Download size={18} /> Download
                </a>
              </div>
            </div>

            {/* EXPERTISE GRID */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Technical Focus</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: <Code2 size={20}/>, color: 'blue', title: 'Frontend', desc: 'React, Next.js, Tailwind' },
                  { icon: <Database size={20}/>, color: 'emerald', title: 'Database', desc: 'SQL, NoSQL, Supabase' },
                  { icon: <Smartphone size={20}/>, color: 'purple', title: 'Mobile', desc: 'React Native, Android' }
                ].map((skill, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-50 bg-slate-50/50">
                    <div className={`p-2 bg-${skill.color}-50 text-${skill.color}-600 rounded-lg w-fit mb-3`}>{skill.icon}</div>
                    <p className="font-bold text-sm">{skill.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* COMPACT FOOTER */}
      <footer className="bg-[#0a1224] text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <span className="font-bold text-white">Loneliness Ndalowa</span>
            </div>
            <p className="text-xs">Frontend Developer Portfolio © 2026</p>
          </div>
          <div className="flex gap-6 text-xs font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="mailto:ndalowaloneliness@gmail.com" className="hover:text-white transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}