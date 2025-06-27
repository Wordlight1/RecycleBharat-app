import React from 'react';
import { Leaf, Users, Target, Award, Heart, Globe } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Environmental Responsibility",
      description: "We're committed to reducing waste and promoting sustainable recycling practices across India."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Empowerment",
      description: "Creating employment opportunities while educating communities about waste management importance."
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Customer First",
      description: "Building trust through transparent pricing, reliable service, and exceptional customer support."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "National Impact",
      description: "Expanding our reach to make every corner of India cleaner and more sustainable."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Tons Recycled" },
    { number: "25+", label: "Cities Covered" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.1)), url('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-green-100/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">About Recyco Bharat</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform India's approach to waste management by making recycling 
              accessible, profitable, and environmentally responsible for every household.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-8 w-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Recyco Bharat was founded with a simple yet powerful vision: to make India cleaner 
                  by turning waste into valuable resources. We believe that every piece of scrap has 
                  the potential to contribute to a sustainable future.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through our doorstep collection service, we're not just collecting waste – we're 
                  building a movement that promotes environmental awareness, creates employment 
                  opportunities, and rewards responsible behavior.
                </p>
              </div>
            </div>
            
            <div 
              className="relative bg-green-600 rounded-2xl p-8 text-white overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.8), rgba(5, 150, 105, 0.8)), url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="relative space-y-6">
                <h3 className="text-2xl font-bold">Making a Difference</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-green-100">{stat.number}</div>
                      <div className="text-green-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and help us create lasting positive impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    {value.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-8 w-8 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since our inception, Recyco Bharat has been at the forefront of India's recycling revolution. 
              We've transformed the way people think about waste, turning it from a burden into an opportunity. 
              Our efforts have led to cleaner neighborhoods, reduced landfill waste, and increased awareness 
              about environmental responsibility.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              By providing fair compensation for recyclable materials and ensuring proper disposal channels, 
              we've created a sustainable ecosystem that benefits everyone involved – from individual households 
              to the environment we all share.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.9), rgba(5, 150, 105, 0.9)), url('https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Join Our Mission</h2>
            <p className="text-xl text-green-100">
              Be part of the change. Every pickup request helps us build a cleaner, more sustainable India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-pickup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Your Pickup
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}