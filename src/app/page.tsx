import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import About from "@/components/About";
import Skills from "@/components/Skills";

import Journey from "@/components/Journey";

import RecentWorks from "@/components/RecentWorks";
import CTA from "@/components/CTA";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <main className="flex-1">
        <Hero />
       
        <About />
        
        <Skills />
        
        <Journey />
        
        <RecentWorks />
        <CTA />
       
       
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
