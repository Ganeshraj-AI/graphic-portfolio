"use client";

import React from "react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-16 px-6 md:px-12 bg-paper-bg border-t border-paper-border/60 text-center relative select-none">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
        
        {/* Factual Monograph End */}
        <div>
          <span className="font-serif text-lg font-medium text-brand-primary block leading-none">
            Ganesh Raj
          </span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-secondary-text block mt-2">
            Graphic Designer // © 2026
          </span>
        </div>

        <div className="h-[1px] bg-paper-border w-16 my-1" />

        <p className="font-sans text-[10px] tracking-wider text-secondary-text/80 leading-relaxed">
          Designed & developed by Ganesh Raj.
        </p>

        {/* Back to top anchor */}
        <button
          onClick={handleScrollToTop}
          className="font-sans text-[9px] tracking-widest uppercase text-brand-gold hover:text-brand-primary transition-all duration-300 underline underline-offset-4 mt-2 cursor-pointer"
        >
          Back to Top
        </button>

      </div>
    </footer>
  );
}
