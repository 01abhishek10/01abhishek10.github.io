import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import NextLink from "next/link";
import { heroContent } from "@/data/content";

/**
 * HeroSection organism - landing page hero with intro and CTA.
 * Content is sourced from src/data/content.ts
 */
export default function HeroSection() {
  const { greeting, name, title, description, cta } = heroContent;

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl">
        <Text variant="caption" className="text-blue-600 font-medium mb-2">
          {greeting}
        </Text>
        <Text variant="h1" className="text-gray-900 mb-4">
          {name}
        </Text>
        <Text variant="h3" as="p" className="text-gray-600 font-normal mb-6">
          {title}
        </Text>
        <Text variant="body" className="text-gray-600 mb-8 max-w-2xl">
          {description}
        </Text>

        <div className="flex flex-wrap gap-4">
          <NextLink href={cta.primary.href}>
            <Button variant="primary" size="lg">
              {cta.primary.label}
            </Button>
          </NextLink>
          <NextLink href={cta.secondary.href}>
            <Button variant="outline" size="lg">
              {cta.secondary.label}
            </Button>
          </NextLink>
        </div>
      </div>
    </section>
  );
}
