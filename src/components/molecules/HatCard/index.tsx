import SkillBadge from "@/components/molecules/SkillBadge";

interface HatCardProps {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

/**
 * HatCard molecule - displays a role/hat with icon, description and skills.
 * Used in About page to showcase different generalist personas.
 * @param title - Role name (e.g., "The Developer")
 * @param icon - Emoji or icon character
 * @param description - What this role means
 * @param skills - Related skills array
 */
export default function HatCard({ title, icon, description, skills }: HatCardProps) {
  return (
    <div className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
