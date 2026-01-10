// InventoryManagementLanding.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useTranslation } from '../Context/TranslationContext';
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
  ChevronRight,
  Play
} from 'lucide-react';

const InventoryManagementLanding = () => {
  const { t } = useTranslation();
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
      icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" />,
      title: t('featureRealTimeAnalytics') || "Real-Time Analytics",
      description: t('featureRealTimeAnalyticsDesc') || "Monitor stock levels, sales trends, and inventory turnover with live dashboards.",
      color: "from-blue-500 to-blue-600",
      stats: t('featureRealTimeAnalyticsStat') || "+89% efficiency"
    },
    {
      icon: <Cloud className="w-8 h-8 md:w-10 md:h-10" />,
      title: t('featureCloudPlatform') || "Cloud-Based Platform",
      description: t('featureCloudPlatformDesc') || "Access your inventory from anywhere, on any device. Real-time synchronization.",
      color: "from-purple-500 to-purple-600",
      stats: t('featureCloudPlatformStat') || "Anywhere access"
    },
    {
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
      title: t('featureEnterpriseSecurity') || "Enterprise Security",
      description: t('featureEnterpriseSecurityDesc') || "Bank-level security with 99.9% uptime guarantee and automated backups.",
      color: "from-green-500 to-green-600",
      stats: t('featureEnterpriseSecurityStat') || "99.9% uptime"
    },
    {
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
      title: t('featureSmartAutomation') || "Smart Automation",
      description: t('featureSmartAutomationDesc') || "AI-powered reorder points and predictive inventory management.",
      color: "from-yellow-500 to-orange-500",
      stats: t('featureSmartAutomationStat') || "40% time saved"
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      title: t('featureTeamCollaboration') || "Team Collaboration",
      description: t('featureTeamCollaborationDesc') || "Role-based permissions and real-time team collaboration tools.",
      color: "from-pink-500 to-rose-500",
      stats: t('featureTeamCollaborationStat') || "Unlimited users"
    },
    {
      icon: <Package className="w-8 h-8 md:w-10 md:h-10" />,
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
      text: t('testimonialText1') || "Inventory management system reduced our inventory costs by 40% and saved over 15 hours weekly on manual tracking. The predictive analytics are incredibly accurate.",
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
    { value: "99.9%", label: t('statUptime') || "System Uptime", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: "2,500+", label: t('statBusinesses') || "Businesses Trust", icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: "40%", label: t('statCostReduction') || "Avg Cost Reduction", icon: <PieChart className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: "15 hrs", label: t('statTimeSaved') || "Weekly Time Saved", icon: <Clock className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full translate-y-1/3 -translate-x-1/3 opacity-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm md:text-base mb-4 md:mb-6">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 flex-shrink-0" />
                <span className="truncate">{t('trustedByBusinesses') || "Trusted by 2,500+ businesses worldwide"}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                <span className="block">{t('heroTitle1') || "Master Your"}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {t('heroTitle2') || "Inventory Flow"}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                {t('heroDescription') || "Streamline your inventory management with AI-powered insights. Reduce costs by up to 40%, eliminate stockouts, and make data-driven decisions with real-time analytics."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:shadow-xl md:hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 md:hover:-translate-y-1 flex items-center justify-center text-sm md:text-base">
                  {t('startFreeTrial') || "Start Free 14-Day Trial"}
                  <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                </button>
                <button className="group border border-gray-300 md:border-2 text-gray-700 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center text-sm md:text-base">
                  <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0" />
                  {t('watchProductTour') || "Watch Product Tour"}
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8">
                <div className="flex -space-x-2 md:-space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 md:border-4 border-white bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center text-white font-bold text-sm md:text-base lg:text-lg"
                    >
                      {i === 5 ? '+12' : 'U'}
                    </div>
                  ))}
                </div>
                <div className="sm:ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-1.5 md:ml-2 font-bold text-gray-800 text-sm md:text-base">4.9/5</span>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mt-0.5">
                    {t('ratedByBusinesses') || "Rated by 1,200+ businesses"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative mt-8 md:mt-0">
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-2xl p-1 border border-gray-100">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6">
                  <div className="flex justify-between items-center mb-4 md:mb-8">
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                        {t('inventoryDashboard') || "Inventory Dashboard"}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {t('realTimeOverview') || "Real-time overview"}
                      </p>
                    </div>
                    <div className="flex space-x-1 md:space-x-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8">
                    {[
                      { 
                        label: t('totalProducts') || "Total Products", 
                        value: "1,248", 
                        color: "blue",
                        trend: "↗︎ 12%"
                      },
                      { 
                        label: t('inStock') || "In Stock", 
                        value: "892", 
                        color: "green",
                        trend: "↗︎ 8%"
                      },
                      { 
                        label: t('lowStock') || "Low Stock", 
                        value: "47", 
                        color: "yellow",
                        showBar: true
                      },
                      { 
                        label: t('outOfStock') || "Out of Stock", 
                        value: "12", 
                        color: "red",
                        trend: "↘︎ 5%"
                      }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl border border-${stat.color}-100`}
                      >
                        <p className={`text-xs md:text-sm text-${stat.color}-600 font-medium mb-1`}>
                          {stat.label}
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                        {stat.showBar ? (
                          <div className="flex items-center mt-1 md:mt-2">
                            <div className="w-full bg-yellow-200 rounded-full h-1 md:h-1.5">
                              <div className="bg-yellow-500 h-1 md:h-1.5 rounded-full" style={{width: '60%'}}></div>
                            </div>
                          </div>
                        ) : (
                          <p className={`text-xs text-${stat.color}-600 mt-1 md:mt-2`}>
                            {stat.trend} {t('fromLastMonth') || "from last month"}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-3 md:pt-6">
                    <div className="flex justify-between items-center mb-2 md:mb-4">
                      <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-800">
                        {t('topSellingProducts') || "Top Selling Products"}
                      </h4>
                      <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 text-sm md:text-base">
                        {t('viewAll') || "View All"}
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 flex-shrink-0" />
                      </button>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {[
                        { name: t('product1') || 'Wireless Headphones Pro', sku: 'WH-PRO-2024', sold: t('sold126') || '126 sold' },
                        { name: t('product2') || 'USB-C Fast Charger', sku: 'USB-C-65W', sold: t('sold89') || '89 sold' },
                        { name: t('product3') || 'Ergonomic Laptop Stand', sku: 'ELS-01', sold: t('sold54') || '54 sold' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 md:p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                          <div className="flex items-center min-w-0">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                              <Package className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-gray-900 text-sm md:text-base truncate">{item.name}</p>
                              <p className="text-gray-600 text-xs md:text-sm truncate">SKU: {item.sku}</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-xs md:text-sm font-medium flex-shrink-0 ml-2">
                            {item.sold}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Hidden on mobile, shown on desktop */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100 hidden sm:block animate-float">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg md:rounded-xl flex items-center justify-center mr-2 md:mr-3 lg:mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-sm md:text-base lg:text-lg truncate">
                      {t('lowStockAlert') || "Low Stock Alert"}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm truncate">
                      {t('itemsNeedReordering') || "5 items need reordering"}
                    </p>
                    <div className="flex items-center mt-0.5">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1 md:mr-2 animate-pulse flex-shrink-0"></div>
                      <span className="text-xs text-green-600 font-medium truncate">
                        {t('liveUpdate') || "Live update"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-blue-600 to-indigo-600 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl text-white hidden sm:block animate-float-delayed">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center mr-2 md:mr-3 lg:mr-4 flex-shrink-0 backdrop-blur-sm">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm md:text-base lg:text-lg truncate">
                      {t('aiPrediction') || "AI Prediction"}
                    </p>
                    <p className="text-blue-100 text-xs md:text-sm truncate">
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
      <section className="py-8 md:py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="flex justify-center mb-2 md:mb-3 lg:mb-4">
                  <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                    <div className="text-blue-400">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-blue-200 font-medium text-xs md:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 font-medium text-sm md:text-base mb-3 md:mb-4">
              <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 flex-shrink-0" />
              {t('powerfulFeatures') || "POWERFUL FEATURES"}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('featuresTitle1') || "Everything You Need for"} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t('featuresTitle2') || "Modern Inventory Management"}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              {t('featuresDescription') || "From AI-powered predictions to real-time collaboration, our platform delivers everything you need to optimize your inventory operations."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-gray-100 group-hover:shadow-xl md:group-hover:shadow-2xl group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className={`mb-4 md:mb-6 p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl bg-gradient-to-r ${feature.color} inline-flex`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">{feature.description}</p>
                  <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100 text-gray-800 font-medium text-xs md:text-sm">
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 font-medium text-sm md:text-base mb-3 md:mb-4">
              <Target className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 flex-shrink-0" />
              {t('simplePricing') || "SIMPLE PRICING"}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('chooseYourPlan') || "Choose Your Perfect Plan"}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t('pricingDescription') || "All plans include a 14-day free trial. No credit card required to start."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative ${plan.popular ? 'md:-translate-y-4' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-semibold text-xs md:text-sm shadow-lg whitespace-nowrap">
                      {t('mostPopular') || "Most Popular"}
                    </div>
                  </div>
                )}
                
                <div className={`bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border-2 ${plan.popular ? 'border-blue-500' : 'border-gray-100'} overflow-hidden h-full`}>
                  <div className="p-4 md:p-6 lg:p-8">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-3 md:mb-4">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1 md:ml-2 text-base md:text-lg">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">{plan.description}</p>
                    
                    <div className="mb-6 md:mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center py-2 md:py-3 border-b border-gray-100 last:border-0">
                          {feature.included ? (
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                          ) : (
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-gray-300 mr-2 md:mr-3 flex-shrink-0"></div>
                          )}
                          <span className={`text-sm md:text-base ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-3 md:py-4 font-semibold rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl md:hover:shadow-2xl hover:shadow-blue-500/30' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}>
                      {t('startFreeTrial') || "Start Free Trial"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12 px-4">
            <p className="text-gray-600 text-sm md:text-base">
              {t('needCustomSolution') || "Need a custom solution?"}{' '}
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">
                {t('contactSalesTeam') || "Contact our sales team →"}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-600 font-medium text-sm md:text-base mb-3 md:mb-4">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 fill-current flex-shrink-0" />
              {t('trustedByIndustryLeaders') || "TRUSTED BY INDUSTRY LEADERS"}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('lovedByBusinesses') || "Loved by Thousands of Businesses"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-gray-100 group-hover:shadow-xl md:group-hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg lg:text-xl mr-3 md:mr-4 flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-base md:text-lg lg:text-xl truncate">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm md:text-base truncate">{testimonial.role}</p>
                      <p className="text-blue-600 font-medium text-sm md:text-base truncate">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} flex-shrink-0`} />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed italic mb-4 md:mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center text-gray-500 text-xs md:text-sm">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1 md:mr-2 flex-shrink-0" />
                    <span className="truncate">{t('verifiedCustomer') || "Verified customer"} • {t('monthsUsingStockMaster') || "6 months using Inventory management system"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/4 md:-translate-y-1/3 lg:-translate-y-1/2 translate-x-1/4 md:translate-x-1/3 lg:translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-1/4 md:translate-y-1/3 lg:translate-y-1/2 -translate-x-1/4 md:-translate-x-1/3 lg:-translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-sm md:text-base mb-6 md:mb-8">
              <Zap className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" />
              {t('freeTrialNoCreditCard') || "14-DAY FREE TRIAL • NO CREDIT CARD REQUIRED"}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              <span className="block">{t('ctaTitle1') || "Ready to Transform Your"}</span>
              <span className="block">{t('ctaTitle2') || "Inventory Management?"}</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
              {t('ctaDescription') || "Join 2,500+ businesses that have streamlined their operations, reduced costs, and eliminated stockouts with Inventory management system."}
            </p>
            
            <div className="max-w-md sm:max-w-lg mx-auto px-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('enterWorkEmail') || "Enter your work email"}
                    className="w-full px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl text-gray-900 focus:outline-none focus:ring-2 md:focus:ring-4 focus:ring-white/50 shadow-lg text-sm md:text-base"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="group bg-white text-blue-600 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center justify-center text-sm md:text-base min-w-[140px] md:min-w-[200px]"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" />
                      {t('thankYou') || "Thank You!"}
                    </>
                  ) : (
                    <>
                      {t('startFreeTrial') || "Start Free Trial"}
                      <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                    </>
                  )}
                </button>
              </form>
              <p className="text-blue-200 text-xs md:text-sm mt-4 md:mt-6">
                {t('instantAccess') || "Get instant access. No setup fees. Cancel anytime."}
              </p>
            </div>
            
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4">
              {[
                { icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />, text: t('bankLevelSecurity') || "Bank-level Security" },
                { icon: <RefreshCw className="w-5 h-5 md:w-6 md:h-6" />, text: t('freeUpdates') || "Free Updates" },
                { icon: <Headphones className="w-5 h-5 md:w-6 md:h-6" />, text: t('support247') || "24/7 Support" },
                { icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, text: t('dataOwnership') || "Data Ownership" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-3">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <p className="text-white font-medium text-xs md:text-sm text-center">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 md:pt-16 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 md:space-x-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src={logo} alt="IMS Logo" className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded' />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold">Inventory Management System</span>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {t('powerfulInventoryManagement') || "Powerful inventory management"}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
                {t('footerDescription') || "Empowering businesses worldwide with intelligent inventory solutions. Streamline operations, reduce costs, and grow with confidence."}
              </p>
              <div className="flex space-x-2 md:space-x-4 mt-6 md:mt-8">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 flex-shrink-0"
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
                <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">{column.title}</h4>
                <ul className="space-y-2 md:space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
            <p className="mb-3 md:mb-4 text-sm md:text-base">
              &copy; {new Date().getFullYear()} Inventory Management System. {t('allRightsReserved') || "All rights reserved."}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 text-xs md:text-sm">
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

// CSS Animation for floating elements
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
    animation-delay: 1s;
  }
`;
document.head.appendChild(style);

export default InventoryManagementLanding;