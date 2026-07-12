"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { CropMarks, RegistrationMark } from "./PrintMarks";
import { Project } from "@/data/projectsMetadata";

interface DriftBrandingPageProps {
  project: Project;
}

export default function DriftBrandingPage({ project }: DriftBrandingPageProps) {
  const tags = ["Brand Identity", "Product Design", "AI", "UI / UX", "Visual System"];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }
  };

  return (
    <div className="min-h-screen theme-cream bg-paper-bg text-body-text py-28 px-6 md:px-12 transition-colors duration-1000 relative">
      <CropMarks />
      <RegistrationMark className="absolute right-8 top-8 w-20 h-20 opacity-20" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Back navigation */}
        <div>
          <Link
            href="/#branding"
            data-cursor="click"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-brand-gold hover:text-brand-primary transition-colors duration-300 font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Selected Work
          </Link>
        </div>

        {/* Project Header */}
        <div className="border-b border-paper-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
              CASE STUDY // {project.category}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-brand-primary leading-none text-misregistration">
              {project.title}
            </h1>
          </div>
          <div className="flex gap-6 font-mono text-[10px] text-secondary-text">
            <div>
              <span className="block text-brand-gold font-bold">YEAR</span>
              <span className="block text-body-text mt-0.5">{project.year}</span>
            </div>
            <div>
              <span className="block text-brand-gold font-bold">TOOLS</span>
              <span className="block text-body-text mt-0.5 uppercase">{project.tools}</span>
            </div>
          </div>
        </div>

        {/* Two-Column Core Case Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Design Stories */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
                01 // Overview
              </h3>
              <p className="font-sans text-sm text-secondary-text leading-relaxed font-light">
                {project.desc}
              </p>
            </div>

            {/* Challenge */}
            <div className="space-y-3">
              <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
                02 // Challenge
              </h3>
              <p className="font-sans text-sm text-secondary-text leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            {/* Audience */}
            <div className="space-y-3">
              <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
                03 // Target Audience
              </h3>
              <p className="font-sans text-sm text-secondary-text leading-relaxed font-light">
                {project.audience}
              </p>
            </div>

            {/* Concept */}
            <div className="space-y-3">
              <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
                04 // Design Concept
              </h3>
              <p className="font-sans text-sm text-secondary-text leading-relaxed font-light">
                We focused on structural visual hierarchy, using premium typography contrast and generous margin boundaries. The core objective was to represent traditional organic warmth in a clean, modern grid.
              </p>
            </div>

          </div>

          {/* Right: Large Sticky Thumbnail preview */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-paper-card border border-paper-border p-4 rounded-[2rem] shadow-md hover:shadow-lg transition-shadow duration-500 relative">
              <div className="w-full relative overflow-hidden rounded-[1.6rem] border border-paper-border/60">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="w-full h-auto object-contain max-h-[70vh] mx-auto"
                />
              </div>
              <div className="pt-3 flex justify-between items-center font-mono text-[8px] text-secondary-text/80 px-1 select-none">
                <span>{project.dimensions}</span>
                <span>STATUS // {project.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Behance Slide Presentation Grid */}
        <div className="space-y-24 pt-16 border-t border-paper-border/60">
          
          <div className="max-w-xl space-y-3">
            <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold block">
              VISUAL SYSTEM PRESENTATION //
            </span>
            <h2 className="font-serif text-3xl font-light text-brand-primary">
              Brand Architecture Spreads
            </h2>
          </div>

          {/* 1. Large Cover Page (Slide 1) */}
          <motion.div 
            {...fadeUp}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="bg-paper-card border border-paper-border/60 p-4 rounded-[2.5rem] shadow-md relative">
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
            className="w-full max-w-4xl mx-auto md:-translate-x-[4%]"
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

          {/* 8. Overlapping Triple Layout (Slides 13, 14 & 15) */}
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

        {/* PDF Call to Action at the end */}
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
                Inspect the original comprehensive vector proposal document, outlining core brand guides, typography construction, and print specifications.
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
                View Full Brand Proposal (PDF)
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back navigation footer link */}
        <div className="border-t border-paper-border pt-12 text-center">
          <Link
            href="/#branding"
            data-cursor="click"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-brand-gold hover:text-brand-primary transition-colors duration-300 font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Selected Work
          </Link>
        </div>

      </div>
    </div>
  );
}
