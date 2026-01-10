import SkillBadge from "@/components/molecules/SkillBadge";
import type { SkillCategory as SkillCategoryType } from "@/data/skills";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

/**
 * SkillCategory molecule - displays a category with its skills.
 * @param category - Category object containing title, description, and skills array
 */
export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {category.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">{category.description}</p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
