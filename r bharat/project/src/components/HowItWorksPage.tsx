import React from 'react';
import { 
  Smartphone, 
  MapPin, 
  Scale, 
  CreditCard, 
  CheckCircle, 
  Clock,
  MessageCircle,
  Star,
  ArrowRight
} from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: <Smartphone className="h-12 w-12 text-white" />,
      title: "Submit Pickup Request",
      description: "Fill out our simple form with your details, address, and type of scrap you want to sell.",
      details: [
        "Enter your contact information",
        "Specify your complete address",
        "Select scrap types from our list",
        "Choose your preferred pickup time"
      ]
    },
    {
      number: 2,
      icon: <MapPin className="h-12 w-12 text-white" />,
      title: "Team Arrives at Your Location",
      description: "Our verified collection executive reaches your doorstep at the scheduled time with proper equipment.",
      details: [
        "GPS-tracked team for your safety",
        "Professional digital weighing scale",
        "Proper collection bags and tools",
        "Advance notification before arrival"
      ]
    },
    {
      number: 3,
      icon: <Scale className="h-12 w-12 text-white" />,
      title: "Transparent Weighing Process",
      description: "We weigh your scrap in front of you using certified digital scales and calculate fair market rates.",
      details: [
        "Digital scale with clear display",
        "Current market rate calculation",
        "Quality assessment by expert",
        "Transparent pricing breakdown"
      ]
    },
    {
      number: 4,
      icon: <CreditCard className="h-12 w-12 text-white" />,
      title: "Instant Payment",
      description: "Get paid immediately through your preferred payment method - cash, UPI, or bank transfer.",
      details: [
        "Multiple payment options available",
        "Instant UPI or cash payment",
        "Digital receipt generation",
        "Bank transfer for large amounts"
      ]
    }
  ];

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Quick Process",
      description: "Entire process takes just 15-20 minutes"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "No Hidden Charges",
      description: "Completely free service with transparent pricing"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "Real-time Updates",
      description: "SMS and WhatsApp notifications throughout"
    },
    {
      icon: <Star className="h-8 w-8 text-green-600" />,
      title: "Quality Assured",
      description: "Professional handling and eco-friendly disposal"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum quantity required?",
      answer: "There is no minimum quantity requirement. We collect even small amounts of scrap."
    },
    {
      question: "How do you determine the rates?",
      answer: "Our rates are based on current market prices and are updated daily to ensure you get the best value."
    },
    {
      question: "Is there any charge for the pickup service?",
      answer: "No, our doorstep collection service is completely free. You only earn money from your scrap."
    },
    {
      question: "How quickly can you arrange a pickup?",
      answer: "We can arrange same-day pickup or schedule it according to your convenience."
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
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">How It Works</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get cash for your scrap in 4 simple steps. Our streamlined process makes 
              selling your recyclable waste easy and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div 
                    className="relative bg-green-600 rounded-2xl p-12 text-center overflow-hidden"
                    style={{
                      backgroundImage: index % 2 === 0 
                        ? `linear-gradient(rgba(5, 150, 105, 0.8), rgba(5, 150, 105, 0.8)), url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')`
                        : `linear-gradient(rgba(5, 150, 105, 0.8), rgba(5, 150, 105, 0.8)), url('https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="relative">
                      <div className="flex justify-center mb-6">{step.icon}</div>
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-4xl font-bold text-green-600 mb-2">Step {step.number}</div>
                        <div className="text-gray-700 font-semibold">{step.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            <h2 className="text-4xl font-bold text-gray-900">Process Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes our pickup process efficient and customer-friendly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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
            <h2 className="text-4xl font-bold text-white">Ready to Start Earning?</h2>
            <p className="text-xl text-green-100">
              Turn your waste into cash today with our simple 4-step process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-pickup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                Request Pickup Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}