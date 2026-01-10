import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { contactContent } from "@/data/content";

/**
 * Contact page - contact information and links.
 * Content is sourced from src/data/content.ts
 */
export default function ContactPage() {
  const { title, description, links, cta } = contactContent;

  return (
    <div className="py-16">
      <Text variant="h1" className="text-gray-900 mb-4">
        {title}
      </Text>
      <Text variant="body" className="text-gray-600 mb-12 max-w-2xl">
        {description}
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {links.map((link) => (
          <a
            key={link.platform}
            href={link.href}
            target={link.platform !== "email" ? "_blank" : undefined}
            rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
            className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Icon
                  name={link.platform}
                  size={24}
                  className="text-gray-600 group-hover:text-blue-600 transition-colors"
                />
              </div>
              <Text variant="h4" className="text-gray-900">
                {link.label}
              </Text>
            </div>
            <Text variant="small" className="text-gray-500">
              {link.description}
            </Text>
          </a>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
        <Text variant="h3" className="text-gray-900 mb-4">
          {cta.title}
        </Text>
        <Text variant="body" className="text-gray-600 mb-6 max-w-xl">
          {cta.description}
        </Text>
        <a href={cta.href}>
          <Button variant="primary" size="lg">
            {cta.buttonText}
          </Button>
        </a>
      </div>
    </div>
  );
}
