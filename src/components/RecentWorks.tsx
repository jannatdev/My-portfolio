

import Image from "next/image";
import bazarDorImage from '@/app/asset/1.jpg'
import workoutImage from '@/app/asset/2.jpg'
import appImage from '@/app/asset/3.jpg'
import bookImage from '@/app/asset/4.jpg'
import Link from "next/link";




export default function RecentWorks() {
  // const filters = ["All", "Brand Design", "Mobile App", "Graphic Design"];
  // const [active, setActive] = useState("All");

  const works = [
    {
      title: "Bazar-dor Website",
      LiveLink: "https://bazar-dor-project-one.vercel.app",
      image:bazarDorImage
      
    },
    {
      title: "WorkOut Website",
      LiveLink: "https://assignment-6-fit-log-abb1.vercel.app",
      image:workoutImage
    },
    {
      title: "App Website",
      LiveLink: "https://hero-app-project.vercel.app",
      image:appImage,
    },
    {
      title: "Book-vibe Website",
      LiveLink: "https://book-vibe-project-lemon.vercel.app",
      image: bookImage
    }]
    

  // const filtered = works.filter((w) => active === "All" || w.category === active);

  return (
    <section id="portfolio" className=" bg-brand-light py-10 px-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="section-title">
          <h2>Recent Works</h2>
          <p>Selected projects from my portfolio.</p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {works.map((work, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white">
              <a
                href={work.LiveLink}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image
                src={work.image}
                alt={work.title}
                width={1000}
                height={1000}
                className="w-full h-75 object-cover group-hover:scale-105 transition-transform duration-300 border-10 border-white shadow-4xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-brand/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              
              <Link href={work.LiveLink}>
                <span className="text-xs font-semibold text-brand-light uppercase tracking-wider mb-2">
                  LiveLink
                </span>
              </Link>
                
                <h3 className="text-white font-bold text-lg">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
