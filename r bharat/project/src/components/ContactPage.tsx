import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  Headphones,
  Shield,
  Award,
  Users
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-green-600" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+91 98765 43210",
      action: "tel:+919876543210",
      available: "Available 24/7"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "WhatsApp",
      description: "Quick response via WhatsApp",
      contact: "+91 98765 43210",
      action: "https://wa.me/919876543210",
      available: "Instant messaging"
    },
    {
      icon: <Mail className="h-8 w-8 text-green-600" />,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "info@recycobharat.com",
      action: "mailto:info@recycobharat.com",
      available: "Response within 24 hours"
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Visit Us",
      description: "Come to our office",
      contact: "Mumbai, Maharashtra",
      action: "#",
      available: "Mon-Sat, 9 AM - 6 PM"
    }
  ];

  const serviceAreas = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune",
    "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Kanpur"
  ];

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      number: "10,000+",
      label: "Happy Customers"
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      number: "99%",
      label: "Satisfaction Rate"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      number: "24/7",
      label: "Support Available"
    },
    {
      icon: <Headphones className="h-6 w-6 text-green-600" />,
      number: "<2min",
      label: "Average Response"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = "Hi! I have a question about Recyco Bharat services.";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services? Need immediate pickup? 
              We're here to help with all your waste collection needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to contact us. We're available through multiple channels for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.available}</p>
                </div>
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Contact Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="pickup-request">Pickup Request</option>
                      <option value="pricing-inquiry">Pricing Inquiry</option>
                      <option value="service-area">Service Area Question</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Please describe your inquiry or request in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Emergency Pickup:</strong> Available 24/7 for urgent requests
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Areas</h3>
                <p className="text-gray-600 mb-4">We currently serve these major cities:</p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((city, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Don't see your city? Contact us - we're expanding rapidly!
                </p>
              </div>

              {/* Quick Action */}
              <div className="bg-green-600 rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Pickup?</h3>
                <p className="text-green-100 mb-6">
                  For urgent pickup requests, contact us directly via phone or WhatsApp for fastest response.
                </p>
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-white text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Now</span>
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}