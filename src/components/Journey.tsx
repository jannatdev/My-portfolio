'use client'
import { useState } from "react";

export default function Journey() {

  
  return (
  
  <section id="journey" className="section section-bg-alt">

   <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"></div>
     <div className="section-title">
          <h2>My Journey</h2>
          <p>My education and professional Skills </p>
    </div>

         <div>

         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Education */}

            <div className="bg-brand-light border border-brand/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-[32px] font-bold text-slate-900">Education</h2>
                  <div className="w-8 h-0.5 bg-brand"></div>
                </div>
                {[
                  { year: "2005-2006", degree: "Masters(English)", institute: "Private University" },
                  { year: "2001-2003", degree: "Hons(English)", institute: "National University" },
                  { year: "1999-2001", degree: "HSC", institute: "Chalitadanga Mohila College" },
                ].map((item) => (
                  <div key={item.degree} className="mb-6 border-b border-brand/10 pb-4 last:mb-0 last:border-0">
                    <span className="inline-block bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-slate-600 font-bold text-lg">{item.degree}</h3>
                    <p className="text-slate-600 text-sm">{item.institute}</p>
                  </div>
                ))}
              </div>
           


              
{/* Learning Experience */}

                <div className="bg-dark border border-slate-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-[32px] font-bold text-white"> Skill Learning </h2>
                  <div className="w-8 h-0.5 bg-brand"></div>
                </div>
                {[
                  { year: "2025-2026", role: "Web Developing", company: "Programming Hero" },
                  { year: "2025-2025", role: "WordPress and Ecommerce", company: "Codemanbd" },
                  { year: "2024-2024", role: "Web Design", company: "Freedom IT Institution" },
                ].map((item) => (
                  <div key={item.role} className="mb-6 border-b border-slate-700 pb-4 last:mb-0 last:border-0">
                    <span className="inline-block bg-brand text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-white font-bold text-lg">{item.role}</h3>
                    <p className="text-slate-400 text-sm">{item.company}</p>
                  </div>
                ))}
              </div>

            
              

              {/* My Skills */}


                   <div className="bg-brand-light border border-brand/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-[32px] font-bold text-slate-900">My Skills</h2>
                  <div className="w-8 h-0.5 bg-brand"></div>
                </div>
                {[
                  { name: "Next.js", level: 92 },
                  { name: "React", level: 88 },
                  { name: "JavaScript", level: 90 },
                  { name: "Tailwind CSS", level: 85 },
                  { name: "Html", level: 95 },
                  { name: "WordPress", level: 80 },
                ].map((skill) => (
                  <div key={skill.name} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-brand h-2 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
             
        </div>

   

  </section>
  )
}