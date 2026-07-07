"use client";

import React from "react";
import { motion } from "framer-motion";
import { RegistrationMark } from "./PrintMarks";

interface AboutProps {
  profileImage: string;
}

export default function About({ profileImage }: AboutProps) {
  return (
    <section
      id="designer"
      className="py-24 px-6 md:px-12 theme-cream bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 overflow-hidden relative"
    >
      <RegistrationMark className="absolute right-8 top-8 w-20 h-20 opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        {/* Large Outlined watermark */}
        <div className="absolute right-0 top-0 select-none pointer-events-none opacity-5 hidden xl:block">
          <span className="font-sans font-black text-[12rem] tracking-widest text-outline uppercase block rotate-90 origin-right translate-y-36">
            DESIGNER
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Asymmetric Editorial Header & Personal Intro */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
                THE GRAPHIC ARCHIVE // THE DESIGNER
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary leading-none text-misregistration">
                The Designer
              </h2>
            </div>
            <div className="h-[1px] bg-paper-border w-24 my-4" />
            
            {/* The Creative Identity positioning */}
            <p className="font-serif text-2xl md:text-3xl text-body-text leading-relaxed font-light max-w-2xl text-misregistration cursor-default">
              Designing posters and editorial layouts that communicate before they decorate.
            </p>

            {/* Factual Monospaced Log Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-paper-border/60">
              {/* Based */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold block">
                  BASED
                </span>
                <span className="font-sans text-sm text-secondary-text font-light block">
                  Mumbai, India
                </span>
              </div>

              {/* Role */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold block">
                  ROLE
                </span>
                <span className="font-sans text-sm text-secondary-text font-light block">
                  Graphic Designer
                </span>
              </div>

              {/* Current */}
              <div className="space-y-2 col-span-1 sm:col-span-1">
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold block">
                  CURRENT
                </span>
                <span className="font-sans text-sm text-secondary-text font-light block leading-normal">
                  Pillai College Magazine Committee
                </span>
              </div>

              {/* Focus */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold block">
                  FOCUS
                </span>
                <div className="font-sans text-sm text-secondary-text font-light space-y-1 block">
                  <span className="block">Editorial</span>
                  <span className="block">Posters</span>
                  <span className="block">Identity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Display with torn/paper drop shadow */}
          <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end">
            <motion.div
              className="w-full max-w-[320px] bg-paper-card border border-paper-border p-4 rounded-[2rem] shadow-xl hover:shadow-[0_20px_45px_rgba(64,54,47,0.18)] hover:-translate-y-1 transition-all duration-500 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Torn/Printed paper effect overlay */}
              <div className="w-full aspect-[4/5] relative overflow-hidden rounded-[1.6rem] border border-paper-border/60 paper-grain">
                <img
                  src={profileImage}
                  alt="Ganesh Raj Portrait"
                  className="w-full h-full object-cover filter contrast-[1.01] brightness-[0.99]"
                />
              </div>
              <div className="pt-3 flex justify-between items-center font-mono text-[8px] text-secondary-text/80 px-1 select-none">
                <span>FIG_05 // CURATOR PORTRAIT</span>
                <span>GANESH_RAJ.JPG</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
