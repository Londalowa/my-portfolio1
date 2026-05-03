"use client";

import React from "react";
import { 
  Mail, 
  FileText, 
  Share2, 
  Eye,
  Download,
  ChevronRight,
  Phone,
  MapPin,
  RefreshCw,
  Code2,
  Database,
  Smartphone
} from "lucide-react";

export default function Portfolio() {
  const cvPath = "/loneliness_ndalowa_cv.pdf";

  // --- ONLY ADDED THIS FUNCTION ---
  const handleShare = async () => {
    const shareData = {
      title: "Loneliness Ndalowa | CV",
      text: "Check out Loneliness Ndalowa's professional portfolio and CV.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Portfolio link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <main className="max-w-7xl mx-auto p-4 md:p-8 pt-20">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800">My Profile</h1>
          <p className="text-slate-500 mt-2">Professional profile and technical credentials</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: IDENTITY */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center bg-slate-100 rounded-full border-4 border-white shadow-md overflow-hidden">
                <img src="/pic.jpeg" alt="Loneliness ndalowa" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Loneliness ndalowa</h2>
              <p className="text-blue-600 font-medium mb-6">Frontend Developer</p>
              
              <div className="space-y-3 text-left text-slate-600 mb-8 border-t border-slate-50 pt-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-slate-400" />
                  <span>ndalowaloneliness@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-slate-400" />
                  <span>0888778512</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-slate-400" />
                  <span>Zomba, Malawi</span>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                >
                  <Eye size={18} /> View CV
                </a>
                
                {/* ATTACHED FUNCTION HERE */}
                <button 
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-500"
                >
                  <Share2 size={18} /> Share
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CV & TECHNICAL FOCUS */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* CV Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">CV Information</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <RefreshCw size={12} /> 10 Downloads
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white border border-slate-100 text-blue-600 rounded-xl shadow-sm">
                    <FileText size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Loneliness_ndalowa_cv.pdf</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Professional CV Document</p>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS (Updated to work with file) */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <a 
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-slate-200 text-center flex items-center justify-center gap-2"
                >
                  <Eye size={20} /> Open
                </a>
                <a 
                  href={cvPath}
                  download="Loneliness_ndalowa_CV.pdf"
                  className="bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200 text-center flex items-center justify-center gap-2"
                >
                  <Download size={20} /> Download
                </a>
              </div>
            </div>

            {/* Technical Focus Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Technical Focus & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl border border-slate-50 bg-slate-50/50">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit mb-3"><Code2 size={20}/></div>
                  <p className="font-bold text-sm">Frontend</p>
                  <p className="text-xs text-slate-500 mt-1">React, Next.js, Tailwind CSS, JavaScript</p>
                </div>
                
                <div className="p-4 rounded-xl border border-slate-50 bg-slate-50/50">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg w-fit mb-3"><Database size={20}/></div>
                  <p className="font-bold text-sm">Database</p>
                  <p className="text-xs text-slate-500 mt-1">MySQL, PostgreSQL, MongoDB</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-50 bg-slate-50/50">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg w-fit mb-3"><Smartphone size={20}/></div>
                  <p className="font-bold text-sm">Mobile</p>
                  <p className="text-xs text-slate-500 mt-1">React Native, Android Development</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* --- COMPACT MEDIUM FOOTER --- */}
      <footer className="bg-[#0a1224] text-slate-400 py-12 px-8 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <span className="text-lg font-bold text-emerald-500">Loneliness ndalowa</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Frontend Developer creating amazing digital experiences.
            </p>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-[10px] border border-slate-800 font-bold">N</div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Profile', 'Courses', 'Education', 'Skills', 'Certification'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={12} className="text-slate-700" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <a href={cvPath} download="Loneliness_ndalowa_CV.pdf" className="flex items-center gap-3">
                  <Download size={16} /> Download CV
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Mail size={16} /> Contact
              </li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  );
}