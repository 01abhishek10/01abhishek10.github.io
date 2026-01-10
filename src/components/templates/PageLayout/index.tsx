import { ReactNode } from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * PageLayout template - main layout wrapper for all pages.
 * Includes Navbar, main content area, and Footer.
 * @param children - Page content to render
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
