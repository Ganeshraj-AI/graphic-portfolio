"use client";

import React, { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
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

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("ganeshraj.design@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 theme-dark bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative"
    >
      {/* Crop marks bounding the back cover */}
      <CropMarks />

      {/* Concentric target registration mark watermark */}
      <RegistrationMark className="absolute right-4 bottom-4 w-20 h-20 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10 py-12">
        <div className="flex flex-col items-center text-center space-y-12 max-w-2xl mx-auto">
          
          {/* Back cover identifier */}
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
            THE GRAPHIC ARCHIVE // THE BACK COVER
          </span>

          {/* Book Ending message */}
          <div className="space-y-4">
            <h2 className="font-sans font-black text-6xl sm:text-7xl md:text-8xl tracking-tight text-outline opacity-20 block leading-none">
              THE END.
            </h2>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-primary leading-tight text-misregistration cursor-default">
              Thanks for visiting<br />The Graphic Archive.
            </p>
          </div>

          <div className="h-[1px] bg-paper-border w-32" />

          {/* Clean Email & LinkedIn Coordinates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg pt-4">
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
                ganeshraj.design@gmail.com
              </span>
            </button>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ganeshraj"
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
          </div>

        </div>
      </div>
    </section>
  );
}
