import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="relative bg-brand overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://placehold.co/100x100?text=DOT&color=ff8c42&text=ffffff')] opacity-20" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
            Have a Project on Your Mind?
          </h2>
          <p className="text-brand-light/90 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            Let's work together to bring your ideas to life. I'm available for
            freelance projects and collaborations.
          </p>
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand px-7 py-3 rounded-full text-sm font-semibold hover:bg-brand-light transition-colors">
            Contact Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
