"use client";

import React from "react";
import { RegistrationMark } from "./PrintMarks";

interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  desc: string;
  bullets?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "BSc AI & ML",
    location: "Pillai College",
    desc: "Began academic studies in artificial intelligence and machine learning, building analytical foundations."
  },
  {
    year: "2025",
    title: "BS in Data Science",
    location: "IIT Madras",
    desc: "Started parallel online degree studies in data science and computer applications."
  },
  {
    year: "Present",
    title: "Graphic Member",
    location: "Pillai College Magazine Committee",
    desc: "Directly responsible for key layout, visual campaigns, and publication designs inside the committee.",
    bullets: [
      "Designed posters for college events and initiatives",
      "Created editorial layouts for magazine publications",
      "Produced social media creatives for campaigns",
      "Collaborated with editors and committee members on visual communication"
    ]
  },
  {
    year: "Present",
    title: "Magazine Publication",
    location: "Pillai College Magazine",
    desc: "Designed and produced print-ready editorial layouts and typography spreads."
  },
  {
    year: "Future",
    title: "Future Milestones",
    location: "Continuous Craft",
    desc: "Expanding design horizons, typography fundamentals, and visual communication campaigns."
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 theme-sand bg-paper-bg text-body-text border-b border-paper-border transition-colors duration-1000 relative overflow-hidden"
    >
      <RegistrationMark className="absolute right-12 -bottom-6 w-32 h-32 opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20 space-y-4">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-brand-gold font-bold block">
            THE GRAPHIC ARCHIVE // CHRONOLOGY
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary text-misregistration cursor-default">
            Experience
          </h2>
          <div className="h-[1px] bg-paper-border w-24 my-4" />
        </div>

        {/* Unified Chronological Vertical Timeline */}
        <div className="relative border-l border-paper-border/80 ml-4 md:ml-0 md:left-1/2 md:w-[1px] md:border-l space-y-12 pb-6">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="relative pl-8 md:pl-0 md:w-1/2 md:ml-auto group"
                style={{
                  transform: !isLeft ? 'translateX(0%)' : 'none'
                }}
              >
                {/* Timeline center node dot */}
                <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-brand-gold border-2 border-paper-bg z-20 group-hover:scale-125 transition-transform duration-300 md:left-0 md:-translate-x-1.5" />

                {/* Event Card Container */}
                <div 
                  className={`max-w-md bg-paper-card border border-paper-border/70 p-6 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-md ${
                    isLeft ? "md:mr-12 md:ml-auto text-left" : "md:ml-12 md:mr-auto text-left"
                  }`}
                >
                  <span className="font-mono text-xs text-brand-gold font-bold block mb-1">
                    {event.year} //
                  </span>
                  
                  <h3 className="font-serif text-xl font-light text-brand-primary leading-tight text-misregistration cursor-default">
                    {event.title}
                  </h3>
                  <span className="font-sans text-[10px] text-secondary-text font-medium block mt-0.5 mb-3 uppercase tracking-wider">
                    {event.location}
                  </span>

                  <p className="font-sans text-xs text-secondary-text font-light leading-relaxed mb-4">
                    {event.desc}
                  </p>

                  {/* Bullet accomplishments */}
                  {event.bullets && (
                    <ul className="space-y-2 border-t border-paper-border/40 pt-3">
                      {event.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 font-sans text-[11px] text-secondary-text/90 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
