export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  // { name: "Activity", link: "#activity" },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];


export const socials = [
  {
    href: 'https://github.com/suvigyagarg',
    alt: 'GitHub',
    src: '/git.svg',
  },
  {
    href: 'https://www.linkedin.com/in/suvigyagarg/',
    alt: 'LinkedIn',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    href: 'https://x.com/confused_mnkey',
    alt: 'Twitter',
    src: '/x.svg',
  },
  {
    href: 'mailto:suvigya.2003.garg@gmail.com',
    alt: 'Gmail',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  {
    href: 'https://www.google.com/',
    alt: 'Resume',
    src: '/resume.svg',
  }
];

export const skillSvgs = [
  { src: '/javascript.svg', alt: 'Javascript' }, 
    { src: '/go.svg', alt: 'GO' }, 
  { src: '/react.svg', alt: 'React.js' },
  { src: '/next.svg', alt: 'Next.js' },
  { src: '/node.svg', alt: 'Node.js' }, 
  { src: '/mongo.svg', alt: 'MongoDB' }, 
  { src: '/postgresql.svg', alt: 'PostgreSQL' },
  { src: '/postman.svg', alt: 'Postman' }, 
  { src: '/docker.svg', alt: 'Docker' }, 
   { src: '/gits.svg', alt: 'git' }, 
];

export const skills = [
  { label: 'Frontend:', value: 'Javascript,Typescript,React.js,Next.js,Expo' },
  { label: 'Backend:', value: 'GO,Express.js,Node.js' },
  { label: 'Database:', value: 'PostgreSQL, Mongodb' },
  { label: 'Tools & Technologies:', value: 'Git,GenerativeAI,Dockers' },
];


export const companies = [
  {
    name: 'Synapsis Medical Technologies pvt. ltd.',
    logo: '/synapsis.jpeg', 
    years: 'May 2025 – Present',
    title: 'SDE Intern',
    about: [
      'Led development of scalable web applications, improving performance and user experience for millions of users.',
      'Implemented machine learning algorithms to enhance search functionality.',
      'Collaborated with cross-functional teams to integrate new features seamlessly.'
    ],
    skills: ['Python', 'Javascript','Next.js', 'Express.js', 'REST API','Postman','MongoDB'],
  },
  {
    name: 'Unikon.ai',
    logo: '/unikon.jpeg',
    years: 'June 2024 – Aug 2024',
    title: 'SDE Intern',
    about: [
      'Collaborated on the development of the frontend for an internal tool, assisting the team in assessing onboarded users. This helped refine the marketing strategy, leading to a 20% boost in marketing efficiency.',
      'Collaborated in developing a robust API (30+API routes created) ,enabling smooth data retrieval from the database leading to a 25% reduction in frontend loading time and improved user experience .',
      'Developed an independent application to display a user referral leaderboard, contributing to a 15% increase in user referrals.'
    ],
    skills: ['Javascript', 'Next.js', 'React', 'Tailwind CSS', 'Express.js','PostgreSQL(sequelize)'],
  }
];