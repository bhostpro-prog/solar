import { Hono } from 'npm:hono';
import * as kv from './kv_store.tsx';

const cms = new Hono();

// Get all CMS content keys
cms.get('/keys', async (c) => {
  try {
    const allContent = await kv.getByPrefix('cms:');
    const keys = allContent.map((item: any) => item.key);
    return c.json({ success: true, keys });
  } catch (error) {
    console.log('Error fetching CMS keys:', error);
    return c.json({ success: false, error: 'Failed to fetch keys' }, 500);
  }
});

// Get content by key
cms.get('/content/:key', async (c) => {
  try {
    const key = c.req.param('key');
    const content = await kv.get(key);
    
    if (!content) {
      return c.json({ success: false, error: 'Content not found' }, 404);
    }
    
    return c.json({ success: true, content });
  } catch (error) {
    console.log('Error fetching content:', error);
    return c.json({ success: false, error: 'Failed to fetch content' }, 500);
  }
});

// Get all content for a specific page
cms.get('/page/:page', async (c) => {
  try {
    const page = c.req.param('page');
    const allContent = await kv.getByPrefix(`cms:${page}:`);
    
    const pageContent: any = {};
    allContent.forEach((item: any) => {
      const subKey = item.key.replace(`cms:${page}:`, '');
      pageContent[subKey] = item.value;
    });
    
    return c.json({ success: true, content: pageContent });
  } catch (error) {
    console.log('Error fetching page content:', error);
    return c.json({ success: false, error: 'Failed to fetch page content' }, 500);
  }
});

// Update content
cms.put('/content/:key', async (c) => {
  try {
    const key = c.req.param('key');
    const body = await c.req.json();
    
    await kv.set(key, body.content);
    
    return c.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.log('Error updating content:', error);
    return c.json({ success: false, error: 'Failed to update content' }, 500);
  }
});

// Create new content
cms.post('/content', async (c) => {
  try {
    const body = await c.req.json();
    const { key, content } = body;
    
    if (!key || !content) {
      return c.json({ success: false, error: 'Key and content are required' }, 400);
    }
    
    await kv.set(key, content);
    
    return c.json({ success: true, message: 'Content created successfully' });
  } catch (error) {
    console.log('Error creating content:', error);
    return c.json({ success: false, error: 'Failed to create content' }, 500);
  }
});

// Delete content
cms.delete('/content/:key', async (c) => {
  try {
    const key = c.req.param('key');
    await kv.del(key);
    
    return c.json({ success: true, message: 'Content deleted successfully' });
  } catch (error) {
    console.log('Error deleting content:', error);
    return c.json({ success: false, error: 'Failed to delete content' }, 500);
  }
});

// Initialize default content
cms.post('/init', async (c) => {
  try {
    const defaultContent = {
      'cms:home:hero': {
        title: 'Empower Your Home with Solar Rooftop – Clean, Affordable Energy for Tamil Nadu & Pondicherry',
        subtitle: 'Transform your residential or commercial space into a sustainable powerhouse. Enjoy government subsidies, fast ROI, and zero upfront hassle with our expert EPC services.',
        image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      },
      'cms:home:stats': {
        homes: 87,
        companies: 32,
        farms: 40,
      },
      'cms:about:mission': 'To drive India\'s renewable transition through innovative EPC, precise diagnostics, and reliable O&M – maximizing efficiency and minimizing downtime.',
      'cms:about:values': [
        'Accuracy & Reliability',
        'Safety-First Execution',
        'Transparency & Professional Reporting',
        'Customer-Centric Support',
        'Renewable Energy Expertise',
      ],
      'cms:contact:email': 'info@bharatrenewable.com',
      'cms:contact:phone': '+91-XXXX-XXXXXX',
    };
    
    for (const [key, value] of Object.entries(defaultContent)) {
      await kv.set(key, value);
    }
    
    return c.json({ success: true, message: 'Default content initialized' });
  } catch (error) {
    console.log('Error initializing content:', error);
    return c.json({ success: false, error: 'Failed to initialize content' }, 500);
  }
});

export default cms;
