import React from 'react';
import { Truck, Scale, CreditCard, Shield, CheckCircle, Phone, Smartphone, Monitor, Newspaper, Car, Bot as Bottle, Battery, HardDrive } from 'lucide-react';

export default function ServicesPage() {
  const scrapTypes = [
    {
      icon: <Car className="h-8 w-8 text-green-600" />,
      name: "Iron & Steel",
      description: "Old furniture, gates, utensils, and metal scraps",
      rate: "₹35-45/kg"
    },
    {
      icon: <Bottle className="h-8 w-8 text-green-600" />,
      name: "Plastic Bottles",
      description: "Water bottles, containers, and plastic waste",
      rate: "₹12-18/kg"
    },
    {
      icon: <Newspaper className="h-8 w-8 text-green-600" />,
      name: "Paper & Cardboard",
      description: "Newspapers, books, magazines, and cardboard boxes",
      rate: "₹8-15/kg"
    },
    {
      icon: <Monitor className="h-8 w-8 text-green-600" />,
      name: "Electronics",
      description: "Old phones, laptops, TVs, and electronic gadgets",
      rate: "₹50-200/kg"
    },
    {
      icon: <HardDrive className="h-8 w-8 text-green-600" />,
      name: "Copper & Brass",
      description: "Wires, pipes, and copper/brass items",
      rate: "₹400-600/kg"
    },
    {
      icon: <Battery className="h-8 w-8 text-green-600" />,
      name: "Aluminum",
      description: "Cans, foils, and aluminum household items",
      rate: "₹80-120/kg"
    },
    {
      icon: <Bottle className="h-8 w-8 text-green-600" />,
      name: "Glass Bottles",
      description: "Wine bottles, jars, and glass containers",
      rate: "₹3-8/kg"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      name: "Mixed Scrap",
      description: "Combination of various recyclable materials",
      rate: "Market Rate"
    }
  ];

  const serviceFeatures = [
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: "Free Doorstep Collection",
      description: "We come to your location at your preferred time - completely free of charge"
    },
    {
      icon: <Scale className="h-12 w-12 text-white" />,
      title: "Transparent Weighing",
      description: "Digital weighing scales with clear display - you see exactly what you're getting"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-white" />,
      title: "Instant Payment",
      description: "Get paid immediately after pickup via cash, UPI, or bank transfer"
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: "Verified Team",
      description: "All our collection executives are background verified and trained"
    }
  ];

  const benefits = [
    "No minimum quantity required",
    "Best market rates guaranteed",
    "Professional handling of all materials",
    "Eco-friendly disposal and recycling",
    "Door-to-door convenience",
    "Same-day pickup available"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.1)), url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-green-100/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We collect all types of recyclable waste from your doorstep and ensure 
              they're processed responsibly while giving you the best market rates.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.9), rgba(5, 150, 105, 0.9)), url('https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Why Choose Our Services?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Professional, reliable, and environmentally responsible waste collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-green-700/80 backdrop-blur-sm rounded-xl p-8 text-center space-y-4 hover:bg-green-800/80 transition-colors duration-200">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrap Types */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What We Collect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept a wide variety of recyclable materials with competitive rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scrapTypes.map((scrap, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    {scrap.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{scrap.name}</h3>
                    <p className="text-sm text-gray-600">{scrap.description}</p>
                    <p className="text-lg font-bold text-green-600">{scrap.rate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Service Benefits</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience hassle-free waste disposal with our comprehensive doorstep collection service. 
                We make recycling profitable and convenient for you.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
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
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-green-100">
                  Join thousands of satisfied customers who are earning money while 
                  contributing to a cleaner environment.
                </p>
                <div className="space-y-4">
                  <a
                    href="/request-pickup"
                    className="block w-full text-center bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Request Pickup Now
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center space-x-2 w-full border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call for Instant Pickup</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-yellow-800">
            <strong>Note:</strong> Rates may vary based on market conditions and material quality. 
            Our team will provide exact rates during pickup based on current market prices.
          </p>
        </div>
      </section>
    </div>
  );
}