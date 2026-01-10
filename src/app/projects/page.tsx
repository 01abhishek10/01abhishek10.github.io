import Text from "@/components/atoms/Text";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projectsContent } from "@/data/content";

/**
 * Projects page - showcase of all projects.
 * Content is sourced from src/data/content.ts
 */
export default function ProjectsPage() {
  const { title, description, projects } = projectsContent;

  return (
    <div className="py-16">
      <Text variant="h1" className="text-gray-900 mb-4">
        {title}
      </Text>
      <Text variant="body" className="text-gray-600 mb-8 max-w-2xl">
        {description}
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
