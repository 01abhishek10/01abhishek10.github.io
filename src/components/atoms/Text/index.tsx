import { HTMLAttributes, ReactNode, ElementType } from "react";

type TextVariant = "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption";

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: TextVariant;
  as?: ElementType;
}

/**
 * Text atom - typography component for consistent text styling.
 * @param variant - Text style: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption"
 * @param as - HTML element to render (defaults based on variant)
 */
export default function Text({
  children,
  variant = "body",
  as,
  className = "",
  ...props
}: TextProps) {
  const styles: Record<TextVariant, string> = {
    h1: "text-4xl md:text-5xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-2xl md:text-3xl font-semibold",
    h4: "text-xl md:text-2xl font-semibold",
    body: "text-base md:text-lg",
    small: "text-sm",
    caption: "text-xs text-gray-500",
  };

  const defaultTags: Record<TextVariant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    body: "p",
    small: "span",
    caption: "span",
  };

  const Component = as || defaultTags[variant];

  return (
    <Component className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
