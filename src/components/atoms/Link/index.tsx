import NextLink from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  external?: boolean;
}

/**
 * Link atom - navigation link with internal/external support.
 * @param href - Destination URL
 * @param external - Opens in new tab if true
 */
export default function Link({
  href,
  children,
  external = false,
  className = "",
  ...props
}: LinkProps) {
  const baseStyles =
    "text-blue-600 hover:text-blue-800 transition-colors duration-200 underline-offset-2 hover:underline";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={`${baseStyles} ${className}`} {...props}>
      {children}
    </NextLink>
  );
}
