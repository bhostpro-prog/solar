# Bharat Renewable Energy - CMS Documentation

## Overview

This CMS (Content Management System) allows you to manage all website content through an easy-to-use admin dashboard without editing code. Content is stored in Supabase and can be edited in real-time.

## Accessing the CMS

### Admin Dashboard
Navigate to: **`/admin`**

Example: `https://your-domain.com/admin`

### Demo & Integration Guide
Navigate to: **`/cms-demo`**

This page shows live examples of how to integrate CMS content into your pages.

## Getting Started

### 1. Initialize Default Content

When you first visit the admin dashboard (`/admin`), you'll see an "Initialize Default Content" button. Click this to populate the CMS with default content including:

- Home page hero section
- Statistics (homes, companies, farms)
- About page mission
- About page values
- Contact information

### 2. Understanding Content Keys

Content is organized using a key-based system with the following structure:

```
cms:[page]:[section]
```

**Examples:**
- `cms:home:hero` - Home page hero section
- `cms:home:stats` - Home page statistics
- `cms:about:mission` - About page mission statement
- `cms:about:values` - About page values array
- `cms:contact:email` - Contact email address
- `cms:contact:phone` - Contact phone number

## Admin Dashboard Features

### Sidebar - Content List

**View All Content:**
- All content items are listed on the left sidebar
- Click any item to edit it
- Shows content type (Object, String, Array, etc.)

**Create New Content:**
1. Enter a content key in the format `cms:page:section`
2. Click "Create New"
3. The new content item will appear in the list

**Delete Content:**
- Click the trash icon next to any content item
- Confirm the deletion

### Editor Panel

**Visual Mode:**
- User-friendly interface for editing content
- Automatically detects content type (text, numbers, arrays, objects)
- Image URLs show a preview
- Arrays have add/remove buttons for items

**JSON Mode:**
- Direct JSON editing for advanced users
- Full control over data structure
- Validates JSON syntax

**Save Changes:**
- Click the "Save" button after making edits
- Success/error messages appear in the top-right corner
- Changes are immediate

## Content Types

### 1. Text Content (String)

**Example Key:** `cms:about:mission`

**Content:**
```json
"To drive India's renewable transition through innovative EPC..."
```

**Usage in Code:**
```tsx
const { content } = useCMSContent('cms:about:mission', 'Default text');

return <p>{content}</p>;
```

### 2. Object Content

**Example Key:** `cms:home:hero`

**Content:**
```json
{
  "title": "Empower Your Home with Solar Rooftop",
  "subtitle": "Transform your space...",
  "image": "https://..."
}
```

**Usage in Code:**
```tsx
const { content } = useCMSContent('cms:home:hero', {
  title: '',
  subtitle: '',
  image: ''
});

return (
  <>
    <h1>{content.title}</h1>
    <p>{content.subtitle}</p>
    <img src={content.image} alt="Hero" />
  </>
);
```

### 3. Array Content

**Example Key:** `cms:about:values`

**Content:**
```json
[
  "Accuracy & Reliability",
  "Safety-First Execution",
  "Transparency & Professional Reporting"
]
```

**Usage in Code:**
```tsx
const { content } = useCMSContent('cms:about:values', []);

return (
  <ul>
    {content.map((value, index) => (
      <li key={index}>{value}</li>
    ))}
  </ul>
);
```

### 4. Numeric Content

**Example Key:** `cms:home:stats`

**Content:**
```json
{
  "homes": 87,
  "companies": 32,
  "farms": 40
}
```

**Usage in Code:**
```tsx
const { content } = useCMSContent('cms:home:stats', {
  homes: 0,
  companies: 0,
  farms: 0
});

return <div>{content.homes} Homes</div>;
```

## Integration Guide

### Method 1: Single Content Item

Use `useCMSContent` to fetch a single content item:

```tsx
import { useCMSContent } from '../hooks/useCMSContent';

function MyComponent() {
  const { content, loading, error } = useCMSContent(
    'cms:home:hero',
    { title: 'Default Title', subtitle: 'Default Subtitle' }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
    </div>
  );
}
```

### Method 2: All Page Content

Use `useCMSPage` to fetch all content for a page:

```tsx
import { useCMSPage } from '../hooks/useCMSContent';

function HomePage() {
  const { content, loading } = useCMSPage('home', {});

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{content.hero?.title}</h1>
      <div>Homes: {content.stats?.homes}</div>
    </div>
  );
}
```

## Best Practices

### 1. Consistent Naming Convention

Always use the format: `cms:[page]:[section]`

**Good Examples:**
- `cms:home:hero`
- `cms:services:list`
- `cms:projects:featured`

**Bad Examples:**
- `hero` (missing prefix)
- `cms-home-hero` (wrong separator)
- `homeHero` (not following convention)

### 2. Provide Default Values

Always provide meaningful default values:

```tsx
// Good
const { content } = useCMSContent('cms:home:hero', {
  title: 'Default Title',
  subtitle: 'Default Subtitle'
});

// Bad
const { content } = useCMSContent('cms:home:hero');
```

### 3. Handle Loading States

```tsx
const { content, loading } = useCMSContent('cms:home:hero', {});

if (loading) {
  return <div>Loading...</div>;
}

return <h1>{content.title}</h1>;
```

### 4. Organize by Page

Keep content organized by page:

**Home Page:**
- `cms:home:hero`
- `cms:home:stats`
- `cms:home:features`

**About Page:**
- `cms:about:mission`
- `cms:about:values`
- `cms:about:team`

## API Endpoints

The CMS uses the following API endpoints:

### Get All Keys
```
GET /make-server-47a069bd/cms/keys
```

### Get Content by Key
```
GET /make-server-47a069bd/cms/content/:key
```

### Get All Page Content
```
GET /make-server-47a069bd/cms/page/:page
```

### Update Content
```
PUT /make-server-47a069bd/cms/content/:key
Body: { "content": {...} }
```

### Create Content
```
POST /make-server-47a069bd/cms/content
Body: { "key": "cms:...", "content": {...} }
```

### Delete Content
```
DELETE /make-server-47a069bd/cms/content/:key
```

### Initialize Default Content
```
POST /make-server-47a069bd/cms/init
```

## Common Use Cases

### 1. Edit Hero Section

1. Go to `/admin`
2. Click on `cms:home:hero`
3. Edit title, subtitle, or image URL
4. Click "Save"

### 2. Update Statistics

1. Go to `/admin`
2. Click on `cms:home:stats`
3. Change the numbers
4. Click "Save"

### 3. Add New Service

1. Go to `/admin`
2. Enter key: `cms:services:new-service`
3. Click "Create New"
4. Switch to JSON mode
5. Enter service details:
```json
{
  "title": "New Service",
  "description": "Service description",
  "features": ["Feature 1", "Feature 2"]
}
```
6. Click "Save"

### 4. Update Contact Information

1. Go to `/admin`
2. Click on `cms:contact:email` or `cms:contact:phone`
3. Edit the value
4. Click "Save"

## Troubleshooting

### Content Not Loading

**Problem:** Content shows default values instead of CMS content

**Solutions:**
1. Check if content exists in admin dashboard
2. Verify the key name matches exactly (case-sensitive)
3. Check browser console for errors
4. Ensure Supabase connection is active

### Can't Save Changes

**Problem:** Save button doesn't work or shows error

**Solutions:**
1. Check your internet connection
2. Verify JSON syntax in JSON mode
3. Check browser console for errors
4. Try refreshing the page

### Content Not Updating on Website

**Problem:** Changes saved in admin don't appear on website

**Solutions:**
1. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check if the component is using the correct hook
4. Verify the default value isn't overriding CMS content

## Security Notes

- The admin dashboard is currently open to anyone with the URL
- In production, you should add authentication
- Content is stored in Supabase's key-value store
- All API calls use the public anonymous key

## Tips & Tricks

1. **Bulk Editing:** Use JSON mode to quickly edit multiple fields
2. **Content Preview:** Check `/cms-demo` to see how content appears
3. **Backup:** Export important content by copying the JSON
4. **Testing:** Use default values while developing, then add to CMS
5. **Organization:** Use descriptive section names in your keys

## Future Enhancements

Potential improvements for the CMS:

- Authentication & user roles
- Media library for image management
- Content versioning & history
- Content preview before publishing
- Bulk import/export
- Multi-language support
- Scheduled publishing
- Content templates

---

For support or questions, refer to the `/cms-demo` page for live examples and code snippets.
