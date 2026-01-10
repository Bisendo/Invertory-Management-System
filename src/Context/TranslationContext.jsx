// TranslationContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Translation data
const translations = {
  en: {
    home: "Dashboard",
    inventory: "Inventory",
    orders: "Orders",
    customers: "Customers",
    reports: "Reports",
    settings: "Settings",
    searchPlaceholder: "Search inventory...",
    profile: "Profile",
    logout: "Logout",
    notifications: "Notifications",
    language: "Language",
    english: "English",
    swahili: "Kiswahili",
     // New landing page translations
    trustedByBusinesses: "Trusted by 2,500+ businesses worldwide",
    heroTitle1: "Master Your",
    heroTitle2: "Inventory Flow",
    heroDescription: "Streamline your inventory management with AI-powered insights. Reduce costs by up to 40%, eliminate stockouts, and make data-driven decisions with real-time analytics.",
    startFreeTrial: "Start Free 14-Day Trial",
    watchProductTour: "Watch Product Tour",
    ratedByBusinesses: "Rated by 1,200+ businesses",
    
    // Dashboard translations
    inventoryDashboard: "Inventory Dashboard",
    realTimeOverview: "Real-time overview",
    totalProducts: "Total Products",
    inStock: "In Stock",
    lowStock: "Low Stock",
    outOfStock: "Out of Stock",
    growthFromLastMonth: "↗︎ 12% from last month",
    decreaseFromLastMonth: "↘︎ 5% from last month",
    topSellingProducts: "Top Selling Products",
    viewAll: "View All",
    product1: "Wireless Headphones Pro",
    product2: "USB-C Fast Charger",
    product3: "Ergonomic Laptop Stand",
    sold126: "126 sold",
    sold89: "89 sold",
    sold54: "54 sold",
    lowStockAlert: "Low Stock Alert",
    itemsNeedReordering: "5 items need reordering",
    liveUpdate: "Live update",
    aiPrediction: "AI Prediction",
    nextRestock: "Next restock: 3 days",
    
    // Stats
    statUptime: "System Uptime",
    statBusinesses: "Businesses Trust",
    statCostReduction: "Avg Cost Reduction",
    statTimeSaved: "Weekly Time Saved",
    
    // Features
    powerfulFeatures: "POWERFUL FEATURES",
    featuresTitle1: "Everything You Need for",
    featuresTitle2: "Modern Inventory Management",
    featuresDescription: "From AI-powered predictions to real-time collaboration, our platform delivers everything you need to optimize your inventory operations.",
    
    // Feature details
    featureRealTimeAnalytics: "Real-Time Analytics",
    featureRealTimeAnalyticsDesc: "Monitor stock levels, sales trends, and inventory turnover with live dashboards.",
    featureRealTimeAnalyticsStat: "+89% efficiency",
    featureCloudPlatform: "Cloud-Based Platform",
    featureCloudPlatformDesc: "Access your inventory from anywhere, on any device. Real-time synchronization.",
    featureCloudPlatformStat: "Anywhere access",
    featureEnterpriseSecurity: "Enterprise Security",
    featureEnterpriseSecurityDesc: "Bank-level security with 99.9% uptime guarantee and automated backups.",
    featureEnterpriseSecurityStat: "99.9% uptime",
    featureSmartAutomation: "Smart Automation",
    featureSmartAutomationDesc: "AI-powered reorder points and predictive inventory management.",
    featureSmartAutomationStat: "40% time saved",
    featureTeamCollaboration: "Team Collaboration",
    featureTeamCollaborationDesc: "Role-based permissions and real-time team collaboration tools.",
    featureTeamCollaborationStat: "Unlimited users",
    featureBarcodeSystem: "Barcode System",
    featureBarcodeSystemDesc: "Mobile barcode scanning and RFID integration capabilities.",
    featureBarcodeSystemStat: "5x faster counts",
    
    // Pricing
    simplePricing: "SIMPLE PRICING",
    chooseYourPlan: "Choose Your Perfect Plan",
    pricingDescription: "All plans include a 14-day free trial. No credit card required to start.",
    planStarter: "Starter",
    planStarterDesc: "Perfect for small businesses",
    planProfessional: "Professional",
    planProfessionalDesc: "For growing businesses",
    planEnterprise: "Enterprise",
    planEnterpriseDesc: "For large organizations",
    perMonth: "/month",
    customPrice: "Custom",
    tailored: "/tailored",
    mostPopular: "Most Popular",
    
    // Plan features
    featureUpTo500Products: "Up to 500 products",
    feature2UserAccounts: "2 user accounts",
    featureBasicReporting: "Basic reporting",
    featureEmailSupport: "Email support",
    featureMobileAppAccess: "Mobile app access",
    featureBarcodeScanning: "Barcode scanning",
    featureAPIAccess: "API access",
    featureUpTo5000Products: "Up to 5,000 products",
    feature10UserAccounts: "10 user accounts",
    featureAdvancedAnalytics: "Advanced analytics",
    featurePrioritySupport: "Priority support",
    featureCustomReports: "Custom reports",
    featureUnlimitedProducts: "Unlimited products",
    featureUnlimitedUsers: "Unlimited users",
    featureCustomReporting: "Custom reporting",
    feature247PhoneSupport: "24/7 phone support",
    featureCustomIntegrations: "Custom integrations",
    featureDedicatedAccountManager: "Dedicated account manager",
    featureOnPremiseDeployment: "On-premise deployment",
    
    needCustomSolution: "Need a custom solution?",
    contactSalesTeam: "Contact our sales team →",
    
    // Testimonials
    trustedByIndustryLeaders: "TRUSTED BY INDUSTRY LEADERS",
    lovedByBusinesses: "Loved by Thousands of Businesses",
    testimonialRole1: "Operations Director",
    testimonialRole2: "Inventory Manager",
    testimonialRole3: "CEO",
    testimonialText1: "StockMaster reduced our inventory costs by 40% and saved over 15 hours weekly on manual tracking. The predictive analytics are incredibly accurate.",
    testimonialText2: "The real-time alerts prevented stockouts during peak season. Our fulfillment accuracy improved from 92% to 99.7% in just 3 months.",
    testimonialText3: "Intuitive interface with powerful reporting. Our team adopted it in one day and our inventory accuracy is now at 99.9%.",
    verifiedCustomer: "Verified customer",
    monthsUsingStockMaster: "6 months using StockMaster",
    
    // CTA
    freeTrialNoCreditCard: "14-DAY FREE TRIAL • NO CREDIT CARD REQUIRED",
    ctaTitle1: "Ready to Transform Your",
    ctaTitle2: "Inventory Management?",
    ctaDescription: "Join 2,500+ businesses that have streamlined their operations, reduced costs, and eliminated stockouts with StockMaster.",
    enterWorkEmail: "Enter your work email",
    thankYou: "Thank You!",
    instantAccess: "Get instant access. No setup fees. Cancel anytime.",
    bankLevelSecurity: "Bank-level Security",
    freeUpdates: "Free Updates",
    support247: "24/7 Support",
    dataOwnership: "Data Ownership",
    
    // Footer
    powerfulInventoryManagement: "Powerful inventory management",
    footerDescription: "Empowering businesses worldwide with intelligent inventory solutions. Streamline operations, reduce costs, and grow with confidence.",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    api: "API",
    documentation: "Documentation",
    changelog: "Changelog",
    status: "Status",
    company: "Company",
    aboutUs: "About Us",
    careers: "Careers",
    blog: "Blog",
    press: "Press",
    partners: "Partners",
    contact: "Contact",
    resources: "Resources",
    helpCenter: "Help Center",
    community: "Community",
    tutorials: "Tutorials",
    webinars: "Webinars",
    templates: "Templates",
    caseStudies: "Case Studies",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    gdprCompliance: "GDPR Compliance",
  },
  sw: {
   // Navbar translations
    home: "Dashibodi",
    inventory: "Hisa",
    orders: "Maagizo",
    customers: "Wateja",
    reports: "Ripoti",
    settings: "Mipangilio",
    searchPlaceholder: "Tafuta hisa...",
    profile: "Wasifu",
    logout: "Toka",
    language: "Lugha",
    english: "Kiingereza",
    swahili: "Kiswahili",
    
    // Landing page translations
    trustedByBusinesses: "Inaaminika na biashara 2,500+ ulimwenguni",
    heroTitle1: "Dhibiti",
    heroTitle2: "Mtiririko wa Hisa",
    heroDescription: "Rahisisha usimamizi wa hisa zako kwa maarifa yanayotumia akili bandia. Punguza gharama hadi 40%, ondoa ukosefu wa hisa, na fanya maamuzi yanayotegemea data kwa uchambuzi wa wakati halisi.",
    startFreeTrial: "Anzisha Jaribio la Bure la Siku 14",
    watchProductTour: "Tazama Ziara ya Bidhaa",
    ratedByBusinesses: "Imepimwa na biashara 1,200+",
    
    // Dashboard translations
    inventoryDashboard: "Dashibodi ya Hisa",
    realTimeOverview: "Muhtasari wa wakati halisi",
    totalProducts: "Jumla ya Bidhaa",
    inStock: "Katika Hifadhi",
    lowStock: "Hisa Chache",
    outOfStock: "Imekwisha",
    growthFromLastMonth: "↗︎ 12% kutoka mwezi uliopita",
    decreaseFromLastMonth: "↘︎ 5% kutoka mwezi uliopita",
    topSellingProducts: "Bidhaa Zinazouzwa Zaidi",
    viewAll: "Angalia Zote",
    product1: "Vipokezi sauti bila waya Pro",
    product2: "Chaja ya Haraka ya USB-C",
    product3: "Kiguzo cha Laptopsi cha Ergonomic",
    sold126: "126 ziliuzwa",
    sold89: "89 ziliuzwa",
    sold54: "54 ziliuzwa",
    lowStockAlert: "Tahadhari ya Hisa Chache",
    itemsNeedReordering: "Bidhaa 5 zinahitaji kuagizwa tena",
    liveUpdate: "Sasisho la moja kwa moja",
    aiPrediction: "Utabiri wa Akili Bandia",
    nextRestock: "Usajili ujao: siku 3",
    
    // Stats
    statUptime: "Muda wa Uendeshaji wa Mfumo",
    statBusinesses: "Biashara Zinaiamini",
    statCostReduction: "Kiwango cha Kupunguzwa kwa Gharama",
    statTimeSaved: "Muda uliohifadhiwa Kila Wiki",
    
    // Features
    powerfulFeatures: "VIPANDE VYEUSE",
    featuresTitle1: "Kila Unachohitaji kwa",
    featuresTitle2: "Usimamizi wa Kisasa wa Hisa",
    featuresDescription: "Kutoka utabiri unaotumia akili bandia hadi ushirikiano wa wakati halisi, jukwaa letu linatoa kila unachohitaji ili kuboresha shughuli zako za hisa.",
    
    // Feature details
    featureRealTimeAnalytics: "Uchambuzi wa Wakati Halisi",
    featureRealTimeAnalyticsDesc: "Fuatilia viwango vya hisa, mienendo ya mauzo, na mauzo ya hisa na dashibodi za moja kwa moja.",
    featureRealTimeAnalyticsStat: "+89% ufanisi",
    featureCloudPlatform: "Jukwaa la Wingu",
    featureCloudPlatformDesc: "Pata hisa zako kutoka popote, kwenye kifaa chochote. Uunganishaji wa wakati halisi.",
    featureCloudPlatformStat: "Upatikanaji popote",
    featureEnterpriseSecurity: "Usalama wa Biashara",
    featureEnterpriseSecurityDesc: "Usalama wa kiwango cha benki na dhamana ya muda wa uendeshaji 99.9% na nakala rudufu zilizozimatiwa.",
    featureEnterpriseSecurityStat: "99.9% muda wa uendeshaji",
    featureSmartAutomation: "Uanzishaji wa Akili Bandia",
    featureSmartAutomationDesc: "Vipengele vya kuagiza tena vinavyotumia akili bandia na usimamizi wa utabiri wa hisa.",
    featureSmartAutomationStat: "Muda wa 40% umehifadhiwa",
    featureTeamCollaboration: "Ushirikiano wa Timu",
    featureTeamCollaborationDesc: "Ruhusa zinazotegemea majukumu na zana za ushirikiano wa timu wa wakati halisi.",
    featureTeamCollaborationStat: "Watumiaji wasio na kikomo",
    featureBarcodeSystem: "Mfumo wa Msimbo Mchoro",
    featureBarcodeSystemDesc: "Uchanganuzi wa msimbo mchoro wa rununu na uwezo wa kuunganishwa kwa RFID.",
    featureBarcodeSystemStat: "Hesabu 5x kwa kasi",
    
    // Pricing
    simplePricing: "UANZISHAJI WA BEPARI RAHISI",
    chooseYourPlan: "Chagua Mpango Wako Kamili",
    pricingDescription: "Mipango yote inajumuisha jaribio la bure la siku 14. Hakuna kadi ya mkopo inayotakiwa kuanza.",
    planStarter: "Mwanzo",
    planStarterDesc: "Kamili kwa biashara ndogo",
    planProfessional: "Kitaaluma",
    planProfessionalDesc: "Kwa biashara zinazokua",
    planEnterprise: "Biashara Kubwa",
    planEnterpriseDesc: "Kwa mashirika makubwa",
    perMonth: "/mwezi",
    customPrice: "Maalum",
    tailored: "/iliyobinafsishwa",
    mostPopular: "Inayopendwa Zaidi",
    
    // Plan features
    featureUpTo500Products: "Hadi bidhaa 500",
    feature2UserAccounts: "Akaunti 2 za watumiaji",
    featureBasicReporting: "Ripoti za msingi",
    featureEmailSupport: "Msaada wa barua pepe",
    featureMobileAppAccess: "Ufikiaji wa programu ya rununu",
    featureBarcodeScanning: "Uchanganuzi wa msimbo mchoro",
    featureAPIAccess: "Ufikiaji wa API",
    featureUpTo5000Products: "Hadi bidhaa 5,000",
    feature10UserAccounts: "Akaunti 10 za watumiaji",
    featureAdvancedAnalytics: "Uchambuzi wa hali ya juu",
    featurePrioritySupport: "Msaada wa kipaumbele",
    featureCustomReports: "Ripoti zilizobinafsishwa",
    featureUnlimitedProducts: "Bidhaa zisizo na kikomo",
    featureUnlimitedUsers: "Watumiaji wasio na kikomo",
    featureCustomReporting: "Utoaji taarifa uliobinafsishwa",
    feature247PhoneSupport: "Msaada wa simu 24/7",
    featureCustomIntegrations: "Ujumuishaji uliobinafsishwa",
    featureDedicatedAccountManager: "Msimamizi wa akaunti aliyeteuliwa",
    featureOnPremiseDeployment: "Usakinishaji wa ndani ya jengo",
    
    needCustomSolution: "Unahitaji suluhisho maalum?",
    contactSalesTeam: "Wasiliana na timu yetu ya mauzo →",
    
    // Testimonials
    trustedByIndustryLeaders: "INAAMINIKA NA VIONGOZI WA SEKTA",
    lovedByBusinesses: "Inapendwa na Maelfu ya Biashara",
    testimonialRole1: "Mkurugenzi wa Uendeshaji",
    testimonialRole2: "Meneja wa Hisa",
    testimonialRole3: "Mkurugenzi Mtendaji",
    testimonialText1: "StockMaster ilipunguza gharama zetu za hisa kwa 40% na kuokoa zaidi ya masaa 15 kila wiki kwa ufuatiliaji wa mkono. Uchambuzi wa utabiri ni sahihi sana.",
    testimonialText2: "Tahadhari za wakati halisi zilizuia ukosefu wa hisa wakati wa msimu wa kilele. Usahihi wetu wa utekelezaji uliboreshwa kutoka 92% hadi 99.7% katika miezi 3 tu.",
    testimonialText3: "Kiolesura cha kuvutia chenye utoaji taarifa wenye nguvu. Timu yetu iliikubali kwa siku moja na usahihi wa hisa zetu sasa ni 99.9%.",
    verifiedCustomer: "Mteja aliethibitishwa",
    monthsUsingStockMaster: "Miezi 6 ikitumia StockMaster",
    
    // CTA
    freeTrialNoCreditCard: "JARIBIO LA BURE LA SIKU 14 • HAKUNA KADI YA MKOPO INAYOTAKIWA",
    ctaTitle1: "Tayari Kubadilisha",
    ctaTitle2: "Usimamizi Wako wa Hisa?",
    ctaDescription: "Jiunge na biashara 2,500+ ambazo zimerahisisha shughuli zao, kupunguza gharama, na kuondoa ukosefu wa hisa na StockMaster.",
    enterWorkEmail: "Weka barua pepe yako ya kazi",
    thankYou: "Asante!",
    instantAccess: "Pata ufikiaji wa haraka. Hakuna ada ya usanidi. Ghairi wakati wowote.",
    bankLevelSecurity: "Usalama wa Kiwango cha Benki",
    freeUpdates: "Sasisho za Bure",
    support247: "Msaada 24/7",
    dataOwnership: "Umiliki wa Data",
    
    // Footer
    powerfulInventoryManagement: "Usimamizi wenye nguvu wa hisa",
    footerDescription: "Kuwawezesha biashara ulimwenguni kote na suluhisho za hisa zenye akili. Rahisisha shughuli, punguza gharama, na kua kwa ujasiri.",
    product: "Bidhaa",
    features: "Vipengele",
    pricing: "Bei",
    api: "API",
    documentation: "Nyaraka",
    changelog: "Logi ya mabadiliko",
    status: "Hali",
    company: "Kampuni",
    aboutUs: "Kuhusu Sisi",
    careers: "Kazi",
    blog: "Blogu",
    press: "Vyombo vya habari",
    partners: "Washirika",
    contact: "Wasiliana",
    resources: "Rasilimali",
    helpCenter: "Kituo cha Usaidizi",
    community: "Jamii",
    tutorials: "Mafunzo",
    webinars: "Semina za wavuti",
    templates: "Vigezo",
    caseStudies: "Masomo ya Kesi",
    allRightsReserved: "Haki zote zimehifadhiwa.",
    privacyPolicy: "Sera ya Faragha",
    termsOfService: "Masharti ya Huduma",
    cookiePolicy: "Sera ya Kuki",
    gdprCompliance: "Kufuata GDPR"
  }
};

// Create Context
const TranslationContext = createContext();

// Translation Provider Component
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to 'en'
    return localStorage.getItem('preferredLanguage') || 'en';
  });

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use translation
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

// Export the translations for use in other components if needed
export { translations };