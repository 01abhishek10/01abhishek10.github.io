import Text from "@/components/atoms/Text";
import SkillCategory from "@/components/molecules/SkillCategory";
import { skillCategories } from "@/data/skills";

/**
 * SkillsGrid organism - displays skills organized by category.
 * Renders skill categories in a responsive grid layout.
 * Categories: Frontend, Backend, Cloud & DevOps, GenAI, Soft Skills
 */
export default function SkillsGrid() {
  return (
    <section className="py-16">
      <Text variant="h2" className="text-gray-900 mb-2">
        Skills & Technologies
      </Text>
      <Text variant="body" className="text-gray-600 mb-8">
        Technologies and tools I work with
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
