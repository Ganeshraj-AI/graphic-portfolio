"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useCuratorTour } from "./CuratorTour";
import { Sun, Moon, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isTourActive, startTour, exitTour } = useCuratorTour();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("entrance");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["entrance", "collection", "featured", "experience", "designer", "contact"];
      const scrollPosition = window.scrollY + 150; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  const navLinks = [
    { name: "Collection", id: "collection" },
    { name: "Experience", id: "experience" },
    { name: "Designer", id: "designer" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-750 border-b ${
        scrolled
          ? "bg-paper-bg/90 backdrop-blur-md py-4 border-paper-border/80"
          : "bg-transparent py-6 border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#entrance"
          onClick={(e) => handleLinkClick(e, "entrance")}
          data-cursor="logo"
          className="font-serif text-2xl font-semibold tracking-wider text-brand-primary cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          GR
        </a>

        {/* Center: Browse vs Curated Tour mode */}
        <div className="flex border border-paper-border rounded-full p-0.5 bg-paper-card shadow-sm select-none">
          <button
            onClick={exitTour}
            data-cursor="click"
            className={`px-3 py-1 rounded-full text-[9px] tracking-wider uppercase font-sans font-bold transition-all duration-300 ${
              !isTourActive
                ? "bg-brand-primary text-paper-bg"
                : "text-secondary-text hover:text-brand-primary"
            }`}
          >
            Browse
          </button>
          <button
            onClick={startTour}
            data-cursor="click"
            className={`px-3 py-1 rounded-full text-[9px] tracking-wider uppercase font-sans font-bold flex items-center gap-1 transition-all duration-300 ${
              isTourActive
                ? "bg-brand-primary text-paper-bg"
                : "text-secondary-text hover:text-brand-primary"
            }`}
          >
            <Play className="w-2 h-2 fill-current" />
            Curated Tour
          </button>
        </div>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  data-cursor="click"
                  className={`font-sans text-[11px] tracking-widest uppercase transition-all duration-300 relative py-1 ${
                    isActive ? "text-brand-primary font-semibold scale-105" : "text-secondary-text hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            data-cursor="click"
            className="p-2.5 rounded-full border border-paper-border hover:border-brand-primary/40 bg-paper-card text-body-text transition-all duration-300 hover:scale-105 shadow-sm"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-[16px] h-[16px] text-brand-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-[16px] h-[16px] text-brand-gold" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
