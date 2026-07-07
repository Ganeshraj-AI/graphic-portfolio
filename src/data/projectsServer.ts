import fs from "fs";
import path from "path";
import { Project, projectsMetadata } from "./projectsMetadata";

/**
 * Scan the public posters directory and build project data dynamically.
 */
export function getProjects(): Project[] {
  const postersDir = path.join(process.cwd(), "public/assets/posters");
  if (!fs.existsSync(postersDir)) return [];

  const files = fs.readdirSync(postersDir).filter((f) =>
    f.match(/\.(png|jpg|jpeg|webp)$/i)
  );

  return files.map((file) => {
    const slug = file
      .replace(/\.[^/.]+$/, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    const meta = projectsMetadata[file] || {};
    const defaultTitle = file
      .replace(/\.[^/.]+$/, "")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      slug,
      filename: file,
      title: meta.title || defaultTitle,
      category: meta.category || "Poster Prints",
      year: meta.year || "2026",
      tools: meta.tools || "Canva",
      dimensions: meta.dimensions || "Dimensions Variable",
      status: meta.status || "Published",
      desc: meta.desc || "A visual design exploration in poster format.",
      problem: meta.problem || "Design challenge documentation is in progress.",
      audience: meta.audience || "Design lovers and observers.",
      colors: meta.colors || [
        { hex: "#7A1F2B", name: "Wine Red" },
        { hex: "#C89B3C", name: "Warm Gold" },
        { hex: "#40362F", name: "Charcoal" },
        { hex: "#FAF7F2", name: "Cream" }
      ],
      fonts: meta.fonts || ["Cormorant Garamond", "Manrope"],
      lessons: meta.lessons || [
        "White space acts as active breathing room.",
        "Typography creates structural hierarchy."
      ],
      outlineText: meta.outlineText || "POSTER",
      imagePath: `/assets/posters/${file}`,
      hasCaseStudy: !!meta.problem,
      featured: meta.featured !== undefined ? meta.featured : false
    };
  });
}

/**
 * Scan the public profile directory and return the first available portrait image path.
 */
export function getProfileImage(): string {
  const profileDir = path.join(process.cwd(), "public/assets/profile");
  if (!fs.existsSync(profileDir)) return "/assets/profile/ganesh-portrait.jpg.jpeg";

  const files = fs.readdirSync(profileDir).filter((f) =>
    f.match(/\.(png|jpg|jpeg|webp)$/i)
  );

  if (files.length > 0) {
    return `/assets/profile/${files[0]}`;
  }
  return "/assets/profile/ganesh-portrait.jpg.jpeg";
}
