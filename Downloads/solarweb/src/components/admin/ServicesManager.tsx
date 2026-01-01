import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { projectId } from '../../utils/supabase/info';

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  imageUrl: string;
  order: number;
};

export function ServicesManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Service>>({});

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/services`
      );

      if (response.ok) {
        const data = await response.json();
        setServices(data.data || []);
      }
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (service: Service) => {
    setEditingId(service.id);
    setEditForm({ ...service });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveService = async () => {
    const token = localStorage.getItem('admin_token');
    
    try {
      const url = editingId
        ? `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/services/${editingId}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/services`;
      
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        await loadServices();
        cancelEdit();
      }
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const deleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    const token = localStorage.getItem('admin_token');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/services/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        await loadServices();
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const addNew = () => {
    setEditingId('new');
    setEditForm({
      title: '',
      description: '',
      features: [],
      icon: 'Zap',
      color: 'from-[#228b22] to-[#1a6b1a]',
      imageUrl: '',
      order: services.length,
    });
  };

  if (loading) {
    return <div className="text-center py-12">Loading services...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Manage Services</h2>
        <button
          onClick={addNew}
          className="flex items-center gap-2 bg-[#228b22] text-white px-6 py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors"
        >
          <Plus size={20} />
          Add Service
        </button>
      </div>

      {/* Edit Form */}
      {editingId && (
        <div className="bg-gray-50 rounded-lg p-6 border-2 border-[#228b22]">
          <h3 className="text-xl mb-4">
            {editingId === 'new' ? 'Add New Service' : 'Edit Service'}
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Title</label>
              <input
                type="text"
                value={editForm.title || ''}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Description</label>
              <textarea
                value={editForm.description || ''}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Features (one per line)</label>
              <textarea
                value={editForm.features?.join('\n') || ''}
                onChange={(e) => setEditForm({ ...editForm, features: e.target.value.split('\n').filter(f => f.trim()) })}
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Icon Name</label>
                <input
                  type="text"
                  value={editForm.icon || ''}
                  onChange={(e) => setEditForm({ ...editForm, icon: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  placeholder="Zap, Camera, etc."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Color Gradient</label>
                <input
                  type="text"
                  value={editForm.color || ''}
                  onChange={(e) => setEditForm({ ...editForm, color: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  placeholder="from-[#228b22] to-[#1a6b1a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Image URL</label>
              <input
                type="url"
                value={editForm.imageUrl || ''}
                onChange={(e) => setEditForm({ ...editForm, imageUrl: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
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
                onClick={saveService}
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

      {/* Services List */}
      <div className="space-y-4">
        {services.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No services yet. Click "Add Service" to create one.
          </div>
        ) : (
          services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <div className="text-sm text-gray-500">
                    <strong>Features:</strong> {service.features?.length || 0} items
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => startEdit(service)}
                    className="text-blue-600 hover:text-blue-700 p-2"
                  >
                    <Edit2 size={20} />
                  </button>
                  <button
                    onClick={() => deleteService(service.id)}
                    className="text-red-600 hover:text-red-700 p-2"
                  >
                    <Trash2 size={20} />
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
