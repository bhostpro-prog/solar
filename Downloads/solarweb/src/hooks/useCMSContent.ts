import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms`;

export function useCMSContent(key: string, defaultValue: any = null) {
  const [content, setContent] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${API_BASE}/content/${encodeURIComponent(key)}`, {
          headers: { Authorization: `Bearer ${publicAnonKey}` },
        });
        const data = await response.json();
        
        if (data.success) {
          setContent(data.content);
        } else {
          setContent(defaultValue);
        }
      } catch (err) {
        console.error(`Error fetching content for key "${key}":`, err);
        setError('Failed to load content');
        setContent(defaultValue);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [key]);

  return { content, loading, error };
}

export function useCMSPage(page: string, defaultValue: any = {}) {
  const [content, setContent] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await fetch(`${API_BASE}/page/${page}`, {
          headers: { Authorization: `Bearer ${publicAnonKey}` },
        });
        const data = await response.json();
        
        if (data.success) {
          setContent(data.content);
        } else {
          setContent(defaultValue);
        }
      } catch (err) {
        console.error(`Error fetching page content for "${page}":`, err);
        setError('Failed to load page content');
        setContent(defaultValue);
      } finally {
        setLoading(false);
      }
    };

    fetchPageContent();
  }, [page]);

  return { content, loading, error };
}
