# ⚡ Quick Deploy to Vercel - 5 Minutes

## Fastest Way to Deploy Your Site

### **Option 1: One-Click Deploy Button** (Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

Click the button above, or follow manual steps below.

---

### **Option 2: Manual Deploy** (5 Steps)

#### **Step 1: Push to GitHub** (1 minute)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### **Step 2: Import to Vercel** (1 minute)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Import"

#### **Step 3: Add Environment Variables** (1 minute)
In Vercel setup screen, add:

```
VITE_SUPABASE_URL = https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY = your-anon-key-here
```

Get these from: Supabase Dashboard → Settings → API

#### **Step 4: Deploy** (2 minutes)
Click **"Deploy"** and wait for build to complete.

#### **Step 5: Verify** (1 minute)
Visit your site at: `https://your-project.vercel.app`

---

## ✅ You're Live!

### **Next Steps:**
1. Login to admin: `https://your-project.vercel.app/admin/login`
   - Email: `admin@bharatrenewable.com`
   - Password: `admin123`
2. Click "Initialize CMS"
3. Change your password
4. Upload your logo (Settings tab)
5. Update content

---

## 🆘 Quick Troubleshooting

**Build Failed?**
- Check environment variables are set
- Verify both variables start with `VITE_`

**Site loads but no styling?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check browser console for errors

**CMS not working?**
- Click "Initialize CMS" button in admin panel
- Verify Supabase project is active (not paused)

**Admin login fails?**
- Check Supabase Auth is enabled
- Verify environment variables are correct

---

## 📚 Full Documentation

For detailed instructions, see:
- **Complete Guide:** `/VERCEL_DEPLOYMENT_GUIDE.md`
- **Checklist:** `/DEPLOYMENT_CHECKLIST.md`
- **CMS Docs:** `/CMS_DOCUMENTATION.md`

---

**That's it! Your site should be live in under 5 minutes.** 🎉
