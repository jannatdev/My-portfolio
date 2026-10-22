"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";



export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

      try {
        if (!formRef.current) return;
      await emailjs.sendForm(
        process.env.EMAIL_SERVICE_ID!,
        process.env.EMAIL_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.EMAIL_PUBLIC_KEY!,
        }
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  const contacts = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 011 1v5h0a1 1 0 011 1m-1 8a1 1 0 001 1h5a1 1 0 001-1V5a1 1 0 00-1-1H8a1 1 0 00-1 1v3a1 1 0 00-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h2a1 1 0 011 1v3h.72a2 2 0 012 2m-3.28 7a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h2.28a1 1 0 001 1v2a1 1 0 01-1 1z" />
        </svg>
      ),
      title: "Call Me",
      value: "+880 1757031616",
      sub: "Saturday to Friday\n09:00 to 18:00",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5 6l-7.89-5.26a2 2 0 01-2.22 0L3 14m5 6l7.89-5.26a2 2 0 002.22 0L21 14m-5 6v-6a2 2 0 012-2h6a2 2 0 012 2v6m-6-6a2 2 0 00-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6a2 2 0 012 2v2" />
        </svg>
      ),
      title: "Email Me",
      value: "jannat2557@gmail.com",
      sub: "Say hello at",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Dhaka,Bangladesh",
      sub: "Visit us at",
    },
  ];

  return (
    <section id="contact" className="section section-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p>Have a question? Send me a message.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="space-y-5"ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <svg className="absolute left-3 top-3 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <svg className="absolute left-3 top-3 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5 6l-7.89-5.26a2 2 0 01-2.22 0L3 14m5 6l7.89-5.26a2 2 0 002.22 0L21 14m-5-6v2.58a2 2 0 01-2 2.58A2 2 0 013 14z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full pl-4 pr-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <button
              type="submit"
              className="btn-brand w-full"
            >
           
               {loading ? "Sending..." : "Send Message"}
            </button>
             {status && (
        <p role="status" aria-live="polite">
          {status}
        </p>
      )}
          </form>

          <div className="space-y-6">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{c.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
