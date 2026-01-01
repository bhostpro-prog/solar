import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', cors());
app.use('*', logger(console.log));

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// ============================================
// CMS ROUTES
// ============================================

// Get all page content
app.get('/make-server-47a069bd/cms/pages', async (c) => {
  try {
    const pages = await kv.getByPrefix('page:');
    return c.json({ success: true, pages });
  } catch (error) {
    console.error('Error fetching pages:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get specific page content
app.get('/make-server-47a069bd/cms/pages/:pageId', async (c) => {
  try {
    const pageId = c.req.param('pageId');
    const page = await kv.get(`page:${pageId}`);
    
    if (!page) {
      return c.json({ success: false, error: 'Page not found' }, 404);
    }
    
    return c.json({ success: true, page });
  } catch (error) {
    console.error('Error fetching page:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Update page content
app.put('/make-server-47a069bd/cms/pages/:pageId', async (c) => {
  try {
    // Check authentication
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      console.error('Update page - Unauthorized attempt');
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    const pageId = c.req.param('pageId');
    const body = await c.req.json();
    
    console.log('Updating page:', pageId);
    console.log('Update data:', JSON.stringify(body, null, 2));
    
    const pageData = {
      ...body,
      updatedAt: new Date().toISOString(),
      updatedBy: user.email,
    };
    
    await kv.set(`page:${pageId}`, pageData);
    
    console.log('Page updated successfully:', pageId);
    return c.json({ success: true, message: 'Page updated successfully' });
  } catch (error) {
    console.error('Error updating page:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all services
app.get('/make-server-47a069bd/cms/services', async (c) => {
  try {
    const services = await kv.getByPrefix('service:');
    return c.json({ success: true, services });
  } catch (error) {
    console.error('Error fetching services:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Create/Update service
app.put('/make-server-47a069bd/cms/services/:serviceId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    const serviceId = c.req.param('serviceId');
    const body = await c.req.json();
    
    await kv.set(`service:${serviceId}`, {
      ...body,
      updatedAt: new Date().toISOString(),
      updatedBy: user.email,
    });
    
    return c.json({ success: true, message: 'Service updated successfully' });
  } catch (error) {
    console.error('Error updating service:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete service
app.delete('/make-server-47a069bd/cms/services/:serviceId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    const serviceId = c.req.param('serviceId');
    await kv.del(`service:${serviceId}`);
    
    return c.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all projects
app.get('/make-server-47a069bd/cms/projects', async (c) => {
  try {
    const projects = await kv.getByPrefix('project:');
    return c.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Create/Update project
app.put('/make-server-47a069bd/cms/projects/:projectId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    const projectId = c.req.param('projectId');
    const body = await c.req.json();
    
    await kv.set(`project:${projectId}`, {
      ...body,
      updatedAt: new Date().toISOString(),
      updatedBy: user.email,
    });
    
    return c.json({ success: true, message: 'Project updated successfully' });
  } catch (error) {
    console.error('Error updating project:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete project
app.delete('/make-server-47a069bd/cms/projects/:projectId', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    const projectId = c.req.param('projectId');
    await kv.del(`project:${projectId}`);
    
    return c.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all testimonials
app.get('/make-server-47a069bd/cms/testimonials', async (c) => {
  try {
    const testimonials = await kv.getByPrefix('testimonial:');
    return c.json({ success: true, testimonials });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get site settings (logo, etc.)
app.get('/make-server-47a069bd/cms/settings', async (c) => {
  try {
    const settings = await kv.get('site:settings');
    return c.json({ success: true, settings: settings || {} });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Update site settings
app.put('/make-server-47a069bd/cms/settings', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    const body = await c.req.json();
    
    console.log('Updating site settings:', body);
    
    await kv.set('site:settings', {
      ...body,
      updatedAt: new Date().toISOString(),
      updatedBy: user.email,
    });
    
    console.log('Site settings updated successfully');
    return c.json({ success: true, message: 'Settings updated successfully' });
  } catch (error) {
    console.error('Error updating settings:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Initialize default content
app.post('/make-server-47a069bd/cms/initialize', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    // Initialize home page content
    await kv.set('page:home', {
      id: 'home',
      title: 'Home',
      
      // Hero Section
      heroTitle: 'Empower Your Home with Solar Rooftop – Clean, Affordable Energy for Tamil Nadu & Pondicherry',
      heroSubtitle: 'Transform your residential or commercial space into a sustainable powerhouse. Enjoy government subsidies, fast ROI, and zero upfront hassle with our expert EPC services.',
      heroImage: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGVuZ2luZWVyJTIwd29ya2VyfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      
      // Highlights Section
      sectionTitle1: 'Leading the Way in',
      sectionTitle2: 'Solar Energy Solutions',
      
      highlights: [
        {
          icon: 'CheckCircle',
          title: 'Government Subsidies',
          description: 'Up to ₹78,000 central + ₹20,000/kW state incentives for residential systems.',
          color: '#228b22'
        },
        {
          icon: 'Zap',
          title: 'Fast ROI',
          description: 'Payback in 3-5 years for homes; 2-3.5 years for commercial setups.',
          color: '#fd7d01'
        },
        {
          icon: 'Briefcase',
          title: 'End-to-End EPC',
          description: 'Design, installation, net metering, and O&M support.',
          color: '#228b22'
        },
        {
          icon: 'Sun',
          title: 'Proven Tech',
          description: 'TOPCon, Mono PERC, and half-cut panels for maximum efficiency.',
          color: '#fd7d01'
        },
        {
          icon: 'MapPin',
          title: 'PAN India Service',
          description: 'Special focus on Tamil Nadu & Pondicherry with DISCOM approvals.',
          color: '#228b22'
        },
        {
          icon: 'Shield',
          title: '25+ Year Warranty',
          description: 'Long-term performance guarantee with comprehensive support.',
          color: '#fd7d01'
        }
      ],
      
      // Subsidy Section
      subsidyTitle: 'Subsidy & Schemes Overview',
      centralSubsidyTitle: 'Pradhan Mantri Surya Ghar Muft Bijli Yojana (Central Subsidy)',
      centralSubsidyDescription: 'This flagship scheme offers direct financial aid for residential rooftop solar.',
      centralSubsidyBenefits: [
        'Up to ₹30,000/kW for 1-2 kW systems',
        '₹60,000 for 2-3 kW',
        '₹78,000 max for 3+ kW'
      ],
      centralSubsidyNote: 'Apply via National Portal: Register, get DISCOM approval, install with empanelled vendors like us. Subsidy credited post-verification.',
      
      stateSubsidyTitle: 'Chief Minister\'s Solar Rooftop Capital Incentive Scheme (Tamil Nadu State)',
      stateSubsidyDescription: 'Additional ₹20,000/kW over central subsidy for on-grid residential PV systems.',
      stateSubsidyTotal: 'Up to ₹98,000/kW',
      stateSubsidyTotalNote: 'Combined total savings',
      
      subsidyEligibility: 'Residential households, RWAs, grid-connected systems. Commercial benefits via net metering & depreciation.',
      
      // Financing Section
      financingTitle: 'Financing & ROI Benefits',
      financingOptions: [
        {
          title: 'Banks',
          description: 'SBI Green Home Loan (8-12% interest, 3-7 years tenure, 75-80% financing)'
        },
        {
          title: 'NBFCs',
          description: 'Tata Capital, Hero FinCorp – Zero EMI, quick approvals'
        },
        {
          title: 'Business Models',
          description: 'CapEx (own it), OPEX/PPA (zero upfront)'
        }
      ],
      
      // Residential ROI
      residentialROITitle: 'Residential ROI Example (3 kW System)',
      residentialROI: {
        grossCost: '₹1,50,000–₹1,70,000',
        centralSubsidy: '₹60,000',
        stateIncentive: 'Up to ₹60,000',
        netCost: '₹70,000–₹1,00,000',
        benefits: [
          'Annual Generation: ~3,600 units',
          'Savings (₹4.50-₹7/unit): ₹16,000–₹22,000/year',
          'Payback: 3-4.5 years',
          '25-Year ROI: 6x-8x',
          'Benefits: 70-90% bill reduction, property value boost'
        ]
      },
      
      // Commercial ROI
      commercialROITitle: 'Commercial ROI Example (100 kW System)',
      commercialROI: {
        cost: '₹45-55 Lakhs',
        annualSavings: '₹14-18 Lakhs',
        payback: '2.5-3.5 years',
        benefits: [
          'ROI: 8x-10x',
          '40% accelerated depreciation',
          'ESG compliance',
          'Enhanced brand value',
          'Protection from tariff hikes'
        ]
      },
      
      // Project Showcase
      projectShowcaseTitle: 'Project Showcase',
      projectShowcaseSubtitle: 'Discover our work: From modern homes to factories – clean installs, zero downtime.',
      
      // CTA Section
      ctaTitle: 'Ready to Go Solar?',
      ctaSubtitle: 'Get your free quote today and start saving on energy costs while protecting the environment.',
      ctaButtonText: 'Get Your Free Quote'
    });
    
    // Initialize about page content
    await kv.set('page:about', {
      id: 'about',
      title: 'About Us',
      heroTitle: 'About Us',
      heroSubtitle: 'Leading EPC and service provider specializing in solar rooftop installations, advanced testing, and renewable energy solutions.',
      mission: 'To drive India\'s renewable transition through innovative EPC, precise diagnostics, and reliable O&M – maximizing efficiency and minimizing downtime.',
      description: 'Bharat Renewable Energy is a leading EPC and service provider specializing in solar rooftop installations, advanced testing, high-voltage electrical diagnostics, and industrial electronics repair.',
    });
    
    return c.json({ success: true, message: 'CMS initialized with default content' });
  } catch (error) {
    console.error('Error initializing CMS:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Admin signup
app.post('/make-server-47a069bd/admin/signup', async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name, role: 'admin' },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true,
    });
    
    if (error) {
      return c.json({ success: false, error: error.message }, 400);
    }
    
    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.error('Admin signup error:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Upload image
app.post('/make-server-47a069bd/cms/upload', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ success: false, error: 'Unauthorized' }, 401);
    }
    
    const body = await c.req.json();
    const { fileName, fileData, contentType } = body;
    
    // For now, store as base64 in KV store
    // In production, you'd use Supabase Storage
    const imageId = `image:${Date.now()}_${fileName}`;
    await kv.set(imageId, {
      fileName,
      contentType,
      data: fileData,
      uploadedBy: user.email,
      uploadedAt: new Date().toISOString(),
    });
    
    return c.json({ success: true, imageId, url: `/api/images/${imageId}` });
  } catch (error) {
    console.error('Upload error:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);