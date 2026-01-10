import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/templates/PageLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Bhemisetty | Software Developer",
  description:
    "Portfolio of Abhishek Bhemisetty - Software Developer specializing in modern web technologies, React, Next.js, and cloud solutions.",
  keywords: ["Software Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Abhishek Bhemisetty" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
