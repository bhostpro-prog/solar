# 🎨 Logo Change Guide

## ✅ Logo Has Been Updated to Use Image Files!

Your website now uses **image-based logos** instead of text. Follow the instructions below to add your logo.

---

## 📁 Where to Place Your Logo

### **Step 1: Prepare Your Logo File**

**Recommended formats:**
- **PNG** (with transparent background) - Best for complex logos
- **SVG** (vector) - Best for scalability and small file size
- **JPG** - Only if you have a solid background

**Recommended sizes:**
- **Width**: 200-300px
- **Height**: 50-80px
- **Aspect ratio**: Maintain your brand's proportions

### **Step 2: Add Logo to Project**

1. Create a folder named `public` in your project root (if it doesn't exist)
2. Save your logo as:
   - `/public/logo.png` (PNG format)
   - OR `/public/logo.svg` (SVG format)

**Your folder structure should look like:**
```
your-project/
├── public/
│   ├── logo.png         ← Your logo here
│   └── favicon.ico      ← Optional: browser icon
├── components/
├── pages/
└── ...
```

---

## 🔧 Files That Have Been Updated

### **1. Navbar Logo** (`/components/Navbar.tsx`)
```tsx
<img 
  src="/logo.png" 
  alt="Bharat Renewable Energy" 
  className="h-12 w-auto"
/>
```

### **2. Footer Logo** (`/components/Footer.tsx`)
```tsx
<img 
  src="/logo.png" 
  alt="Bharat Renewable Energy" 
  className="h-10 w-auto"
/>
```

---

## 🎨 Customization Options

### **Option 1: Different Logo Sizes**

**Make Navbar logo bigger:**
```tsx
className="h-16 w-auto"  // Increase from h-12 to h-16
```

**Make Footer logo smaller:**
```tsx
className="h-8 w-auto"   // Decrease from h-10 to h-8
```

### **Option 2: Different Logos for Light/Dark Backgrounds**

If you have separate logos for white (navbar) and dark (footer) backgrounds:

**Navbar (light background):**
```tsx
<img 
  src="/logo-dark.png"     // Dark version of logo
  alt="Bharat Renewable Energy" 
  className="h-12 w-auto"
/>
```

**Footer (dark background):**
```tsx
<img 
  src="/logo-light.png"    // Light/white version of logo
  alt="Bharat Renewable Energy" 
  className="h-10 w-auto"
/>
```

### **Option 3: SVG Logo (Recommended)**

If using SVG format, change:
```tsx
<img 
  src="/logo.svg"          // Change .png to .svg
  alt="Bharat Renewable Energy" 
  className="h-12 w-auto"
/>
```

### **Option 4: Add Company Name Next to Logo**

```tsx
<Link to="/" className="flex items-center gap-3">
  <img 
    src="/logo.png" 
    alt="Bharat Renewable Energy" 
    className="h-12 w-auto"
  />
  <div className="flex flex-col">
    <span className="text-[#228b22] font-bold text-xl">Bharat</span>
    <span className="text-[#fd7d01] text-sm">Renewable Energy</span>
  </div>
</Link>
```

---

## 🚀 After Adding Your Logo

### **Local Development:**
1. Add your `logo.png` to `/public/` folder
2. Refresh your browser
3. Logo should appear immediately!

### **After Deployment:**
1. Commit and push changes:
   ```bash
   git add public/logo.png
   git add components/Navbar.tsx
   git add components/Footer.tsx
   git commit -m "Update logo to image file"
   git push origin main
   ```

2. Your deployment (Vercel/Netlify) will automatically rebuild
3. Logo will appear on live site in 2-3 minutes

---

## ❌ Reverting to Text Logo

If you want to go back to text-based logo, restore the original code:

**Navbar:**
```tsx
<Link to="/" className="flex items-center space-x-2">
  <div className="flex items-center">
    <span className="text-[#228b22] text-2xl">Bharat</span>
    <span className="text-[#fd7d01] text-2xl ml-1">Renewable</span>
  </div>
</Link>
```

**Footer:**
```tsx
<div className="flex items-center mb-4">
  <span className="text-white text-xl">Bharat</span>
  <span className="text-[#fd7d01] text-xl ml-1">Renewable</span>
</div>
```

---

## 🎯 Quick Checklist

- [ ] Logo file prepared (PNG/SVG, 200-300px wide)
- [ ] File saved in `/public/logo.png`
- [ ] Logo appears in Navbar (top of page)
- [ ] Logo appears in Footer (bottom of page)
- [ ] Logo is properly sized and not distorted
- [ ] Changes committed to Git
- [ ] Changes deployed to live site

---

## 🆘 Troubleshooting

### **Logo not showing**
**Solution**: Ensure file is in `/public/` folder and named exactly `logo.png`

### **Logo too big/small**
**Solution**: Adjust `className="h-12"` to different sizes (h-8, h-10, h-14, h-16)

### **Logo looks distorted**
**Solution**: Use `w-auto` to maintain aspect ratio, or specify exact dimensions

### **Logo has white background (looks bad on footer)**
**Solution**: Use PNG with transparent background, or create separate dark/light versions

---

## 📞 Need Custom Logo Design?

If you need logo files in different formats or sizes, contact your designer or use these free tools:
- **Remove background**: https://remove.bg
- **Resize images**: https://squoosh.app
- **Convert formats**: https://cloudconvert.com

---

**Your logo is now ready to use! 🎉**
