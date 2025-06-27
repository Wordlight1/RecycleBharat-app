import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Shield, 
  Users, 
  Recycle,
  Phone,
  CheckCircle,
  Leaf,
  Truck,
  DollarSign
} from 'lucide-react';

export default function HomePage() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Instant Booking",
      description: "Schedule pickup in just 2 minutes through our simple process"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Eco-Friendly",
      description: "100% responsible disposal and recycling of all waste materials"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Support",
      description: "24/7 friendly support team ready to help with your queries"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Trusted Service",
      description: "Verified team members and transparent pricing for your peace of mind"
    }
  ];

  const features = [
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: "Free Doorstep Pickup",
      description: "No hidden charges, completely free collection from your location"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-white" />,
      title: "Fair Weight & Rate",
      description: "Transparent weighing process with competitive market rates"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-white" />,
      title: "Instant Payment",
      description: "Get paid immediately after successful pickup and verification"
    }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Turn Waste into{' '}
                  <span className="text-green-600">Worth</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Book a free scrap pickup from your home – we collect, recycle & reward.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 group shadow-lg"
                >
                  Request a Pickup Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Recycle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Quick Pickup</h3>
                    <p className="text-gray-600">Available 7 days a week</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Free collection service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Best market rates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Instant payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Recyco Bharat?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make waste collection simple, profitable, and environmentally responsible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            <h2 className="text-4xl font-bold text-white">Our Service Highlights</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Experience the best in doorstep scrap collection with our premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-green-700/80 backdrop-blur-sm rounded-xl p-8 text-center space-y-4 hover:bg-green-800/80 transition-colors duration-200">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Ready to Turn Your Waste into Cash?</h2>
            <p className="text-xl text-gray-600">
              Join thousands of happy customers who are earning while contributing to a cleaner environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 group shadow-lg"
              >
                Schedule Pickup Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200 bg-white/80 backdrop-blur-sm"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}