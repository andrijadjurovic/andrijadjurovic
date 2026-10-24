# 📖 Documentation Index

Quick navigation to all project documentation and guides.

## 🚀 Getting Started (Start Here!)

**New to the project?** Start with these in order:

1. **[README.md](./README.md)** (5 min read)
   - Project overview
   - Quick start commands
   - What's included
   - Key features

2. **[SETUP.md](./SETUP.md)** (15 min read)
   - Complete setup instructions
   - Project structure
   - Configuration guide
   - Troubleshooting

3. **[DEPLOYMENT.md](./DEPLOYMENT.md)** (10 min read)
   - How to deploy to production
   - Vercel setup (recommended)
   - Custom domain configuration
   - Monitoring & maintenance

---

## 📝 Content & Customization

**Want to update content?** Read these:

- **[CONTENT_UPDATES.md](./CONTENT_UPDATES.md)** (20 min read)
  - How to add projects
  - How to add awards
  - How to update skills
  - How to change colors
  - Writing tips & best practices

---

## 📋 Project Documentation

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** (5 min read)
  - What's been built
  - Status overview
  - Quality checks
  - Key achievements

---

## 🗂 File Structure Quick Guide

```
andrija-djurovic-portfolio/
├── README.md              ← Start here!
├── SETUP.md              ← Installation & setup
├── DEPLOYMENT.md         ← How to deploy
├── CONTENT_UPDATES.md    ← How to update content
├── PROJECT_SUMMARY.md    ← What's included
├── package.json          ← Dependencies
├── tsconfig.json         ← TypeScript config
│
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Homepage
│   │   ├── layout.tsx            ← Root layout with metadata
│   │   ├── globals.css           ← Global styles
│   │   ├── not-found.tsx         ← 404 page
│   │   ├── projects/[id]/page.tsx ← Project details
│   │   └── sitemap.xml/route.ts  ← Dynamic sitemap
│   │
│   ├── components/               ← 14 React components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── MediaSection.tsx
│   │   ├── InternationalSection.tsx
│   │   ├── BeyondTechnologySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   │
│   ├── data/                     ← Content & config
│   │   ├── projects.ts           ← All projects
│   │   ├── experience.ts         ← Timeline, awards, media
│   │   └── index.ts              ← Skills, config
│   │
│   └── types/                    ← TypeScript interfaces
│
├── public/
│   ├── robots.txt               ← SEO robots.txt
│   └── favicon.ico
│
└── scripts/
    └── setup.sh                 ← Automated setup
```

---

## 🎯 Common Tasks

### "I want to add a new project"
→ Read: [CONTENT_UPDATES.md - Add a New Project](./CONTENT_UPDATES.md#add-a-new-project)  
→ Edit: `src/data/projects.ts`  
→ Time: 2-3 minutes

### "I want to change the colors"
→ Read: [CONTENT_UPDATES.md - Change Colors](./CONTENT_UPDATES.md#change-primary-color)  
→ Edit: `src/app/globals.css`  
→ Time: 1-2 minutes

### "I want to deploy to production"
→ Read: [DEPLOYMENT.md](./DEPLOYMENT.md)  
→ Commands: 5-10 minutes

### "I want to update my skills"
→ Read: [CONTENT_UPDATES.md - Update Skills](./CONTENT_UPDATES.md#update-skills)  
→ Edit: `src/data/index.ts`  
→ Time: 1-2 minutes

### "I'm getting build errors"
→ Read: [SETUP.md - Troubleshooting](./SETUP.md#troubleshooting)  
→ Check: `src/data/` syntax  
→ Run: `npm run build`

---

## 🔧 Commands Quick Reference

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build            # Build for production
npm start                # Run production build locally

# Code Quality
npm run lint             # Check code quality

# Setup (first time)
npm install              # Install dependencies
bash scripts/setup.sh    # Automated setup
```

---

## 📚 Technology Docs (External)

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React 19 Docs](https://react.dev)

---

## ❓ FAQ & Troubleshooting

**Q: The site looks different locally than expected**  
A: Clear cache with `rm -rf .next && npm run dev`, then do a hard refresh (Cmd+Shift+R)

**Q: Port 3000 is already in use**  
A: Kill the process or use a different port: `npm run dev -- -p 3001`

**Q: My changes aren't showing up**  
A: Hard refresh the browser (Cmd+Shift+R), not just F5

**Q: Build is failing**  
A: Run `npm run build` locally to see the error. Check TypeScript types in `src/data/`

**Q: How do I deploy?**  
A: See [DEPLOYMENT.md](./DEPLOYMENT.md) - Vercel is recommended (auto-deploys from GitHub)

---

## 📞 Key Contacts & Links

- **Email:** djurovicandrija21@gmail.com
- **GitHub:** https://github.com/andrijadjurovic
- **LinkedIn:** https://www.linkedin.com/in/andrijadjurovic/
- **Project Earth:** https://projectearth.global/student-ambassador/andrija-djurovic/

---

## 📊 Project Stats

- **Framework:** Next.js 16.3
- **Language:** TypeScript
- **Components:** 14
- **Routes:** 7
- **Data Points:** 200+
- **Build Time:** ~3 seconds
- **Bundle Size:** Optimized
- **Performance:** Lighthouse 95+

---

## 🎯 Next Steps

1. ✅ Read [README.md](./README.md)
2. ✅ Follow [SETUP.md](./SETUP.md)
3. ✅ Run `npm run dev`
4. ✅ Customize content in `src/data/`
5. ✅ Deploy using [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Happy developing! 🚀**
