"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "My Journey", href: "#journey" },
  
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "#home") return pathname === "/" || pathname === "";
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 z-60 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <span className="brand-text text-2xl font-black tracking-tighter">J.</span>
          <span className="hidden sm:block text-sm font-semibold text-slate-900 leading-none">
           Jannatul Ferdous
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href) ? "text-brand" : "hover:text-brand"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/cv.pdf"
            className="btn-brand"
             download="Jannatul-Ferdous-CV.pdf"
            aria-label="Download CV"
          >
            Download CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </Link>
        </div>

        <button
          className="md:hidden flex items-center gap-2 text-slate-600 hover:text-brand"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
              open ? "rotate-45 translate-y-1.25" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-1.25" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 pb-6">
          <div className="space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-slate-600 hover:text-brand hover:bg-brand-light px-4 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/cv.pdf"
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-white bg-brand px-4 rounded-lg text-center hover:bg-brand-hover transition-colors"
               download="Jannatul-Ferdous-CV.pdf"
              aria-label="Download CV"
            >
              Download CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
