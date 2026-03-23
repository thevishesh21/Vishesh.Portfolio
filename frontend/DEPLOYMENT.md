# 🚀 Vercel Deployment Guide

## ✅ Project Status: READY FOR DEPLOYMENT

Your Next.js portfolio is fully configured and optimized for Vercel deployment with complete dynamic functionality.

---

## 📋 Pre-Deployment Checklist

✅ **Build successful** - No errors
✅ **Next.js config** - Removed static export
✅ **Images optimized** - Using Next/Image
✅ **Components lazy loaded** - ParticleField uses dynamic import
✅ **All sections working** - Navigation fully functional
✅ **TypeScript compiled** - No type errors

---

## 🔧 Step 1: Push to GitHub

### Initialize Git (if not already done)

```bash
cd frontend
git init
git add .
git commit -m "Initial commit - Portfolio ready for Vercel deployment"
```

### Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `portfolio-v2`)
3. **Don't** initialize with README (we already have code)

### Push Your Code

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-v2.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 2: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com/
   - Sign up/Login with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   ```
   Framework Preset: Next.js
   Root Directory: frontend (if repo has multiple folders) or ./ (if only frontend)
   Build Command: npm run build (auto-detected)
   Install Command: npm install (auto-detected)
   Output Directory: .next (auto-detected)
   ```

4. **Environment Variables**
   - No env variables needed for basic deployment
   - Add later if using APIs

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at: `your-project.vercel.app`

### Method 2: Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd frontend
vercel

# Follow prompts:
# - Setup: Y
# - Scope: Your account
# - Link: N (first time)
# - Name: vishesh-portfolio
# - Directory: ./
# - Override settings: N

# Production deployment
vercel --prod
```

---

## 🌐 Step 3: Custom Domain Setup

### Add Domain to Vercel

1. **Go to Project Settings**
   - Dashboard → Your Project → Settings → Domains

2. **Add Domain**
   - Enter your domain: `vishesh-dev.me`
   - Click "Add"

### Configure DNS (Choose ONE method)

#### Option A: Vercel Nameservers (Recommended - Easiest)

**Update at your domain registrar:**

```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
```

**Pros:** Auto-SSL, no manual DNS records
**Cons:** Full DNS control moves to Vercel

---

#### Option B: Custom DNS Records (Manual)

**Add these DNS records at your domain registrar:**

**For Root Domain (vishesh-dev.me):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto or 3600
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

**For SSL (Important!):**

Vercel will automatically provision SSL. Just wait 24-48 hours after DNS propagation.

---

### Verify DNS Propagation

**Check DNS:**
```bash
nslookup vishesh-dev.me
```

**Or use online tools:**
- https://dnschecker.org/
- Enter your domain
- Wait until it shows Vercel's IP: `76.76.21.21`

---

## 🔄 Step 4: Continuous Deployment

### Auto-Deploy Setup (Already Configured!)

Every time you push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel automatically:
1. Detects the push
2. Builds your project
3. Deploys new version
4. Updates your live site

**Preview Deployments:**
- Every branch gets a unique preview URL
- Perfect for testing before merging to main

---

## ⚡ Performance Optimization (Already Implemented)

✅ **Image Optimization**: Next/Image with AVIF/WebP
✅ **Code Splitting**: Dynamic imports for heavy components
✅ **Lazy Loading**: ParticleField loads on-demand
✅ **Font Optimization**: Google Fonts with `display=swap`
✅ **CSS Optimization**: Tailwind with purging
✅ **Compression**: Automatic gzip/brotli on Vercel

---

## 📊 Monitoring & Analytics

### Built-in Vercel Analytics

1. Go to: Dashboard → Your Project → Analytics
2. Enable "Web Analytics" (free)
3. See real-time visitor data

### Optional: Add Google Analytics

Add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script'

// Add inside <body> tag:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

---

## 🛠️ Troubleshooting

### Build Fails on Vercel

**Check build logs:**
1. Go to deployment that failed
2. Click "View Build Logs"
3. Look for error messages

**Common fixes:**
```bash
# Locally test production build
npm run build
npm start

# If it works locally, clear Vercel cache:
# Settings → General → Clear Cache & Redeploy
```

---

### Domain Not Working

**Wait for DNS propagation:**
- Can take 4-48 hours
- Check: https://dnschecker.org/

**Verify DNS records:**
- Must point to Vercel's IP or CNAME
- Remove conflicting A/CNAME records

**SSL Certificate Pending:**
- Vercel auto-provisions SSL
- Can take 24 hours after DNS is correct
- Force renewal: Remove & re-add domain

---

### Images Not Loading

**Check paths:**
- Images in `/public` → Access as `/image.png`
- Profile image: `/public/profile.png` → src="/profile.png"

**Use Next/Image:**
```tsx
import Image from 'next/image'

<Image
  src="/profile.png"
  alt="Profile"
  width={300}
  height={300}
/>
```

---

## 🎯 Quick Commands Reference

```bash
# Local development
npm run dev              # http://localhost:3000

# Production build test
npm run build
npm start               # http://localhost:3000

# Deploy to Vercel (CLI)
vercel                  # Preview
vercel --prod          # Production

# Git workflow
git add .
git commit -m "Update"
git push origin main    # Auto-deploys to Vercel
```

---

## 📝 Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Navigation works (Home, About, Services, Skills, Projects, Certifications, Contact)
- [ ] Resume button downloads/opens PDF
- [ ] Images display properly
- [ ] 3D particles render (may be slower on mobile)
- [ ] Contact form works (if using API)
- [ ] Mobile responsive
- [ ] Custom domain working (if configured)
- [ ] SSL certificate active (https://)

---

## 🚀 Your Deployment URLs

After deployment, you'll get:

**Vercel Domain:**
```
https://vishesh-portfolio.vercel.app
```

**Custom Domain (after DNS setup):**
```
https://vishesh-dev.me
https://www.vishesh-dev.me
```

**Preview Deployments:**
```
https://vishesh-portfolio-git-branch-name.vercel.app
```

---

## 🎉 Success!

Your portfolio is now live on Vercel with:
- ✅ Full Next.js functionality
- ✅ Automatic deployments
- ✅ Image optimization
- ✅ SSL certificate
- ✅ Global CDN
- ✅ Automatic scaling

**Need help?** Check Vercel docs: https://vercel.com/docs
