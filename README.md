# Andrija Đurović — Premium Personal Website

A modern, premium personal website and portfolio for **Andrija Đurović**, a young developer and innovator from Podgorica, Montenegro.

Visit: [andrijadjurovic.com](https://andrijadjurovic.com)

---

## 🎯 What's Included

This website showcases:

- **Innovation Projects** — EcoMont, CetiNET, Embero, NeuroTrack, ETS.me, and more
- **Technical Skills** — IoT, mobile development, AI, 3D engineering, and more
- **International Recognition** — UN/ITU awards, Project Earth, Royal Institution
- **Experience** — Programs, internships, educational initiatives
- **Media Appearances** — Press coverage, podcast features
- **Personal Background** — Education, beyond-technology interests

---

## 🚀 Quick Start

### Option 1: Automated Setup

```bash
cd andrija-djurovic-portfolio
bash scripts/setup.sh
```

### Option 2: Manual Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

---

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** — Complete project structure and configuration
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — Deploy to production (Vercel, etc.)
- **[CONTENT_UPDATES.md](./CONTENT_UPDATES.md)** — How to update content without coding

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16.3** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Vercel** | Deployment platform |

---

## 🏗 Project Structure

```
src/
├── app/                  # Routes and pages
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── not-found.tsx    # 404 page
│   └── projects/[id]/   # Individual project pages
│
├── components/          # React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   └── (14 more components)
│
├── data/               # Content & configuration
│   ├── projects.ts     # All projects
│   ├── experience.ts   # Timeline, awards, media
│   └── index.ts        # Skills, config
│
└── types/             # TypeScript interfaces
```

---

## 🎨 Key Features

### ✨ Premium Design
- Minimal, professional aesthetic
- Fully responsive (mobile, tablet, desktop)
- Dark mode support
- Smooth micro-interactions
- Accessibility-first (WCAG compliant)

### 🔍 SEO Optimized
- Complete metadata & Open Graph
- JSON-LD structured data
- Dynamic sitemap generation
- robots.txt configuration
- Lighthouse 95+

### 📱 Mobile-First
- Touch-friendly navigation
- Readable typography at all sizes
- Large, accessible targets
- No horizontal scrolling

### 🚀 Performance
- Optimized images
- Code splitting
- Static generation
- Edge caching
- Core Web Vitals optimized

---

## 📋 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/projects/ecomont` | EcoMont project details |
| `/projects/cetinet` | CetiNET project details |
| `/projects/embero` | Embero project details |
| `/projects/[id]` | Auto-generated project pages |
| `/sitemap.xml` | SEO sitemap |
| `/robots.txt` | Search engine config |

---

## 🔧 Customization

### Update Your Info

Edit `src/data/index.ts`:

```typescript
export const siteConfig = {
  name: "Andrija Đurović",
  email: "your.email@example.com",
  github: "https://github.com/yourprofile",
  linkedin: "https://linkedin.com/in/yourprofile",
  // ... more fields
};
```

### Add a Project

Edit `src/data/projects.ts` and add to the `projects` array. The project page auto-generates!

### Change Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --accent-primary: #10b981;      /* Emerald */
  --accent-secondary: #06b6d4;    /* Cyan */
}
```

See [CONTENT_UPDATES.md](./CONTENT_UPDATES.md) for detailed customization guides.

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
# Option 1: Push to GitHub, then connect in Vercel
git push origin main

# Option 2: Use Vercel CLI
npm install -g vercel
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

## 📊 Performance Metrics

Target metrics for Lighthouse:

- ✓ **Performance**: 95+
- ✓ **Accessibility**: 95+
- ✓ **SEO**: 100
- ✓ **Best Practices**: 95+

---

## 🔐 Best Practices Implemented

- ✓ No hardcoded secrets
- ✓ CSRF protection via Next.js
- ✓ XSS prevention via React
- ✓ Security headers configured
- ✓ Regular dependency updates
- ✓ Type-safe development

---

## 📝 Content Files

### Easy to Edit (Data):
- `src/data/projects.ts` — Add/update projects
- `src/data/experience.ts` — Timeline, awards, media
- `src/data/index.ts` — Skills, interests, config

### Design & Code:
- `src/components/*.tsx` — Visual components
- `src/app/globals.css` — Styles & animations
- `src/app/page.tsx` — Homepage structure

---

## 🚦 Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

---

## 🐛 Troubleshooting

**Changes not showing?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear cache: `rm -rf .next && npm run dev`

**Build errors?**
- Run `npm run build` locally to see full error
- Check TypeScript types in data files
- Verify syntax in `src/data/`

**Port 3000 already in use?**
- Kill process: `lsof -i :3000` then `kill -9 <PID>`
- Or use different port: `npm run dev -- -p 3001`

See [SETUP.md](./SETUP.md) for more troubleshooting.

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🔗 Important Links

- **Website**: https://andrijadjurovic.com
- **GitHub**: https://github.com/andrijadjurovic
- **LinkedIn**: https://www.linkedin.com/in/andrijadjurovic/
- **Project Earth**: https://projectearth.global/student-ambassador/andrija-djurovic/

---

## 📄 License

Personal portfolio. All content and design by Andrija Đurović unless otherwise credited.

---

## 🎉 Next Steps

1. **Start Development**
   ```bash
   npm run dev
   ```

2. **Customize Content**
   - See [CONTENT_UPDATES.md](./CONTENT_UPDATES.md)

3. **Deploy to Production**
   - See [DEPLOYMENT.md](./DEPLOYMENT.md)

4. **Monitor & Maintain**
   - Update content as projects evolve
   - Keep dependencies current
   - Monitor Lighthouse scores

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
