export interface Project {
  slug: string;
  filename: string;
  title: string;
  category: string;
  year: string;
  tools: string;
  dimensions: string;
  status: "Published" | "Concept" | "Work in Progress";
  desc: string;
  problem: string;
  audience: string;
  colors: { hex: string; name: string }[];
  fonts: string[];
  lessons: string[];
  outlineText: string;
  imagePath: string;
  hasCaseStudy: boolean;
  featured: boolean;
}

// Explicit metadata for known works
export const projectsMetadata: Record<string, Partial<Project>> = {
  "onam.png": {
    title: "Onam Celebrations",
    category: "Poster Prints",
    year: "2025",
    tools: "Canva, Photoshop",
    dimensions: "1080 × 1920 px",
    status: "Published",
    desc: "A vibrant visual celebration of Kerala's harvest festival, capturing the traditional feast and Kathakali makeup with clean editorial spacing.",
    problem: "The creative challenge was to represent the organic, multi-colored festive elements of Onam (such as the traditional feast and the detailed Kathakali headgear) in a balanced digital format that feels celebratory yet clean and intentional.",
    audience: "Students, college community, and festival observers looking for a fresh, elegant visual representation of traditional heritage.",
    colors: [
      { hex: "#4C803F", name: "Banana Leaf Green" },
      { hex: "#C59E3F", name: "Traditional Gold" },
      { hex: "#7A1F2B", name: "Kathakali Red" },
      { hex: "#FAF7F2", name: "Warm Rice Cream" }
    ],
    fonts: ["Cormorant Garamond", "Manrope"],
    lessons: [
      "Traditional themes can look modern when given generous margins and whitespace.",
      "Contrast between detailed hand-drawn assets and minimal typography creates tension.",
      "A limited, project-specific palette grounds multi-colored subject matters."
    ],
    outlineText: "ONAM",
    featured: true
  },
  "House warming.png": {
    title: "Housewarming Invitation",
    category: "Editorial Narratives",
    year: "2026",
    tools: "Canva",
    dimensions: "1200 × 1600 px",
    status: "Published",
    desc: "An elegant, traditional housewarming ceremony invitation designed with balance, featuring an architectural layout of a home, garlands, and precise venue typography.",
    problem: "Designing a print-first invitation that blends architectural symmetry (the central house illustration) with technical details (venue coordinates, dates) without sacrificing editorial room and readability.",
    audience: "Close family, friends, and network invitees who appreciate elegant design discipline in personal ceremonies.",
    colors: [
      { hex: "#C89B3C", name: "Saffron Gold" },
      { hex: "#7A1F2B", name: "Ceremonial Red" },
      { hex: "#2E5E4E", name: "Mango Leaf Green" },
      { hex: "#FAF7F2", name: "Warm Cream" }
    ],
    fonts: ["Playfair Display", "Inter"],
    lessons: [
      "Symmetry creates instant ceremonial weight and stability.",
      "Margins are structural frames; spacing determines the priority of technical info.",
      "Using monospaced details for the date coordinates creates an interesting print aesthetic."
    ],
    outlineText: "HOME",
    featured: true
  },
  "Raksha Bandhan.png": {
    title: "Raksha Bandhan Greeting",
    category: "Identity Systems",
    year: "2025",
    tools: "Canva, Illustrator",
    dimensions: "2000 × 2800 px",
    status: "Published",
    desc: "A warm visual celebration of the sibling bond, using illustrated characters, floral borders, and custom lettering.",
    problem: "Translating traditional sibling sentiments into a clean, modern card design that balances character illustrations with high-end print-like borders and ornamentations.",
    audience: "Younger generations wanting to send a premium, thoughtful visual greeting reflecting cultural bonds.",
    colors: [
      { hex: "#FAF7F2", name: "Warm Cream" },
      { hex: "#7A1F2B", name: "Vermillion Red" },
      { hex: "#D69F3E", name: "Marigold Yellow" },
      { hex: "#161311", name: "Charcoal Accent" }
    ],
    fonts: ["Cormorant Garamond", "Inter"],
    lessons: [
      "Traditional ornamentations work best when framed inside clean borders.",
      "Pairing dynamic script lettering with strict serifs creates clear hierarchy.",
      "Slight paper texture shifts ground illustration elements."
    ],
    outlineText: "BOND",
    featured: false
  },
  "Design with purpose.png": {
    title: "Design with Purpose",
    category: "Poster Prints",
    year: "2025",
    tools: "Canva, Affinity Designer",
    dimensions: "1200 × 1600 px",
    status: "Published",
    desc: "A visually commanding layout poster showcasing high-contrast editorial typography and geometric composition.",
    problem: "Structuring asymmetrical visual layouts while maintaining strict print alignment rules.",
    audience: "Design students and layout purists looking for structural graphic guidelines.",
    colors: [
      { hex: "#7A1F2B", name: "Wine Red" },
      { hex: "#FAF7F2", name: "Warm Cream" },
      { hex: "#C89B3C", name: "Muted Gold" },
      { hex: "#161311", name: "Charcoal" }
    ],
    fonts: ["Cormorant Garamond", "Manrope"],
    lessons: [
      "Grids establish visual balance across asymmetrical shapes.",
      "Negative space behaves as an active layout framing element."
    ],
    outlineText: "GRID",
    featured: false
  },
  "Independence Day.png": {
    title: "Independence Day",
    category: "Poster Prints",
    year: "2025",
    tools: "Canva",
    dimensions: "1080 × 1350 px",
    status: "Published",
    desc: "A patriotic visual celebration combining traditional cultural elements with clean modern framing.",
    problem: "Balancing strong symbolic colors in a restrained layout framework without visually crowding elements.",
    audience: "College campus visitors and patriotic observers looking for design clarity.",
    colors: [
      { hex: "#E05A17", name: "Saffron" },
      { hex: "#2E5E4E", name: "Ashoka Green" },
      { hex: "#1D3557", name: "Navy Blue" },
      { hex: "#FAF7F2", name: "Warm White" }
    ],
    fonts: ["Playfair Display", "Inter"],
    lessons: [
      "Restraint in color saturation grounds high-contrast layout designs.",
      "Borders behave as structural stabilizers for organic assets."
    ],
    outlineText: "FREE",
    featured: false
  }
};
