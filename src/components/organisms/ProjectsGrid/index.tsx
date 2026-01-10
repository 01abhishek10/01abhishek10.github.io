import Text from "@/components/atoms/Text";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projectsContent } from "@/data/content";

/**
 * ProjectsGrid organism - displays a grid of project cards.
 * Content is sourced from src/data/content.ts
 */
export default function ProjectsGrid() {
  const { projects } = projectsContent;

  return (
    <section className="py-16">
      <Text variant="h2" className="text-gray-900 mb-8">
        Featured Projects
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </section>
  );
}
