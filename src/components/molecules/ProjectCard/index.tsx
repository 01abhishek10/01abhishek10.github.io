import Icon from "@/components/atoms/Icon";
import SkillBadge from "@/components/molecules/SkillBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

/**
 * ProjectCard molecule - displays a project with details and links.
 * @param title - Project name
 * @param description - Brief project description
 * @param technologies - Array of tech/tools used
 * @param githubUrl - Link to source code
 * @param liveUrl - Link to live demo
 */
export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 line-clamp-3">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <SkillBadge key={tech} name={tech} />
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Icon name="github" size={16} />
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Icon name="external" size={16} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
