# 🚀 Vercel Deployment Checklist

## Pre-Deployment (Do This First)

### 1. Code Preparation
- [ ] All changes committed to git
- [ ] Code builds successfully locally (`npm run build`)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] All features tested locally (`npm run dev`)

### 2. Environment Setup
- [ ] Supabase project created
- [ ] Supabase Edge Functions deployed (your backend at `/supabase/functions/server/`)
- [ ] Supabase URL and keys ready
- [ ] `.env.example` file reviewed

### 3. GitHub Repository
- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] Repository is accessible
- [ ] Main branch is up to date

---

## Deployment Steps

### Step 1: Vercel Account Setup
- [ ] Created Vercel account at [vercel.com](https://vercel.com)
- [ ] Connected GitHub account to Vercel

### Step 2: Import Project
- [ ] Clicked "Add New Project" in Vercel Dashboard
- [ ] Selected your repository
- [ ] Clicked "Import"

### Step 3: Configure Build Settings
Verify these settings (Vercel auto-detects):
- [ ] Framework: **Vite**
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `npm install`
- [ ] Node Version: 18.x or higher

### Step 4: Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

- [ ] `VITE_SUPABASE_URL` = `https://your-project.supabase.co`
- [ ] `VITE_SUPABASE_ANON_KEY` = `your-anon-key`

**Important:** Select all three environments:
- [ ] Production ✓
- [ ] Preview ✓  
- [ ] Development ✓

### Step 5: Deploy
- [ ] Clicked "Deploy" button
- [ ] Waited for build to complete (2-3 minutes)
- [ ] No build errors
- [ ] Deployment successful

---

## Post-Deployment Verification

### Basic Functionality
- [ ] Site loads at Vercel URL (`https://your-project.vercel.app`)
- [ ] Home page displays correctly
- [ ] All navigation links work
- [ ] Images load properly
- [ ] CSS styling is correct
- [ ] Mobile responsive design works

### Admin Panel
- [ ] Admin login page accessible (`/admin/login`)
- [ ] Can login with default credentials:
  - Email: `admin@bharatrenewable.com`
  - Password: `admin123`
- [ ] Admin dashboard loads
- [ ] Can click "Initialize CMS" successfully
- [ ] Content tabs load (Pages, Services, Projects, Testimonials, Settings)

### CMS Functionality
- [ ] Pages content editable
- [ ] Can save changes to pages
- [ ] Logo upload works (Settings tab)
- [ ] Changes reflect on live site
- [ ] Services can be added/edited/deleted
- [ ] Projects can be added/edited/deleted

### All Pages Working
- [ ] Home page (`/`)
- [ ] About page (`/about`)
- [ ] Services page (`/services`)
- [ ] Projects page (`/projects`)
- [ ] Safety page (`/safety`)
- [ ] Contact page (`/contact`)
- [ ] Admin login (`/admin/login`)
- [ ] Admin panel (`/admin`)

### Mobile Testing
- [ ] Tested on mobile device or browser mobile view
- [ ] Navigation menu works on mobile
- [ ] All pages responsive
- [ ] Images scale correctly
- [ ] Forms usable on mobile

---

## Supabase Configuration

### Update CORS Settings
- [ ] Go to Supabase Dashboard → Settings → API
- [ ] Add Vercel URL to allowed origins:
  - [ ] `https://your-project.vercel.app`
  - [ ] `https://*.vercel.app` (for preview deployments)
  - [ ] Your custom domain (if applicable)

### Verify Edge Function
- [ ] Edge Function deployed at `/supabase/functions/server/`
- [ ] Function logs show no errors
- [ ] API endpoints responding:
  - [ ] `/cms/pages/home` (GET)
  - [ ] `/cms/settings` (GET)
  - [ ] `/cms/initialize` (POST)

### Database Check
- [ ] KV Store table exists (`kv_store_47a069bd`)
- [ ] Can view data in Supabase Dashboard → Table Editor

---

## Security Checklist

### Admin Access
- [ ] **CRITICAL:** Changed default admin password
- [ ] Created new admin user with secure credentials
- [ ] Disabled or removed default admin account

### Environment Variables
- [ ] `.env` file NOT committed to git (check `.gitignore`)
- [ ] Service role key NOT exposed in frontend code
- [ ] Only `VITE_` prefixed variables in frontend

### Supabase Security
- [ ] RLS (Row Level Security) policies reviewed
- [ ] Anon key permissions appropriate
- [ ] Service role key secure in Edge Functions only

---

## Performance Optimization

### Vercel Settings
- [ ] Analytics enabled (optional)
- [ ] SSL certificate active (automatic)
- [ ] Edge Network enabled (automatic)
- [ ] Asset caching working (check Network tab)

### Content Optimization
- [ ] Images compressed and optimized
- [ ] Logo uploaded and displaying correctly
- [ ] All content updated from default

---

## Optional: Custom Domain

### If Using Custom Domain
- [ ] Domain purchased/available
- [ ] Added domain in Vercel Dashboard → Domains
- [ ] Updated DNS records:
  - [ ] A record or CNAME as instructed by Vercel
  - [ ] Waited for DNS propagation (up to 48 hours)
- [ ] SSL certificate issued (automatic by Vercel)
- [ ] Site accessible at custom domain
- [ ] Updated Supabase CORS with custom domain

---

## Monitoring & Maintenance

### Regular Checks
- [ ] Monitor Vercel Analytics
- [ ] Check Supabase usage (free tier limits)
- [ ] Review deployment logs regularly
- [ ] Test admin panel weekly

### Backup Strategy
- [ ] Export Supabase data regularly
- [ ] Keep git repository up to date
- [ ] Document any manual configuration

### Performance Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Monitor page load times
- [ ] Check Core Web Vitals in Vercel Analytics

---

## Troubleshooting

### If Build Fails
1. [ ] Check build logs in Vercel Dashboard
2. [ ] Test build locally: `npm run build`
3. [ ] Verify all dependencies installed
4. [ ] Check Node version compatibility

### If Site Loads but Broken
1. [ ] Check browser console for errors
2. [ ] Verify environment variables set correctly
3. [ ] Check Vercel function logs
4. [ ] Test in incognito mode (clear cache)

### If CMS Not Working
1. [ ] Initialize CMS from admin panel
2. [ ] Check Supabase Edge Function logs
3. [ ] Verify API keys correct
4. [ ] Check CORS settings in Supabase

### If Admin Login Fails
1. [ ] Verify Supabase Auth is enabled
2. [ ] Check user exists in Supabase Dashboard
3. [ ] Try password reset
4. [ ] Check browser console for errors

---

## Launch Announcement

### Before Going Public
- [ ] All content finalized
- [ ] Logo and branding correct
- [ ] Contact information accurate
- [ ] Phone numbers and emails working
- [ ] Social media links added (if applicable)
- [ ] Legal pages added (Privacy Policy, Terms - if needed)

### SEO Preparation
- [ ] Meta titles and descriptions added
- [ ] Open Graph images set
- [ ] Google Search Console verified
- [ ] Sitemap.xml created
- [ ] robots.txt configured

---

## ✅ Deployment Complete!

**Your Bharat Renewable Energy website is now live!**

**Live URL:** `https://your-project.vercel.app`

**Admin Panel:** `https://your-project.vercel.app/admin`

**Next Steps:**
1. Change default admin password immediately
2. Update all content via CMS
3. Upload your logo
4. Add your projects and testimonials
5. Test all functionality
6. Share with stakeholders
7. Monitor analytics and performance

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **Your CMS Guide:** See `/CMS_DOCUMENTATION.md`
- **Deployment Guide:** See `/VERCEL_DEPLOYMENT_GUIDE.md`
- **Vercel Support:** https://vercel.com/support

---

**Last Updated:** January 2, 2026
**Version:** 1.0.0
