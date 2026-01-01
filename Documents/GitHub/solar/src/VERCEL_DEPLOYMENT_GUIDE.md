# Vercel Deployment Guide - Bharat Renewable Energy

## 🚀 Complete Deployment Instructions

### **Prerequisites**
- ✅ GitHub account (or GitLab/Bitbucket)
- ✅ Vercel account (free - sign up at vercel.com)
- ✅ Your Supabase project URL and API keys

---

## **Method 1: Deploy via Vercel Dashboard (Easiest)**

### **Step 1: Push Code to GitHub**
```bash
# If not already on GitHub, initialize git and push
git init
git add .
git commit -m "Ready for Vercel deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### **Step 2: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your **Bharat Renewable Energy** repository
4. Click **"Import"**

### **Step 3: Configure Build Settings**
Vercel will auto-detect your settings, but verify:

- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### **Step 4: Add Environment Variables**
Click **"Environment Variables"** and add:

| Name | Value | Where to Find |
|------|-------|--------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Supabase Dashboard → Settings → API |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key | Supabase Dashboard → Settings → API |

**Important:** Add these for all environments (Production, Preview, Development)

### **Step 5: Deploy**
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at `your-project.vercel.app`

---

## **Method 2: Deploy via Vercel CLI (For Advanced Users)**

### **Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

### **Step 2: Login to Vercel**
```bash
vercel login
```

### **Step 3: Deploy**
```bash
# From your project root directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? bharat-renewable-energy
# - Directory? ./
# - Override settings? No
```

### **Step 4: Add Environment Variables**
```bash
vercel env add VITE_SUPABASE_URL production
vercel env add VITE_SUPABASE_ANON_KEY production
```

### **Step 5: Deploy to Production**
```bash
vercel --prod
```

---

## **Post-Deployment Configuration**

### **1. Custom Domain (Optional)**
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `bharatrenewable.com`)
3. Update DNS records as instructed by Vercel
4. SSL certificate will be auto-provisioned

### **2. Verify Supabase Connection**
After deployment:
1. Visit your live site
2. Try logging into the admin panel: `https://your-site.vercel.app/admin/login`
3. Credentials:
   - Email: `admin@bharatrenewable.com`
   - Password: `admin123` (change this immediately!)

### **3. Update Supabase CORS Settings**
1. Go to Supabase Dashboard → Settings → API
2. Add your Vercel URL to **allowed origins**:
   - `https://your-project.vercel.app`
   - `https://your-custom-domain.com` (if using custom domain)

---

## **Automatic Deployments**

### **Enable Continuous Deployment**
Once connected to GitHub, Vercel automatically:
- ✅ Deploys every push to `main` branch → Production
- ✅ Creates preview deployments for pull requests
- ✅ Runs builds on every commit

### **Branch Deployments**
- `main` branch → Production (`your-project.vercel.app`)
- Other branches → Preview URLs (`branch-name.your-project.vercel.app`)
- Pull requests → Unique preview URLs

---

## **Environment Variables Reference**

### **Required Variables**
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### **How to Add More Variables**
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Click "Add" → Enter name and value
3. Select environments (Production, Preview, Development)
4. Click "Save"
5. Redeploy for changes to take effect

---

## **Build Optimization**

Your project is already optimized with:
- ✅ Asset caching (1 year for static assets)
- ✅ SPA routing configured
- ✅ Tailwind CSS purging enabled
- ✅ TypeScript type checking
- ✅ Code splitting via Vite

### **Build Settings** (already configured)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## **Troubleshooting**

### **Build Fails**
```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### **Environment Variables Not Working**
- Make sure variables start with `VITE_`
- Redeploy after adding new variables
- Check spelling and case sensitivity

### **Routing Issues (404 on refresh)**
- Verified: `vercel.json` has proper rewrites configured
- All routes redirect to `/index.html` for client-side routing

### **Supabase Connection Fails**
1. Verify environment variables are set correctly
2. Check Supabase project is not paused (free tier pauses after 7 days inactivity)
3. Verify CORS settings in Supabase
4. Check browser console for errors

### **CMS Not Loading**
1. Initialize CMS: Go to `/admin` → Click "Initialize CMS"
2. Check Supabase Edge Function is deployed
3. Verify API keys are correct
4. Check browser console and network tab

---

## **Performance Tips**

### **1. Enable Analytics**
- Vercel Dashboard → Your Project → Analytics
- Free tier includes 100k events/month

### **2. Enable Web Vitals Monitoring**
- Automatic Core Web Vitals tracking
- View in Vercel Dashboard → Analytics

### **3. Image Optimization**
Your images from Unsplash are already optimized, but for uploaded images:
```tsx
// Use Vercel's Image Optimization (if needed later)
import Image from 'next/image' // For Next.js projects
```

### **4. Caching Strategy**
Already configured in `vercel.json`:
- Static assets: 1 year cache
- HTML: No cache (always fresh)

---

## **Deployment Checklist**

Before going live, verify:

- [ ] Code pushed to GitHub
- [ ] Vercel project created and linked
- [ ] Environment variables added (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- [ ] Build succeeds
- [ ] Site loads correctly at Vercel URL
- [ ] Admin login works
- [ ] CMS initialized
- [ ] All pages load correctly
- [ ] Logo uploads working
- [ ] Contact form working
- [ ] Mobile responsive design verified
- [ ] SSL certificate active (automatic)
- [ ] Custom domain configured (optional)
- [ ] Supabase CORS updated with Vercel URL
- [ ] Admin password changed from default

---

## **Going Live - Final Steps**

### **1. Change Admin Password**
```bash
# After first login, update admin credentials
# Use Supabase Dashboard → Authentication → Users
# Or create a new admin user in your app
```

### **2. Update Content**
1. Login to admin panel: `https://your-site.vercel.app/admin`
2. Go to Settings tab
3. Upload your logo
4. Update all page content
5. Add your projects
6. Add testimonials

### **3. Test Everything**
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile view looks good
- [ ] Admin panel accessible
- [ ] CMS updates reflect on live site

### **4. Monitor Performance**
- Check Vercel Analytics
- Monitor Supabase usage
- Watch for any errors in logs

---

## **Cost Estimate**

### **Vercel Free Tier** (Perfect for your project)
- ✅ 100 GB bandwidth/month
- ✅ Unlimited API requests
- ✅ Automatic SSL
- ✅ Edge Network (CDN)
- ✅ Serverless functions (100 GB-hours/month)
- ✅ Web analytics (100k events)

### **Supabase Free Tier**
- ✅ 500 MB database
- ✅ 1 GB file storage
- ✅ 2 GB bandwidth/month
- ✅ 500k Edge Function invocations

**Total Cost: $0/month** (Free tier is sufficient for most small-medium sites)

---

## **Support & Resources**

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev
- **Supabase Docs:** https://supabase.com/docs
- **Your CMS Documentation:** See `/CMS_DOCUMENTATION.md`

---

## **Quick Commands Reference**

```bash
# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# View environment variables
vercel env ls

# Pull environment variables locally
vercel env pull

# Remove a deployment
vercel rm deployment-url
```

---

## **Next Steps After Deployment**

1. **SEO Optimization:** Add meta tags, sitemap.xml
2. **Google Analytics:** Add tracking code
3. **Contact Form Email:** Configure email notifications
4. **Backup Strategy:** Regular Supabase backups
5. **Monitoring:** Set up uptime monitoring (UptimeRobot, etc.)

---

**🎉 Your Bharat Renewable Energy website is ready for Vercel!**

For any deployment issues, check Vercel deployment logs or Supabase Edge Function logs.
