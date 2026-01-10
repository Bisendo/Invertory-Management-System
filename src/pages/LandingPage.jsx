// InventoryManagementLanding.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useTranslation } from '../Context/TranslationContext'; // Import translation context
import logo from '../assets/logo.jpg';
import { 
  BarChart3, 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  Users, 
  Package, 
  Smartphone,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Lock,
  RefreshCw,
  Database,
  Headphones,
  FileText,
  Award,
  Target,
  Clock,
  BarChart,
  ShoppingCart,
  Truck,
  PieChart,
  ChevronRight
} from 'lucide-react';

const InventoryManagementLanding = () => {
  const { t } = useTranslation(); // Get translation function
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const features = [
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: t('featureRealTimeAnalytics') || "Real-Time Analytics",
      description: t('featureRealTimeAnalyticsDesc') || "Monitor stock levels, sales trends, and inventory turnover with live dashboards.",
      color: "from-blue-500 to-blue-600",
      stats: t('featureRealTimeAnalyticsStat') || "+89% efficiency"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: t('featureCloudPlatform') || "Cloud-Based Platform",
      description: t('featureCloudPlatformDesc') || "Access your inventory from anywhere, on any device. Real-time synchronization.",
      color: "from-purple-500 to-purple-600",
      stats: t('featureCloudPlatformStat') || "Anywhere access"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: t('featureEnterpriseSecurity') || "Enterprise Security",
      description: t('featureEnterpriseSecurityDesc') || "Bank-level security with 99.9% uptime guarantee and automated backups.",
      color: "from-green-500 to-green-600",
      stats: t('featureEnterpriseSecurityStat') || "99.9% uptime"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: t('featureSmartAutomation') || "Smart Automation",
      description: t('featureSmartAutomationDesc') || "AI-powered reorder points and predictive inventory management.",
      color: "from-yellow-500 to-orange-500",
      stats: t('featureSmartAutomationStat') || "40% time saved"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: t('featureTeamCollaboration') || "Team Collaboration",
      description: t('featureTeamCollaborationDesc') || "Role-based permissions and real-time team collaboration tools.",
      color: "from-pink-500 to-rose-500",
      stats: t('featureTeamCollaborationStat') || "Unlimited users"
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: t('featureBarcodeSystem') || "Barcode System",
      description: t('featureBarcodeSystemDesc') || "Mobile barcode scanning and RFID integration capabilities.",
      color: "from-indigo-500 to-purple-500",
      stats: t('featureBarcodeSystemStat') || "5x faster counts"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Retail Dynamics Inc.",
      role: t('testimonialRole1') || "Operations Director",
      text: t('testimonialText1') || "Invertory management system reduced our inventory costs by 40% and saved over 15 hours weekly on manual tracking. The predictive analytics are incredibly accurate.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "TechGear Warehouse",
      role: t('testimonialRole2') || "Inventory Manager",
      text: t('testimonialText2') || "The real-time alerts prevented stockouts during peak season. Our fulfillment accuracy improved from 92% to 99.7% in just 3 months.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Elena Rodriguez",
      company: "Boutique Fashion Co.",
      role: t('testimonialRole3') || "CEO",
      text: t('testimonialText3') || "Intuitive interface with powerful reporting. Our team adopted it in one day and our inventory accuracy is now at 99.9%.",
      rating: 4,
      avatar: "ER"
    }
  ];

  const pricingPlans = [
    {
      name: t('planStarter') || "Starter",
      price: "$29",
      period: t('perMonth') || "/month",
      description: t('planStarterDesc') || "Perfect for small businesses",
      popular: false,
      features: [
        { text: t('featureUpTo500Products') || "Up to 500 products", included: true },
        { text: t('feature2UserAccounts') || "2 user accounts", included: true },
        { text: t('featureBasicReporting') || "Basic reporting", included: true },
        { text: t('featureEmailSupport') || "Email support", included: true },
        { text: t('featureMobileAppAccess') || "Mobile app access", included: true },
        { text: t('featureBarcodeScanning') || "Barcode scanning", included: false },
        { text: t('featureAPIAccess') || "API access", included: false }
      ]
    },
    {
      name: t('planProfessional') || "Professional",
      price: "$79",
      period: t('perMonth') || "/month",
      description: t('planProfessionalDesc') || "For growing businesses",
      popular: true,
      features: [
        { text: t('featureUpTo5000Products') || "Up to 5,000 products", included: true },
        { text: t('feature10UserAccounts') || "10 user accounts", included: true },
        { text: t('featureAdvancedAnalytics') || "Advanced analytics", included: true },
        { text: t('featurePrioritySupport') || "Priority support", included: true },
        { text: t('featureBarcodeScanning') || "Barcode scanning", included: true },
        { text: t('featureAPIAccess') || "API access", included: true },
        { text: t('featureCustomReports') || "Custom reports", included: true }
      ]
    },
    {
      name: t('planEnterprise') || "Enterprise",
      price: t('customPrice') || "Custom",
      period: t('tailored') || "/tailored",
      description: t('planEnterpriseDesc') || "For large organizations",
      popular: false,
      features: [
        { text: t('featureUnlimitedProducts') || "Unlimited products", included: true },
        { text: t('featureUnlimitedUsers') || "Unlimited users", included: true },
        { text: t('featureCustomReporting') || "Custom reporting", included: true },
        { text: t('feature247PhoneSupport') || "24/7 phone support", included: true },
        { text: t('featureCustomIntegrations') || "Custom integrations", included: true },
        { text: t('featureDedicatedAccountManager') || "Dedicated account manager", included: true },
        { text: t('featureOnPremiseDeployment') || "On-premise deployment", included: true }
      ]
    }
  ];

  const stats = [
    { value: "99.9%", label: t('statUptime') || "System Uptime", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "2,500+", label: t('statBusinesses') || "Businesses Trust", icon: <Users className="w-6 h-6" /> },
    { value: "40%", label: t('statCostReduction') || "Avg Cost Reduction", icon: <PieChart className="w-6 h-6" /> },
    { value: "15 hrs", label: t('statTimeSaved') || "Weekly Time Saved", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                {t('trustedByBusinesses') || "Trusted by 2,500+ businesses worldwide"}
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('heroTitle1') || "Master Your"}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {t('heroTitle2') || "Inventory Flow"}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                {t('heroDescription') || "Streamline your inventory management with AI-powered insights. Reduce costs by up to 40%, eliminate stockouts, and make data-driven decisions with real-time analytics."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  {t('startFreeTrial') || "Start Free 14-Day Trial"}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
                  <Play className="w-5 h-5 mr-3" />
                  {t('watchProductTour') || "Watch Product Tour"}
                </button>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center text-white font-bold text-xl">
                      {i === 5 ? '+12' : 'U'}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 font-bold text-gray-800">4.9/5</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t('ratedByBusinesses') || "Rated by 1,200+ businesses"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-1 border border-gray-100">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {t('inventoryDashboard') || "Inventory Dashboard"}
                      </h3>
                      <p className="text-gray-600">
                        {t('realTimeOverview') || "Real-time overview"}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-100">
                      <p className="text-sm text-blue-600 font-medium mb-1">
                        {t('totalProducts') || "Total Products"}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">1,248</p>
                      <p className="text-xs text-blue-600 mt-2">
                        {t('growthFromLastMonth') || "↗︎ 12% from last month"}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-100">
                      <p className="text-sm text-green-600 font-medium mb-1">
                        {t('inStock') || "In Stock"}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">892</p>
                      <p className="text-xs text-green-600 mt-2">
                        {t('growthFromLastMonth') || "↗︎ 8% from last month"}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-xl border border-yellow-100">
                      <p className="text-sm text-yellow-600 font-medium mb-1">
                        {t('lowStock') || "Low Stock"}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">47</p>
                      <div className="flex items-center mt-2">
                        <div className="w-full bg-yellow-200 rounded-full h-1.5">
                          <div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-xl border border-red-100">
                      <p className="text-sm text-red-600 font-medium mb-1">
                        {t('outOfStock') || "Out of Stock"}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">12</p>
                      <p className="text-xs text-red-600 mt-2">
                        {t('decreaseFromLastMonth') || "↘︎ 5% from last month"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-bold text-gray-800">
                        {t('topSellingProducts') || "Top Selling Products"}
                      </h4>
                      <button className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                        {t('viewAll') || "View All"}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      {[t('product1') || 'Wireless Headphones Pro', t('product2') || 'USB-C Fast Charger', t('product3') || 'Ergonomic Laptop Stand'].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mr-3">
                              <Package className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{item}</p>
                              <p className="text-sm text-gray-600">
                                SKU: {index === 0 ? 'WH-PRO-2024' : index === 1 ? 'USB-C-65W' : 'ELS-01'}
                              </p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                            {index === 0 ? t('sold126') || '126 sold' : index === 1 ? t('sold89') || '89 sold' : t('sold54') || '54 sold'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden lg:block animate-float">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {t('lowStockAlert') || "Low Stock Alert"}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t('itemsNeedReordering') || "5 items need reordering"}
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">
                        {t('liveUpdate') || "Live update"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-2xl shadow-xl text-white hidden lg:block animate-float-delayed">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold">
                      {t('aiPrediction') || "AI Prediction"}
                    </p>
                    <p className="text-blue-100 text-sm">
                      {t('nextRestock') || "Next restock: 3 days"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                    <div className="text-blue-400">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              {t('powerfulFeatures') || "POWERFUL FEATURES"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('featuresTitle1') || "Everything You Need for"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t('featuresTitle2') || "Modern Inventory Management"}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('featuresDescription') || "From AI-powered predictions to real-time collaboration, our platform delivers everything you need to optimize your inventory operations."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${feature.color} inline-flex`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 font-medium">
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              {t('simplePricing') || "SIMPLE PRICING"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('chooseYourPlan') || "Choose Your Perfect Plan"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pricingDescription') || "All plans include a 14-day free trial. No credit card required to start."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative ${plan.popular ? 'md:-translate-y-4' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                      {t('mostPopular') || "Most Popular"}
                    </div>
                  </div>
                )}
                
                <div className={`bg-white rounded-2xl shadow-xl border-2 ${plan.popular ? 'border-blue-500' : 'border-gray-100'} overflow-hidden h-full`}>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-8">{plan.description}</p>
                    
                    <div className="mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center py-3 border-b border-gray-100 last:border-0">
                          {feature.included ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0"></div>
                          )}
                          <span className={`${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-2xl hover:shadow-blue-500/30' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}>
                      {t('startFreeTrial') || "Start Free Trial"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              {t('needCustomSolution') || "Need a custom solution?"}{' '}
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">
                {t('contactSalesTeam') || "Contact our sales team →"}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-600 font-medium mb-4">
              <Star className="w-4 h-4 mr-2 fill-current" />
              {t('trustedByIndustryLeaders') || "TRUSTED BY INDUSTRY LEADERS"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('lovedByBusinesses') || "Loved by Thousands of Businesses"}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t('verifiedCustomer') || "Verified customer"} • {t('monthsUsingStockMaster') || "6 months using Invertory management system"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium mb-8">
              <Zap className="w-5 h-5 mr-2" />
              {t('freeTrialNoCreditCard') || "14-DAY FREE TRIAL • NO CREDIT CARD REQUIRED"}
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {t('ctaTitle1') || "Ready to Transform Your"}
              <span className="block">{t('ctaTitle2') || "Inventory Management?"}</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('ctaDescription') || "Join 2,500+ businesses that have streamlined their operations, reduced costs, and eliminated stockouts with Invertory management system."}
            </p>
            
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('enterWorkEmail') || "Enter your work email"}
                    className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="group bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center justify-center min-w-[200px]"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {t('thankYou') || "Thank You!"}
                    </>
                  ) : (
                    <>
                      {t('startFreeTrial') || "Start Free Trial"}
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
              <p className="text-blue-200 text-sm mt-6">
                {t('instantAccess') || "Get instant access. No setup fees. Cancel anytime."}
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Lock className="w-6 h-6" />, text: t('bankLevelSecurity') || "Bank-level Security" },
                { icon: <RefreshCw className="w-6 h-6" />, text: t('freeUpdates') || "Free Updates" },
                { icon: <Headphones className="w-6 h-6" />, text: t('support247') || "24/7 Support" },
                { icon: <Database className="w-6 h-6" />, text: t('dataOwnership') || "Data Ownership" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <p className="text-white font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <img src={logo} alt="IMS Logo" className='h-12 w-12 rounded' />
                </div>
                <div>
                  <span className="text-2xl font-bold">Invertory management system</span>
                  <p className="text-gray-400 text-sm">
                    {t('powerfulInventoryManagement') || "Powerful inventory management"}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                {t('footerDescription') || "Empowering businesses worldwide with intelligent inventory solutions. Streamline operations, reduce costs, and grow with confidence."}
              </p>
              <div className="flex space-x-4 mt-8">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: t('product') || "Product",
                links: [
                  t('features') || "Features", 
                  t('pricing') || "Pricing", 
                  t('api') || "API", 
                  t('documentation') || "Documentation", 
                  t('changelog') || "Changelog", 
                  t('status') || "Status"
                ]
              },
              {
                title: t('company') || "Company",
                links: [
                  t('aboutUs') || "About Us", 
                  t('careers') || "Careers", 
                  t('blog') || "Blog", 
                  t('press') || "Press", 
                  t('partners') || "Partners", 
                  t('contact') || "Contact"
                ]
              },
              {
                title: t('resources') || "Resources",
                links: [
                  t('helpCenter') || "Help Center", 
                  t('community') || "Community", 
                  t('tutorials') || "Tutorials", 
                  t('webinars') || "Webinars", 
                  t('templates') || "Templates", 
                  t('caseStudies') || "Case Studies"
                ]
              }
            ].map((column, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold mb-6">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="mb-4">
              &copy; {new Date().getFullYear()} Invertory Management System. {t('allRightsReserved') || "All rights reserved."}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300">
                {t('privacyPolicy') || "Privacy Policy"}
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                {t('termsOfService') || "Terms of Service"}
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                {t('cookiePolicy') || "Cookie Policy"}
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                {t('gdprCompliance') || "GDPR Compliance"}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add this to your global CSS
const Play = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default InventoryManagementLanding;