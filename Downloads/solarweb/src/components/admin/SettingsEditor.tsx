import { useState } from 'react';
import { Upload, Save, X, ImageIcon } from 'lucide-react';

interface SettingsEditorProps {
  settings: any;
  onSave: (settings: any) => void;
}

export function SettingsEditor({ settings, onSave }: SettingsEditorProps) {
  const [editedSettings, setEditedSettings] = useState(settings || {});
  const [logoPreview, setLogoPreview] = useState(settings?.logoUrl || '');
  const [uploadingLogo, setUploadingLogo] = useState(false);

  const handleLogoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('Logo file size must be less than 2MB');
      return;
    }

    setUploadingLogo(true);

    try {
      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogoPreview(base64String);
        setEditedSettings({
          ...editedSettings,
          logoUrl: base64String,
          logoFileName: file.name,
        });
        setUploadingLogo(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading logo:', error);
      alert('Error uploading logo');
      setUploadingLogo(false);
    }
  };

  const removeLogo = () => {
    setLogoPreview('');
    setEditedSettings({
      ...editedSettings,
      logoUrl: '',
      logoFileName: '',
    });
  };

  const handleSave = () => {
    onSave(editedSettings);
  };

  return (
    <div className="space-y-8">
      {/* Logo Upload Section */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <h3 className="text-xl mb-4">Site Logo</h3>
        
        <div className="space-y-4">
          {/* Logo Preview */}
          {logoPreview ? (
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm">Current Logo</h4>
                <button
                  onClick={removeLogo}
                  className="text-red-600 hover:text-red-700"
                  title="Remove logo"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex justify-center p-4 bg-gray-100 rounded">
                <img 
                  src={logoPreview} 
                  alt="Site Logo" 
                  className="max-h-24 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {editedSettings.logoFileName || 'Uploaded logo'}
              </p>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
              <ImageIcon className="mx-auto text-gray-400 mb-2" size={48} />
              <p className="text-gray-600">No logo uploaded</p>
            </div>
          )}

          {/* Upload Button */}
          <div>
            <label className="flex items-center justify-center gap-2 px-6 py-3 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a] cursor-pointer transition-colors">
              <Upload size={20} />
              {uploadingLogo ? 'Uploading...' : logoPreview ? 'Change Logo' : 'Upload Logo'}
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
                disabled={uploadingLogo}
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">
              Recommended: PNG or SVG format, transparent background, max 2MB
            </p>
          </div>

          {/* Logo URL Alternative */}
          <div>
            <label className="block text-sm mb-2">Or enter logo URL directly</label>
            <input
              type="text"
              value={editedSettings.logoUrl || ''}
              onChange={(e) => {
                const url = e.target.value;
                setEditedSettings({
                  ...editedSettings,
                  logoUrl: url,
                });
                setLogoPreview(url);
              }}
              placeholder="https://example.com/logo.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Site Name */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <h3 className="text-xl mb-4">Site Information</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Site Name</label>
            <input
              type="text"
              value={editedSettings.siteName || 'Bharat Renewable Energy'}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                siteName: e.target.value,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Bharat Renewable Energy"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Site Tagline</label>
            <input
              type="text"
              value={editedSettings.siteTagline || ''}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                siteTagline: e.target.value,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Clean Energy for a Better Tomorrow"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <h3 className="text-xl mb-4">Contact Information</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={editedSettings.contactEmail || ''}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                contactEmail: e.target.value,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="info@bharatrenewable.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Phone</label>
            <input
              type="tel"
              value={editedSettings.contactPhone || ''}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                contactPhone: e.target.value,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="+91 1234567890"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Address</label>
            <textarea
              value={editedSettings.contactAddress || ''}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                contactAddress: e.target.value,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={3}
              placeholder="Chennai, Tamil Nadu, India"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-4 pt-4 border-t">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-8 py-3 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a] transition-colors"
        >
          <Save size={20} />
          Save Settings
        </button>
      </div>

      {/* Usage Instructions */}
      <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
        <h4 className="text-lg mb-2 text-blue-900">How to use your logo</h4>
        <div className="text-sm text-blue-800 space-y-2">
          <p>
            <strong>Method 1: Upload Logo File</strong><br />
            Click "Upload Logo" and select your logo image (PNG, SVG, or JPG).
            The logo will be stored in the database and automatically appear on your website.
          </p>
          <p>
            <strong>Method 2: Use Logo URL</strong><br />
            If your logo is already hosted online, paste the URL in the "Logo URL" field.
            This is recommended for better performance.
          </p>
          <p className="text-xs text-blue-700 mt-4">
            <strong>Note:</strong> After saving, refresh your website to see the new logo.
            The logo will appear in the navbar and footer automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
