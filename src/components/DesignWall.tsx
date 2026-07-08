"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ArrowRight } from "lucide-react";
import { CropMarks } from "./PrintMarks";
import { Project } from "@/data/projectsMetadata";

interface DesignWallProps {
  projects: Project[];
}

const categories = ["All", "Poster", "Editorial", "Magazine", "Identity", "Social"];

export default function DesignWall({ projects }: DesignWallProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);

  const filteredItems = projects.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section
      id="collection"
      className="py-24 px-6 md:px-12 theme-offwhite bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative"
    >
      <CropMarks />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
              THE GRAPHIC ARCHIVE // SELECTED WORK
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary">
              Selected Work
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1.5 md:pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-cursor="click"
                className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border transition-all duration-300 rounded-full ${
                  activeCategory === cat
                    ? "bg-brand-primary border-brand-primary text-paper-bg font-medium"
                    : "border-paper-border/80 hover:border-brand-primary/40 text-secondary-text hover:text-brand-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Full Image Masonry Grid with View Project triggers */}
        <div className="masonry-grid columns-1 md:columns-2 lg:columns-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const rotationClass = index % 3 === 0 ? "hover:rotate-1" : index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-0.5";
              return (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="masonry-item"
                >
                  <div className={`flex flex-col gap-5 group transition-all duration-500 ${rotationClass}`}>
                    
                    {/* Poster artwork thumbnail (Full bleed, Click opens Lightbox) */}
                    <div 
                      className="w-full relative overflow-hidden rounded-2xl shadow-sm border border-paper-border/40 bg-paper-card group-hover:shadow-[0_20px_40px_rgba(64,54,47,0.12)] group-hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                      data-cursor="view"
                    >
                      <img
                        src={item.imagePath}
                        alt={item.title}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/[0.01] transition-colors duration-500" />
                      <div className="absolute top-4 right-4 bg-paper-card/90 backdrop-blur-sm p-2 rounded-full border border-paper-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-4 h-4 text-brand-primary" />
                      </div>
                    </div>

                    {/* Factual Monograph Caption + View Project Router link */}
                    <div className="px-1 space-y-2.5">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-xl font-light text-brand-primary leading-tight text-misregistration cursor-default">
                            {item.title}
                          </h3>
                          <span className="font-mono text-[9px] italic text-brand-gold font-bold">
                            {item.year}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-secondary-text/80 block">
                          {item.category}
                        </span>
                      </div>

                      {/* One sentence description */}
                      <p className="font-sans text-xs text-secondary-text font-light leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Link to dynamic page */}
                      <div className="pt-1.5">
                        <Link
                          href={`/works/${item.slug}`}
                          data-cursor="click"
                          className="inline-flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-brand-primary hover:text-brand-gold transition-colors duration-300 font-bold group/link"
                        >
                          View Project
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ scale: 0.96, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-paper-card border border-paper-border rounded-[2.5rem] p-5 max-w-lg w-full flex flex-col gap-5 max-h-[92vh] overflow-y-auto relative theme-cream text-body-text"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-paper-border hover:border-brand-primary/40 bg-paper-bg text-secondary-text hover:text-brand-primary transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Poster Artwork Display */}
                <div className="w-full relative overflow-hidden rounded-[1.8rem] border border-paper-border/60">
                  <img
                    src={selectedItem.imagePath}
                    alt={selectedItem.title}
                    className="w-full h-auto object-contain max-h-[62vh] mx-auto"
                  />
                </div>

                {/* Minimalist Metadata */}
                <div className="border-t border-paper-border pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold block mb-0.5">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-xl font-light text-brand-primary leading-tight text-misregistration">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <div className="flex gap-4 font-mono text-[9px] text-secondary-text">
                    {selectedItem.year && selectedItem.year.trim() !== "" && (
                      <div>
                        <span className="block text-brand-gold font-bold">YEAR</span>
                        <span className="block text-body-text mt-0.5">{selectedItem.year}</span>
                      </div>
                    )}
                    {selectedItem.tools && selectedItem.tools.trim() !== "" && (
                      <div>
                        <span className="block text-brand-gold font-bold">TOOLS</span>
                        <span className="block text-body-text mt-0.5 uppercase">{selectedItem.tools}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
