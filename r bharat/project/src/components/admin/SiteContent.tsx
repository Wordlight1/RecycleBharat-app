import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Edit, FileText } from 'lucide-react';

export default function SiteContent() {
  const { siteContent, updateSiteContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(siteContent);

  const handleSave = () => {
    updateSiteContent(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(siteContent);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Site Content Management</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
          >
            <Edit className="h-4 w-4" />
            <span>Edit Content</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Hero Section
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Title
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.heroTitle}
                    onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{siteContent.heroTitle}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Subtitle
                </label>
                {isEditing ? (
                  <textarea
                    value={formData.heroSubtitle}
                    onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{siteContent.heroSubtitle}</p>
                )}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">About Section</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About Description
              </label>
              {isEditing ? (
                <textarea
                  value={formData.aboutDescription}
                  onChange={(e) => setFormData({ ...formData, aboutDescription: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{siteContent.aboutDescription}</p>
              )}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Preview:</h3>
            <div className="space-y-2">
              <div className="bg-white p-4 rounded-md">
                <h2 className="text-2xl font-bold text-gray-900">{formData.heroTitle}</h2>
                <p className="text-gray-600 mt-2">{formData.heroSubtitle}</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About Us</h3>
                <p className="text-gray-600">{formData.aboutDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Changes to site content will be reflected on the live website immediately after saving.
          Make sure to review your changes before saving.
        </p>
      </div>
    </div>
  );
}