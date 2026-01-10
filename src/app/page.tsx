import HeroSection from "@/components/organisms/HeroSection";
import SkillsGrid from "@/components/organisms/SkillsGrid";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";

/**
 * Home page - landing page with hero, skills, and featured projects.
 * Content is sourced from src/data/content.ts for easy editing.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsGrid />
      <ProjectsGrid />
    </>
  );
}
