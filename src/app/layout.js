import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/Navbar';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loneliness Ndalowa | Portfolio",
  description: "Personal portfolio showcasing skills, certifications, and projects",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">

      <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}