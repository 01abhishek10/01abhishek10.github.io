/**
 * Skills data organized by category.
 * Each category contains an array of skills with name and optional icon.
 */

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML/CSS", icon: "🌐" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side development and API design",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Express.js", icon: "⚡" },
      { name: "FastAPI", icon: "🚀" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and deployment",
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "📦" },
      { name: "GitHub Actions", icon: "🔄" },
      { name: "Vercel", icon: "▲" },
      { name: "Linux", icon: "🐧" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI",
    description: "AI/ML tools and large language models",
    skills: [
      { name: "OpenAI API", icon: "🤖" },
      { name: "LangChain", icon: "🔗" },
      { name: "Prompt Engineering", icon: "💬" },
      { name: "RAG", icon: "📚" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "Vector DBs", icon: "🧮" },
    ],
  },
  {
    id: "softskills",
    title: "Soft Skills",
    description: "Professional and interpersonal abilities",
    skills: [
      { name: "Problem Solving", icon: "🧩" },
      { name: "Communication", icon: "💬" },
      { name: "Team Collaboration", icon: "🤝" },
      { name: "Agile/Scrum", icon: "🔄" },
      { name: "Leadership", icon: "🎯" },
      { name: "Continuous Learning", icon: "📖" },
    ],
  },
];
