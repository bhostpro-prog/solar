import { useState, useEffect } from 'react';
import { Save, RefreshCw } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function ContentEditor() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [selectedSection, setSelectedSection] = useState('hero');
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const pages = [
    { id: 'home', name: 'Home Page', sections: ['hero', 'highlights', 'subsidy', 'financing'] },
    { id: 'about', name: 'About Page', sections: ['overview', 'mission', 'values'] },
    { id: 'services', name: 'Services Page', sections: ['intro'] },
    { id: 'projects', name: 'Projects Page', sections: ['intro'] },
    { id: 'safety', name: 'Safety Page', sections: ['protocols', 'certifications'] },
    { id: 'contact', name: 'Contact Page', sections: ['info'] },
  ];

  const currentPage = pages.find(p => p.id === selectedPage);

  useEffect(() => {
    loadContent();
  }, [selectedPage, selectedSection]);

  const loadContent = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/content/${selectedPage}/${selectedSection}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setContent(data.data || {});
      } else {
        // Initialize with empty content if not found
        setContent({});
      }
    } catch (error) {
      console.error('Error loading content:', error);
      setContent({});
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    setMessage('');
    
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/content/${selectedPage}/${selectedSection}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ content }),
        }
      );

      if (response.ok) {
        setMessage('Content saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error saving content');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      setMessage('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const renderEditor = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <RefreshCw className="animate-spin text-[#228b22]" size={32} />
        </div>
      );
    }

    // Hero Section Editor
    if (selectedSection === 'hero') {
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Title</label>
            <textarea
              value={content?.title || ''}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Subtitle</label>
            <textarea
              value={content?.subtitle || ''}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Background Image URL</label>
            <input
              type="url"
              value={content?.imageUrl || ''}
              onChange={(e) => setContent({ ...content, imageUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
            />
          </div>

          {content?.imageUrl && (
            <div className="rounded-lg overflow-hidden">
              <img
                src={content.imageUrl}
                alt="Preview"
                className="w-full h-48 object-cover"
              />
            </div>
          )}
        </div>
      );
    }

    // Generic JSON editor for other sections
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Edit the JSON content below. Changes will be reflected on the website immediately after saving.
        </p>
        <textarea
          value={JSON.stringify(content, null, 2)}
          onChange={(e) => {
            try {
              setContent(JSON.parse(e.target.value));
            } catch (error) {
              // Invalid JSON, don't update
            }
          }}
          rows={20}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22] font-mono text-sm"
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-4">Edit Page Content</h2>
        <p className="text-gray-600 mb-6">
          Select a page and section to edit its content. Changes are saved to the database and will appear on the live website.
        </p>
      </div>

      {/* Page Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2">Page</label>
          <select
            value={selectedPage}
            onChange={(e) => {
              setSelectedPage(e.target.value);
              const page = pages.find(p => p.id === e.target.value);
              setSelectedSection(page?.sections[0] || '');
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
          >
            {pages.map((page) => (
              <option key={page.id} value={page.id}>
                {page.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">Section</label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
          >
            {currentPage?.sections.map((section) => (
              <option key={section} value={section}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Editor */}
      <div className="bg-gray-50 rounded-lg p-6">
        {renderEditor()}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={loadContent}
          disabled={loading}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
          Reload
        </button>

        <div className="flex items-center gap-4">
          {message && (
            <span className={`text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </span>
          )}
          <button
            onClick={saveContent}
            disabled={saving}
            className="flex items-center gap-2 bg-[#228b22] text-white px-8 py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors disabled:opacity-50"
          >
            <Save size={20} />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
