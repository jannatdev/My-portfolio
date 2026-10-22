"use client";

import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-brand text-2xl font-black">J.</span>
              <span className="hidden sm:block text-sm font-medium text-white">Jannatul Ferdous</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Being a passionate Full-Stack Web Developer focused on building modern, responsive, and user-friendly web experiences. 
            </p>
            <div className="flex gap-3">

              <Link href="https://www.facebook.com/jannat.jannat.555501"><span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-brand border border-slate-700 hover:bg-brand hover:text-white transition-colors">
                <GrFacebookOption /></span></Link>
              <Link href="https://www.instagram.com/wd.jannat"><span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-brand border border-slate-700 hover:bg-brand hover:text-white transition-colors">
                <FaInstagram /></span></Link>
              <Link href="https://www.linkedin.com/in/wdjannat"><span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-brand border border-slate-700 hover:bg-brand hover:text-white transition-colors">
                <FaLinkedinIn /></span></Link>
              <Link href="https://github.com/jannatdev"><span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-brand border border-slate-700 hover:bg-brand hover:text-white transition-colors">
                <FiGithub /></span></Link>
              
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {["Home", "About Me", "My Journey", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-brand transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span className="text-slate-500 mr-2">📞</span>
                +880 1757031616
              </li>
              <li>
                <span className="text-slate-500 mr-2">✉</span>
                jannat2557@gmail.com
              </li>
              <li>
                <span className="text-slate-500 mr-2">📍</span>
                Dhaka,Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Jannatul Ferdous. All Rights Reserved.</p>
          <div className="flex gap-4 text-brand">
            <span>Designed with ❤️</span>
            <span>Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
