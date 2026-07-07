"use client";

import React from "react";
import { RegistrationMark } from "./PrintMarks";

export default function Experience() {
  const achievements = [
    "Designed posters for college events and initiatives",
    "Created editorial layouts for magazine publications",
    "Produced social media creatives for campaigns",
    "Collaborated with editors and committee members on visual communication"
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 theme-sand bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative overflow-hidden"
    >
      <RegistrationMark className="absolute right-10 -bottom-6 w-32 h-32 opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-4">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
            THE GRAPHIC ARCHIVE // EXPERIENCE
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary text-misregistration cursor-default">
            Experience
          </h2>
          <div className="h-[1px] bg-paper-border w-24 my-4" />
        </div>

        {/* Experience Exhibition Label Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Label card: The Monograph details */}
          <div className="lg:col-span-8 bg-paper-card border border-paper-border p-8 md:p-12 rounded-[2.5rem] shadow-md relative group">
            {/* Corner Crop Indicators in print style */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-paper-border/80" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-paper-border/80" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-paper-border/80" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-paper-border/80" />

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-paper-border pb-6">
                <div>
                  <h3 className="font-serif text-3xl font-light text-brand-primary leading-tight text-misregistration cursor-default">
                    Graphic Designer
                  </h3>
                  <span className="font-sans text-sm text-secondary-text font-medium mt-1 block">
                    Pillai College Magazine Committee
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-gold bg-paper-bg px-4 py-1.5 rounded-full border border-paper-border/60 self-start sm:self-center font-bold">
                  2025 – Present
                </span>
              </div>

              <p className="font-sans text-base text-secondary-text leading-relaxed font-light">
                Working across print and digital layouts inside the committee to balance creativity with clear communication—meeting real deadlines and aligning layouts with the editorial vision.
              </p>
            </div>
          </div>

          {/* Right Label card: Focus Areas list */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-paper-card border border-paper-border p-8 rounded-[2rem] shadow-sm">
              <h4 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-4 mb-4">
                WORKED ON //
              </h4>
              <ul className="space-y-3">
                {achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-xs text-secondary-text font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
