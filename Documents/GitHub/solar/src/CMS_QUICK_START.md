# CMS Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Access the Admin Dashboard
Navigate to `/admin` in your browser (e.g., `http://localhost:5173/admin`)

### Step 2: Initialize Content
Click the **"Initialize Default Content"** button to populate the CMS with sample content.

### Step 3: Start Editing!
Click any content item in the sidebar to edit it, then click **Save**.

---

## 📍 Important URLs

- **Admin Dashboard**: `/admin` - Manage all content
- **Demo & Examples**: `/cms-demo` - See integration examples
- **Documentation**: See `CMS_DOCUMENTATION.md`

---

## 🎯 Quick Actions

### Edit Home Page Hero
1. Go to `/admin`
2. Click `cms:home:hero`
3. Edit title, subtitle, or image URL
4. Click "Save"

### Update Contact Info
1. Go to `/admin`
2. Click `cms:contact:email` or `cms:contact:phone`
3. Edit the value
4. Click "Save"

### Create New Content
1. Go to `/admin`
2. Enter key (e.g., `cms:services:new-service`)
3. Click "Create New"
4. Edit in Visual or JSON mode
5. Click "Save"

---

## 💻 Using CMS Content in Your Code

### Import the Hook
```tsx
import { useCMSContent } from '../hooks/useCMSContent';
```

### Fetch and Use Content
```tsx
function MyComponent() {
  const { content, loading } = useCMSContent('cms:home:hero', {
    title: 'Default Title',
    subtitle: 'Default Subtitle'
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
    </div>
  );
}
```

---

## 🔑 Content Key Format

Always use this format: `cms:[page]:[section]`

**Examples:**
- `cms:home:hero`
- `cms:about:mission`
- `cms:services:list`
- `cms:contact:email`

---

## 🎨 Editor Modes

### Visual Mode
- User-friendly interface
- Automatic field detection
- Image previews
- Array add/remove buttons

### JSON Mode
- Direct JSON editing
- Full control
- Advanced users

---

## ⚡ Features

✅ **Real-time editing** - Changes save instantly  
✅ **No code required** - Edit content visually  
✅ **Type detection** - Smart field types  
✅ **Image preview** - See images as you edit  
✅ **Array management** - Easy list editing  
✅ **Bulk operations** - JSON mode for power users  
✅ **Persistent storage** - Supabase backend  

---

## 📱 Access Points

**Desktop Navigation:**
- Look for the ⚙️ (Settings) icon in the navbar

**Mobile Navigation:**
- Open menu → "CMS Admin"

**Direct Access:**
- Type `/admin` in the URL bar

---

## 🆘 Quick Troubleshooting

**Content not loading?**
- Check if you initialized default content
- Verify the content key is correct
- Check browser console for errors

**Changes not saving?**
- Check internet connection
- Verify JSON syntax in JSON mode
- Try refreshing the page

**Content not updating on site?**
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check if component uses correct hook

---

## 📚 Learn More

- Full Documentation: `CMS_DOCUMENTATION.md`
- Live Examples: `/cms-demo`
- API Reference: See documentation

---

## 🎓 Content Structure Examples

### Simple Text
```json
"This is a simple text value"
```

### Object
```json
{
  "title": "Main Title",
  "subtitle": "Subtitle text",
  "image": "https://..."
}
```

### Array
```json
[
  "Item 1",
  "Item 2",
  "Item 3"
]
```

### Numbers
```json
{
  "homes": 87,
  "companies": 32
}
```

---

**Need Help?** Check the demo page at `/cms-demo` for live examples!
