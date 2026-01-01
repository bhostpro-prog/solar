import { useState } from 'react';
import { Database, CheckCircle, AlertCircle } from 'lucide-react';
import { projectId } from '../../utils/supabase/info';

export function InitializeButton() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const initializeCMS = async () => {
    setLoading(true);
    setStatus('idle');
    
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/initialize`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'CMS initialized successfully!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to initialize CMS');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
      console.error('Initialization error:', error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-4">
        <Database className="text-blue-600 flex-shrink-0 mt-1" size={24} />
        <div className="flex-1">
          <h3 className="text-lg mb-2 text-blue-900">Initialize CMS Data</h3>
          <p className="text-sm text-blue-700 mb-4">
            Click this button to populate the CMS with default content from your website. 
            This only needs to be done once when you first set up the CMS.
          </p>
          
          <button
            onClick={initializeCMS}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Initializing...' : 'Initialize CMS'}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-2 mt-4 text-green-600">
              <CheckCircle size={20} />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 mt-4 text-red-600">
              <AlertCircle size={20} />
              <span>{message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
