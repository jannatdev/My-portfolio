

import Image from "next/image";
import aboutimg from '@/app/asset/about img.png'
import aboutBg from '@/app/asset/about bg.png'


export default function About() {
  
  const info = [
    { label: "Name", value: "Jannatul Ferdous" },
    { label: "Email", value: "jannat2557@gmail.com" },
    { label: "Country", value: "Bangladesh" },
    { label: "Freelance", value: "Available" },
  ];

  const interests = [
    { label: "Music", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.418-9L19.166 19" /></svg> },
    { label: "Travel", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg> },
    { label: "Book", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg> },
    
  ];

  return (
    <section id="about" className="section section-bg-alt">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="section-title">
          <h2>About</h2>
          <p className="text-[14px]">
           I specialize in building responsive, user-friendly web applications,
            focusing on clean UI, performance, and functional full-stack solutions.
          </p>
          </div>
          <div>
          
         </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 items-center">
        {/* image */}
          <div className="relative w-full  min-h-130 flex items-center justify-center">
             <div
                className="absolute  top-15 left-20 inset-0 bg-cover bg-center bg-no-repeat"
                
              />
            
            <Image
              src={aboutimg}
              alt="About Me"
              width={800}
              height={800}
              className="relative w-full h-auto object-contain"
            
            />
          

          </div>
          


          <div className="space-y-6">
            <div>
              <p className="text-brand font-bold">My Intro</p>
              <h2 className="text-[32px] font-bold">About me</h2>
              <p className="text-slate-600 leading-relaxed">
                I’m a passionate Full-Stack Web Developer who enjoys building modern, responsive, and user-friendly web applications. I work with frontend technologies like React, Next.js, JavaScript, TypeScript, and HTML, along with backend technologies such as Node.js, Express.js, and MongoDB to develop dynamic, scalable, and efficient web solutions. I’m always eager to learn new technologies, solve complex problems, and transform creative ideas into functional digital experiences.
              </p>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">{item.label}:</span>
                  <span className="text-sm text-slate-500">{item.value}</span>
                </div>
              ))}
            </div>

            {/* My Interest */}
            <div className="space-y-4">
              <p className="text-brand font-bold">My Interest</p>
              <div className="grid grid-cols-2  md:grid-cols-4 gap-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center gap-2 p-2  rounded-lg bg-brand-light border border-brand/20 text-brand hover:border-brand transition-colors"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

                    
          </div>
        </div>
      </div>
    </section>
  );
}
