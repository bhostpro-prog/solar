import { useState } from 'react';
import { Save, ChevronDown, ChevronRight, Plus, Trash2 } from 'lucide-react';

interface PageEditorProps {
  page: any;
  onSave: (pageData: any) => void;
  onCancel: () => void;
}

export function PageEditor({ page, onSave, onCancel }: PageEditorProps) {
  const [editedPage, setEditedPage] = useState(page.value || page);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    hero: true,
    highlights: false,
    subsidy: false,
    financing: false,
    showcase: false,
    cta: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateField = (field: string, value: any) => {
    setEditedPage({ ...editedPage, [field]: value });
  };

  const updateHighlight = (index: number, field: string, value: any) => {
    const highlights = [...(editedPage.highlights || [])];
    highlights[index] = { ...highlights[index], [field]: value };
    setEditedPage({ ...editedPage, highlights });
  };

  const addHighlight = () => {
    const highlights = [...(editedPage.highlights || [])];
    highlights.push({
      icon: 'CheckCircle',
      title: '',
      description: '',
      color: '#228b22'
    });
    setEditedPage({ ...editedPage, highlights });
  };

  const removeHighlight = (index: number) => {
    const highlights = [...(editedPage.highlights || [])];
    highlights.splice(index, 1);
    setEditedPage({ ...editedPage, highlights });
  };

  const updateArrayField = (field: string, index: number, value: string) => {
    const array = [...(editedPage[field] || [])];
    array[index] = value;
    setEditedPage({ ...editedPage, [field]: array });
  };

  const addArrayItem = (field: string) => {
    const array = [...(editedPage[field] || []), ''];
    setEditedPage({ ...editedPage, [field]: array });
  };

  const removeArrayItem = (field: string, index: number) => {
    const array = [...(editedPage[field] || [])];
    array.splice(index, 1);
    setEditedPage({ ...editedPage, [field]: array });
  };

  const updateFinancingOption = (index: number, field: string, value: string) => {
    const options = [...(editedPage.financingOptions || [])];
    options[index] = { ...options[index], [field]: value };
    setEditedPage({ ...editedPage, financingOptions: options });
  };

  const SectionHeader = ({ title, sectionKey }: { title: string; sectionKey: string }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-lg mb-4 transition-colors"
    >
      <span className="text-lg">{title}</span>
      {expandedSections[sectionKey] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
    </button>
  );

  const isHomePage = page.key === 'page:home';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-2xl">Edit {editedPage.title || 'Page'}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => onSave(editedPage)}
            className="flex items-center gap-2 px-6 py-2 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a]"
          >
            <Save size={18} />
            Save Changes
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div>
        <SectionHeader title="Hero Section" sectionKey="hero" />
        {expandedSections.hero && (
          <div className="space-y-4 pl-4">
            <div>
              <label className="block text-sm mb-2">Hero Title</label>
              <textarea
                value={editedPage.heroTitle || ''}
                onChange={(e) => updateField('heroTitle', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Hero Subtitle</label>
              <textarea
                value={editedPage.heroSubtitle || ''}
                onChange={(e) => updateField('heroSubtitle', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Hero Image URL</label>
              <input
                type="text"
                value={editedPage.heroImage || ''}
                onChange={(e) => updateField('heroImage', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      {/* Highlights Section - Home Page Only */}
      {isHomePage && (
        <div>
          <SectionHeader title="Highlights Section" sectionKey="highlights" />
          {expandedSections.highlights && (
            <div className="space-y-4 pl-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Section Title Line 1</label>
                  <input
                    type="text"
                    value={editedPage.sectionTitle1 || ''}
                    onChange={(e) => updateField('sectionTitle1', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Section Title Line 2</label>
                  <input
                    type="text"
                    value={editedPage.sectionTitle2 || ''}
                    onChange={(e) => updateField('sectionTitle2', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md">Highlight Cards</h4>
                  <button
                    onClick={addHighlight}
                    className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                  >
                    <Plus size={16} />
                    Add Card
                  </button>
                </div>
                
                {(editedPage.highlights || []).map((highlight: any, index: number) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg mb-3">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm">Card {index + 1}</span>
                      <button
                        onClick={() => removeHighlight(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm mb-1">Icon Name</label>
                        <input
                          type="text"
                          value={highlight.icon || ''}
                          onChange={(e) => updateHighlight(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                          placeholder="e.g., CheckCircle, Zap, Sun"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Color</label>
                        <input
                          type="text"
                          value={highlight.color || ''}
                          onChange={(e) => updateHighlight(index, 'color', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                          placeholder="#228b22"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm mb-1">Title</label>
                      <input
                        type="text"
                        value={highlight.title || ''}
                        onChange={(e) => updateHighlight(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm mb-1">Description</label>
                      <textarea
                        value={highlight.description || ''}
                        onChange={(e) => updateHighlight(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subsidy Section - Home Page Only */}
      {isHomePage && (
        <div>
          <SectionHeader title="Subsidy & Schemes Section" sectionKey="subsidy" />
          {expandedSections.subsidy && (
            <div className="space-y-4 pl-4">
              <div>
                <label className="block text-sm mb-2">Section Title</label>
                <input
                  type="text"
                  value={editedPage.subsidyTitle || ''}
                  onChange={(e) => updateField('subsidyTitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="mb-3">Central Subsidy Card</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm mb-1">Title</label>
                    <input
                      type="text"
                      value={editedPage.centralSubsidyTitle || ''}
                      onChange={(e) => updateField('centralSubsidyTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Description</label>
                    <textarea
                      value={editedPage.centralSubsidyDescription || ''}
                      onChange={(e) => updateField('centralSubsidyDescription', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Benefits (one per line)</label>
                    {(editedPage.centralSubsidyBenefits || []).map((benefit: string, index: number) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={benefit}
                          onChange={(e) => updateArrayField('centralSubsidyBenefits', index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                        <button
                          onClick={() => removeArrayItem('centralSubsidyBenefits', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem('centralSubsidyBenefits')}
                      className="text-sm text-green-600 hover:text-green-800"
                    >
                      + Add Benefit
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Note</label>
                    <textarea
                      value={editedPage.centralSubsidyNote || ''}
                      onChange={(e) => updateField('centralSubsidyNote', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="mb-3">State Subsidy Card</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm mb-1">Title</label>
                    <input
                      type="text"
                      value={editedPage.stateSubsidyTitle || ''}
                      onChange={(e) => updateField('stateSubsidyTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Description</label>
                    <textarea
                      value={editedPage.stateSubsidyDescription || ''}
                      onChange={(e) => updateField('stateSubsidyDescription', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      rows={2}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm mb-1">Total Amount</label>
                      <input
                        type="text"
                        value={editedPage.stateSubsidyTotal || ''}
                        onChange={(e) => updateField('stateSubsidyTotal', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Total Note</label>
                      <input
                        type="text"
                        value={editedPage.stateSubsidyTotalNote || ''}
                        onChange={(e) => updateField('stateSubsidyTotalNote', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Eligibility Note</label>
                <textarea
                  value={editedPage.subsidyEligibility || ''}
                  onChange={(e) => updateField('subsidyEligibility', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Financing Section - Home Page Only */}
      {isHomePage && (
        <div>
          <SectionHeader title="Financing & ROI Section" sectionKey="financing" />
          {expandedSections.financing && (
            <div className="space-y-4 pl-4">
              <div>
                <label className="block text-sm mb-2">Section Title</label>
                <input
                  type="text"
                  value={editedPage.financingTitle || ''}
                  onChange={(e) => updateField('financingTitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <h4 className="mb-3">Financing Options</h4>
                {(editedPage.financingOptions || []).map((option: any, index: number) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg mb-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm mb-1">Title</label>
                        <input
                          type="text"
                          value={option.title || ''}
                          onChange={(e) => updateFinancingOption(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Description</label>
                        <input
                          type="text"
                          value={option.description || ''}
                          onChange={(e) => updateFinancingOption(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="mb-3">Residential ROI</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm mb-1">Title</label>
                      <input
                        type="text"
                        value={editedPage.residentialROITitle || ''}
                        onChange={(e) => updateField('residentialROITitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Benefits (one per line)</label>
                      {(editedPage.residentialROI?.benefits || []).map((benefit: string, index: number) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={benefit}
                            onChange={(e) => {
                              const benefits = [...(editedPage.residentialROI?.benefits || [])];
                              benefits[index] = e.target.value;
                              updateField('residentialROI', { ...editedPage.residentialROI, benefits });
                            }}
                            className="flex-1 px-3 py-1 border border-gray-300 rounded text-sm"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="mb-3">Commercial ROI</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm mb-1">Title</label>
                      <input
                        type="text"
                        value={editedPage.commercialROITitle || ''}
                        onChange={(e) => updateField('commercialROITitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Benefits (one per line)</label>
                      {(editedPage.commercialROI?.benefits || []).map((benefit: string, index: number) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={benefit}
                            onChange={(e) => {
                              const benefits = [...(editedPage.commercialROI?.benefits || [])];
                              benefits[index] = e.target.value;
                              updateField('commercialROI', { ...editedPage.commercialROI, benefits });
                            }}
                            className="flex-1 px-3 py-1 border border-gray-300 rounded text-sm"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Project Showcase - Home Page Only */}
      {isHomePage && (
        <div>
          <SectionHeader title="Project Showcase Section" sectionKey="showcase" />
          {expandedSections.showcase && (
            <div className="space-y-4 pl-4">
              <div>
                <label className="block text-sm mb-2">Section Title</label>
                <input
                  type="text"
                  value={editedPage.projectShowcaseTitle || ''}
                  onChange={(e) => updateField('projectShowcaseTitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Section Subtitle</label>
                <input
                  type="text"
                  value={editedPage.projectShowcaseSubtitle || ''}
                  onChange={(e) => updateField('projectShowcaseSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* CTA Section - Home Page Only */}
      {isHomePage && (
        <div>
          <SectionHeader title="Call to Action Section" sectionKey="cta" />
          {expandedSections.cta && (
            <div className="space-y-4 pl-4">
              <div>
                <label className="block text-sm mb-2">CTA Title</label>
                <input
                  type="text"
                  value={editedPage.ctaTitle || ''}
                  onChange={(e) => updateField('ctaTitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">CTA Subtitle</label>
                <textarea
                  value={editedPage.ctaSubtitle || ''}
                  onChange={(e) => updateField('ctaSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Button Text</label>
                <input
                  type="text"
                  value={editedPage.ctaButtonText || ''}
                  onChange={(e) => updateField('ctaButtonText', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* About Page Specific Fields */}
      {!isHomePage && (
        <div>
          <SectionHeader title="About Page Content" sectionKey="about" />
          {expandedSections.about && (
            <div className="space-y-4 pl-4">
              <div>
                <label className="block text-sm mb-2">Mission</label>
                <textarea
                  value={editedPage.mission || ''}
                  onChange={(e) => updateField('mission', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Description</label>
                <textarea
                  value={editedPage.description || ''}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={4}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Save Button at Bottom */}
      <div className="flex justify-end gap-2 pt-6 border-t sticky bottom-0 bg-white py-4">
        <button
          onClick={() => onSave(editedPage)}
          className="flex items-center gap-2 px-8 py-3 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a] shadow-lg"
        >
          <Save size={20} />
          Save All Changes
        </button>
        <button
          onClick={onCancel}
          className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
