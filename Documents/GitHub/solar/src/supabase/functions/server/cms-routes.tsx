import { Hono } from 'npm:hono@4';
import { cors } from 'npm:hono/cors';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Apply CORS
app.use('*', cors());

// Helper to check authentication (basic for now)
const requireAuth = async (c: any, next: any) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token || token !== 'admin-secret-token') {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  
  await next();
};

// ==================== CONTENT MANAGEMENT ====================

// Get all content for a specific page
app.get('/cms/content/:page', async (c) => {
  try {
    const page = c.req.param('page');
    const prefix = `cms:${page}:`;
    const content = await kv.getByPrefix(prefix);
    
    return c.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching content:', error);
    return c.json({ error: 'Failed to fetch content' }, 500);
  }
});

// Get specific content by key
app.get('/cms/content/:page/:section', async (c) => {
  try {
    const page = c.req.param('page');
    const section = c.req.param('section');
    const key = `cms:${page}:${section}`;
    
    const content = await kv.get(key);
    
    if (!content) {
      return c.json({ error: 'Content not found' }, 404);
    }
    
    return c.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching content:', error);
    return c.json({ error: 'Failed to fetch content' }, 500);
  }
});

// Update content (requires auth)
app.put('/cms/content/:page/:section', requireAuth, async (c) => {
  try {
    const page = c.req.param('page');
    const section = c.req.param('section');
    const key = `cms:${page}:${section}`;
    const body = await c.req.json();
    
    await kv.set(key, body.content);
    
    return c.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Error updating content:', error);
    return c.json({ error: 'Failed to update content' }, 500);
  }
});

// ==================== SERVICES MANAGEMENT ====================

// Get all services
app.get('/cms/services', async (c) => {
  try {
    const services = await kv.getByPrefix('service:');
    const sortedServices = services.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    
    return c.json({ success: true, data: sortedServices });
  } catch (error) {
    console.error('Error fetching services:', error);
    return c.json({ error: 'Failed to fetch services' }, 500);
  }
});

// Get single service
app.get('/cms/services/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const service = await kv.get(`service:${id}`);
    
    if (!service) {
      return c.json({ error: 'Service not found' }, 404);
    }
    
    return c.json({ success: true, data: service });
  } catch (error) {
    console.error('Error fetching service:', error);
    return c.json({ error: 'Failed to fetch service' }, 500);
  }
});

// Create service
app.post('/cms/services', requireAuth, async (c) => {
  try {
    const body = await c.req.json();
    const id = `service-${Date.now()}`;
    
    const service = {
      id,
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    await kv.set(`service:${id}`, service);
    
    return c.json({ success: true, data: service });
  } catch (error) {
    console.error('Error creating service:', error);
    return c.json({ error: 'Failed to create service' }, 500);
  }
});

// Update service
app.put('/cms/services/:id', requireAuth, async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    
    const existing = await kv.get(`service:${id}`);
    if (!existing) {
      return c.json({ error: 'Service not found' }, 404);
    }
    
    const updated = {
      ...existing,
      ...body,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(`service:${id}`, updated);
    
    return c.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating service:', error);
    return c.json({ error: 'Failed to update service' }, 500);
  }
});

// Delete service
app.delete('/cms/services/:id', requireAuth, async (c) => {
  try {
    const id = c.req.param('id');
    await kv.del(`service:${id}`);
    
    return c.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return c.json({ error: 'Failed to delete service' }, 500);
  }
});

// ==================== PROJECTS MANAGEMENT ====================

// Get all projects
app.get('/cms/projects', async (c) => {
  try {
    const projects = await kv.getByPrefix('project:');
    const sortedProjects = projects.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    
    return c.json({ success: true, data: sortedProjects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return c.json({ error: 'Failed to fetch projects' }, 500);
  }
});

// Create project
app.post('/cms/projects', requireAuth, async (c) => {
  try {
    const body = await c.req.json();
    const id = `project-${Date.now()}`;
    
    const project = {
      id,
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    await kv.set(`project:${id}`, project);
    
    return c.json({ success: true, data: project });
  } catch (error) {
    console.error('Error creating project:', error);
    return c.json({ error: 'Failed to create project' }, 500);
  }
});

// Update project
app.put('/cms/projects/:id', requireAuth, async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    
    const existing = await kv.get(`project:${id}`);
    if (!existing) {
      return c.json({ error: 'Project not found' }, 404);
    }
    
    const updated = {
      ...existing,
      ...body,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(`project:${id}`, updated);
    
    return c.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating project:', error);
    return c.json({ error: 'Failed to update project' }, 500);
  }
});

// Delete project
app.delete('/cms/projects/:id', requireAuth, async (c) => {
  try {
    const id = c.req.param('id');
    await kv.del(`project:${id}`);
    
    return c.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    return c.json({ error: 'Failed to delete project' }, 500);
  }
});

// ==================== TESTIMONIALS MANAGEMENT ====================

// Get all testimonials
app.get('/cms/testimonials', async (c) => {
  try {
    const testimonials = await kv.getByPrefix('testimonial:');
    
    return c.json({ success: true, data: testimonials });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return c.json({ error: 'Failed to fetch testimonials' }, 500);
  }
});

// Create testimonial
app.post('/cms/testimonials', requireAuth, async (c) => {
  try {
    const body = await c.req.json();
    const id = `testimonial-${Date.now()}`;
    
    const testimonial = {
      id,
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    await kv.set(`testimonial:${id}`, testimonial);
    
    return c.json({ success: true, data: testimonial });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return c.json({ error: 'Failed to create testimonial' }, 500);
  }
});

// Update testimonial
app.put('/cms/testimonials/:id', requireAuth, async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    
    const existing = await kv.get(`testimonial:${id}`);
    if (!existing) {
      return c.json({ error: 'Testimonial not found' }, 404);
    }
    
    const updated = {
      ...existing,
      ...body,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(`testimonial:${id}`, updated);
    
    return c.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return c.json({ error: 'Failed to update testimonial' }, 500);
  }
});

// Delete testimonial
app.delete('/cms/testimonials/:id', requireAuth, async (c) => {
  try {
    const id = c.req.param('id');
    await kv.del(`testimonial:${id}`);
    
    return c.json({ success: true, message: 'Testimonial deleted successfully' });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return c.json({ error: 'Failed to delete testimonial' }, 500);
  }
});

// ==================== INITIALIZE DEFAULT DATA ====================

app.post('/cms/initialize', requireAuth, async (c) => {
  try {
    // Check if already initialized
    const existing = await kv.get('cms:initialized');
    if (existing) {
      return c.json({ success: true, message: 'Already initialized' });
    }
    
    // Initialize hero content
    await kv.set('cms:home:hero', {
      title: 'Empower Your Home with Solar Rooftop – Clean, Affordable Energy for Tamil Nadu & Pondicherry',
      subtitle: 'Transform your residential or commercial space into a sustainable powerhouse. Enjoy government subsidies, fast ROI, and zero upfront hassle with our expert EPC services.',
      imageUrl: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGVuZ2luZWVyJTIwd29ya2VyfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    });
    
    // Mark as initialized
    await kv.set('cms:initialized', true);
    
    return c.json({ success: true, message: 'CMS initialized successfully' });
  } catch (error) {
    console.error('Error initializing CMS:', error);
    return c.json({ error: 'Failed to initialize CMS' }, 500);
  }
});

export default app;
