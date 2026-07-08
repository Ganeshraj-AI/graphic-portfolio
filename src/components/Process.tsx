"use client";

import React from "react";
import { RegistrationMark } from "./PrintMarks";

export default function Process() {
  const steps = [
    { number: "01", name: "Understand" },
    { number: "02", name: "Explore" },
    { number: "03", name: "Refine" },
    { number: "04", name: "Deliver" }
  ];

  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 theme-cream bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative overflow-hidden"
    >
      <RegistrationMark className="absolute right-12 -top-6 w-24 h-24 opacity-15" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-4">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
            THE GRAPHIC ARCHIVE // MY PROCESS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary text-misregistration cursor-default">
            My Process
          </h2>
          <div className="h-[1px] bg-paper-border w-24 my-4" />
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-paper-card border border-paper-border p-6 rounded-2xl flex flex-col justify-between h-36 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div className="absolute top-3 left-4 font-mono text-[10px] text-brand-gold font-bold select-none">
                {step.number} //
              </div>
              <div className="h-full flex items-end">
                <h3 className="font-serif text-2xl font-light text-brand-primary group-hover:text-brand-gold transition-colors duration-300 cursor-default">
                  {step.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
