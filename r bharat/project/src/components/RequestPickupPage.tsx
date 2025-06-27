import React, { useState } from 'react';
import { Calendar, Clock, Phone, MessageCircle, Upload, MapPin, User, Package } from 'lucide-react';

export default function RequestPickupPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    scrapType: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const scrapTypes = [
    'Iron & Steel',
    'Plastic Bottles',
    'Paper & Cardboard',
    'Electronics',
    'Copper & Brass',
    'Aluminum',
    'Glass Bottles',
    'Mixed Scrap'
  ];

  const timeSlots = [
    '9:00 AM - 12:00 PM',
    '12:00 PM - 3:00 PM',
    '3:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Pickup request submitted successfully! We will contact you soon.');
  };

  const handleWhatsApp = () => {
    const message = `Hi! I would like to request a scrap pickup.
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
Scrap Type: ${formData.scrapType}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-green-50 to-green-100 py-16 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.1)), url('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-green-100/90"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request Pickup</h1>
          <p className="text-xl text-gray-700">
            Fill out the form below and we'll schedule a convenient pickup time for your scrap
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Options */}
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Us</span>
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="w-full flex items-center justify-center space-x-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              <div 
                className="relative bg-gray-50 p-6 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Our Service?</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Free doorstep collection</li>
                    <li>• Best market rates guaranteed</li>
                    <li>• Instant payment on pickup</li>
                    <li>• Professional handling</li>
                    <li>• Eco-friendly disposal</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Complete Address *</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="House/Flat No, Street, Area, Landmark"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>City *</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Mumbai, Delhi, Bangalore, etc."
                  />
                </div>

                <div>
                  <label htmlFor="scrapType" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Package className="h-4 w-4" />
                    <span>Type of Scrap *</span>
                  </label>
                  <select
                    id="scrapType"
                    name="scrapType"
                    required
                    value={formData.scrapType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select scrap type</option>
                    {scrapTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>Preferred Time *</span>
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="image" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Upload className="h-4 w-4" />
                    <span>Upload Image (Optional)</span>
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {selectedImage && (
                    <p className="text-sm text-green-600 mt-2">Image selected: {selectedImage.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="text-sm font-medium text-gray-700 mb-2 block">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any special instructions or additional information..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Submit Pickup Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}