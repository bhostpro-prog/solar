import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { projectId } from '../../utils/supabase/info';

type Project = {
  id: string;
  title: string;
  client: string;
  location: string;
  scope: string;
  findings: string;
  result: string;
  imageUrl: string;
  order: number;
};

export function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Project>>({});

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/projects`
      );

      if (response.ok) {
        const data = await response.json();
        setProjects(data.data || []);
      }
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (project: Project) => {
    setEditingId(project.id);
    setEditForm({ ...project });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveProject = async () => {
    const token = localStorage.getItem('admin_token');
    
    try {
      const url = editingId
        ? `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/projects/${editingId}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/projects`;
      
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        await loadProjects();
        cancelEdit();
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    const token = localStorage.getItem('admin_token');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/projects/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        await loadProjects();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const addNew = () => {
    setEditingId('new');
    setEditForm({
      title: '',
      client: '',
      location: '',
      scope: '',
      findings: '',
      result: '',
      imageUrl: '',
      order: projects.length,
    });
  };

  if (loading) {
    return <div className="text-center py-12">Loading projects...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Manage Projects</h2>
        <button
          onClick={addNew}
          className="flex items-center gap-2 bg-[#228b22] text-white px-6 py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors"
        >
          <Plus size={20} />
          Add Project
        </button>
      </div>

      {/* Edit Form */}
      {editingId && (
        <div className="bg-gray-50 rounded-lg p-6 border-2 border-[#228b22]">
          <h3 className="text-xl mb-4">
            {editingId === 'new' ? 'Add New Project' : 'Edit Project'}
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Project Title</label>
              <input
                type="text"
                value={editForm.title || ''}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Client</label>
                <input
                  type="text"
                  value={editForm.client || ''}
                  onChange={(e) => setEditForm({ ...editForm, client: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Location</label>
                <input
                  type="text"
                  value={editForm.location || ''}
                  onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Scope</label>
              <input
                type="text"
                value={editForm.scope || ''}
                onChange={(e) => setEditForm({ ...editForm, scope: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Findings</label>
              <textarea
                value={editForm.findings || ''}
                onChange={(e) => setEditForm({ ...editForm, findings: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Result</label>
              <textarea
                value={editForm.result || ''}
                onChange={(e) => setEditForm({ ...editForm, result: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Image URL</label>
              <input
                type="url"
                value={editForm.imageUrl || ''}
                onChange={(e) => setEditForm({ ...editForm, imageUrl: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
              {editForm.imageUrl && (
                <img
                  src={editForm.imageUrl}
                  alt="Preview"
                  className="mt-2 w-full h-32 object-cover rounded-lg"
                />
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">Display Order</label>
              <input
                type="number"
                value={editForm.order || 0}
                onChange={(e) => setEditForm({ ...editForm, order: parseInt(e.target.value) })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={saveProject}
                className="flex items-center gap-2 bg-[#228b22] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b1a]"
              >
                <Save size={20} />
                Save
              </button>
              <button
                onClick={cancelEdit}
                className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                <X size={20} />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.length === 0 ? (
          <div className="col-span-2 text-center py-12 text-gray-500">
            No projects yet. Click "Add Project" to create one.
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg mb-2">{project.title}</h3>
                <div className="text-sm text-gray-600 space-y-1 mb-3">
                  <p><strong>Client:</strong> {project.client}</p>
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Result:</strong> {project.result}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(project)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                  >
                    <Edit2 size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded hover:bg-red-100"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
