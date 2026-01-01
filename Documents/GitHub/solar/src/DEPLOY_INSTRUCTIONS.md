# Bharat Renewable Energy - GitHub Pages Deployment

## 🎉 Your Site is Ready to Deploy!

**Your Live URLs:**
- **Website:** https://onlineradhasarees-hash.github.io/solar/
- **Admin Panel:** https://onlineradhasarees-hash.github.io/solar/admin

---

## 🚀 Quick Deploy (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build & Deploy
```bash
npm run deploy
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repo: https://github.com/onlineradhasarees-hash/solar
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
4. Click **Save**

**Done!** Your site will be live in 2-3 minutes! 🎉

---

## 🔄 Auto-Deploy with GitHub Actions

I saw you already have the workflow file. To enable auto-deploy on every push:

1. Go to: https://github.com/onlineradhasarees-hash/solar/settings/secrets/actions
2. Click **New repository secret**
3. Add these two secrets:

**Secret 1:**
- Name: `VITE_SUPABASE_URL`
- Value: `https://idlwcefmmisueqvzwlrf.supabase.co`

**Secret 2:**
- Name: `VITE_SUPABASE_ANON_KEY`
- Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkbHdjZWZtbWlzdWVxdnp3bHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2NTYzNzUsImV4cCI6MjA1MTIzMjM3NX0.QV5vPIUUX6aLNzgoHTnXiw-tiHvnVKMVFqWr57UKRgM`

Now every push to `main` branch will auto-deploy! 🚀

---

## ✅ What's Configured

- ✅ **package.json** - Homepage URL set
- ✅ **vite.config.ts** - Base path set to `/solar/`
- ✅ **.env** - Supabase credentials configured
- ✅ **GitHub Actions** - Auto-deploy workflow ready
- ✅ **Deploy script** - Manual deploy available

---

## 🎨 After Deployment

1. Visit: https://onlineradhasarees-hash.github.io/solar/
2. Go to admin: https://onlineradhasarees-hash.github.io/solar/admin/login
3. Click **Initialize CMS** (first time only)
4. Login with your credentials
5. Upload logo and customize content!

---

## 🔧 Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Or use the deploy script
chmod +x deploy-gh-pages.sh
./deploy-gh-pages.sh
```

---

## 💡 Important Notes

- **Admin panel works perfectly** - All backend is on Supabase
- **100% FREE** - GitHub Pages is free for public repos
- **No server needed** - Everything works client-side
- **Secure** - Supabase handles authentication
- **.env file** - Already created with your credentials

---

## 🆘 Troubleshooting

**404 error on page refresh?**
- GitHub Actions automatically creates 404.html
- If deploying manually, run: `cp dist/index.html dist/404.html` before deploy

**Assets not loading?**
- Already fixed! Base path is set to `/solar/`

**Can't access admin?**
- Make sure gh-pages branch is deployed
- Wait 2-3 minutes after first deploy

---

**Ready to go live! Just run:** `npm install && npm run deploy` 🚀
