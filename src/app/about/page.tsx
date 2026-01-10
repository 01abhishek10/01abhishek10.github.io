import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import HatCard from "@/components/molecules/HatCard";
import JourneyItem from "@/components/molecules/JourneyItem";
import BeliefCard from "@/components/molecules/BeliefCard";
import CurrentlyItem from "@/components/molecules/CurrentlyItem";
import SkillsGrid from "@/components/organisms/SkillsGrid";
import { aboutContent } from "@/data/content";
import NextLink from "next/link";

/**
 * About page - creative generalist profile with multiple hats,
 * journey timeline, current focus, beliefs, and skills.
 */
export default function AboutPage() {
  const { hats, journey, currently, beliefs, philosophy, callToAction } = aboutContent;

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <Text variant="h1" className="text-gray-900 mb-2">
          {aboutContent.headline}
        </Text>
        <Text variant="h3" as="p" className="text-blue-600 font-normal mb-8">
          {aboutContent.subheadline}
        </Text>
        <Text variant="body" className="text-gray-600 max-w-2xl text-lg leading-relaxed">
          {aboutContent.intro}
        </Text>
      </section>

      {/* The Generalist Advantage */}
      <section className="mb-20 p-8 md:p-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <Text variant="h3" className="text-gray-900 mb-4">
          {philosophy.title}
        </Text>
        <Text variant="body" className="text-gray-700 max-w-3xl leading-relaxed">
          {philosophy.description}
        </Text>
      </section>

      {/* Many Hats Section */}
      <section className="mb-20">
        <Text variant="h2" className="text-gray-900 mb-2">
          The Many Hats I Wear
        </Text>
        <Text variant="body" className="text-gray-600 mb-8">
          Different challenges call for different approaches. Here&apos;s how I show up.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hats.map((hat) => (
            <HatCard
              key={hat.id}
              title={hat.title}
              icon={hat.icon}
              description={hat.description}
              skills={hat.skills}
            />
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mb-20">
        <Text variant="h2" className="text-gray-900 mb-2">
          The Journey So Far
        </Text>
        <Text variant="body" className="text-gray-600 mb-8">
          How I got here — the milestones that shaped my path.
        </Text>
        <div className="max-w-xl">
          {journey.map((item, index) => (
            <JourneyItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              isLast={index === journey.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Currently Section */}
      <section className="mb-20">
        <Text variant="h2" className="text-gray-900 mb-8">
          {currently.title}
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currently.items.map((item) => (
            <CurrentlyItem key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="mb-20">
        <Text variant="h2" className="text-gray-900 mb-2">
          What I Believe
        </Text>
        <Text variant="body" className="text-gray-600 mb-8">
          The principles that guide how I work and build.
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {beliefs.map((belief) => (
            <BeliefCard
              key={belief.title}
              title={belief.title}
              description={belief.description}
            />
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <SkillsGrid />

      {/* CTA Section */}
      <section className="mt-16 p-8 md:p-12 bg-gray-900 rounded-2xl text-center">
        <Text variant="h3" className="text-white mb-4">
          {callToAction.title}
        </Text>
        <Text variant="body" className="text-gray-300 mb-8 max-w-xl mx-auto">
          {callToAction.description}
        </Text>
        <NextLink href={callToAction.href}>
          <Button variant="primary" size="lg">
            {callToAction.buttonText}
          </Button>
        </NextLink>
      </section>
    </div>
  );
}
