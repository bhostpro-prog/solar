# GitHub Pages Deployment - Quick Setup

## ✅ All Configuration Done!

Your project is ready for GitHub Pages deployment.

---

## 📝 Before You Deploy

### 1. Update Repository Info
Edit these files and replace placeholders:

**package.json** - Line 6:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO"
```
Change to your actual GitHub username and repo name.

**vite.config.ts** - Line 7:
```typescript
base: '/YOUR_REPO/'
```
Change to your actual repo name (keep the slashes).

### 2. Create .env File
Create `.env` in project root with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 🚀 Deploy Methods

### Method 1: Manual Deploy (Recommended First Time)

```bash
# 1. Install dependencies
npm install

# 2. Create .env file (see above)

# 3. Build the project
npm run build

# 4. Copy index.html to 404.html for SPA routing
cp dist/index.html dist/404.html

# 5. Deploy
npm run deploy
```

### Method 2: Use Deploy Script

```bash
# Make script executable
chmod +x deploy-gh-pages.sh

# Run deployment
./deploy-gh-pages.sh
```

### Method 3: GitHub Actions (Auto-deploy on push)

GitHub Actions workflow is already created at `.github/workflows/deploy.yml`

**Setup:**
1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Add secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Push to main branch - auto-deploys!

---

## ⚙️ GitHub Repository Settings

After first deployment:

1. Go to your GitHub repo
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

---

## 🌐 Your Live Site

After deployment, your site will be at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

Admin panel:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/admin
```

---

## ✅ Post-Deployment

1. Visit your site
2. Go to `/admin/login`
3. Login and initialize CMS
4. Update content
5. Upload logo

**All admin functions work perfectly!** Backend is on Supabase, frontend on GitHub Pages.

---

## 🔧 Troubleshooting

**404 on page refresh?**
- Make sure `dist/404.html` was created (copy of index.html)
- Redeploy if needed

**Assets not loading?**
- Verify `base` in `vite.config.ts` matches your repo name
- Check `homepage` in `package.json` is correct

**Environment variables not working?**
- .env file must exist before build
- Variables must start with `VITE_`
- Rebuild after changing .env

---

## 💰 Cost

**100% FREE** - GitHub Pages is completely free for public repos!

---

**Ready to deploy!** 🚀
