interface SkillBadgeProps {
  name: string;
  icon?: string;
}

/**
 * SkillBadge molecule - displays a skill/technology tag.
 * @param name - Skill/technology name
 * @param icon - Optional emoji or icon character
 */
export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200">
      {icon && <span>{icon}</span>}
      {name}
    </span>
  );
}
