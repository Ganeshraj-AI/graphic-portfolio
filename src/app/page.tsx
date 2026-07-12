import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DesignWall from "@/components/DesignWall";
import Branding from "@/components/Branding";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getProjects, getProfileImage } from "@/data/projectsServer";

export default function Home() {
  const projects = getProjects();
  const profileImage = getProfileImage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <Navbar />

      {/* Main scannable homepage rooms */}
      <main className="flex-grow flex flex-col">
        {/* 01 // Hero */}
        <Hero projects={projects} />

        {/* 02 // About */}
        <About profileImage={profileImage} />

        {/* 03 // Selected Work (Pinterest Masonry grid) */}
        <DesignWall projects={projects} />

        {/* 04 // Branding (Drift Case Study Deck) */}
        <Branding />

        {/* 05 // My Process */}
        <Process />

        {/* 06 // Skills */}
        <Skills />

        {/* 07 // Experience Timeline */}
        <Experience />

        {/* 08 // Contact Back Cover */}
        <Contact />
      </main>

      {/* Simple Centered Footer */}
      <Footer />
    </div>
  );
}
