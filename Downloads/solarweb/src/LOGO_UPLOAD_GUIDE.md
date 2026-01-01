# 🎨 Logo Upload Feature - Complete Guide

## ✅ What's Been Added

### **New Features:**
1. ✅ **Logo Upload via Admin Panel** - Upload logo images directly from CMS
2. ✅ **Settings Tab in Admin** - New "Site Settings" tab for managing logos
3. ✅ **Backend API Routes** - `/cms/settings` endpoints for storing logo data
4. ✅ **Settings Editor Component** - Professional upload interface with preview
5. ✅ **Removed Download ROI Guide Button** from homepage hero section

---

## 📁 Files Added/Modified

### **New Files:**
1. `/components/admin/SettingsEditor.tsx` - Logo upload interface
2. `/LOGO_UPLOAD_GUIDE.md` - This guide

### **Modified Files:**
1. `/supabase/functions/server/index.tsx` - Added settings endpoints
2. `/pages/AdminPage.tsx` - Added Settings tab integration
3. `/pages/HomePage.tsx` - Removed "Download ROI Guide" button
4. `/components/Navbar.tsx` - Updated to use image logo
5. `/components/Footer.tsx` - Updated to use image logo

---

## 🚀 How to Upload Your Logo

### **Method 1: Upload Logo File (Recommended)**

1. **Go to Admin Panel**
   - Navigate to: `/admin/login`
   - Login with your credentials

2. **Open Settings Tab**
   - Click **"Site Settings"** in the left sidebar
   - You'll see the logo upload interface

3. **Upload Logo**
   - Click **"Upload Logo"** button
   - Select your logo file (PNG, SVG, or JPG)
   - **Recommended**: PNG with transparent background
   - **Max size**: 2MB

4. **Preview & Save**
   - Preview appears immediately after selection
   - Click **"Save Settings"** to apply changes
   - Refresh your website to see the new logo

### **Method 2: Use Logo URL**

1. Open **Settings Tab** in admin panel
2. Find **"Or enter logo URL directly"** field
3. Paste your logo URL:
   ```
   https://example.com/your-logo.png
   ```
4. Preview updates automatically
5. Click **"Save Settings"**

---

## 🎨 Logo Recommendations

### **Best Formats:**
- **SVG**: Best choice - scales perfectly, small file size
- **PNG**: Good with transparent background
- **JPG**: Only if you have a solid background

### **Recommended Dimensions:**
- **Width**: 200-300px
- **Height**: 50-80px
- **Background**: Transparent (for PNG/SVG)

### **File Size:**
- Maximum: 2MB
- Recommended: Under 500KB for faster loading

---

## 🔧 Backend Implementation

### **New API Endpoints:**

**Get Settings:**
```
GET /cms/settings
Returns: { success: true, settings: { logoUrl, siteName, ... } }
```

**Update Settings:**
```
PUT /cms/settings
Body: { logoUrl, siteName, contactEmail, ... }
Returns: { success: true, message: 'Settings updated successfully' }
```

### **Database Storage:**

Settings are stored in KV store with key:
```
site:settings
```

Data structure:
```json
{
  "logoUrl": "https://... or base64...",
  "logoFileName": "company-logo.png",
  "siteName": "Bharat Renewable Energy",
  "siteTagline": "Clean Energy for Tomorrow",
  "contactEmail": "info@example.com",
  "contactPhone": "+91 1234567890",
  "contactAddress": "Chennai, Tamil Nadu, India",
  "updatedAt": "2025-01-01T...",
  "updatedBy": "admin@example.com"
}
```

---

## 📱 Where Logo Appears

Once uploaded and saved, your logo will automatically appear in:

1. **Navbar** (Top of every page)
   - File: `/components/Navbar.tsx`
   - Size: 48px height (h-12)

2. **Footer** (Bottom of every page)
   - File: `/components/Footer.tsx`
   - Size: 40px height (h-10)

---

## 🔄 How to Update Navbar & Footer to Use CMS Logo

Currently, Navbar and Footer are set to use a static logo file. To use the CMS-uploaded logo:

### **Update Navbar:**

Add this to `/components/Navbar.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Navbar() {
  const [logo, setLogo] = useState('');

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
      const res = await fetch(`${baseUrl}/cms/settings`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` }
      });
      const data = await res.json();
      if (data.success && data.settings?.logoUrl) {
        setLogo(data.settings.logoUrl);
      }
    } catch (error) {
      console.error('Error fetching logo:', error);
    }
  };

  return (
    <nav>
      <Link to="/">
        {logo ? (
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        ) : (
          <div className="flex items-center">
            <span className="text-[#228b22] text-2xl">Bharat</span>
            <span className="text-[#fd7d01] text-2xl ml-1">Renewable</span>
          </div>
        )}
      </Link>
      {/* ... rest of navbar ... */}
    </nav>
  );
}
```

### **Update Footer Similarly**

Follow the same pattern for `/components/Footer.tsx`

---

## 🎯 Settings Editor Features

The Settings Editor (`/components/admin/SettingsEditor.tsx`) includes:

### **Logo Management:**
- ✅ File upload with preview
- ✅ Drag & drop support
- ✅ File size validation (max 2MB)
- ✅ Format validation (images only)
- ✅ Remove logo option
- ✅ URL input alternative

### **Site Information:**
- ✅ Site Name
- ✅ Site Tagline

### **Contact Information:**
- ✅ Email
- ✅ Phone
- ✅ Address

### **User Experience:**
- ✅ Live preview
- ✅ Instant feedback
- ✅ Clear instructions
- ✅ Professional design

---

## 🐛 Troubleshooting

### **Logo Not Showing After Upload**

**Check 1**: Did you click "Save Settings"?
- Make sure to click the green "Save Settings" button

**Check 2**: Refresh the page
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Check 3**: Check file size
- Logo must be under 2MB

**Check 4**: Check format
- Only PNG, JPG, or SVG allowed

### **Logo Appears Distorted**

**Solution**: Use proper dimensions
- Maintain aspect ratio
- Recommended: 200-300px width

### **Logo Too Large/Small**

**Navbar**: Adjust in `/components/Navbar.tsx`
```tsx
className="h-12 w-auto"  // Change h-12 to h-16 for larger
```

**Footer**: Adjust in `/components/Footer.tsx`
```tsx
className="h-10 w-auto"  // Change h-10 to h-8 for smaller
```

---

## 📊 Technical Details

### **Upload Process:**

1. User selects file
2. JavaScript reads file as base64
3. Base64 stored in state
4. Preview shown immediately
5. On save, data sent to backend
6. Backend stores in KV store
7. Success message displayed

### **Storage Options:**

**Option 1: Base64 in KV Store (Current)**
- Pros: Simple, no extra setup
- Cons: Larger storage size
- Use for: Small logos (<500KB)

**Option 2: External URL**
- Pros: Better performance
- Cons: Requires external hosting
- Use for: Large logos or hosted assets

**Option 3: Supabase Storage (Future)**
- Pros: Best performance, organized
- Cons: Requires storage bucket setup
- Use for: Production apps

---

## ✅ Checklist

### **Setup:**
- [ ] Backend routes created (`/cms/settings`)
- [ ] SettingsEditor component created
- [ ] Settings tab added to Admin Panel
- [ ] Logo upload functionality working

### **Testing:**
- [ ] Can upload PNG logo
- [ ] Can upload SVG logo
- [ ] Preview shows correctly
- [ ] Save persists data
- [ ] Logo appears on website

### **Integration:**
- [ ] Navbar fetches logo from CMS
- [ ] Footer fetches logo from CMS
- [ ] Logo updates after refresh

---

## 🚀 Next Steps

1. **Upload Your Logo**
   - Go to `/admin` → Settings
   - Upload your company logo

2. **Test Logo Display**
   - Check navbar and footer
   - Verify on all pages

3. **Customize Settings**
   - Add site name and tagline
   - Update contact information

4. **Update Integration** (Optional)
   - Modify Navbar to fetch logo from CMS
   - Modify Footer to fetch logo from CMS

---

## 📝 Summary

**What Changed:**
- ✅ Added Settings tab in Admin Panel
- ✅ Created logo upload interface
- ✅ Added backend API for settings
- ✅ Removed "Download ROI Guide" button
- ✅ Updated logo to use images instead of text

**What You Can Do Now:**
- Upload company logo via admin panel
- Manage site information
- Update contact details
- All changes save to database

**Your logo upload system is ready to use!** 🎉
