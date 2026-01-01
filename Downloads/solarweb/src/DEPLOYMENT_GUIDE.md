# 🚀 Complete Deployment Guide

## ✅ Files Created (Ready for Deployment)

All necessary files have been created:
- ✅ `index.html` - HTML entry point
- ✅ `src/main.tsx` - React entry point
- ✅ `package.json` - Dependencies and scripts
- ✅ `vite.config.ts` - Vite configuration
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `vercel.json` - Vercel deployment config
- ✅ `netlify.toml` - Netlify deployment config
- ✅ `.gitignore` - Git ignore rules
- ✅ `README.md` - Project documentation

---

## 📋 Step-by-Step Deployment

### PART 1: Prepare Your Supabase Project

#### Step 1: Get Supabase Credentials
1. Go to your Supabase project dashboard
2. Click **Settings** → **API**
3. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

---

### PART 2: Push to GitHub

#### Step 1: Create GitHub Repository
1. Go to **https://github.com/new**
2. Repository name: `bharat-renewable-energy`
3. Choose **Public** or **Private**
4. **DO NOT** initialize with README
5. Click **Create Repository**

#### Step 2: Push Code to GitHub

Open terminal/command prompt in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Bharat Renewable Energy website with CMS"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/bharat-renewable-energy.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: If Git asks for credentials, use a Personal Access Token instead of password.

---

### PART 3: Deploy to Vercel (Recommended)

#### Step 1: Sign Up for Vercel
1. Go to **https://vercel.com**
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel

#### Step 2: Import Project
1. Click **Add New...** → **Project**
2. Click **Import** next to your repository
3. If not visible, click **Import Git Repository** and paste your repo URL

#### Step 3: Configure Project
Vercel auto-detects Vite settings:
- **Framework Preset**: Vite ✅
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

#### Step 4: Add Environment Variables
Click **Environment Variables** and add:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key |

**Add these for all environments: Production, Preview, Development**

#### Step 5: Deploy
1. Click **Deploy**
2. Wait 2-3 minutes for build
3. You'll get a URL like: `https://bharat-renewable-energy.vercel.app`

#### Step 6: Test Your Site
1. Visit the deployed URL
2. Check homepage loads ✅
3. Go to `/admin/login` ✅
4. Test CMS functionality ✅

#### Step 7: Add Custom Domain (Optional)
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **Add**
3. Enter: `yourdomain.com`
4. Follow DNS instructions:

**For GoDaddy/Namecheap:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**AND**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

5. Wait 24-48 hours for DNS propagation

---

### PART 4: Deploy to Netlify (Alternative)

#### Step 1: Sign Up for Netlify
1. Go to **https://netlify.com**
2. Click **Sign Up** → **GitHub**
3. Authorize Netlify

#### Step 2: Create New Site
1. Click **Add new site** → **Import an existing project**
2. Choose **GitHub**
3. Select your repository
4. Click **Deploy**

#### Step 3: Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Base directory**: (leave empty)

#### Step 4: Add Environment Variables
1. Go to **Site settings** → **Environment variables**
2. Click **Add a variable**

Add these:
- `VITE_SUPABASE_URL` = Your Supabase URL
- `VITE_SUPABASE_ANON_KEY` = Your Supabase anon key

#### Step 5: Trigger Deploy
1. Click **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for build to complete

#### Step 6: Custom Domain
1. Go to **Domain settings**
2. Click **Add custom domain**
3. Follow DNS configuration instructions

---

### PART 5: Update Supabase CORS

#### Important: Allow Your Domain

1. Go to Supabase Dashboard
2. Navigate to **Settings** → **API**
3. Scroll to **CORS Allowed Origins**
4. Add your deployed URLs:
   ```
   https://bharat-renewable-energy.vercel.app
   https://yourdomain.com
   https://www.yourdomain.com
   ```
5. Click **Save**

---

### PART 6: Create Admin Account

#### Option A: Via Supabase Dashboard
1. Go to Supabase Dashboard
2. Click **Authentication** → **Users**
3. Click **Add user**
4. Enter:
   - Email: `admin@yourdomain.com`
   - Password: `YourSecurePassword123!`
   - Auto Confirm User: ✅ YES
5. Click **Create user**

#### Option B: Via API (Advanced)
Use the `/admin/signup` endpoint if you created a signup page.

---

### PART 7: Initialize CMS Data

1. Visit: `https://yourdomain.com/admin/login`
2. Login with admin credentials
3. Click **Initialize CMS** button
4. Wait for confirmation message
5. Start editing content! 🎉

---

## 🔄 Push Future Updates

When you make changes to your code:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

**Vercel/Netlify will automatically deploy** within 2-3 minutes!

---

## 🐛 Troubleshooting

### Build Fails

**Error**: `Module not found`
**Solution**: Check all imports use correct paths

**Error**: `VITE_SUPABASE_URL is not defined`
**Solution**: Verify environment variables are set in deployment platform

### Site Shows 404 on Refresh

**Solution**: Already fixed! `vercel.json` and `netlify.toml` handle this

### CMS Not Saving

**Solution**: 
1. Check browser console for errors
2. Verify Supabase URL and keys are correct
3. Check CORS settings in Supabase

### Authentication Issues

**Solution**:
1. Verify admin user exists in Supabase
2. Check if email is confirmed
3. Try logging out and back in

---

## 📞 Need Help?

Check these resources:
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Supabase Docs**: https://supabase.com/docs
- **Vite Docs**: https://vitejs.dev

---

## ✅ Deployment Checklist

Before going live:

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Environment variables configured
- [ ] Custom domain connected (optional)
- [ ] DNS records updated (if using custom domain)
- [ ] CORS origins updated in Supabase
- [ ] Admin account created
- [ ] CMS initialized with content
- [ ] All pages tested and working
- [ ] Mobile responsiveness checked
- [ ] Performance tested

---

**🎉 Congratulations! Your site is now live!** 🎉
