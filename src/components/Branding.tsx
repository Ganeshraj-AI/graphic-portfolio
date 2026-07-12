"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CropMarks, RegistrationMark } from "./PrintMarks";

export default function Branding() {
  const tags = ["Brand Identity", "Product Design", "AI", "UI / UX"];

  return (
    <section
      id="branding"
      className="py-24 px-6 md:px-12 theme-offwhite bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative overflow-hidden"
    >
      <CropMarks />
      <RegistrationMark className="absolute -right-8 -top-8 w-24 h-24 opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Split Teaser Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context & Editorial */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
                THE GRAPHIC ARCHIVE // BRAND IDENTITY
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary">
                Branding
              </h2>
            </div>
            
            <div className="h-[1px] bg-paper-border w-24 my-4" />

            <p className="font-serif text-lg md:text-xl text-secondary-text leading-relaxed font-light">
              <strong>Drift</strong> is my personal AI-powered expense tracking application built around one simple idea: tracking money should feel effortless. It combines minimal branding, thoughtful user experience, conversational AI, and clean visual identity to make personal finance easier to understand.
            </p>

            {/* Elegant tags */}
            <div className="flex flex-wrap gap-2 pt-4 select-none">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 font-mono text-[8px] tracking-widest uppercase border border-paper-border rounded-full text-secondary-text bg-paper-card"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Teaser Card (Curiosity Hook) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-paper-card border border-paper-border p-5 rounded-[2.5rem] shadow-sm hover:shadow-[0_25px_50px_rgba(64,54,47,0.15)] hover:-translate-y-2 transition-all duration-500 relative group">
              
              {/* Cover Artwork (Page 1) */}
              <div className="w-full relative overflow-hidden rounded-[1.8rem] border border-paper-border/60 aspect-[4/3] bg-paper-bg">
                <img
                  src="/assets/Brand/1.png"
                  alt="Drift Brand Cover Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/[0.01] transition-colors duration-500" />
              </div>

              {/* Teaser details */}
              <div className="pt-5 space-y-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-brand-primary leading-tight text-misregistration cursor-default">
                      Drift
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-gold font-bold block mt-0.5">
                      AI Expense Tracker
                    </span>
                  </div>
                  <span className="font-mono text-[9px] italic text-brand-gold font-bold">
                    2026
                  </span>
                </div>

                <p className="font-sans text-xs text-secondary-text font-light leading-relaxed">
                  A complete visual identity and product branding exploration for my AI-powered expense tracking application.
                </p>

                {/* Case study direct link */}
                <div className="pt-2 border-t border-dashed border-paper-border/40">
                  <Link
                    href="/works/drift"
                    data-cursor="click"
                    className="inline-flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-brand-primary hover:text-brand-gold transition-colors duration-300 font-bold group/link"
                  >
                    Explore Brand Case Study
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
