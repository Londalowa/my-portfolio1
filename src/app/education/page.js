import React from 'react';
import { 
  User, BookOpen, GraduationCap, Code2, Mail, 
  Calendar, MapPin, Briefcase, Target, Brain, 
  Award, Star, Shield, Laptop, Book
} from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
    

      <main className="max-w-4xl mx-auto p-4 md:p-12">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">My Education</h1>
          <p className="text-slate-500 mt-2">Fourth-year Computer Science student at University of Malawi</p>
        </div>

        {/* --- UNIVERSITY HERO CARD --- */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <GraduationCap size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-800">University of Malawi</h2>
              <p className="text-blue-700 font-semibold text-lg">4th Year Student - Bachelor of Science in Computer Science</p>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                Final year student focusing on advanced frontend development and system design 
                to build scalable technology solutions.
              </p>
            </div>
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <Calendar size={16} /> 4th Year (2025)
            </div>
          </div>
        </div>

        {/* --- PROGRAM DETAILS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
               Bachelor of Science in Computer Science
               <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">4th Year Student</span>
            </h3>
            <p className="text-blue-600 font-medium">University of Malawi</p>
            
            <div className="grid grid-cols-1 gap-4">
              <InfoItem icon={<Calendar className="text-blue-500"/>} label="Duration" value="2022 - 2026 (4 Years)" />
              <InfoItem icon={<MapPin className="text-emerald-500"/>} label="Location" value="Zomba, Malawi" />
              <InfoItem icon={<Briefcase className="text-orange-500"/>} label="Program Type" value="Bachelor of Science (B.Sc.)" />
              <InfoItem icon={<Code2 className="text-purple-500"/>} label="Major" value="Computer Science" />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full"><Target size={24}/></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Current Status</p>
                <p className="font-bold text-slate-700">Final Year - Completing in 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full"><Users size={24}/></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Career Path</p>
                <p className="font-bold text-slate-700">Frontend Developer & Software Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- PROGRAM DESCRIPTION --- */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-4">Program Description</h3>
          <p className="text-slate-600 leading-relaxed">
            This 4-year Bachelor of Science program specializes in Computer Science, focusing on high-level 
            software engineering, database management, and modern web technologies. As a fourth-year student, 
            I am currently applying my skills in my final year project, emphasizing responsive user interfaces 
            and optimized system architecture.
          </p>
        </div>

        {/* --- FOCUS AREAS --- */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Brain className="text-blue-600" /> 4th Year Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FocusCard title="Final Year Project" desc="Developing optimized web-based solutions for local business management." />
            <FocusCard title="Frontend Engineering" desc="Specializing in React, Next.js, and performance-driven UI/UX." />
            <FocusCard title="Software Development" desc="Advanced programming patterns and scalable system design." />
            <FocusCard title="Database Optimization" desc="Managing complex data structures with Postgres and Firebase." />
          </div>
        </div>

        {/* --- KEY COURSES COMPLETED --- */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Book className="text-emerald-600" size={20} /> Key Courses Completed
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Programming Fundamentals", "Data Structures & Algorithms", "Database Management Systems", 
              "Computer Networks", "Web Technologies", "Software Engineering", 
              "Mobile Application Development", "Computer Hardware & Maintenance", 
              "Linux Administrations systems", "Project management", "Machine Learning", "Computer Security"
            ].map(course => (
              <span key={course} className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm border border-slate-200">
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* --- ACADEMIC ACHIEVEMENTS --- */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-orange-500" size={20} /> Academic Achievements
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Star className="text-orange-400 mt-1" size={18} />
              <span className="text-slate-700 font-medium">4th Year Student - Final Year Project in Progress</span>
            </li>
            <li className="flex items-start gap-3">
              <Star className="text-orange-400 mt-1" size={18} />
              <span className="text-slate-700 font-medium">Specializing in Frontend Development and Software Systems</span>
            </li>
          </ul>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0f172a] text-slate-300 py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full"></div>
              <span className="text-xl font-bold text-emerald-500">Loneliness ndalowa</span>
            </div>
            <p className="text-slate-400 text-sm">Frontend Developer creating amazing digital experiences.</p>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center">
             <p className="text-xs text-slate-500">© 2026 Loneliness ndalowa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm">{icon}</div>
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter leading-none">{label}</p>
        <p className="font-semibold text-slate-700 text-sm">{value}</p>
      </div>
    </div>
  );
}

function FocusCard({ title, desc }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <p className="font-bold text-slate-800 mb-1">{title}</p>
      <p className="text-sm text-slate-500 leading-tight">{desc}</p>
    </div>
  );
}

function Users({ size }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
}