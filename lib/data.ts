// ─── Edit all your portfolio content here ───────────────────────────────────

export const PERSONAL = {
  name: "Oasis Ben-Akpata",
  role: "Software Engineer",
  location: "Abuja, NG",
  email: "oasisbenakpata@gmail.com",
  github: "https://github.com/Oasisben",
  linkedin: "https://linkedin.com/in/oasisben",
  whatsapp: "https://wa.me/9053770090",
  bio: [
    "Computer Science graduate with freelance experience building modern web applications.",
    "Passionate about software engineering, product development, and PropTech. I enjoy turning complex problems into clean, scalable solutions.",
    "When I'm not coding, I'm exploring new technologies and thinking about how software can reshape industries like real estate.",
  ],
  stats: [
    { value: "4+", label: "Projects shipped" },
    { value: "2+", label: "Freelance clients" },
    { value: "2026", label: "CS Graduate" },
  ],
};

export const SKILLS = [
  {
    icon: "brand-react",
    name: "Frontend",
    level: 88,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "server",
    name: "Backend",
    level: 80,
    tags: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: "database",
    name: "Databases",
    level: 75,
    tags: ["PostgreSQL", "Prisma"],
  },
  {
    icon: "cloud",
    name: "Tools & Deployment",
    level: 72,
    tags: ["Git", "GitHub", "Vercel"],
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "RentRight",
    desc: "Student off-campus accommodation rental platform with JWT authentication, property search/filtering, and trust-enabled technologies. Final-year project with usability testing.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    url: "https://github.com/Oasisben/comp-sci-degree-project",
  },
  {
    num: "02",
    title: "Tofeb Academy",
    desc: "Responsive academy website with reusable components, student registration workflow, and production deployment on Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://github.com/Oasisben/Tofeb-Academy",
  },
  {
    num: "03",
    title: "CGPA / GPA Tracker",
    desc: "Web app that calculates a student's GPA and CGPA across all semesters with a clean, intuitive interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/Oasisben/Student-s-CGPA-GPA-Tracker",
  },
  {
    num: "04",
    title: "Web3 Landing Pages",
    desc: "Responsive crypto and Web3 landing pages built for freelance clients, including Degen and Nebula-themed designs.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/Oasisben/degen-landing",
  },
];
