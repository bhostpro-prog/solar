import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function useCMSContent(key: string, defaultValue: any = null) {
  const [content, setContent] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContent();
  }, [key]);

  const fetchContent = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/content/${key}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }

      const data = await response.json();
      if (data.success && data.content) {
        setContent(data.content);
      }
    } catch (err) {
      console.error(`Error fetching CMS content for ${key}:`, err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return { content, loading, error, refetch: fetchContent };
}

export function useCMSContentAll() {
  const [content, setContent] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllContent();
  }, []);

  const fetchAllContent = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/content`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }

      const data = await response.json();
      if (data.success) {
        setContent(data.content || {});
      }
    } catch (err) {
      console.error('Error fetching all CMS content:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return { content, loading, error, refetch: fetchAllContent };
}
