"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Project } from "@/data/projectsMetadata";

interface HeroProps {
  projects: Project[];
}

export default function Hero({ projects }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Find 2 featured projects dynamically
  const featured = projects.filter((p) => p.featured).slice(0, 2);
  const heroPosters = featured.length >= 2 ? featured : projects.slice(0, 2);

  // Build marquee tracks dynamically from all real projects
  const trackItems = projects.map((project, idx) => ({
    number: `0${idx + 1}`,
    title: project.title,
    category: project.category,
    aspect: idx % 2 === 0 ? "aspect-[2/3] w-28" : "aspect-square w-24",
    color: idx % 3 === 0 ? "border-brand-primary/45" : idx % 2 === 0 ? "border-brand-gold/45" : "border-secondary-text/40"
  }));

  const doubledTrack1 = [...trackItems, ...trackItems, ...trackItems, ...trackItems];
  const doubledTrack2 = [...trackItems, ...trackItems, ...trackItems, ...trackItems].reverse();

  const renderMarqueeTrack = (items: any[], direction: "left" | "right") => {
    return (
      <div className="overflow-hidden w-full py-4 relative select-none">
        <div className={direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 mx-3 p-4 bg-paper-card border ${item.color} rounded-2xl flex flex-col justify-between hover:border-brand-gold/80 transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-sm ${item.aspect}`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[8px] tracking-widest text-secondary-text/60 uppercase">
                  {item.category}
                </span>
                <span className="font-serif text-[10px] italic text-brand-gold">{item.number}</span>
              </div>
              <div className="mt-4">
                <h4 className="font-serif text-xs md:text-sm font-light text-brand-primary leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="entrance"
      className="min-h-screen theme-cream bg-paper-bg text-body-text border-b border-paper-border flex flex-col justify-between pt-28 pb-6 overflow-hidden transition-colors duration-1000"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        
        {/* Left Column: Bold Typography & Philosophy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
          <div className="space-y-4">
            
            {/* Available for Work badge with green pulsing dot */}
            <div className="inline-flex items-center gap-2 bg-paper-card border border-paper-border px-3.5 py-1.5 rounded-full select-none shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[8px] tracking-widest uppercase text-secondary-text font-bold">
                Available for Work
              </span>
            </div>
            
            {/* Bold broken typography layout */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tighter text-brand-primary">
              <motion.span
                className="block text-outline-thick text-body-text opacity-95 cursor-default text-misregistration"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Ganesh Raj
              </motion.span>
              <motion.span
                className="block font-sans font-black tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl pl-4 py-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                DESIGNER
              </motion.span>
              <motion.span
                className="block font-alt-serif italic font-normal pl-8 cursor-default text-misregistration"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Creating visuals that
              </motion.span>
              <motion.span
                className="block font-sans font-medium tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl pl-12 text-brand-gold"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                people remember.
              </motion.span>
            </h1>
          </div>

          {/* Designer positioning text */}
          <div className="space-y-6 max-w-xl">
            <motion.p
              className="font-sans text-base md:text-lg text-secondary-text leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Creating posters, editorial layouts, branding identities and visual stories that communicate before they decorate.
            </motion.p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScrollTo("collection")}
                data-cursor="click"
                className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-paper-bg font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                View Work
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                data-cursor="click"
                className="px-6 py-3 border border-paper-border hover:border-brand-primary/45 bg-paper-card text-brand-primary font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:shadow-sm cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Featured Posters Visible Above the Fold */}
        <div className="lg:col-span-5 w-full flex flex-col justify-center space-y-4">
          <motion.div 
            className="grid grid-cols-2 gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {heroPosters.map((poster, index) => {
              const rotation = index === 0 ? "-rotate-2" : "rotate-2";
              return (
                <div
                  key={poster.slug}
                  onClick={() => handleScrollTo("collection")}
                  className={`bg-paper-card border border-paper-border p-3 rounded-[1.5rem] shadow-md hover:shadow-[0_20px_40px_rgba(64,54,47,0.15)] hover:-translate-y-2 hover:rotate-0 transition-all duration-500 cursor-pointer ${rotation}`}
                  title={`View ${poster.title} in Collection`}
                >
                  <div className="w-full aspect-[3/4] relative overflow-hidden rounded-[1rem] border border-paper-border/60">
                    <img
                      src={poster.imagePath}
                      alt={poster.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-2 flex justify-between items-center font-mono text-[7px] text-secondary-text/80 px-0.5 select-none">
                    <span className="truncate max-w-[60%]">{poster.title}</span>
                    <span>{poster.year}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <div className="flex justify-end pr-4 select-none">
            <span className="font-mono text-[7px] tracking-widest text-secondary-text/50 uppercase">
              // FEATURED VISIBLE WORK
            </span>
          </div>
        </div>

      </div>

      {/* Running Marquees */}
      <div className="w-full mt-8 mb-2 space-y-1.5 z-0">
        {renderMarqueeTrack(doubledTrack1, "left")}
        {renderMarqueeTrack(doubledTrack2, "right")}
      </div>
    </section>
  );
}
