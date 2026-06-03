export const works = [
  {
    idx: "i.",
    name: "AI Forge",
    desc: "A prompt-based website generation tool — describe what you want in plain language and watch a working site take shape, structure and styling and all.",
    tags: ["Generative AI", "Web Tooling", "DX"],
    caption: "demo · ai-forge",
  },
  {
    idx: "ii.",
    name: "Let's Chat",
    desc: "A video-conferencing application — low-latency rooms, clean controls, and a calm interface that gets out of the way of the conversation.",
    tags: ["WebRTC", "Real-time", "Full-stack"],
    caption: "demo · lets-chat",
  },
  {
    idx: "iii.",
    name: "Eco Voyage",
    desc: "An application to plan trips sustainably — routing, stays and choices weighed by their footprint, so travelling lightly is the easy default.",
    tags: ["Sustainability", "Planning", "Maps"],
    caption: "demo · eco-voyage",
  },
  {
    idx: "iv.",
    name: "Chorus",
    desc: "A gesture-based music player built for accessibility — playback you can conduct with movement alone, designed for hands that can't reach a small button.",
    tags: ["Accessibility", "Computer Vision", "Audio"],
    caption: "demo · chorus",
  },
] as const;

export const faculties = [
  {
    rom: "i",
    name: "Front End",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Canvas & Motion",
      "UI Libraries: hadcn, Aceternity UI , MaterialUI ",
    ],
    delay: 0,
  },
  {
    rom: "ii",
    name: "Back End",
    skills: [
      "Node.js",
      "Express",
      "GO",
      "REST & GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
    delay: 0.08,
  },
  {
    rom: "iii",
    name: "General",
    skills: [
      "System Design",
      "Git",
      "AI / LLM Integration",
      "Generative AI",
      "Business Development",
    ],
    delay: 0.16,
  },
] as const;

export const jobs = [
  {
    company: "Synapsis Medical",
    period: "May, 2025 — Present",
    roles: [
      { label: "SDE 1", current: true },
      { label: "prev. SDE Intern", current: false },
    ],
    desc: "Built an eye-care productivity software that helps people improve and protect their eye health through gentle, well-timed habits and measurement.",
    link: { href: "https://olo-care.com/en/", label: "Visit olo-care.com" },
  },
  {
    company: "Unikon AI",
    period: "June, 2024 - August, 2024",
    roles: [{ label: "Software Engineer", current: false }],
    desc: "Earlier chapter — shipping product engineering at the intersection of AI and everyday tools.",
    link: null,
  },
] as const;

export const writings = [
  {
    num: "i",
    title: "A Renaissance Man",
    meta: "Essay · 12 min",
    tag: "Essay · The Self",
    excerpt:
      "On refusing to specialise — why breadth of curiosity still matters in an age that pays the narrow.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    href: "#",
  },
  {
    num: "ii",
    title: "The Fight for Attention",
    meta: "Essay · 9 min",
    tag: "Essay · Technology",
    excerpt:
      "Our focus has become the scarcest resource of the century. Notes on noticing, and on taking it back.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dolor sagittis. Quisque tincidunt scelerisque libero ut imperdiet.",
    href: "#",
  },
  {
    num: "iii",
    title: "Techno-Feudalism",
    meta: "Essay · 14 min",
    tag: "Essay · Economy",
    excerpt:
      "When platforms quietly become landlords — who really owns the commons we all now live inside?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus, eget gravida purus euismod sed. Nullam aliquet vestibulum augue non varius.",
    href: "#",
  },
  {
    num: "iv",
    title: "Frugal Living",
    meta: "Essay · 8 min",
    tag: "Essay · Living",
    excerpt:
      "Essentialism as a design principle for a life — subtracting until only what truly matters remains.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    href: "#",
  },
] as const;

export const books = [
  { title: "Meditations", author: "Marcus Aurelius" },
  { title: "Deep Work", author: "Cal Newport" },
  { title: "Sapiens", author: "Yuval Noah Harari" },
  { title: "Zero to One", author: "Peter Thiel" },
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson" },
  { title: "The Courage to Be Disliked", author: "Kishimi & Koga" },
  { title: "Walden", author: "Henry D. Thoreau" },
] as const;

export const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "#" },
  { label: "Resume", href: "#" },
] as const;
