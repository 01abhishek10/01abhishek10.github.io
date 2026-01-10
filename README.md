# Portfolio

Personal portfolio website built with modern web technologies and a very productive AI teammate.

**Live:** https://01abhishek10.github.io/portfolio

## Tech Stack

- Next.js 16 + TypeScript
- Tailwind CSS
- Atomic Design architecture
- GitHub Pages + GitHub Actions

## How This Was Built

This portfolio was pair-programmed with [Claude Code](https://claude.ai/claude-code). Think of it as a two-person startup:

- **Me (Product Manager hat on):** "I want a portfolio with atomic design, categorized skills, and a creative about page for generalists"
- **Claude (Senior Engineer):** *writes 30+ components, sets up CI/CD, fixes TypeScript errors, debugs routing issues*
- **Me:** "Ship it"

The entire portfolio - from `npx create-next-app` to live deployment - was built in a single session. No Stack Overflow tabs were harmed in the making of this website.

## Project Structure

```
src/
├── app/                    # Next.js pages
├── components/
│   ├── atoms/              # Button, Icon, Text, Link
│   ├── molecules/          # NavItem, ProjectCard, SkillBadge
│   ├── organisms/          # Navbar, Footer, HeroSection
│   └── templates/          # PageLayout
├── data/
│   ├── content.ts          # All site content (edit here)
│   └── skills.ts           # Skills by category
└── styles/
```

## Local Development

```bash
npm install
npm run dev
```

## Customization

Edit `src/data/content.ts` to update all text, links, and content across the site.

## License

MIT
