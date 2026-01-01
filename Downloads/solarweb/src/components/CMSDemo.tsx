import { Link } from 'react-router-dom';
import { Settings, FileEdit, Database } from 'lucide-react';

/**
 * CMS Demo Component
 * This banner shows how to access the admin dashboard
 * Remove this component in production
 */
export function CMSDemo() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white rounded-lg shadow-2xl p-4 max-w-sm">
        <div className="flex items-start gap-3 mb-3">
          <Settings className="flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-sm mb-1">CMS Admin Access</h3>
            <p className="text-xs text-white/90 mb-2">
              Manage all website content from the admin dashboard
            </p>
          </div>
        </div>
        
        <Link
          to="/admin"
          className="flex items-center justify-center gap-2 bg-white text-[#228b22] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors w-full text-sm"
        >
          <FileEdit size={16} />
          Open Admin Dashboard
        </Link>
        
        <div className="mt-3 pt-3 border-t border-white/20">
          <div className="flex items-center gap-2 text-xs text-white/80">
            <Database size={14} />
            <span>Default password: admin123</span>
          </div>
        </div>
      </div>
    </div>
  );
}
