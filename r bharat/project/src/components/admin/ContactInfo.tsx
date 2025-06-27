import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Edit, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  const { siteContent, updateSiteContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    contactPhone: siteContent.contactPhone,
    contactEmail: siteContent.contactEmail,
    whatsappNumber: siteContent.whatsappNumber
  });

  const handleSave = () => {
    updateSiteContent(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      contactPhone: siteContent.contactPhone,
      contactEmail: siteContent.contactEmail,
      whatsappNumber: siteContent.whatsappNumber
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Contact Information</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
          >
            <Edit className="h-4 w-4" />
            <span>Edit Contact Info</span>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Number */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
          </div>
          {isEditing ? (
            <input
              type="tel"
              value={formData.contactPhone}
              onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          ) : (
            <p className="text-xl font-mono text-gray-900">{siteContent.contactPhone}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            This number will be displayed on the website and used for call buttons.
          </p>
        </div>

        {/* Email Address */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Email Address</h3>
          </div>
          {isEditing ? (
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="info@recycobharat.com"
            />
          ) : (
            <p className="text-xl font-mono text-gray-900">{siteContent.contactEmail}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            This email will be used for contact forms and general inquiries.
          </p>
        </div>

        {/* WhatsApp Number */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">WhatsApp Number</h3>
          </div>
          {isEditing ? (
            <input
              type="tel"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          ) : (
            <p className="text-xl font-mono text-gray-900">{siteContent.whatsappNumber}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            This number will be used for WhatsApp buttons and quick contact.
          </p>
        </div>
      </div>

      {/* Usage Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-900 mb-4">Where This Information Appears</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Phone Number:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Header "Call Now" button</li>
              <li>• Contact page</li>
              <li>• Footer contact section</li>
              <li>• Emergency pickup buttons</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Email Address:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Contact forms</li>
              <li>• Footer contact section</li>
              <li>• About page</li>
              <li>• General inquiries</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-2">WhatsApp Number:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• WhatsApp quick contact buttons</li>
              <li>• Pickup request page</li>
              <li>• Contact page WhatsApp option</li>
              <li>• Emergency contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Test Links */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Test Contact Methods</h3>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${siteContent.contactPhone}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Phone className="h-4 w-4" />
            <span>Test Call</span>
          </a>
          <a
            href={`mailto:${siteContent.contactEmail}`}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
          >
            <Mail className="h-4 w-4" />
            <span>Test Email</span>
          </a>
          <a
            href={`https://wa.me/${siteContent.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Test WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}