# 🔧 CMS Troubleshooting Guide

## ✅ ISSUE FIXED: Home Page Now Uses CMS!

The HomePage has been updated to **fetch and display content from the CMS backend**.

---

## What Was Fixed

### Problem
The HomePage.tsx was using **hardcoded content** instead of fetching from the CMS database. When you edited content in the admin panel, changes were saved to the database but never displayed on the website.

### Solution
Updated `/pages/HomePage.tsx` to:
1. ✅ **Fetch content from CMS backend** on page load
2. ✅ **Use dynamic content** from the database
3. ✅ **Fall back to defaults** if CMS data isn't available
4. ✅ **Show loading state** while fetching data

---

## How It Works Now

### 1. Admin Panel (Save Content)
```
Admin edits page → Clicks "Save" → Data sent to backend → Saved in KV store
```

### 2. Frontend (Display Content)
```
User visits homepage → Fetch from backend → Display CMS content → Page loads
```

### 3. Data Flow
```
/admin (edit) → Supabase Edge Function → KV Store → /pages/HomePage.tsx (display)
```

---

## Testing Your CMS

### Step 1: Edit Content in Admin Panel
1. Go to `/admin/login`
2. Login with your credentials
3. Click **"Pages"** tab
4. Click **"Edit"** on the **Home** page
5. Change the **Hero Title** to something unique like:
   ```
   TESTING CMS - This is a test!
   ```
6. Click **"Save Changes"**
7. Wait for success message

### Step 2: View Changes on Website
1. Go to the homepage `/`
2. **Refresh the page** (Ctrl+R or Cmd+R)
3. You should see your new hero title!

### Step 3: Check Browser Console
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. You should see:
   ```
   HomePage CMS data: {success: true, page: {...}}
   ```

---

## 🐛 Common Issues & Solutions

### Issue 1: Changes Not Showing

**Symptom**: You save changes in admin, but homepage doesn't update

**Solutions**:
1. **Hard refresh the page**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear browser cache**: Settings → Privacy → Clear cache
3. **Check if save was successful**: Look for "Saved successfully!" message
4. **Check browser console** for errors (F12 → Console tab)

---

### Issue 2: "Failed to fetch" Error

**Symptom**: Error in console: `Error fetching home page content`

**Solutions**:

**Check 1 - Supabase URL and Keys**
1. Open `/utils/supabase/info.tsx`
2. Verify `projectId` and `publicAnonKey` are correct
3. They should match your Supabase project

**Check 2 - Backend is Running**
1. Test the endpoint directly:
   ```
   https://YOUR-PROJECT-ID.supabase.co/functions/v1/make-server-47a069bd/cms/pages/home
   ```
2. Replace `YOUR-PROJECT-ID` with your actual project ID
3. Should return JSON with success: true

**Check 3 - CORS Settings**
1. Go to Supabase Dashboard
2. Navigate to **Settings** → **API**
3. Check **CORS Allowed Origins**
4. Add your domain if not there

---

### Issue 3: Backend Returns 404

**Symptom**: Console shows `Page not found` or 404 error

**Solution**: Initialize CMS data
1. Go to `/admin/login`
2. Login
3. Click **"Initialize CMS"** button
4. Wait for confirmation
5. Refresh homepage

---

### Issue 4: Backend Returns 401 Unauthorized

**Symptom**: Admin panel shows "Unauthorized" when saving

**Solution**: Session expired - Re-login
1. Click **"Logout"** in admin panel
2. Go back to `/admin/login`
3. Login again
4. Try saving again

---

### Issue 5: Highlights Icons Not Showing

**Symptom**: Colored boxes appear but no icons inside

**Solution**: Check icon names
Valid icon names:
- `CheckCircle`
- `Zap`
- `Briefcase`
- `Sun`
- `MapPin`
- `Shield`

Make sure icon names match exactly (case-sensitive!)

---

### Issue 6: Page Shows "Loading..." Forever

**Symptom**: Homepage stuck on loading spinner

**Solutions**:

**Check 1 - Network Tab**
1. Open DevTools (F12)
2. Go to **Network** tab
3. Refresh page
4. Look for request to `/cms/pages/home`
5. Check if it fails or times out

**Check 2 - Supabase Function Logs**
1. Go to Supabase Dashboard
2. Navigate to **Edge Functions** → **Logs**
3. Look for errors in `make-server-47a069bd`

**Check 3 - Fallback Content**
If backend is down, page should still load with default content.
If it doesn't, check browser console for JavaScript errors.

---

## 📊 Debug Checklist

When something isn't working, check these in order:

### Frontend Checklist
- [ ] Browser console shows no errors
- [ ] Network request to `/cms/pages/home` succeeds
- [ ] Response contains `success: true`
- [ ] Page data is in response
- [ ] Icons are valid names
- [ ] Colors are valid hex codes

### Backend Checklist
- [ ] Supabase project is running
- [ ] Edge function is deployed
- [ ] KV store has `page:home` key
- [ ] Authentication is working
- [ ] CORS is configured correctly

### Admin Panel Checklist
- [ ] Can login successfully
- [ ] "Initialize CMS" button works
- [ ] Can edit page content
- [ ] Save shows success message
- [ ] Changes persist after refresh

---

## 🔍 Advanced Debugging

### Check KV Store Directly

**Via Supabase SQL Editor**:
```sql
SELECT * FROM kv_store_47a069bd WHERE key = 'page:home';
```

This shows you exactly what's stored in the database.

### Check Network Request

**Via Browser DevTools**:
1. Open DevTools (F12)
2. Go to **Network** tab
3. Refresh homepage
4. Find request: `make-server-47a069bd/cms/pages/home`
5. Click on it
6. Check **Response** tab
7. Should show your page data

### Check Backend Logs

**Via Supabase Dashboard**:
1. Go to **Edge Functions**
2. Click **Logs**
3. Filter by `make-server-47a069bd`
4. Look for:
   - "Fetching page: home"
   - "Updating page: home"
   - Any error messages

---

## 🚀 Performance Tips

### 1. Reduce Loading Time
The page fetches CMS data on every visit. To optimize:
- Content is cached by default
- Hard refresh (Ctrl+Shift+R) forces fresh data
- Normal refresh uses cached version when possible

### 2. Default Content
If CMS fetch fails, the page shows default content automatically.
No blank pages = better user experience!

### 3. Loading State
Users see a spinner while content loads.
Prevents showing incomplete page.

---

## 📝 How to Edit Different Sections

### Hero Section
- **Hero Title**: Main headline at top
- **Hero Subtitle**: Description text below title
- **Hero Image**: Background image URL

### Highlights Section
- **Section Title 1**: First line of section title (green)
- **Section Title 2**: Second line of section title (orange)
- **Highlights Array**: Each highlight has:
  - `icon`: Icon name (CheckCircle, Zap, etc.)
  - `title`: Highlight heading
  - `description`: Highlight text
  - `color`: Hex color code (#228b22, #fd7d01)

---

## ✅ Success Indicators

When CMS is working correctly, you should see:

1. **In Admin Panel**:
   - ✅ "Saved successfully!" message after clicking Save
   - ✅ Content persists after page refresh
   - ✅ No error messages

2. **On Homepage**:
   - ✅ Content updates within seconds of saving
   - ✅ No loading errors in console
   - ✅ Changes match what you entered in admin

3. **In Browser Console**:
   - ✅ `HomePage CMS data: {success: true, page: {...}}`
   - ✅ No error messages
   - ✅ Page data contains your edits

---

## 🆘 Still Having Issues?

### Check These Files:
1. `/pages/HomePage.tsx` - Frontend display
2. `/components/admin/PageEditor.tsx` - Edit interface
3. `/supabase/functions/server/index.tsx` - Backend API
4. `/utils/supabase/info.tsx` - Connection settings

### Verify Environment:
1. Supabase project is active
2. Edge functions are deployed
3. Database is accessible
4. Authentication is working

### Contact Support:
If nothing works, check:
- Supabase status: https://status.supabase.com
- Browser compatibility (use Chrome/Firefox)
- Internet connection

---

## 📱 Quick Reference

### Key Endpoints:
- **Get page**: `GET /cms/pages/home`
- **Update page**: `PUT /cms/pages/home`
- **Initialize**: `POST /cms/initialize`

### Key Files:
- **Frontend**: `/pages/HomePage.tsx`
- **Backend**: `/supabase/functions/server/index.tsx`
- **Editor**: `/components/admin/PageEditor.tsx`
- **Admin**: `/pages/AdminPage.tsx`

### Key Concepts:
- **KV Store**: Database that stores page content
- **Page Key**: `page:home` (identifier for home page)
- **CMS**: Content Management System (admin panel)
- **Backend**: Supabase Edge Function server

---

**Your CMS is now fully functional! 🎉**

Changes you make in the admin panel will appear on the homepage immediately after refresh.
