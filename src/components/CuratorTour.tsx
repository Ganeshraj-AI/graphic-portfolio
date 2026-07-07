"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ChevronRight, X, Sparkles } from "lucide-react";

interface TourStep {
  targetId: string;
  roomName: string;
  roomCode: string;
  commentary: string;
}

const tourSteps: TourStep[] = [
  {
    targetId: "entrance",
    roomName: "The Entrance",
    roomCode: "ROOM 01 // THE ENTRANCE",
    commentary: "Welcome to the Graphic Archive. We begin the exhibition in Room 01. The objective here is pure visual impact: commanding attention using raw scale contrast, large editorial typography, and the infinite scrolling marquees of our active visual archive."
  },
  {
    targetId: "collection",
    roomName: "Selected Collection",
    roomCode: "ROOM 02 // VISUAL COLLECTION",
    commentary: "Moving into Room 02. This is the Design Wall. By utilizing a Pinterest-style masonry columns grid, we allow diverse poster aspects, brand kits, and print catalog dimensions to exist together, breaking rigid corporate web structures."
  },
  {
    targetId: "featured",
    roomName: "Featured Work",
    roomCode: "ROOM 03 // FEATURED WORK",
    commentary: "Room 03 highlights a single featured work: the Housewarming Invitation. Rather than fabricating case studies, we showcase this design in isolation to let the print-inspired composition speak for itself."
  },
  {
    targetId: "experience",
    roomName: "Experience",
    roomCode: "ROOM 04 // EXPERIENCE",
    commentary: "We move into Room 04, the Experience block. Styled like an exhibition label, this section presents Ganesh's real role designing event posters and magazine pages inside the Pillai College Magazine Committee."
  },
  {
    targetId: "designer",
    roomName: "The Designer",
    roomCode: "ROOM 05 // BIOGRAPHY",
    commentary: "Room 05 introduces Ganesh Raj. This section serves as an editorial biography, presenting a clean personal manifesto and portrait without fictional statistics."
  },
  {
    targetId: "contact",
    roomName: "The Back Cover",
    roomCode: "ROOM 06 // THE BACK COVER",
    commentary: "We conclude the tour in Room 06. Styled like the back cover of a design book, this is where you can connect with Ganesh Raj directly via LinkedIn, Instagram, or Email."
  }
];

interface CuratorTourContextType {
  isTourActive: boolean;
  currentStep: number;
  startTour: () => void;
  exitTour: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

const CuratorTourContext = createContext<CuratorTourContextType | undefined>(undefined);

export function CuratorTourProvider({ children }: { children: React.ReactNode }) {
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const startTour = () => {
    setIsTourActive(true);
    setCurrentStep(0);
  };

  const exitTour = () => {
    setIsTourActive(false);
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      exitTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Scroll to target element when step changes
  useEffect(() => {
    if (!isTourActive) return;

    const step = tourSteps[currentStep];
    const element = document.getElementById(step.targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Temporarily highlight the element by adding a class/border
      element.classList.add("ring-2", "ring-brand-gold/40", "transition-all", "duration-500");
      const timer = setTimeout(() => {
        element.classList.remove("ring-2", "ring-brand-gold/40");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isTourActive]);

  return (
    <CuratorTourContext.Provider value={{ isTourActive, currentStep, startTour, exitTour, nextStep, prevStep }}>
      {children}

      {/* Guided Tour bottom HUD Overlay */}
      <AnimatePresence>
        {isTourActive && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md bg-paper-card border border-brand-primary p-6 rounded-3xl shadow-2xl z-[9998] theme-cream text-body-text"
          >
            {/* HUD Header */}
            <div className="flex justify-between items-center border-b border-paper-border pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-brand-gold" />
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-gold font-bold">
                  {tourSteps[currentStep].roomCode}
                </span>
              </div>
              <button
                onClick={exitTour}
                data-cursor="click"
                className="p-1 rounded-full hover:bg-paper-bg text-secondary-text hover:text-brand-primary transition-colors"
                aria-label="Exit Tour"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Commentary text */}
            <div className="space-y-4">
              <span className="font-serif text-lg italic text-brand-primary block leading-tight">
                {tourSteps[currentStep].roomName}
              </span>
              <p className="font-sans text-xs leading-relaxed text-secondary-text font-light">
                {tourSteps[currentStep].commentary}
              </p>
            </div>

            {/* Navigation buttons inside HUD */}
            <div className="flex justify-between items-center pt-4 border-t border-paper-border mt-4">
              <span className="font-mono text-[10px] text-secondary-text/60">
                EXHIBIT {currentStep + 1} / {tourSteps.length}
              </span>
              <div className="flex items-center gap-2">
                {currentStep > 0 && (
                  <button
                    onClick={prevStep}
                    data-cursor="click"
                    className="px-3 py-1.5 border border-paper-border hover:border-brand-primary/40 text-[10px] tracking-wider uppercase font-sans text-secondary-text hover:text-brand-primary transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={nextStep}
                  data-cursor="click"
                  className="px-4 py-1.5 bg-brand-primary hover:bg-brand-primary/95 text-paper-bg hover:text-brand-gold text-[10px] tracking-wider uppercase font-sans font-semibold flex items-center gap-1 transition-all duration-300 shadow-sm"
                >
                  {currentStep === tourSteps.length - 1 ? "Finish Tour" : "Next Room"}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CuratorTourContext.Provider>
  );
}

export function useCuratorTour() {
  const context = useContext(CuratorTourContext);
  if (!context) {
    throw new Error("useCuratorTour must be used within a CuratorTourProvider");
  }
  return context;
}
