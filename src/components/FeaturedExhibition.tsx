"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RegistrationMark } from "./PrintMarks";
import { Project } from "@/data/projectsMetadata";

interface FeaturedExhibitionProps {
  projects: Project[];
}

export default function FeaturedExhibition({ projects }: FeaturedExhibitionProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Focus on the Housewarming Invitation as our featured work
  const featured = projects.find((p) => p.slug === "housewarming") || projects[0];

  if (!featured) return null;

  return (
    <section
      id="featured"
      className="py-24 px-6 md:px-12 theme-dark bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative overflow-hidden"
    >
      {/* Concentric registration target watermark */}
      <RegistrationMark className="absolute -left-4 -top-4 w-24 h-24 text-secondary-text opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Presentation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
                ARCHIVE ROOM 03 // FEATURED WORK
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-brand-primary leading-none text-misregistration">
                Featured Work
              </h2>
            </div>

            {/* Title Lockup */}
            <div className="relative select-none pointer-events-none">
              <span className="font-sans font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter text-outline opacity-10 block leading-none">
                {featured.outlineText}
              </span>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-2xl sm:text-3xl font-light italic text-brand-gold">
                {featured.title}
              </span>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="font-sans text-base text-secondary-text leading-relaxed font-light">
                An elegant print invitation blending symmetrical traditional house illustration with clean margins and modern layouts.
              </p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-paper-border/40 pt-6 font-mono text-[9px]">
                <div>
                  <h4 className="font-sans text-[8px] tracking-widest uppercase text-brand-gold font-bold mb-1">
                    CATEGORY
                  </h4>
                  <span className="block text-body-text font-medium">{featured.category}</span>
                </div>
                <div>
                  <h4 className="font-sans text-[8px] tracking-widest uppercase text-brand-gold font-bold mb-1">
                    TOOLS USED
                  </h4>
                  <span className="block text-body-text font-medium uppercase">{featured.tools}</span>
                </div>
                <div>
                  <h4 className="font-sans text-[8px] tracking-widest uppercase text-brand-gold font-bold mb-1">
                    YEAR
                  </h4>
                  <span className="block text-body-text font-medium">{featured.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Frame with Hover trigger */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              className={`relative w-full max-w-[400px] aspect-[3/4] bg-paper-card border p-5 rounded-[2.5rem] shadow-xl transition-all duration-750 hover:scale-[1.01] overflow-hidden group ${
                isHovered ? "border-brand-gold/70" : "border-paper-border/60"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Real poster image on display */}
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden border border-paper-border/60 relative">
                <img
                  src={featured.imagePath}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/[0.015] transition-colors duration-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
