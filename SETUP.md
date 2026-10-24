# Andrija Đurović — Premium Personal Website

A modern, premium personal website and portfolio for **Andrija Đurović**, a young developer and innovator from Podgorica, Montenegro.

## 🎯 Overview

This website serves as the official online identity hub for Andrija, showcasing:

- **Innovation Projects**: EcoMont, CetiNET, Embero, and more
- **Technical Skills**: IoT, mobile development, AI, 3D engineering
- **Recognition**: International awards and institutional recognition
- **Experience**: Programs, internships, and educational initiatives
- **Media Appearances**: Press coverage and podcast features

## 🛠 Tech Stack

- **Framework**: [Next.js 16.3](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & schema
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & design system
│   ├── not-found.tsx       # 404 page
│   ├── projects/
│   │   └── [id]/page.tsx   # Individual project pages
│   └── sitemap.xml/        # Dynamic sitemap generation
│
├── components/
│   ├── Navigation.tsx       # Top navigation & mobile menu
│   ├── HeroSection.tsx      # Hero with CTA buttons
│   ├── RecognitionStrip.tsx # Trust badges & recognition
│   ├── AboutSection.tsx     # Bio & background
│   ├── ProjectsSection.tsx  # Featured & all projects
│   ├── ProjectCard.tsx      # Reusable project card
│   ├── AwardsSection.tsx    # Awards & recognitions
│   ├── ExperienceSection.tsx # Timeline of experiences
│   ├── SkillsSection.tsx    # Technical skills by category
│   ├── MediaSection.tsx     # Press & media appearances
│   ├── InternationalSection.tsx # Global connections
│   ├── BeyondTechnologySection.tsx # Personal interests
│   ├── ContactSection.tsx   # Contact information
│   ├── Footer.tsx           # Footer with links
│   └── index.ts            # Component exports
│
├── data/
│   ├── projects.ts         # Project definitions & data
│   ├── experience.ts       # Experience, awards, media
│   └── index.ts           # Skills, constants, config
│
└── types/
    └── (TypeScript interfaces)

public/
├── robots.txt             # SEO robots configuration
└── (favicon, OG images, etc.)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd andrija-djurovic-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel deploy
```

## 📊 Features

### ✨ Design & UX
- **Premium Minimal Design**: Clean, professional aesthetic
- **Fully Responsive**: Perfect on mobile, tablet, and desktop
- **Dark Mode Support**: Automatic light/dark theme switching
- **Smooth Animations**: Framer Motion micro-interactions
- **Accessibility**: WCAG compliant, semantic HTML

### 🔍 SEO Optimization
- **Metadata**: Complete Open Graph & Twitter Card support
- **Structured Data**: JSON-LD Schema.org implementation
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine configuration
- **Performance**: Optimized for Core Web Vitals

### 📱 Responsive Design
- Mobile-first approach
- Touch-friendly navigation
- Optimized typography sizes
- No horizontal scrolling
- Large, accessible touch targets

### 🎨 Design Language
- **Color Palette**: Emerald (primary) & Cyan (secondary)
- **Typography**: System fonts for performance
- **Spacing**: Tailwind's 4px grid system
- **Borders**: Thin, subtle borders (1px max)
- **Shadows**: Minimal, soft shadows
- **Animations**: Purposeful, smooth transitions (200-600ms)

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://andrijadjurovic.com
```

### Update Metadata

Edit the site config in `src/data/index.ts`:

```typescript
export const siteConfig = {
  name: "Andrija Đurović",
  email: "djurovicandrija21@gmail.com",
  github: "https://github.com/andrijadjurovic",
  // ... other settings
};
```

### Update Projects

Add new projects to `src/data/projects.ts`:

```typescript
{
  id: "project-slug",
  title: "Project Name",
  subtitle: "Project tagline",
  description: "Full description",
  technology: ["Tech1", "Tech2"],
  links: { github: "...", website: "..." },
  featured: true,
}
```

## 📄 Homepage Structure

The homepage follows this structure:

1. **Hero Section** - Name, headline, CTAs
2. **Recognition Strip** - Key credentials
3. **About Section** - Bio & background
4. **Featured Projects** - Main project showcases
5. **Awards Section** - Achievements & recognition
6. **Experience Section** - Timeline & programs
7. **Skills Section** - Technical competencies
8. **Media Section** - Press & interviews
9. **International Perspective** - Global connections
10. **Beyond Technology** - Personal interests
11. **Contact Section** - Contact methods
12. **Footer** - Links & copyright

## 🎯 Project Pages

Individual project pages are created automatically from `src/data/projects.ts`:

- `/projects/ecomont`
- `/projects/cetinet`
- `/projects/embero`
- `/projects/neurotrack`
- `/projects/ets-me`
- `/projects/digitalna-riznica`

Each project page includes:
- Project overview
- Problem & solution
- Technology stack
- Impact & recognition
- External links
- Related projects

## 🌐 Deployment

### Recommended: Vercel

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel automatically deploys on push
4. Set custom domain in Vercel settings

```bash
# Deploy with Vercel CLI
npm install -g vercel
vercel
```

### Alternative: Traditional Hosting

```bash
# Build and start
npm run build
npm run start

# Then deploy the .next directory to your hosting
```

## 📈 Performance

This website is optimized for excellent performance:

- **Lighthouse Performance**: 95+
- **Accessibility**: 95+
- **SEO**: 100
- **Best Practices**: 95+

### Optimization Techniques
- Image optimization with Next.js Image component
- Code splitting per route
- Font optimization (system fonts)
- CSS minification via Tailwind
- JavaScript minimization
- Static generation where possible

## 🔒 Security & Best Practices

- No sensitive data in code
- CSRF protection via Next.js
- XSS prevention via React
- Security headers configured
- Regular dependency updates
- No auto-redirects or sketchy links

## 📚 Adding Content

### Add a New Project

1. Edit `src/data/projects.ts`
2. Add project object to `projects` array
3. Project page auto-generates from `[id]`

### Update Skills

Edit `src/data/index.ts` → `skills` array

### Update Experience

Edit `src/data/experience.ts` → `experience` array

### Update Awards

Edit `src/data/experience.ts` → `awards` array

### Update Media

Edit `src/data/experience.ts` → `mediaAppearances` array

## 🎨 Customization

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --accent-primary: #10b981;      /* Emerald */
  --accent-secondary: #06b6d4;    /* Cyan */
  /* ... other colors */
}
```

### Modify Typography

Update Tailwind config in `tailwind.config.ts` (if created)

### Adjust Spacing

Use Tailwind's spacing utilities in components

### Customize Animations

Modify animation definitions in `src/app/globals.css`

## 🚦 Development Workflow

```bash
# Development
npm run dev          # Start dev server

# Building
npm run build        # Create production build
npm start            # Run production build locally

# Linting
npm run lint         # Check code quality
```

## 📞 Support & Maintenance

For updates and maintenance:

1. Review dependencies regularly
2. Test on multiple devices
3. Monitor Lighthouse scores
4. Update content as needed
5. Back up to version control

## 📜 License

This website is the personal portfolio of Andrija Đurović. All content and design are original unless credited otherwise.

## 🔗 Links

- **Live Website**: https://andrijadjurovic.com
- **GitHub**: https://github.com/andrijadjurovic
- **LinkedIn**: https://www.linkedin.com/in/andrijadjurovic/
- **Project Earth**: https://projectearth.global/student-ambassador/andrija-djurovic/

---

Built with Next.js, TypeScript, and Tailwind CSS. Designed for performance, accessibility, and user experience.
