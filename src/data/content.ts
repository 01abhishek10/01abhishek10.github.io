/**
 * Centralized content configuration for the portfolio.
 * Edit this file to update all text across the site.
 */

export const siteConfig = {
  name: "Abhishek Bhemisetty",
  title: "Software Developer",
  tagline: "Builder. Tinkerer. Generalist.",
  email: "your@email.com",
  social: {
    github: "https://github.com/01abhishek10",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
  },
};

export const heroContent = {
  greeting: "Hello, I'm",
  name: siteConfig.name,
  title: "Software Developer & Generalist",
  description:
    "I build exceptional digital experiences with modern technologies. Passionate about creating clean, efficient, and user-friendly applications.",
  cta: {
    primary: { label: "View My Work", href: "/projects" },
    secondary: { label: "Get In Touch", href: "/contact" },
  },
};

export const aboutContent = {
  headline: "I wear many hats.",
  subheadline: "And I like it that way.",
  intro: `Some people specialize. I generalize. Not because I can't focus, but because
    I've discovered that the most interesting problems live at the intersection of disciplines.`,

  philosophy: {
    title: "The Generalist Advantage",
    description: `In a world of specialists, being a generalist is a superpower. I connect dots
      that others don't see, translate between different domains, and build things that
      require knowledge spanning multiple fields.`,
  },

  /**
   * Roles/Hats - Different personas and what each brings
   * Icon suggestions: use emoji or icon names
   */
  hats: [
    {
      id: "developer",
      title: "The Developer",
      icon: "💻",
      description:
        "I write code that works, scales, and doesn't make the next developer cry. From frontend finesse to backend logic, I build full-stack applications.",
      skills: ["React", "Next.js", "Node.js", "Python", "TypeScript"],
    },
    {
      id: "builder",
      title: "The Builder",
      icon: "🔨",
      description:
        "I ship things. Fast. Whether it's an MVP in a weekend or a production system, I believe in launching early and iterating based on real feedback.",
      skills: ["Rapid Prototyping", "MVP Development", "Agile", "Product Thinking"],
    },
    {
      id: "learner",
      title: "The Learner",
      icon: "📚",
      description:
        "Tech evolves fast. I stay curious, experiment with new tools, and constantly expand my toolkit. Currently deep-diving into AI/ML and cloud architecture.",
      skills: ["GenAI", "LLMs", "Cloud Architecture", "System Design"],
    },
    {
      id: "problem-solver",
      title: "The Problem Solver",
      icon: "🧩",
      description:
        "Every project is a puzzle. I break down complex challenges into manageable pieces and find creative solutions that others might miss.",
      skills: ["Debugging", "Architecture", "Optimization", "Creative Thinking"],
    },
  ],

  /**
   * Journey milestones - Key moments that shaped the generalist path
   */
  journey: [
    {
      year: "2020",
      title: "Started Coding",
      description: "Wrote my first 'Hello World' and got hooked on the magic of making computers do things.",
    },
    {
      year: "2021",
      title: "Built First Project",
      description: "Shipped my first real project. It was messy, but it worked. That feeling of creation was addictive.",
    },
    {
      year: "2022",
      title: "Went Full Stack",
      description: "Realized I didn't want to be limited to just frontend or backend. Why choose when you can do both?",
    },
    {
      year: "2023",
      title: "Discovered AI",
      description: "Started exploring GenAI, building with LLMs, and understanding how AI changes everything.",
    },
    {
      year: "2024",
      title: "The Generalist Era",
      description: "Embraced the generalist identity. Started connecting dots across domains and building at intersections.",
    },
  ],

  /**
   * Current focus areas
   */
  currently: {
    title: "What I'm Up To",
    items: [
      { label: "Building", value: "AI-powered applications and developer tools" },
      { label: "Learning", value: "Cloud architecture & distributed systems" },
      { label: "Exploring", value: "The intersection of AI and software development" },
      { label: "Reading", value: "Technical blogs, indie hacker stories, and sci-fi" },
    ],
  },

  /**
   * Core beliefs/values
   */
  beliefs: [
    {
      title: "Ship > Perfect",
      description: "Done is better than perfect. Launch early, learn fast, iterate often.",
    },
    {
      title: "Learn in Public",
      description: "Share what you learn. Teaching others solidifies your own understanding.",
    },
    {
      title: "Stay Curious",
      description: "The best developers are perpetual students. Never stop exploring.",
    },
    {
      title: "Build What Matters",
      description: "Technology should solve real problems for real people.",
    },
  ],

  callToAction: {
    title: "Let's Build Something Together",
    description:
      "Whether you need a developer, a problem solver, or just someone who can figure things out — I'm your person.",
    buttonText: "Get in Touch",
    href: "/contact",
  },
};

export const projectsContent = {
  title: "Projects",
  description:
    "A collection of projects I've worked on. Each project represents a unique challenge and learning opportunity.",
  projects: [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features atomic design architecture and GitHub Pages deployment.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/01abhishek10/portfolio",
      liveUrl: "https://01abhishek10.github.io/portfolio",
      featured: true,
    },
    {
      title: "Project Two",
      description:
        "Description of your second project. Explain what problem it solves and what technologies you used to build it.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/01abhishek10/project-two",
      featured: true,
    },
    {
      title: "Project Three",
      description:
        "Description of your third project. Highlight the key features and your role in building it.",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/01abhishek10/project-three",
      featured: true,
    },
  ],
};

export const contactContent = {
  title: "Get In Touch",
  description:
    "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out through any of the channels below.",
  links: [
    {
      platform: "github" as const,
      label: "GitHub",
      href: siteConfig.social.github,
      description: "Check out my open source projects",
    },
    {
      platform: "linkedin" as const,
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      description: "Connect with me professionally",
    },
    {
      platform: "email" as const,
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      description: "Send me a direct message",
    },
  ],
  cta: {
    title: "Let's Work Together",
    description:
      "Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.",
    buttonText: "Send Me an Email",
    href: `mailto:${siteConfig.email}`,
  },
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
  tagline: "Built with Next.js, shipped with curiosity.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
