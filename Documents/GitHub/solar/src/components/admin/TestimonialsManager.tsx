import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { projectId } from '../../utils/supabase/info';

type Testimonial = {
  id: string;
  content: string;
  author: string;
  position: string;
};

export function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Testimonial>>({});

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/testimonials`
      );

      if (response.ok) {
        const data = await response.json();
        setTestimonials(data.data || []);
      }
    } catch (error) {
      console.error('Error loading testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);
    setEditForm({ ...testimonial });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveTestimonial = async () => {
    const token = localStorage.getItem('admin_token');
    
    try {
      const url = editingId
        ? `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/testimonials/${editingId}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/testimonials`;
      
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        await loadTestimonials();
        cancelEdit();
      }
    } catch (error) {
      console.error('Error saving testimonial:', error);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    const token = localStorage.getItem('admin_token');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/testimonials/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        await loadTestimonials();
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const addNew = () => {
    setEditingId('new');
    setEditForm({
      content: '',
      author: '',
      position: '',
    });
  };

  if (loading) {
    return <div className="text-center py-12">Loading testimonials...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Manage Testimonials</h2>
        <button
          onClick={addNew}
          className="flex items-center gap-2 bg-[#228b22] text-white px-6 py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors"
        >
          <Plus size={20} />
          Add Testimonial
        </button>
      </div>

      {/* Edit Form */}
      {editingId && (
        <div className="bg-gray-50 rounded-lg p-6 border-2 border-[#228b22]">
          <h3 className="text-xl mb-4">
            {editingId === 'new' ? 'Add New Testimonial' : 'Edit Testimonial'}
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Testimonial Content</label>
              <textarea
                value={editForm.content || ''}
                onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="What the client said about your services..."
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Author Name</label>
              <input
                type="text"
                value={editForm.author || ''}
                onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Position / Company</label>
              <input
                type="text"
                value={editForm.position || ''}
                onChange={(e) => setEditForm({ ...editForm, position: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="CEO at Company Inc."
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={saveTestimonial}
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

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No testimonials yet. Click "Add Testimonial" to create one.
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-gray-700 mb-3 italic">"{testimonial.content}"</p>
                  <p className="text-sm">
                    <strong>{testimonial.author}</strong>
                    {testimonial.position && <span className="text-gray-600"> - {testimonial.position}</span>}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => startEdit(testimonial)}
                    className="text-blue-600 hover:text-blue-700 p-2"
                  >
                    <Edit2 size={20} />
                  </button>
                  <button
                    onClick={() => deleteTestimonial(testimonial.id)}
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
