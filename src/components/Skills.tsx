"use client";

import React from "react";
import { RegistrationMark } from "./PrintMarks";

export default function Skills() {
  const skillsList = [
    "Poster Design",
    "Brand Identity",
    "Editorial Layout",
    "Typography",
    "Color Theory",
    "Visual Storytelling",
    "Canva",
    "Affinity Designer"
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 theme-offwhite bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative overflow-hidden"
    >
      <RegistrationMark className="absolute -left-4 -bottom-4 w-24 h-24 opacity-15" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-4">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
            THE GRAPHIC ARCHIVE // CAPABILITIES
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary text-misregistration cursor-default">
            Skills
          </h2>
          <div className="h-[1px] bg-paper-border w-24 my-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsList.map((skill, idx) => (
            <div
              key={skill}
              className="bg-paper-card border border-paper-border p-6 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative group"
            >
              <div className="space-y-1">
                <span className="font-mono text-[7px] text-brand-gold font-bold block">
                  CAPABILITY.0{idx + 1}
                </span>
                <span className="font-serif text-lg font-light text-brand-primary group-hover:text-brand-gold transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              </div>
              <span className="font-serif text-xl italic text-brand-gold select-none leading-none opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
