"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy } from "lucide-react";
import { Project } from "@/data/projectsMetadata";
import DriftBrandingPage from "./DriftBrandingPage";

interface ProjectClientPageProps {
  project: Project;
}

export default function ProjectClientPage({ project }: ProjectClientPageProps) {
  if (project.slug === "drift") {
    return <DriftBrandingPage project={project} />;
  }

  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen theme-cream bg-paper-bg text-body-text py-28 px-6 md:px-12 transition-colors duration-1000 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Back navigation */}
        <div>
          <Link
            href="/#collection"
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

        {/* Color Palette & Typography Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-paper-border/60">
          
          {/* Color Swatches */}
          <div className="space-y-4">
            <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCopyHex(color.hex)}
                  className="flex flex-col items-center bg-paper-card border border-paper-border p-3.5 rounded-xl text-center hover:scale-105 transition-transform duration-300 shadow-sm w-full cursor-pointer relative group"
                  title="Click to copy hex code"
                >
                  <div
                    className="w-10 h-10 rounded-full border border-paper-border/30 mb-2 relative flex items-center justify-center"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedColor === color.hex && (
                      <Check className="w-4 h-4 text-paper-bg bg-brand-primary p-0.5 rounded-full" />
                    )}
                  </div>
                  <span className="font-mono text-[8px] text-brand-gold font-bold block truncate max-w-full">
                    {color.name}
                  </span>
                  <span className="font-mono text-[9px] text-secondary-text/80 block mt-0.5">
                    {color.hex}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Typography Pair */}
          <div className="space-y-4">
            <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
              Typography Specimens
            </h3>
            <div className="space-y-4">
              {project.fonts.map((font, idx) => (
                <div
                  key={idx}
                  className="bg-paper-card border border-paper-border p-4 rounded-xl flex items-center justify-between shadow-sm"
                >
                  <div>
                    <span className="font-mono text-[7px] text-brand-gold font-bold block">
                      {idx === 0 ? "PRIMARY HEADING" : "BODY SPECIMEN"}
                    </span>
                    <span className="font-sans text-sm text-brand-primary font-medium">
                      {font}
                    </span>
                  </div>
                  <span
                    className={`text-2xl leading-none text-brand-primary select-none ${
                      idx === 0 ? "font-serif italic" : "font-sans font-light"
                    }`}
                  >
                    Aa
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Process Iterations Block */}
        <div className="space-y-6 pt-10 border-t border-paper-border/60">
          <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
            Design Iterations & Sketches
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-paper-card border border-dashed border-paper-border p-6 rounded-2xl h-44 flex flex-col justify-between select-none opacity-80">
              <span className="font-mono text-[8px] text-brand-gold font-bold">01 // STRUCTURAL SKETCH</span>
              <span className="font-sans text-xs text-secondary-text/85">Proportional wireframe planning & margins grid alignment.</span>
            </div>
            <div className="bg-paper-card border border-dashed border-paper-border p-6 rounded-2xl h-44 flex flex-col justify-between select-none opacity-80">
              <span className="font-mono text-[8px] text-brand-gold font-bold">02 // VECTOR MOCKUPS</span>
              <span className="font-sans text-xs text-secondary-text/85">Initial typography scaling & color combination drafts.</span>
            </div>
            <div className="bg-paper-card border border-dashed border-paper-border p-6 rounded-2xl h-44 flex flex-col justify-between select-none opacity-80">
              <span className="font-mono text-[8px] text-brand-gold font-bold">03 // PRINT PROOFING</span>
              <span className="font-sans text-xs text-secondary-text/85">Final proof check for readability & color contrast metrics.</span>
            </div>
          </div>
        </div>

        {/* Final Design Large Display */}
        <div className="space-y-6 pt-10 border-t border-paper-border/60">
          <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
            Final Design Sheet
          </h3>
          <div className="bg-paper-card border border-paper-border p-4 sm:p-8 rounded-[2.5rem] shadow-sm max-w-2xl mx-auto relative">
            <img
              src={project.imagePath}
              alt={`${project.title} final design`}
              className="w-full h-auto object-contain rounded-2xl shadow-sm border border-paper-border/40"
            />
          </div>
        </div>

        {/* Reflection Bullets (lessons) */}
        <div className="space-y-4 pt-10 border-t border-paper-border/60">
          <h3 className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold border-b border-paper-border pb-2">
            Reflection
          </h3>
          <ul className="space-y-3 max-w-2xl">
            {project.lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-3 font-sans text-xs text-secondary-text/90 font-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back navigation footer link */}
        <div className="border-t border-paper-border pt-12 text-center">
          <Link
            href="/#collection"
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
