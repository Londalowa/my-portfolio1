"use client";

import React from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  MessageSquare,
  Download
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <main className="max-w-6xl mx-auto p-4 md:p-12 pt-24">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Get In Touch</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- LEFT: MESSAGE FORM --- */}
          <div className="space-y-8 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 text-2xl font-bold text-slate-800">
              <MessageSquare className="text-blue-600" />
              <h2>Send a Message</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                <input type="text" placeholder="Loneliness ndalowa" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" placeholder="ndalowaloneliness@gmail.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea>
              </div>
              <button type="button" className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition shadow-lg">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* --- RIGHT: CONTACT INFO & SOCIALS --- */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800">Contact Information</h2>
              <div className="space-y-6">
                
                <a href="mailto:ndalowaloneliness@gmail.com" className="block group">
                  <ContactCard 
                    icon={<Mail className="text-blue-600 group-hover:scale-110 transition-transform"/>} 
                    title="Email" 
                    value="ndalowaloneliness@gmail.com" 
                    sub="Click to send an email directly" 
                  />
                </a>

                <a href="tel:0888778512" className="block group">
                  <ContactCard 
                    icon={<Phone className="text-emerald-600 group-hover:scale-110 transition-transform"/>} 
                    title="Phone" 
                    value="0888778512" 
                    sub="Mon-Fri from 9am to 6pm" 
                  />
                </a>

                <ContactCard 
                  icon={<MapPin className="text-purple-600"/>} 
                  title="Location" 
                  value="Zomba, Malawi" 
                  sub="Open to remote opportunities worldwide" 
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">Connect With Me</h2>
              <div className="space-y-4">
                <a href="https://github.com/Londalowa" target="_blank" rel="noopener noreferrer" className="bg-[#181717] text-white p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:opacity-90 transition shadow-md">
                  <div className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span className="font-bold">GitHub</span>
                  </div>
                  <span className="text-sm opacity-80 group-hover:underline">Londalowa</span>
                </a>

                <a href="https://linkedin.com/in/loneliness-ndalowa" target="_blank" rel="noopener noreferrer" className="bg-[#0077B5] text-white p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:opacity-90 transition shadow-md">
                  <div className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span className="font-bold">LinkedIn</span>
                  </div>
                  <span className="text-sm opacity-80 group-hover:underline">Loneliness Ndalowa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- RE-CREATED FOOTER FROM IMAGE --- */}
      
      <footer className="bg-[#020817] text-slate-400 py-16 px-8 mt-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Section */}
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

          {/* Middle Section: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Profile', 'Courses', 'Education', 'Skills', 'Certification and Experience'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <Download size={16} /> Download CV
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

function ContactCard({ icon, title, value, sub }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="font-bold text-slate-800">{title}</p>
        <p className="text-blue-600 font-medium">{value}</p>
        <p className="text-slate-400 text-sm">{sub}</p>
      </div>
    </div>
  );
}