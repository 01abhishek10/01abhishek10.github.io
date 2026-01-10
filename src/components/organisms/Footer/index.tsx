import SocialLink from "@/components/molecules/SocialLink";
import { siteConfig, footerContent } from "@/data/content";

/**
 * Footer organism - site footer with social links and copyright.
 * Content is sourced from src/data/content.ts
 */
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">{footerContent.copyright}</p>
            <p className="text-gray-400 text-xs mt-1">{footerContent.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            <SocialLink platform="github" href={siteConfig.social.github} />
            <SocialLink platform="linkedin" href={siteConfig.social.linkedin} />
            <SocialLink platform="email" href={`mailto:${siteConfig.email}`} />
          </div>
        </div>
      </div>
    </footer>
  );
}
