"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  teaser: string;
  purpose: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "onam",
    title: "Onam Celebrations",
    category: "Posters",
    tag: "Poster Design",
    teaser: "Capturing the traditional spirit of the harvest festival through minimal modern layouts and purposeful white space.",
    purpose: "To celebrate Kerala's cultural heritage using balanced, content-first visual design.",
    year: "2025"
  },
  {
    id: "raksha-bandhan",
    title: "Raksha Bandhan Identity",
    category: "Branding",
    tag: "Branding & Visual Storytelling",
    teaser: "A contemporary visual story reflecting the sacred sibling bond, crafted with curated color palettes and refined typography.",
    purpose: "To reinterpret traditional sentiments through a clean, modern aesthetic.",
    year: "2025"
  },
  {
    id: "housewarming",
    title: "Housewarming invitation",
    category: "Magazine",
    tag: "Editorial & Layout Design",
    teaser: "An invitation layout that balances structural architectural white space with warm, welcoming graphics.",
    purpose: "To create an inviting, print-first visual story about stepping into a new home.",
    year: "2026"
  }
];

const categories = ["All", "Posters", "Social Media", "Magazine", "Branding"];

export default function WorkShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-paper-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold block">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary">
              Selected Work
            </h2>
            <p className="font-sans text-base text-secondary-text leading-relaxed">
              A curated collection of posters, branding, editorial layouts, and visual storytelling.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 md:pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-brand-primary border-brand-primary text-paper-bg"
                    : "border-paper-border hover:border-brand-primary/40 text-secondary-text hover:text-brand-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase List */}
        <div className="space-y-24 md:space-y-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Column: Image (Even: col-span-7, Odd: col-span-7 ordered right) */}
                  <div
                    className={`lg:col-span-7 w-full ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Link href={`/works/${project.id}`} className="block group">
                      <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] bg-paper-card border border-paper-border p-6 rounded-[2.5rem] shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.01] overflow-hidden">
                        {/* Poster Placeholder Grid inside Card */}
                        <div className="w-full h-full rounded-[1.8rem] border border-dashed border-paper-border flex flex-col items-center justify-center bg-paper-bg/40 relative">
                          <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/2 transition-all duration-500" />
                          
                          {/* Minimal graphic outline representing dynamic layout */}
                          <div className="w-12 h-16 border border-paper-border rounded flex flex-col justify-between p-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-4 h-1 bg-brand-gold/60" />
                            <div className="w-full h-4 bg-brand-primary/10" />
                            <div className="w-6 h-1 bg-secondary-text/30" />
                          </div>

                          <span className="font-serif text-lg tracking-wider text-secondary-text uppercase mt-4">
                            {project.title}
                          </span>
                          <span className="font-sans text-[10px] tracking-widest text-secondary-text/60 uppercase mt-1">
                            Poster Preview Asset Placeholder
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Right Column: Project details (Even: col-span-5, Odd: col-span-5 ordered left) */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-gold font-semibold">
                        {project.tag}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl font-light text-brand-primary leading-tight">
                        {project.title}
                      </h3>
                      <span className="font-sans text-xs text-secondary-text/70 block">
                        Case Study • {project.year}
                      </span>
                    </div>

                    <p className="font-sans text-base text-secondary-text leading-relaxed font-light">
                      {project.teaser}
                    </p>

                    <div className="border-t border-paper-border pt-4 space-y-2">
                      <h4 className="font-sans text-xs tracking-wider uppercase text-brand-primary font-medium">
                        Creative Purpose
                      </h4>
                      <p className="font-sans text-sm text-secondary-text font-light leading-relaxed">
                        {project.purpose}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/works/${project.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-brand-primary text-brand-primary font-sans text-xs tracking-wider uppercase transition-all duration-300 hover:bg-brand-primary hover:text-paper-bg hover:shadow-md"
                      >
                        View Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
