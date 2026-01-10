"use client";

import { useState } from "react";
import NextLink from "next/link";
import NavItem from "@/components/molecules/NavItem";
import Icon from "@/components/atoms/Icon";
import { navLinks } from "@/data/content";

/**
 * Navbar organism - responsive navigation header with mobile menu.
 * Navigation links are sourced from src/data/content.ts
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NextLink
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Portfolio
          </NextLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavItem key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? "close" : "menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavItem key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
