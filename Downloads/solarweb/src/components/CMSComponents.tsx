import { Save, X, Edit2 } from 'lucide-react';

interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
}

export function EditableField({ 
  label, 
  value, 
  onChange, 
  multiline = false, 
  rows = 3,
  placeholder = ''
}: EditableFieldProps) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228b22]"
          rows={rows}
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228b22]"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

interface SaveButtonsProps {
  onSave: () => void;
  onCancel: () => void;
  saveText?: string;
  saving?: boolean;
}

export function SaveButtons({ 
  onSave, 
  onCancel, 
  saveText = 'Save',
  saving = false 
}: SaveButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onSave}
        disabled={saving}
        className="flex items-center gap-2 px-4 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Save size={18} />
        {saving ? 'Saving...' : saveText}
      </button>
      <button
        onClick={onCancel}
        disabled={saving}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
      >
        <X size={18} />
        Cancel
      </button>
    </div>
  );
}

interface ContentCardProps {
  title: string;
  description?: string;
  onEdit: () => void;
  onDelete?: () => void;
  children?: React.ReactNode;
}

export function ContentCard({ 
  title, 
  description, 
  onEdit, 
  onDelete,
  children 
}: ContentCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm mb-2">{description}</p>
          )}
          {children}
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={onEdit}
            className="text-[#228b22] hover:bg-[#228b22] hover:text-white p-2 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit2 size={18} />
          </button>
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-lg transition-colors"
              title="Delete"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface StatusBadgeProps {
  status: 'saved' | 'saving' | 'error';
  message?: string;
}

export function StatusBadge({ status, message }: StatusBadgeProps) {
  const colors = {
    saved: 'bg-green-100 text-green-800 border-green-200',
    saving: 'bg-blue-100 text-blue-800 border-blue-200',
    error: 'bg-red-100 text-red-800 border-red-200',
  };

  const defaultMessages = {
    saved: 'Saved successfully',
    saving: 'Saving...',
    error: 'Error saving',
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm ${colors[status]}`}>
      {status === 'saving' && (
        <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {message || defaultMessages[status]}
    </div>
  );
}

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      {icon && <div className="flex justify-center mb-4 text-gray-400">{icon}</div>}
      <h3 className="text-xl mb-2 text-gray-700">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

interface ImagePreviewProps {
  url: string;
  alt?: string;
  onRemove?: () => void;
}

export function ImagePreview({ url, alt = 'Preview', onRemove }: ImagePreviewProps) {
  if (!url) return null;

  return (
    <div className="relative inline-block">
      <img
        src={url}
        alt={alt}
        className="w-full max-w-sm h-48 object-cover rounded-lg border border-gray-300"
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
        }}
      />
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 shadow-lg"
          title="Remove image"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
