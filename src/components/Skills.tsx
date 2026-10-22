"use client"

import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si"

type Skill = {
  name: string
  Icon: React.ElementType
}

const skills: Skill[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
]

export default function Skills() {
  return (
    <section id="skills" className="-mt-20 ">
      <div className=" px-6 sm:px-8 lg:px-12">
        {/* <div className="section-title">
          <h2>Tech Stack</h2>
          <p>The technologies and tools I use to build modern web applications.</p>
        </div> */}

        <div className="marquee-wrapper ">
          <div className="marquee-track flex flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-1.5 shrink-0">
                <skill.Icon className="w-10 h-10 sm:w-10 sm:h-10 bg-brand-light p-2 text-brand" />
                <span className="text-[11px] sm:text-2xs font-medium text-slate-600 shrink-0">
                  {skill.name}
                </span>
              </div>
            ))}
           
            {skills.map((skill) => (
              <div key={skill.name + "-copy"} className="flex flex-col items-center gap-1.5 shrink-0">
                <skill.Icon className="w-10 h-10 sm:w-10 sm:h-10 bg-brand-light p-2 text-brand" />
                <span className="text-[11px] sm:text-2xs font-medium text-slate-600 shrink-0">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
