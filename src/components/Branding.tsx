"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { CropMarks, RegistrationMark } from "./PrintMarks";

export default function Branding() {
  const tags = ["Brand Identity", "Product Design", "UI / UX", "AI Product", "Visual System"];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }
  };

  return (
    <section
      id="branding"
      className="py-24 px-6 md:px-12 theme-offwhite bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative overflow-hidden"
    >
      <CropMarks />
      <RegistrationMark className="absolute -right-8 -top-8 w-24 h-24 opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
              THE GRAPHIC ARCHIVE // BRAND IDENTITY
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary">
              Branding
            </h2>
            <p className="font-serif text-lg md:text-xl text-secondary-text leading-relaxed font-light">
              <strong>Drift</strong> is my personal AI-powered expense tracking application built around one simple idea: tracking money should feel effortless. It combines minimal branding, thoughtful user experience, conversational AI, and clean visual identity to make personal finance easier to understand.
            </p>
          </div>

          {/* Tags list */}
          <div className="flex flex-wrap gap-2 lg:pt-14 max-w-md">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 font-mono text-[8px] tracking-widest uppercase border border-paper-border rounded-full text-secondary-text bg-paper-card select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Behance-Style Editorial Spread Grid */}
        <div className="space-y-24">
          
          {/* 1. Large Cover Page (Slide 1) */}
          <motion.div 
            {...fadeUp}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md hover:shadow-lg transition-shadow duration-500 relative group">
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/1.png"
                  alt="Drift Brand Proposal Cover"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3.5 flex justify-between items-center font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                <span>01 // DECK COVER</span>
                <span>DRIFT_PRESENTATION.PNG</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Side-by-Side Double Spread (Slides 2 & 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md relative"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/2.png"
                  alt="Drift brand guide slide 2"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                02 // BRAND CONTEXT
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md relative"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/3.png"
                  alt="Drift brand guide slide 3"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                03 // PROBLEM STATEMENT
              </div>
            </motion.div>
          </div>

          {/* 3. Asymmetric Large Spread (Slide 4) */}
          <motion.div 
            {...fadeUp}
            className="w-full max-w-4xl mx-auto md:translate-x-[-4%]"
          >
            <div className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md relative">
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/4.png"
                  alt="Drift brand guide slide 4"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                04 // USER EXPERIENCE FLOW
              </div>
            </div>
          </motion.div>

          {/* 4. Overlapping Stacked Layout (Slides 5 & 6) */}
          <div className="relative max-w-5xl mx-auto min-h-[400px] md:min-h-[550px] lg:min-h-[650px] flex flex-col md:flex-row md:items-center">
            <motion.div 
              {...fadeUp}
              className="w-full md:w-[60%] bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md md:absolute md:left-0 md:top-0 z-10"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/5.png"
                  alt="Drift brand guide slide 5"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                05 // LOGOTYPE SYSTEM
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="w-full md:w-[60%] bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-lg md:absolute md:right-0 md:bottom-0 z-20 mt-6 md:mt-0"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/6.png"
                  alt="Drift brand guide slide 6"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                06 // BRANDMARK CONSTRUCTION
              </div>
            </motion.div>
          </div>

          {/* 5. 3-Column Masonry Highlight Grid (Slides 7, 8 & 9) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[7, 8, 9].map((num, idx) => (
              <motion.div
                key={num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: idx * 0.15 }}
                className="bg-paper-card border border-paper-border/60 p-4 rounded-[2rem] shadow-sm flex flex-col justify-between"
              >
                <div className="w-full relative overflow-hidden rounded-xl border border-paper-border/60">
                  <img
                    src={`/assets/Brand/${num}.png`}
                    alt={`Drift brand guide slide ${num}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-0.5 select-none">
                  0{num} // {num === 7 ? "COLOR DESIGN" : num === 8 ? "TYPOGRAPHY" : "VISUAL SYSTEM"}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 6. Feature Highlight Page (Slide 10) */}
          <motion.div 
            {...fadeUp}
            className="w-full max-w-4xl mx-auto md:translate-x-[4%]"
          >
            <div className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md relative">
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/10.png"
                  alt="Drift brand guide slide 10"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                10 // USER INTERFACE SYSTEM
              </div>
            </div>
          </motion.div>

          {/* 7. Side-by-Side Double Spread (Slides 11 & 12) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              {...fadeUp}
              className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md relative"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/11.png"
                  alt="Drift brand guide slide 11"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                11 // DATA REPRESENTATION
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md relative"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/12.png"
                  alt="Drift brand guide slide 12"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                12 // CONVERSATIONAL AI FLOW
              </div>
            </motion.div>
          </div>

          {/* 8. Overlapping Triple Layout ending (Slides 13, 14 & 15) */}
          <div className="relative max-w-5xl mx-auto min-h-[450px] md:min-h-[600px] lg:min-h-[700px] flex flex-col md:flex-row md:items-center">
            <motion.div 
              {...fadeUp}
              className="w-full md:w-[55%] bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md md:absolute md:left-0 md:top-0 z-10"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <img
                  src="/assets/Brand/13.png"
                  alt="Drift brand guide slide 13"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                13 // BRAND COLLATERAL
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="w-full md:w-[55%] bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-lg md:absolute md:right-0 md:bottom-0 z-20 mt-6 md:mt-0"
            >
              <div className="w-full relative overflow-hidden rounded-[2rem] border border-paper-border/60">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-paper-border/40">
                    <img src="/assets/Brand/14.png" alt="Slide 14" className="w-full h-auto" />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-paper-border/40">
                    <img src="/assets/Brand/15.png" alt="Slide 15" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              <div className="pt-3 flex justify-between items-center font-mono text-[8px] text-secondary-text/60 px-1 select-none">
                <span>14-15 // PRODUCT SPECIFICATIONS</span>
                <span>END OF BRAND DECK</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Complete PDF Proposal Call to Action */}
        <motion.div 
          {...fadeUp}
          className="mt-28 border-t border-paper-border/60 pt-16 text-center"
        >
          <div className="max-w-md mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full border border-paper-border bg-paper-card flex items-center justify-center mx-auto text-brand-gold">
              <FileText className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-light text-brand-primary">
                Brand Proposal Document
              </h3>
              <p className="font-sans text-xs text-secondary-text leading-relaxed font-light">
                Inspect the original comprehensive vector proposal document, outlining core brand guides, typography Construction, and print specifications.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="/assets/Brand/drift.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="click"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-paper-bg font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:shadow-md cursor-pointer group"
              >
                View Complete Brand Proposal
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
