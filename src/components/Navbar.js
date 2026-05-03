"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, BookOpen, GraduationCap, Code2, Mail, FileText } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Profile', href: '/', icon: User },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Education', href: '/education', icon: GraduationCap },
    { name: 'Skills', href: '/skills', icon: Code2 },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Certification', href: '/certification', icon: FileText },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full"></div>
          <span className="text-xl font-bold text-emerald-600 hidden md:block">
            Loneliness ndalowa
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1 md:gap-4 overflow-x-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition whitespace-nowrap text-sm font-medium ${
                  isActive 
                  ? "bg-blue-50 text-blue-600 border border-blue-100" 
                  : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}