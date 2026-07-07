"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillItem {
  id: string;
  name: string;
  category: string;
}

const skills: SkillItem[] = [
  { id: "01", name: "Poster Design", category: "Layout & Composition" },
  { id: "02", name: "Branding", category: "Visual Identity" },
  { id: "03", name: "Typography", category: "Type Pairing & Hierarchy" },
  { id: "04", name: "Editorial", category: "Layouts & Publications" },
  { id: "05", name: "Social Media", category: "Visual Narratives" },
  { id: "06", name: "Canva", category: "Core Design Tool" },
  { id: "07", name: "Affinity Designer", category: "Vector Illustration" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-paper-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-4">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold block">
            Capabilities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary">
            My Toolkit
          </h2>
          <div className="h-[1px] bg-paper-border w-24 my-4" />
          <p className="font-sans text-base text-secondary-text leading-relaxed">
            A focused assembly of skills, methodologies, and platforms I employ to tell design stories.
          </p>
        </div>

        {/* Toolkit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="bg-paper-card border border-paper-border p-8 rounded-2xl flex flex-col justify-between h-48 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/20 group relative overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {/* Paper line decorative element on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              
              {/* Index Number */}
              <div className="flex justify-between items-start">
                <span className="font-sans text-[10px] tracking-widest text-secondary-text/50 uppercase">
                  {skill.category}
                </span>
                <span className="font-serif text-sm italic text-brand-gold font-light">
                  {skill.id}
                </span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-light text-brand-primary transition-colors duration-300 group-hover:text-brand-primary">
                  {skill.name}
                </h3>
                <div className="w-12 h-[1px] bg-paper-border group-hover:bg-brand-primary/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
