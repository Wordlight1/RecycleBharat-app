import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Edit, Save, X, DollarSign } from 'lucide-react';

export default function ScrapRates() {
  const { scrapRates, updateScrapRate } = useAdmin();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    rate: ''
  });

  const startEdit = (rate: any) => {
    setEditingId(rate.id);
    setEditForm({
      name: rate.name,
      description: rate.description,
      rate: rate.rate
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', description: '', rate: '' });
  };

  const saveEdit = () => {
    if (editingId) {
      updateScrapRate(editingId, editForm);
      setEditingId(null);
      setEditForm({ name: '', description: '', rate: '' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Scrap Rates Management</h1>
        <div className="text-sm text-gray-500">
          Manage pricing for different scrap types
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Rate changes will be reflected on the website immediately. 
          Make sure to verify rates before saving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scrapRates.map((rate) => (
          <div key={rate.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            {editingId === rate.id ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Scrap Type Name
                  </label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rate
                  </label>
                  <input
                    type="text"
                    value={editForm.rate}
                    onChange={(e) => setEditForm({ ...editForm, rate: e.target.value })}
                    placeholder="e.g., ₹35-45/kg"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={saveEdit}
                    className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 flex items-center justify-center"
                  >
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="flex-1 bg-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400 flex items-center justify-center"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{rate.name}</h3>
                  <button
                    onClick={() => startEdit(rate)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">{rate.description}</p>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-bold text-green-600">{rate.rate}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-900 mb-2">Rate Setting Guidelines:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Keep rates competitive with local market prices</li>
          <li>• Use ranges (e.g., ₹35-45/kg) to account for quality variations</li>
          <li>• Update rates regularly based on market fluctuations</li>
          <li>• Consider transportation and processing costs</li>
        </ul>
      </div>
    </div>
  );
}