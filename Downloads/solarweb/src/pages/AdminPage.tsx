import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabase/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { AdminDashboard } from '../components/AdminDashboard';
import { PageEditor } from '../components/admin/PageEditor';
import { SettingsEditor } from '../components/admin/SettingsEditor';
import { 
  LogOut, 
  FileText, 
  Briefcase, 
  FolderOpen, 
  MessageSquare,
  Save,
  Plus,
  Trash2,
  Eye,
  Settings,
  Home
} from 'lucide-react';

export function AdminPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pages');
  const [saveStatus, setSaveStatus] = useState('');
  
  // Content states
  const [pages, setPages] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [siteSettings, setSiteSettings] = useState<any>({});
  
  // Editing states
  const [editingPage, setEditingPage] = useState<any>(null);
  const [editingService, setEditingService] = useState<any>(null);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin/login');
      return;
    }
    setUser(session.user);
    setLoading(false);
    loadContent();
  };

  const loadContent = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const token = session.access_token;
    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;

    try {
      // Load pages
      const pagesRes = await fetch(`${baseUrl}/cms/pages`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const pagesData = await pagesRes.json();
      if (pagesData.success) setPages(pagesData.pages || []);

      // Load services
      const servicesRes = await fetch(`${baseUrl}/cms/services`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const servicesData = await servicesRes.json();
      if (servicesData.success) setServices(servicesData.services || []);

      // Load projects
      const projectsRes = await fetch(`${baseUrl}/cms/projects`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const projectsData = await projectsRes.json();
      if (projectsData.success) setProjects(projectsData.projects || []);

      // Load testimonials
      const testimonialsRes = await fetch(`${baseUrl}/cms/testimonials`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const testimonialsData = await testimonialsRes.json();
      if (testimonialsData.success) setTestimonials(testimonialsData.testimonials || []);

      // Load site settings
      const siteSettingsRes = await fetch(`${baseUrl}/cms/settings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const siteSettingsData = await siteSettingsRes.json();
      if (siteSettingsData.success) setSiteSettings(siteSettingsData.settings || {});
    } catch (error) {
      console.error('Error loading content:', error);
    }
  };

  const handleSavePage = async (pageData: any) => {
    if (!editingPage) return;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    setSaveStatus('Saving...');
    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;

    try {
      console.log('Saving page data:', pageData);
      console.log('Page ID:', editingPage.key.replace('page:', ''));
      
      const res = await fetch(`${baseUrl}/cms/pages/${editingPage.key.replace('page:', '')}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`
        },
        body: JSON.stringify(pageData)
      });

      const data = await res.json();
      console.log('Save response:', data);
      
      if (data.success) {
        setSaveStatus('Saved successfully!');
        setTimeout(() => setSaveStatus(''), 3000);
        setEditingPage(null);
        loadContent();
      } else {
        setSaveStatus('Error: ' + (data.error || 'Unknown error'));
        console.error('Save failed:', data);
      }
    } catch (error) {
      console.error('Save error:', error);
      setSaveStatus('Error saving: ' + String(error));
    }
  };

  const handleSaveService = async () => {
    if (!editingService) return;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    setSaveStatus('Saving...');
    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
    const serviceId = editingService.key ? editingService.key.replace('service:', '') : `service-${Date.now()}`;

    try {
      const res = await fetch(`${baseUrl}/cms/services/${serviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`
        },
        body: JSON.stringify(editingService.value || editingService)
      });

      const data = await res.json();
      if (data.success) {
        setSaveStatus('Saved successfully!');
        setTimeout(() => setSaveStatus(''), 3000);
        setEditingService(null);
        loadContent();
      }
    } catch (error) {
      console.error('Save error:', error);
      setSaveStatus('Error saving');
    }
  };

  const handleSaveProject = async () => {
    if (!editingProject) return;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    setSaveStatus('Saving...');
    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
    const projectId = editingProject.key ? editingProject.key.replace('project:', '') : `project-${Date.now()}`;

    try {
      const res = await fetch(`${baseUrl}/cms/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`
        },
        body: JSON.stringify(editingProject.value || editingProject)
      });

      const data = await res.json();
      if (data.success) {
        setSaveStatus('Saved successfully!');
        setTimeout(() => setSaveStatus(''), 3000);
        setEditingProject(null);
        loadContent();
      }
    } catch (error) {
      console.error('Save error:', error);
      setSaveStatus('Error saving');
    }
  };

  const handleDeleteService = async (serviceKey: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
    const serviceId = serviceKey.replace('service:', '');

    try {
      const res = await fetch(`${baseUrl}/cms/services/${serviceId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${session.access_token}` }
      });

      const data = await res.json();
      if (data.success) {
        loadContent();
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleDeleteProject = async (projectKey: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
    const projectId = projectKey.replace('project:', '');

    try {
      const res = await fetch(`${baseUrl}/cms/projects/${projectId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${session.access_token}` }
      });

      const data = await res.json();
      if (data.success) {
        loadContent();
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleSaveSettings = async (settingsData: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    setSaveStatus('Saving settings...');
    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;

    try {
      console.log('Saving settings:', settingsData);
      
      const res = await fetch(`${baseUrl}/cms/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`
        },
        body: JSON.stringify(settingsData)
      });

      const data = await res.json();
      console.log('Settings save response:', data);
      
      if (data.success) {
        setSaveStatus('Settings saved successfully!');
        setTimeout(() => setSaveStatus(''), 3000);
        setSiteSettings(settingsData);
        loadContent();
      } else {
        setSaveStatus('Error: ' + (data.error || 'Unknown error'));
        console.error('Settings save failed:', data);
      }
    } catch (error) {
      console.error('Settings save error:', error);
      setSaveStatus('Error saving settings: ' + String(error));
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const initializeCMS = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
    
    try {
      const res = await fetch(`${baseUrl}/cms/initialize`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${session.access_token}` }
      });
      
      const data = await res.json();
      if (data.success) {
        alert('CMS initialized with default content!');
        loadContent();
      }
    } catch (error) {
      console.error('Initialize error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl">CMS Admin Panel</h1>
              <p className="text-sm text-gray-600">Welcome, {user?.email}</p>
            </div>
            <div className="flex items-center gap-4">
              {saveStatus && (
                <span className="text-sm text-green-600">{saveStatus}</span>
              )}
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                <Eye size={20} />
                View Site
              </button>
              <button
                onClick={initializeCMS}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Settings size={20} />
                Initialize CMS
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg mb-4">Content Types</h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('pages')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'pages'
                      ? 'bg-[#228b22] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <FileText size={20} />
                  Pages
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'services'
                      ? 'bg-[#228b22] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Briefcase size={20} />
                  Services
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-[#228b22] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <FolderOpen size={20} />
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'testimonials'
                      ? 'bg-[#228b22] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare size={20} />
                  Testimonials
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-[#228b22] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Settings size={20} />
                  Site Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Pages Tab */}
              {activeTab === 'pages' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Pages</h2>
                  </div>
                  
                  {pages.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <p>No pages found. Click "Initialize CMS" to create default content.</p>
                    </div>
                  ) : editingPage ? (
                    <PageEditor
                      page={editingPage}
                      onSave={handleSavePage}
                      onCancel={() => setEditingPage(null)}
                    />
                  ) : (
                    <div className="space-y-4">
                      {pages.map((page) => (
                        <div key={page.key} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl">{page.value.title || page.key}</h3>
                            <button
                              onClick={() => setEditingPage(page)}
                              className="px-6 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]"
                            >
                              Edit Page
                            </button>
                          </div>
                          <p className="text-gray-600 text-sm">{page.value.heroTitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Services Tab */}
              {activeTab === 'services' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Services</h2>
                    <button
                      onClick={() => setEditingService({
                        title: '',
                        description: '',
                        features: [],
                        image: ''
                      })}
                      className="flex items-center gap-2 px-4 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]"
                    >
                      <Plus size={18} />
                      Add Service
                    </button>
                  </div>

                  {editingService && (
                    <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-gray-50">
                      <h3 className="text-xl mb-4">
                        {editingService.key ? 'Edit Service' : 'New Service'}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm mb-2">Title</label>
                          <input
                            type="text"
                            value={editingService.value?.title || editingService.title || ''}
                            onChange={(e) => {
                              if (editingService.value) {
                                setEditingService({
                                  ...editingService,
                                  value: { ...editingService.value, title: e.target.value }
                                });
                              } else {
                                setEditingService({ ...editingService, title: e.target.value });
                              }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Description</label>
                          <textarea
                            value={editingService.value?.description || editingService.description || ''}
                            onChange={(e) => {
                              if (editingService.value) {
                                setEditingService({
                                  ...editingService,
                                  value: { ...editingService.value, description: e.target.value }
                                });
                              } else {
                                setEditingService({ ...editingService, description: e.target.value });
                              }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            rows={3}
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Image URL</label>
                          <input
                            type="text"
                            value={editingService.value?.image || editingService.image || ''}
                            onChange={(e) => {
                              if (editingService.value) {
                                setEditingService({
                                  ...editingService,
                                  value: { ...editingService.value, image: e.target.value }
                                });
                              } else {
                                setEditingService({ ...editingService, image: e.target.value });
                              }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={handleSaveService}
                            className="flex items-center gap-2 px-4 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]"
                          >
                            <Save size={18} />
                            Save
                          </button>
                          <button
                            onClick={() => setEditingService(null)}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.key} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl mb-2">{service.value.title}</h3>
                            <p className="text-gray-600 text-sm">{service.value.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setEditingService(service)}
                              className="text-[#228b22] hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteService(service.key)}
                              className="text-red-600 hover:underline"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === 'projects' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Projects</h2>
                    <button
                      onClick={() => setEditingProject({
                        title: '',
                        client: '',
                        location: '',
                        scope: '',
                        result: '',
                        image: ''
                      })}
                      className="flex items-center gap-2 px-4 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]"
                    >
                      <Plus size={18} />
                      Add Project
                    </button>
                  </div>

                  {editingProject && (
                    <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-gray-50">
                      <h3 className="text-xl mb-4">
                        {editingProject.key ? 'Edit Project' : 'New Project'}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm mb-2">Title</label>
                          <input
                            type="text"
                            value={editingProject.value?.title || editingProject.title || ''}
                            onChange={(e) => {
                              if (editingProject.value) {
                                setEditingProject({
                                  ...editingProject,
                                  value: { ...editingProject.value, title: e.target.value }
                                });
                              } else {
                                setEditingProject({ ...editingProject, title: e.target.value });
                              }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm mb-2">Client</label>
                            <input
                              type="text"
                              value={editingProject.value?.client || editingProject.client || ''}
                              onChange={(e) => {
                                if (editingProject.value) {
                                  setEditingProject({
                                    ...editingProject,
                                    value: { ...editingProject.value, client: e.target.value }
                                  });
                                } else {
                                  setEditingProject({ ...editingProject, client: e.target.value });
                                }
                              }}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-2">Location</label>
                            <input
                              type="text"
                              value={editingProject.value?.location || editingProject.location || ''}
                              onChange={(e) => {
                                if (editingProject.value) {
                                  setEditingProject({
                                    ...editingProject,
                                    value: { ...editingProject.value, location: e.target.value }
                                  });
                                } else {
                                  setEditingProject({ ...editingProject, location: e.target.value });
                                }
                              }}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Result</label>
                          <input
                            type="text"
                            value={editingProject.value?.result || editingProject.result || ''}
                            onChange={(e) => {
                              if (editingProject.value) {
                                setEditingProject({
                                  ...editingProject,
                                  value: { ...editingProject.value, result: e.target.value }
                                });
                              } else {
                                setEditingProject({ ...editingProject, result: e.target.value });
                              }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">Image URL</label>
                          <input
                            type="text"
                            value={editingProject.value?.image || editingProject.image || ''}
                            onChange={(e) => {
                              if (editingProject.value) {
                                setEditingProject({
                                  ...editingProject,
                                  value: { ...editingProject.value, image: e.target.value }
                                });
                              } else {
                                setEditingProject({ ...editingProject, image: e.target.value });
                              }
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={handleSaveProject}
                            className="flex items-center gap-2 px-4 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]"
                          >
                            <Save size={18} />
                            Save
                          </button>
                          <button
                            onClick={() => setEditingProject(null)}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.key} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl mb-2">{project.value.title}</h3>
                            <p className="text-gray-600 text-sm">
                              {project.value.client} • {project.value.location}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setEditingProject(project)}
                              className="text-[#228b22] hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteProject(project.key)}
                              className="text-red-600 hover:underline"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials Tab */}
              {activeTab === 'testimonials' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Testimonials</h2>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]">
                      <Plus size={18} />
                      Add Testimonial
                    </button>
                  </div>
                  <p className="text-gray-500">Testimonials management coming soon...</p>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Site Settings</h2>
                  </div>
                  <SettingsEditor
                    settings={siteSettings}
                    onSave={handleSaveSettings}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}