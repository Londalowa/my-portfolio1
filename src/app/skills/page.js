"use client";

import React from 'react';
import { 
  Code2, Database, Smartphone, Layout, Settings, Brain, 
  Globe, Zap, Target, RefreshCw, Box, Award, 
  MessageSquare, Users, Cpu, TrendingUp
} from 'lucide-react';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <main className="max-w-6xl mx-auto p-4 md:p-12">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Technical Skills & Expertise</h1>
          <p className="text-slate-500 mt-3 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and professional competencies.
          </p>
        </div>

        {/* --- TECHNICAL SKILLS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {/* Frontend */}
          <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 border-b pb-4">
              <Code2 className="text-blue-500" size={24}/> Frontend
            </h3>
            <div className="space-y-6">
              <SkillItem title="Next.js" desc="Full-stack React framework" />
              <SkillItem title="React" desc="UI component library" />
              <SkillItem title="Tailwind CSS" desc="Utility-first CSS framework" />
              <SkillItem title="JavaScript" desc="Core programming language" />
            </div>
          </div>

          {/* Mobile & Design */}
          <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 border-b pb-4">
              <Smartphone className="text-emerald-500" size={24}/> Mobile & Design
            </h3>
            <div className="space-y-6">
              <SkillItem title="Flutter" desc="Cross-platform development" />
              <SkillItem title="Android (Kotlin/Java)" desc="Native mobile development" />
              <SkillItem title="Figma" desc="UI/UX design tool" />
              <SkillItem title="Prototyping" desc="Interactive visual flows" />
            </div>
          </div>

          {/* Database & Backend */}
          <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 border-b pb-4">
              <Database className="text-purple-500" size={24}/> Backend
            </h3>
            <div className="space-y-6">
              <SkillItem title="Postgres" desc="Relational database" />
              <SkillItem title="Firebase" desc="Google BaaS platform" />
              <SkillItem title="Node.js" desc="Server-side environment" />
              <SkillItem title="REST APIs" desc="System communication" />
            </div>
          </div>
        </div>

        {/* --- STATS CARDS (Now White) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <StatCard 
            value="6" 
            label="Skill Categories" 
            sub="Frontend, Mobile, Database, Design, Tools" 
            color="text-blue-600" 
          />
          <StatCard 
            value="20+" 
            label="Technologies" 
            sub="Frameworks, languages, tools mastered" 
            color="text-emerald-500" 
          />
          <StatCard 
            value="6" 
            label="Soft Skills" 
            sub="Professional competencies developed" 
            color="text-purple-600" 
          />
        </div>

        {/* --- SOFT SKILLS --- */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <Users className="text-orange-500" /> Soft Skills & Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SoftSkillCard icon={<Zap className="text-blue-500"/>} title="Problem Solving" desc="Analytical thinking and solution development." />
            <SoftSkillCard icon={<Settings className="text-purple-500"/>} title="Project Management" desc="Planning and execution of technical projects." />
            <SoftSkillCard icon={<MessageSquare className="text-emerald-500"/>} title="Communication" desc="Clear and effective collaboration." />
            <SoftSkillCard icon={<Users className="text-blue-400"/>} title="Team Collaboration" desc="Working effectively in diverse teams." />
            <SoftSkillCard icon={<Award className="text-yellow-500"/>} title="Leadership" desc="Guiding and motivating team members." />
            <SoftSkillCard icon={<RefreshCw className="text-indigo-500"/>} title="Adaptability" desc="Adjusting to new technologies and situations." />
          </div>
        </div>

        {/* --- TOOLS & TECHNOLOGIES (Now White) --- */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <Box className="text-purple-600" /> Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            {['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ', 'Linux'].map((tool) => (
              <div key={tool} className="p-6 bg-white rounded-2xl border border-slate-100 font-bold text-slate-700 shadow-sm hover:shadow-md transition-all">
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* --- APPROACH SECTION (Now White) --- */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Skill Development Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ApproachCard icon={<Zap size={24}/>} title="Practical Projects" desc="Building real-world applications to apply theoretical knowledge." />
            <ApproachCard icon={<Target size={24}/>} title="Focused Learning" desc="Concentrating on specific technologies to deepen expertise." />
            <ApproachCard icon={<RefreshCw size={24}/>} title="Continuous Improvement" desc="Regularly updating skills to stay current with tech trends." />
          </div>
        </div>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full"></div>
          <span className="text-white font-bold">Loneliness Ndalowa</span>
        </div>
        <p className="text-sm">© 2026. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Helper Components
function SkillItem({ title, desc }) {
  return (
    <div className="group cursor-default">
      <p className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{title}</p>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function StatCard({ value, label, sub, color }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
      <p className={`text-5xl font-black ${color} mb-2`}>{value}</p>
      <p className="text-sm font-bold text-slate-800">{label}</p>
      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{sub}</p>
    </div>
  );
}

function SoftSkillCard({ icon, title, desc }) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group">
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <p className="font-bold text-slate-800 mb-2">{title}</p>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function ApproachCard({ icon, title, desc }) {
  return (
    <div className="text-center p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
        {icon}
      </div>
      <h4 className="font-bold text-slate-800 mb-3 text-lg">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}