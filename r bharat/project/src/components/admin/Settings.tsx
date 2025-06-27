import React from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { User, Shield, Bell, Database, Download, Upload } from 'lucide-react';

export default function Settings() {
  const { user, logout } = useAdmin();

  const handleExportData = () => {
    // In a real app, this would export all data
    alert('Data export functionality would be implemented here');
  };

  const handleImportData = () => {
    // In a real app, this would allow importing data
    alert('Data import functionality would be implemented here');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Account Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="text-gray-900">{user?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="text-gray-900">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <p className="text-gray-900 capitalize">{user?.role}</p>
            </div>
            <button
              onClick={logout}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Security</h3>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              Change Password
            </button>
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              Two-Factor Authentication
            </button>
            <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              Login History
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Bell className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">New pickup requests</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Team member updates</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">System alerts</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Email notifications</span>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Database className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Data Management</h3>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleExportData}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Export Data</span>
            </button>
            <button
              onClick={handleImportData}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center space-x-2"
            >
              <Upload className="h-4 w-4" />
              <span>Import Data</span>
            </button>
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Clear All Data
            </button>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Version</label>
            <p className="text-gray-900">1.0.0</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Updated</label>
            <p className="text-gray-900">{new Date().toLocaleDateString('en-IN')}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Environment</label>
            <p className="text-gray-900">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
}