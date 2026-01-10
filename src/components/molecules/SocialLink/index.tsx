import Icon from "@/components/atoms/Icon";

interface SocialLinkProps {
  platform: "github" | "linkedin" | "email";
  href: string;
  label?: string;
}

/**
 * SocialLink molecule - social media link with icon.
 * @param platform - Social platform type
 * @param href - Profile/contact URL
 * @param label - Accessible label (defaults to platform name)
 */
export default function SocialLink({ platform, href, label }: SocialLinkProps) {
  const defaultLabels = {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  };

  return (
    <a
      href={href}
      target={platform !== "email" ? "_blank" : undefined}
      rel={platform !== "email" ? "noopener noreferrer" : undefined}
      aria-label={label || defaultLabels[platform]}
      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
    >
      <Icon name={platform} size={20} />
    </a>
  );
}
