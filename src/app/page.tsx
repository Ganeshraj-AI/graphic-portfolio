import React from "react";
import { CuratorTourProvider } from "@/components/CuratorTour";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DesignWall from "@/components/DesignWall";
import FeaturedExhibition from "@/components/FeaturedExhibition";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getProjects, getProfileImage } from "@/data/projectsServer";

export default function Home() {
  // Read our real graphic assets dynamic data
  const projects = getProjects();
  const profileImage = getProfileImage();

  return (
    <CuratorTourProvider>
      {/* Sticky Digital Header */}
      <Navbar />

      {/* Main Page Layout representing the gallery rooms */}
      <main className="flex-grow flex flex-col">
        {/* Room 01: The Entrance */}
        <Hero projects={projects} />

        {/* Room 02: Selected Collection (Design Wall Masonry Grid) */}
        <DesignWall projects={projects} />

        {/* Room 03: Featured Work (Spotlight Layout) */}
        <FeaturedExhibition projects={projects} />

        {/* Room 04: Professional Experience (Exhibition Label block) */}
        <Experience />

        {/* Room 05: The Designer (Biography & Portrait) */}
        <About profileImage={profileImage} />

        {/* Room 06: Contact (The Back Cover) */}
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </CuratorTourProvider>
  );
}
