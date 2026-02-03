// AboutUs.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  ShoppingCart, 
  Users, 
  Target, 
  Shield, 
  TrendingUp,
  Package,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  Globe
} from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const stats = [
    { value: '1000+', label: 'Businesses Trust Us', icon: Users },
    { value: '99.8%', label: 'System Uptime', icon: Shield },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '50+', label: 'Countries Served', icon: Globe }
  ];

  const services = [
    {
      icon: Package,
      title: 'Inventory Tracking',
      description: 'Manage sales quickly and accurately. Monitor transactions and product performance while keeping owners informed and staff focused.',
      features: ['Real-time stock updates', 'Barcode scanning', 'Multi-location tracking', 'Low stock alerts']
    },
    {
      icon: ShoppingCart,
      title: 'Sales Management',
      description: 'Track every product from arrival to sale with ease. Keep accurate stock levels, prevent shortages, and reduce losses for smooth business operations.',
      features: ['POS integration', 'Sales analytics', 'Customer management', 'Receipt generation']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Gain valuable insights with comprehensive reports. Make data-driven decisions to optimize your inventory and boost profitability.',
      features: ['Profit margin analysis', 'Sales trends', 'Inventory turnover', 'Custom reports']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'We believe businesses should spend less time struggling with stock issues and more time growing. Our goal is to provide reliable tools that solve real operational problems.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'We are a team of passionate professionals focused on helping businesses manage stock, sales, and daily operations with clarity and simplicity.'
    },
    {
      icon: TrendingUp,
      title: 'Our Impact',
      description: 'Empowering businesses worldwide with intelligent inventory solutions. Streamline operations, reduce costs, and grow with confidence.'
    }
  ];

  const steps = [
    { number: '01', title: 'Set Up Your Business', description: 'Owned sides products, prices, and stock. Staff accounts are created with sales-only access.' },
    { number: '02', title: 'Manage Stock', description: 'Record incoming stock. Track outgoing stock automatically during sales.' },
    { number: '03', title: 'Sell with Control', description: 'Staff sell products easily. Sales update inventory in real time.' },
    { number: '04', title: 'Monitor & Adjust', description: 'Owner reviews sales and stock levels. Adjust prices and stock quantities as needed.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-24 pb-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-800/30 px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Trusted by 1000+ Businesses</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Master Your <span className="text-blue-300">Inventory Flow</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                One System. One Team. Total Control. Streamline your inventory management with full control over stock movement.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                </button>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-white/5 rounded-xl">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-blue-500/20 rounded-full">
                            <Icon className="w-8 h-8 text-blue-300" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-blue-100 text-sm">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Fast, and Familiar Setup
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get started in minutes with our intuitive platform designed for businesses of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center text-blue-600 font-medium">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 group-hover:bg-blue-500 transition-colors duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Everything you need to manage your inventory efficiently
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose IMS?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're committed to transforming how businesses manage inventory
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions or ready to transform your inventory management? We're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">support@imssystem.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">123 Business Street, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">
                        Thank you! Your message has been sent successfully.
                      </span>
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Kindly provide your message or question in this description box."
                  />
                </div>
                
                <div className="text-sm text-gray-500">
                  <p>
                    By filling in the form, you agree to our Privacy Policy, including our cookie use.
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Package className="w-8 h-8 mr-2" />
                IMS
              </h3>
              <p className="text-gray-400 mb-6">
                Empowering businesses worldwide with intelligent inventory solutions. Streamline operations, reduce costs, and grow with confidence.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="font-bold">F</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                  <span className="font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="font-bold">In</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About us', 'Services', 'Contact', 'Help center', 'Pricing', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance', 'Security'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IMS Inventory Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;