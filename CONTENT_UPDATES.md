# Content & Updates Guide

Quick reference for updating website content without touching code.

## 🎯 Most Common Updates

### Update Your Name & Title

Edit `src/data/index.ts`:

```typescript
export const siteConfig = {
  name: "Andrija Đurović",
  title: "Student Developer & Young Innovator",
  description: "...",
  // Update other fields as needed
};
```

### Add a New Project

Edit `src/data/projects.ts`:

```typescript
{
  id: "new-project",  // lowercase, hyphens only
  title: "Project Name",
  subtitle: "One-line description",
  description: "Detailed description of the project",
  problem: "What problem does it solve?",
  solution: "How does it solve it?",
  technology: ["Tech1", "Tech2", "Tech3"],
  category: ["Category1", "Category2"],
  recognition: "Any awards or recognition?",
  links: {
    github: "https://github.com/...",
    website: "https://...",
    devpost: "https://...",
    googlePlay: "https://...",
  },
  featured: true,  // true = large card, false = grid
  year: "2025–2026",
}
```

The project page auto-generates at `/projects/new-project`

### Add Award/Recognition

Edit `src/data/experience.ts`:

```typescript
export const awards: Award[] = [
  {
    id: "award-id",
    title: "Award Name",
    organization: "Organization Name",
    category: "Category/Details",
    year: "2026",
    description: "Optional description",
  },
  // ... more awards
];
```

### Add Experience Entry

Edit `src/data/experience.ts`:

```typescript
export const experience: ExperienceItem[] = [
  {
    id: "unique-id",
    title: "Program/Company Name",
    organization: "Organization",
    role: "Your role here",
    period: "2025–2026",
    description: "Optional description",
    type: "program", // or "internship", "education", "competition"
  },
  // ... more entries
];
```

### Add Media Appearance

Edit `src/data/experience.ts`:

```typescript
export const mediaAppearances: MediaAppearance[] = [
  {
    id: "media-id",
    title: "Podcast/Article Name",
    organization: "Organization/Publication",
    topic: "Topic discussed",
    date: "Month Year",
    link: "https://...",
    status: "published", // or "coming-soon"
  },
];
```

### Update Skills

Edit `src/data/index.ts`:

```typescript
export const skills: SkillCategory[] = [
  {
    name: "Category Name",
    skills: ["Skill1", "Skill2", "Skill3"],
  },
];
```

### Update Research Interests

Edit `src/data/index.ts`:

```typescript
export const researchInterests = [
  "Interest 1",
  "Interest 2",
  "Interest 3",
];
```

### Update International Connections

Edit `src/data/index.ts`:

```typescript
export const internationalConnections: InternationalConnection[] = [
  {
    organization: "Organization Name",
    involvement: "How you're involved/connected",
  },
];
```

## 📋 File Structure Reference

**Data Files** (edit these for content updates):
- `src/data/projects.ts` - All projects
- `src/data/experience.ts` - Experience, awards, media
- `src/data/index.ts` - Skills, interests, config

**Component Files** (design/styling):
- `src/components/*.tsx` - Visual components
- `src/app/globals.css` - Colors, animations

**Page Files** (structure):
- `src/app/page.tsx` - Homepage
- `src/app/projects/[id]/page.tsx` - Project details

## 🔄 Update Workflow

1. Edit data file in `src/data/`
2. Save changes
3. Dev server hot-reloads automatically
4. Check website at http://localhost:3000
5. Push to GitHub when ready
6. Vercel auto-deploys

## ✍️ Writing Tips

### Project Descriptions

✓ **Good:**
> "EcoMont is a civic-tech platform connecting citizens and environmental data through digital tools and IoT infrastructure."

✗ **Bad:**
> "Revolutionary platform changing everything!"

### Avoid:
- Exaggeration ("revolutionary", "game-changing")
- Unverified claims
- Corporate buzzwords
- First-person claims without evidence

### Use:
- Specific facts
- Technical accuracy
- Evidence-based descriptions
- Clear, concise language
- Active voice

## 🎨 Styling Updates

### Change Primary Color

Edit `src/app/globals.css`:

```css
:root {
  --accent-primary: #10b981;  /* Change this */
  --accent-secondary: #06b6d4;
  /* ... */
}
```

Then update Tailwind classes in components from `emerald-*` to your color scheme.

### Change Typography

Modify font sizes in `src/app/globals.css` or use Tailwind classes in components.

### Change Animations

Edit keyframe definitions in `src/app/globals.css`

## 🔗 Important Links to Update

In `src/data/index.ts`:

```typescript
export const siteConfig = {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/username/",
  projectEarth: "https://projectearth.global/...",
};
```

## 🖼️ Images & Assets

Currently, the site uses:
- Tailwind CSS for colors & styling
- Emoji (🏓) for beyond-tech section
- Generated SVG patterns for hero

To add real images:

1. Place in `public/images/`
2. Import using Next.js Image component:

```typescript
import Image from "next/image";

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={400}
  height={300}
/>
```

## 🧪 Testing Changes

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

## 📦 Publishing Updates

```bash
# Commit changes
git add .
git commit -m "Update: Brief description of changes"

# Push to GitHub
git push origin main

# Vercel auto-deploys!
# Check https://vercel.com dashboard
```

## ❓ Troubleshooting

**Changes not showing?**
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear `.next` cache: `rm -rf .next && npm run dev`
- Check console for errors

**Build errors?**
- Run `npm run build` locally to see full error
- Check `src/data/` syntax (missing commas, quotes?)
- Ensure TypeScript types match

**Data not displaying?**
- Verify object structure matches TypeScript interface
- Check for typos in property names
- Ensure commas between array items

## 📚 Quick Commands

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Run linter
npm run lint

# Clean build cache
rm -rf .next

# Clear node_modules (if stuck)
rm -rf node_modules
npm install
```

---

**Need help?** Check SETUP.md or DEPLOYMENT.md
