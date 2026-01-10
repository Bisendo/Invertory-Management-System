// Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { 
  FiHome, 
  FiPackage, 
  FiShoppingCart, 
  FiUsers, 
  FiBarChart2,
  FiSettings,
  FiGlobe,
  FiChevronDown,
  FiLogOut,
  FiUser,
  FiBell,
  FiSearch,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { MdInventory } from 'react-icons/md';
import { useTranslation } from '../Context/TranslationContext';

function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  // Languages with Swahili
  const languages = [
    { code: 'en', name: t('english'), flag: '🇺🇸' },
    { code: 'sw', name: t('swahili'), flag: '🇹🇿' }
  ];

  const navLinks = [
    { to: "/", icon: <FiHome />, text: t('home') },
    { to: "/inventory", icon: <FiPackage />, text: t('inventory') },
    { to: "/orders", icon: <FiShoppingCart />, text: t('orders') },
    { to: "/customers", icon: <FiUsers />, text: t('customers') },
    { to: "/reports", icon: <FiBarChart2 />, text: t('reports') },
    { to: "/settings", icon: <FiSettings />, text: t('settings') },
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand and Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              <button 
                className="lg:hidden p-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
              <img src={logo} alt="IMS Logo"  className='h-12 w-12 text-blue-200 rounded'/>
              <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
               IMS
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition duration-300 group"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.text}</span>
                </Link>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </form>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Notifications */}
              <button className="relative p-2 rounded-full hover:bg-blue-700 hover:bg-opacity-50 transition duration-300">
                <FiBell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowLanguageDropdown(!showLanguageDropdown);
                    setShowUserDropdown(false);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition duration-300"
                >
                  <FiGlobe className="h-5 w-5" />
                  <span className="hidden md:inline font-medium">{t('language')}</span>
                  <FiChevronDown className={`h-4 w-4 transition-transform duration-300 ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showLanguageDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowLanguageDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl z-20 py-1 border border-gray-200">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`flex items-center space-x-3 w-full px-4 py-2 hover:bg-gray-100 transition duration-200 ${
                            language === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : ''
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span>{lang.name}</span>
                          {language === lang.code && (
                            <span className="ml-auto text-blue-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowUserDropdown(!showUserDropdown);
                    setShowLanguageDropdown(false);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition duration-300"
                >
                  <div className="h-8 w-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <FiUser className="h-5 w-5" />
                  </div>
                  <span className="hidden md:inline font-medium">{t('profile')}</span>
                  <FiChevronDown className={`h-4 w-4 transition-transform duration-300 ${showUserDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showUserDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowUserDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl z-20 py-1 border border-gray-200">
                      <div className="px-4 py-3 border-b">
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-gray-600">admin@stockmaster.com</p>
                      </div>
                      
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition duration-200"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        <FiUser className="h-4 w-4" />
                        <span>{t('profile')}</span>
                      </Link>
                      
                      <Link
                        to="/settings"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition duration-200"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        <FiSettings className="h-4 w-4" />
                        <span>{t('settings')}</span>
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition duration-200"
                      >
                        <FiLogOut className="h-4 w-4" />
                        <span>{t('logout')}</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mt-2 pb-3">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition duration-300"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.text}</span>
                </Link>
              ))}
            </div>
            
            {/* Mobile Language Selection */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="px-4 text-sm font-medium text-gray-500 mb-2">{t('language')}</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setShowMobileMenu(false);
                    }}
                    className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition duration-200 ${
                      language === lang.code 
                        ? 'bg-blue-100 text-blue-600 border border-blue-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;