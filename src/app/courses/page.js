"use client";

import React from 'react';
import { 
  Mail, Download, ChevronRight, Layout, Settings, 
  Brain, Users, Smartphone, Database, Laptop, 
  Gamepad2, Cpu, Lock, Map, Globe
} from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      <main className="max-w-4xl mx-auto p-4 md:p-12 pt-24">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-black uppercase tracking-[0.2em] bg-blue-50 text-blue-600 rounded-full">
            Academic Journey
          </div>
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight mb-4">
            University Courses
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Bachelor of Science majoring in Computer Science at the <span className="text-slate-900 font-bold">University of Malawi</span>
          </p>
        </div>

        {/* --- STATS COUNTER --- */}
        <div className="grid grid-cols-2 gap-6 mb-20">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <p className="text-5xl font-black text-blue-600 mb-1">15</p>
            <p className="text-slate-400 text-xs uppercase font-black tracking-widest">Total Courses</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <p className="text-5xl font-black text-emerald-500 mb-1">14</p>
            <p className="text-slate-400 text-xs uppercase font-black tracking-widest">CS Major Courses</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-10">
           <h2 className="text-2xl font-black text-slate-800 shrink-0">Course Curriculum</h2>
           <div className="h-[2px] w-full bg-slate-100"></div>
        </div>

        {/* --- COURSES LIST --- */}
        <div className="grid grid-cols-1 gap-3">
          <CourseItem icon={<Layout size={20}/>} title="Web Development" category="Computer Science" color="text-blue-500" bg="bg-blue-50" />
          <CourseItem icon={<Settings size={20}/>} title="Software Engineering" category="Computer Science" color="text-emerald-500" bg="bg-emerald-50" />
          <CourseItem icon={<Brain size={20}/>} title="Data Structures & Algorithms" category="Computer Science" color="text-purple-500" bg="bg-purple-50" />
          <CourseItem icon={<Users size={20}/>} title="Human-Computer Interaction" category="Computer Science" color="text-pink-500" bg="bg-pink-50" />
          <CourseItem icon={<Settings size={20}/>} title="Object-Oriented Programming" category="Computer Science" color="text-orange-500" bg="bg-orange-50" />
          <CourseItem icon={<Smartphone size={20}/>} title="Mobile Application Development" category="Computer Science" color="text-sky-600" bg="bg-sky-50" />
          <CourseItem icon={<Database size={20}/>} title="Database Systems" category="Computer Science" color="text-teal-600" bg="bg-teal-50" />
          <CourseItem icon={<Laptop size={20}/>} title="Linux Administrations systems" category="Computer Science" color="text-emerald-600" bg="bg-emerald-50" />
          <CourseItem icon={<Settings size={20}/>} title="Project management" category="Computer Science" color="text-green-600" bg="bg-green-50" />
          <CourseItem icon={<Gamepad2 size={20}/>} title="Game Development" category="Computer Science" color="text-indigo-500" bg="bg-indigo-50" />
          <CourseItem icon={<Cpu size={20}/>} title="Machine Learning" category="Computer Science" color="text-rose-500" bg="bg-rose-50" />
          <CourseItem icon={<Lock size={20}/>} title="Computer Security" category="Computer Science" color="text-slate-700" bg="bg-slate-100" />
          <CourseItem icon={<Map size={20}/>} title="Geospatial Computing" category="Computer Science" color="text-lime-600" bg="bg-lime-50" />
          <CourseItem icon={<Settings size={20}/>} title="Business for Computer scientists" category="Computer Science" color="text-amber-600" bg="bg-amber-50" />
          <CourseItem icon={<Globe size={20}/>} title="Internet Governance" category="Information Systems" color="text-cyan-500" bg="bg-cyan-50" />
        </div>
      </main>

      {/* --- FOOTER RE-CREATED FROM IMAGE --- */}
      <footer className="bg-[#0a1224] text-slate-400 py-20 px-8 mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <span className="text-xl font-bold text-emerald-500">
                Loneliness ndalowa
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Frontend Developer creating amazing digital experiences.
            </p>
            <div className="pt-4">
               <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs border border-slate-800">N</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Profile', 'Courses', 'Education', 'Skills', 'Certification and Experience'].map((item) => (
                <li key={item} className="hover:text-emerald-400 cursor-pointer transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-slate-700 group-hover:text-emerald-400 transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors group">
                <Download size={16} className="group-hover:text-blue-400" /> Download CV
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors group">
                <Mail size={16} className="group-hover:text-emerald-400" /> Contact
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CourseItem({ icon, title, category, color, bg }) {
  return (
    <div className="group flex items-center justify-between p-5 bg-white rounded-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
      <div className="flex items-center gap-5">
        <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 duration-300 ${bg} ${color} shadow-sm`}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-0.5 md:hidden">{category}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
          {category}
        </span>
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-inner">
          <span className="text-xs">🏅</span>
        </div>
      </div>
    </div>
  );
}