export const works = [
  {
    idx: 'i.',
    name: 'AI Forge',
    desc: 'A prompt-based website generation tool — describe what you want in English language and watch a working site take shape, structure and styling.',
    tags: ['Generative AI', 'Frontend Developnment', 'Web tooling'],
    caption: 'demo · ai-forge',
    code: 'https://github.com/suvigyagarg/AIForge',
    thumbnail: '/Images/ai_forge_thumbnail.png',
    video: '/videos/ai_forge_video.mp4',
  },
  // {
  //   idx: "ii.",
  //   name: "Let's Chat",
  //   desc: "A video-conferencing application — low-latency rooms, clean controls, and a calm interface that gets out of the way of the conversation.",
  //   tags: ["WebRTC", "Real-time", "Full-stack"],
  //   caption: "demo · lets-chat",
  //   code: "https://github.com/suvigyagarg/Lets-Chat",
  //    thumbnail :"/Images/ai_forge_thumbnail.png",
  //   video :"/videos/ai_forge_video.mp4"

  // },
  {
    idx: 'ii.',
    name: 'Eco Voyage',
    desc: 'An application to plan trips sustainably — routing, stays and choices weighed by their footprint, so travelling lightly is the easy default.',
    tags: ['Sustainability', 'Machine Learning', 'Frontend'],
    caption: 'demo · eco-voyage',
    code: 'https://github.com/Nagpal45/Ecovoyage',
    thumbnail: '/Images/ecovoyage_thumbnail.png',
    video: '/videos/ecovoyage_video.mp4',
  },
  {
    idx: 'iii.',
    name: 'Chorus',
    desc: "A gesture-based music player built for accessibility — playback you can conduct with hand gesture's, Use's the spotify Playback API to play music",
    tags: ['API Integration', 'Computer Vision', 'Frontend'],
    caption: 'demo · chorus',
    code: 'https://github.com/suvigyagarg/chorus',
    thumbnail: '/Images/chorus_thumbnail.png',
    video: '/videos/chorus_video.mp4',
  },
] as const;

export const faculties = [
  {
    rom: 'i',
    name: 'Front End',
    skills: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Tailwind CSS',
      'Canvas & Motion',
      'UI Libraries: hadcn, Aceternity UI , MaterialUI ',
    ],
    delay: 0,
  },
  {
    rom: 'ii',
    name: 'Back End',
    skills: [
      'Node.js',
      'Express',
      'GO',
      'REST & GraphQL',
      'PostgreSQL',
      'MongoDB',
      'Supabase',
    ],
    delay: 0.08,
  },
  {
    rom: 'iii',
    name: 'General',
    skills: [
      'System Design',
      'Git',
      'AI / LLM Integration',
      'Generative AI',
      'Business Development',
    ],
    delay: 0.16,
  },
] as const;

export const jobs = [
  {
    company: 'Synapsis Medical',
    period: 'May, 2025 — Present',
    roles: [
      { label: 'SDE 1', current: true },
      { label: 'prev. SDE Intern', current: false },
    ],
    desc: 'Built an eye-care productivity software that helps people improve and protect their eye health through gentle, well-timed habits and measurement.',
    link: { href: 'https://olo-care.com/en/', label: 'Visit olo-care.com' },
  },
  {
    company: 'Unikon AI',
    period: 'June, 2024 - August, 2024',
    roles: [{ label: 'SDE Intern', current: false }],
    desc: 'Earlier chapter — shipping product engineering at the intersection of AI and everyday tools.',
    link: null,
  },
] as const;

export const about = [
  {
    num: 'i',
    title: 'Education',
    meta: 'B.Tech · JIIT Noida · 2025',
    tag: 'B.Tech · Computer Science Engineering',
    excerpt: 'Jaypee Institute of Information and Technology',
    body: 'I am a 2025 Computer Science Engineering graduate with a 7.1 CGPA. My studies focused on system design, web development, and system-level programming, alongside a growing interest in leveraging technical skills for business development.',
    image: '/Images/about1.jpg',
    href: '#',
  },
  {
    num: 'ii',
    title: 'Technical Ability',
    meta: '3+ years · Experinence',
    tag: 'Typescript · GO · Frontend Design',
    excerpt:
      'A software developer with over 3 years of experience working with JavaScript and typescript—and more recently, Go .',
    body: ' I’ve experience in building frontends and backend, and I love turning cool ideas into real, working products.',
    image: '/Images/about2.jpg',
    href: '#',
  },
  {
    num: 'iii',
    title: 'Belief',
    meta: '',
    tag: 'Software Engineer · Buisness Developnment',
    excerpt:
      ' I Believe that breath of curiosity matters in an age of Information.',
    body: 'I enjoy tackling new problems, whether that means learning a new skill or stepping into a different part of the product cycle. I want to work alongside teams where my ability to adapt quickly translates into building better, highly effective solutions. ',
    image: '/Images/about3.jpg',
    href: '#',
  },

  // {
  //   num: "iv",
  //   title: "Hobbies",
  //   meta: "Essay · 8 min",
  //   tag: "Essay · Living",
  //   excerpt:
  //     "Essentialism as a design principle for a life — subtracting until only what truly matters remains.",
  //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
  //   href: "#",
  // },
] as const;

export const books = [
  { title: 'Meditations', author: 'Marcus Aurelius' },
  { title: 'Deep Work', author: 'Cal Newport' },
  { title: 'Sapiens', author: 'Yuval Noah Harari' },
  { title: 'Zero to One', author: 'Peter Thiel' },
  { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson' },
  { title: 'The Courage to Be Disliked', author: 'Kishimi & Koga' },
  { title: 'Walden', author: 'Henry D. Thoreau' },
] as const;

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suvigyagarg/' },
  { label: 'GitHub', href: 'https://github.com/suvigyagarg' },
  // { label: "Twitter", href: "#" },
  { label: 'Email', href: 'suvigyagarg178@gmail.com' },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1N9ZvkB2f9utvCi5Q0wREWTZPs_Sxzt3M/view?usp=sharing',
  },
] as const;
