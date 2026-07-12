"use client";

import React, { useState } from "react";
import { Mail, Check } from "lucide-react";
import { CropMarks, RegistrationMark } from "./PrintMarks";

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M6 8h4c1.5 0 2.5 1 2.5 2s-1 2-2.5 2H6V8zm0 6h5c1.5 0 2.5 1 2.5 2s-1 2-2.5 2H6v-4z" />
    <line x1="15" x2="18" y1="9" y2="9" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("ganeshraj4020@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 theme-dark bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative"
    >
      <CropMarks />
      <RegistrationMark className="absolute right-4 bottom-4 w-20 h-20 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10 py-12">
        <div className="flex flex-col items-center text-center space-y-12 max-w-2xl mx-auto">
          
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
            THE GRAPHIC ARCHIVE // CONTACT
          </span>

          <div className="space-y-4">
            <h2 className="font-sans font-black text-6xl sm:text-7xl md:text-8xl tracking-tight text-outline opacity-20 block leading-none">
              LET&apos;S CREATE.
            </h2>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-primary leading-tight text-misregistration cursor-default">
              Let&apos;s build something meaningful.
            </p>
          </div>

          <div className="h-[1px] bg-paper-border w-32" />

          {/* Clean Email & LinkedIn Coordinates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-4">
            
            {/* Email - Copy on Tap */}
            <button
              onClick={handleCopyEmail}
              data-cursor="click"
              className="bg-paper-card border border-paper-border p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:-translate-y-1.5 hover:border-brand-gold/60 transition-all duration-300 -rotate-1 hover:rotate-0 shadow-sm w-full cursor-pointer group text-center"
            >
              <div className="relative">
                {copied ? (
                  <Check className="w-5 h-5 text-green-500 animate-bounce" />
                ) : (
                  <Mail className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold">
                {copied ? "COPIED TERMINAL" : "EMAIL (TAP TO COPY)"}
              </span>
              <span className="font-sans text-[11px] text-secondary-text truncate max-w-full font-medium">
                ganeshraj4020@gmail.com
              </span>
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ganesh-raj-58a061373"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="click"
              className="bg-paper-card border border-paper-border p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:-translate-y-1.5 hover:border-brand-gold/60 transition-all duration-300 rotate-1 hover:rotate-0 shadow-sm w-full text-center"
            >
              <LinkedInIcon className="w-5 h-5 text-brand-primary" />
              <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold">
                LINKEDIN
              </span>
              <span className="font-sans text-[11px] text-secondary-text font-medium">
                Connect Terminal
              </span>
            </a>

            {/* Instagram placeholder */}
            <div
              className="bg-paper-card border border-paper-border p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 -rotate-2 select-none opacity-50 w-full text-center"
            >
              <InstagramIcon className="w-5 h-5 text-brand-primary/40" />
              <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold/40 font-bold">
                INSTAGRAM
              </span>
              <span className="font-sans text-[10px] text-secondary-text/40">
                Placeholder
              </span>
            </div>

            {/* Behance placeholder */}
            <div
              className="bg-paper-card border border-paper-border p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 rotate-2 select-none opacity-50 w-full text-center"
            >
              <BehanceIcon className="w-5 h-5 text-brand-primary/40" />
              <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold/40 font-bold">
                BEHANCE
              </span>
              <span className="font-sans text-[10px] text-secondary-text/40">
                Coming Soon
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
