import { useState } from 'react';
import { FileText, Briefcase, Image as ImageIcon, MessageSquare, Shield, Settings } from 'lucide-react';
import { WelcomeScreen } from './WelcomeScreen';
import { ContentEditor } from './ContentEditor';
import { ServicesManager } from './ServicesManager';
import { ProjectsManager } from './ProjectsManager';
import { TestimonialsManager } from './TestimonialsManager';
import { InitializeButton } from './InitializeButton';

type Tab = 'content' | 'services' | 'projects' | 'testimonials' | 'media' | 'settings';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('content');

  const tabs = [
    { id: 'content' as Tab, label: 'Page Content', icon: <FileText size={20} /> },
    { id: 'services' as Tab, label: 'Services', icon: <Briefcase size={20} /> },
    { id: 'projects' as Tab, label: 'Projects', icon: <Shield size={20} /> },
    { id: 'testimonials' as Tab, label: 'Testimonials', icon: <MessageSquare size={20} /> },
    { id: 'media' as Tab, label: 'Media', icon: <ImageIcon size={20} /> },
    { id: 'settings' as Tab, label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Banner */}
      <WelcomeScreen />

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
        <div className="flex flex-wrap border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#228b22] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {activeTab === 'content' && <ContentEditor />}
        {activeTab === 'services' && <ServicesManager />}
        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'testimonials' && <TestimonialsManager />}
        {activeTab === 'media' && (
          <div className="text-center py-12 text-gray-500">
            Media library coming soon. For now, use direct image URLs.
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl mb-4">Settings</h2>
            
            <InitializeButton />
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Admin Password:</strong> admin123
              </p>
              <p className="text-sm text-gray-600">
                Change this in production for security.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}