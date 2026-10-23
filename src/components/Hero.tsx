

import Image from "next/image";
import Link from "next/link";
import image from '@/app/asset/img.jpg'
import heroBg from '@/app/asset/bg.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";

const ScrollIcon = ({ className }: { className?: string }) => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home"  style={{
    backgroundImage: `url(${heroBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  }}
   className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden  h-180 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid  md:grid-cols-2 gap-12 md:gap-16 items-center">

           

            <div className=" flex flex-col justify-center">
              <div className="flex tems-center  ">

                  <Link href="https://www.facebook.com/jannat.jannat.555501"><span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-xs font-bold text-brand border border-brand hover:bg-brand hover:text-white transition-colors">
                    <GrFacebookOption /></span></Link>
                  <Link href="https://www.instagram.com/wd.jannat"><span className="w-6 h-6 -ml-1 rounded-full bg-brand-light flex items-center justify-center text-xs font-bold text-brand border border-brand hover:bg-brand hover:text-white transition-colors">
                    <FaInstagram /></span></Link>
                  <Link href="https://www.linkedin.com/in/wdjannat"><span className="w-6 h-6 -ml-1 rounded-full bg-brand-light flex items-center justify-center text-xs font-bold text-brand border border-brand hover:bg-brand hover:text-white transition-colors">
                    <FaLinkedinIn /></span></Link>
                  <Link href="https://github.com/jannatdev"><span className="w-7 h-7 -ml-1  rounded-full bg-brand-light flex items-center justify-center text-xs font-bold text-brand border border-brand hover:bg-brand hover:text-white transition-colors">
                    <FiGithub /></span></Link>
              
            </div>

              <h2 className="mt-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Hi, I am
              </h2>
              <h1 className="mt-2 text-4xl font-bold text-slate-900 tracking-tight sm:text-2xl lg:text-6xl">
                Jannatul Ferdous
              </h1>
              <p className="mt-3 text-xl font-semibold  text-slate-900">
                Full-stact  <span className=" text-brand text-[28px]">Web Developer</span>
              </p>
              <p className="mt-5 text-slate-600 max-w-lg leading-relaxed">
                I’m a passionate Full-Stack Web Developer who enjoys building modern, responsive, and user-friendly web applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/cv.pdf"
                  className="btn-brand"
                  download="Jannatul-Ferdous-CV.pdf"
                  aria-label="Download CV"
                >
                  Download CV
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Link>
                <Link href="#contact" className="btn-outline">
                  Hire Me
                </Link>
              </div>
            </div>

            <div className=" flex justify-center ">
              <div className="relative w-full ">
                <div className="" />
                <Image
                  src={image}
                  alt="my img"
                  width={600}
                  height={1600}
                  className="  rounded-2xl border-4 border-[#f5eeee] shadow-2xl pt-8"
                  priority
                />
              </div>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-7 flex items-center justify-center">
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-brand transition-colors">
          <ScrollIcon className="w-5 h-5 animate-bounce" />
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        </a>
      </div>
    </section>
  );
}
