# Deployment Guide

## Quick Deployment to Vercel

Vercel is the recommended platform for deploying this Next.js website.

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/andrija-djurovic-portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub account
   - Click "Add New..." → "Project"
   - Select this repository
   - Vercel auto-configures Next.js
   - Click "Deploy"

3. **Set Custom Domain**
   - In Vercel dashboard, go to "Settings"
   - Click "Domains"
   - Add `andrijadjurovic.com`
   - Follow DNS configuration instructions

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd andrija-djurovic-portfolio
vercel

# Deploy to production
vercel --prod
```

### Method 3: Manual Build

```bash
# Build locally
npm run build

# Test production build
npm start

# Deploy .next directory to your hosting
# (See your hosting provider's documentation)
```

## Environment Variables

Vercel automatically detects `.env.local` but for production, set variables in Vercel dashboard:

**Settings → Environment Variables**

```
NEXT_PUBLIC_SITE_URL=https://andrijadjurovic.com
```

## Domain Setup

### Using Vercel's Nameservers

1. Point domain registrar to Vercel nameservers
2. Vercel manages DNS automatically
3. SSL certificate auto-generated

### Using Custom Nameservers

1. Add domain in Vercel
2. Get Vercel's nameserver records
3. Update nameservers at your registrar
4. Wait for DNS propagation (24-48 hours)

### Manual DNS Setup

If nameserver changes aren't an option:

1. Add CNAME records pointing to Vercel
2. Vercel provides exact CNAME values
3. May need CAA records for SSL

## Post-Deployment Verification

```bash
# Test HTTPS
https://andrijadjurovic.com

# Check SEO
https://andrijadjurovic.com/sitemap.xml
https://andrijadjurovic.com/robots.txt

# Verify metadata
# Use Open Graph debugger tools

# Performance testing
# Use Google PageSpeed Insights
# Use Lighthouse in DevTools
```

## Continuous Deployment

With GitHub integration:

- Push to `main` → Auto-deploys to Production
- Create Pull Request → Vercel creates Preview
- Merge PR → Production updates automatically

## Monitoring & Maintenance

### Check Deployment Status
- Vercel dashboard shows build status
- Recent deployments listed with dates
- Rollback available if needed

### Analytics
- Vercel provides request analytics
- Monitor performance metrics
- Track error logs

### Updates & Scaling
- Zero-configuration auto-scaling
- Serverless functions auto-scale
- CDN edge caching automatically enabled

## Troubleshooting

### Build Fails
1. Check build logs in Vercel
2. Verify dependencies in `package.json`
3. Ensure `.env.local` has required variables
4. Test locally with `npm run build`

### Site Not Loading
1. Check domain DNS resolution
2. Verify custom domain settings
3. Clear browser cache
4. Check Vercel deployment status

### Performance Issues
1. Run Lighthouse audit
2. Check file sizes
3. Verify images are optimized
4. Review Core Web Vitals in Vercel

## Alternative Hosting Options

### Netlify
```bash
# Build & Deploy
npm run build
# Use netlify-cli or drag-and-drop
```

### Traditional VPS/Hosting
```bash
# Build
npm run build

# Upload to server
scp -r .next node_modules package.json user@host:/app/

# On server
npm install
npm start
```

### Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build & deploy:
```bash
docker build -t andrija-portfolio .
docker run -p 3000:3000 andrija-portfolio
```

## SSL/HTTPS

- Vercel: Auto-generated, free SSL
- Other hosts: Use Let's Encrypt (free) or paid certificates
- Always use HTTPS in production

## Backups

- GitHub repo serves as automatic backup
- Vercel keeps deployment history
- Export data from `src/data/` files regularly

## Domain Migration

To change domain:

1. Update `NEXT_PUBLIC_SITE_URL` in `.env.local`
2. Update `metadataBase` in `src/app/layout.tsx`
3. Update social sharing URLs in components
4. Update analytics tracking (if used)
5. Test all links work on new domain

---

**Questions?** Check [Vercel Docs](https://vercel.com/docs) or [Next.js Docs](https://nextjs.org/docs)
