import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiShoppingCart,
  FiBox,
  FiUsers,
  FiHelpCircle,
  FiLogOut,
  FiMenu,
  FiX,
  FiTrendingUp,
  FiDollarSign,
  FiPackage,
  FiBarChart2,
  FiRefreshCw,
  FiCalendar,
  FiChevronRight,
} from "react-icons/fi";
import { useTranslation } from "../Context/TranslationContext";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Define menuItems array
  const menuItems = [
    {
      icon: <FiHome />,
      text: t('dashboard') || 'Dashboard',
      path: '/dashboard',
      active: location.pathname === '/dashboard'
    },
    {
      icon: <FiShoppingCart />,
      text: t('Orders') || 'Orders',
      path: '/orders',
      active: location.pathname === '/orders'
    },
    {
      icon: <FiBox />,
      text: t('products') || 'Products',
      path: '/products',
      active: location.pathname === '/products'
    },
    {
      icon: <FiUsers />,
      text: t('customers') || 'Customers',
      path: '/customers',
      active: location.pathname === '/customers'
    },
    {
      icon: <FiBarChart2 />,
      text: t('reports') || 'Reports',
      path: '/reports',
      active: location.pathname === '/reports'
    },
    {
      icon: <FiHelpCircle />,
      text: t('help') || 'Help & Support',
      path: '/help',
      active: location.pathname === '/help'
    },
    {
      icon: <FiLogOut />,
      text: t('logout') || 'Logout',
      path: '/logout',
      active: location.pathname === '/logout'
    },
  ];

  const soldProducts = [
    {
      name: "JBL Headsets",
      price: 300000,
      qty: 3,
      total: 900000,
      image: "https://images.unsplash.com/photo-1585386959984-a41552231691?w=400&h=400&fit=crop",
    },
    {
      name: "Speaker",
      price: 120000,
      qty: 1,
      total: 120000,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    },
    {
      name: "JBL Speaker",
      price: 650000,
      qty: 2,
      total: 1300000,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w-400&h=400&fit=crop",
    },
    {
      name: "Samsung TV",
      price: 2500000,
      qty: 1,
      total: 2500000,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop",
    },
  ];

  useEffect(() => {
    // Set current date
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  const money = (value) =>
    new Intl.NumberFormat("en-US").format(value) + " Tsh";

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleNavigation = (path) => {
    if (path === '/logout') {
      // Handle logout logic here
      console.log('Logging out...');
      // Example: navigate('/login');
    } else {
      navigate(path);
    }
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const statsData = [
    {
      title: t('totalSales') || 'Total Sales',
      value: "4,820,000 Tsh",
      change: "+12.5%",
      icon: <FiDollarSign />,
      color: "blue",
      trend: "up"
    },
    {
      title: t('totalPurchases') || 'Total Purchases',
      value: "340,000 Tsh",
      change: "+8.2%",
      icon: <FiShoppingCart />,
      color: "green",
      trend: "up"
    },
    {
      title: t('totalProducts') || 'Total Products',
      value: "24",
      change: "+15.3%",
      icon: <FiPackage />,
      color: "purple",
      trend: "up"
    },
    {
      title: t('totalOrders') || 'Total Orders',
      value: "18",
      change: "+5.7%",
      icon: <FiBarChart2 />,
      color: "orange",
      trend: "up"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* SIDEBAR - Responsive */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:translate-x-0
        `}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">{t('dashboard') || 'Dashboard'}</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-blue-700 rounded-lg"
            >
              <FiX size={20} />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                text={item.text}
                active={item.active}
                onClick={() => handleNavigation(item.path)}
              />
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-blue-200 text-sm">
              <p>IMS v2.0</p>
              <p className="text-xs mt-1">© 2024 {t('inventoryManagementSystem') || 'Inventory Management System'}</p>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 min-h-screen overflow-x-hidden">
          {/* TOP BAR - Responsive */}
          <header className="bg-white shadow px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-xl font-semibold text-gray-800">{t('dashboard') || 'Dashboard'}</h1>
                <div className="flex items-center mt-1">
                  <FiCalendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{currentDate}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleRefresh}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <FiRefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <span className="text-sm font-medium">{t('refresh') || 'Refresh'}</span>
                </button>
                
                <div className="text-right">
                  <p className="text-sm text-gray-600">{t('welcome') || 'Welcome'},</p>
                  <p className="font-semibold text-gray-800">Admin!</p>
                </div>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          <main className="p-4 sm:p-6">

            {/* Main Dashboard Content - Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Summary Card */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border-2 border-blue-100 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-gray-700">{t('date') || 'Date'}:</span>
                        <span className="ml-2 text-gray-600">{currentDate}</span>
                      </div>
                      <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-md inline-block">
                        {t('dashboardSummary') || 'Dashboard Summary'}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm mb-1">{t('totalSales') || 'Total Sales'}:</p>
                      <p className="text-green-600 font-bold text-xl sm:text-2xl">
                        {money(4820000)}
                      </p>
                    </div>

                    <div className="hidden sm:block h-12 w-px bg-gray-300" />

                    <div className="flex-1">
                      <p className="text-gray-600 text-sm mb-1">{t('totalPurchases') || 'Total Purchases'}:</p>
                      <p className="text-blue-600 font-bold text-xl sm:text-2xl">
                        {money(340000)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* SOLD PRODUCTS */}
            <div className="bg-white rounded-xl border-2 border-blue-100 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-semibold mr-2">
                      {t('soldProducts') || 'Sold Products'}
                    </span>
                    <span className="font-normal text-gray-600 text-sm sm:text-base">
                      {t('january') || 'January'} 7, 2026
                    </span>
                  </h2>
                </div>
                
                <div className="text-sm text-gray-500">
                  {soldProducts.length} {soldProducts.length === 1 ? t('item') || 'item' : t('items') || 'items'} {t('sold') || 'sold'}
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                {soldProducts.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 sm:pb-6 last:border-0 gap-4"
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mt-1">
                          <p className="text-xs sm:text-sm text-gray-600">
                            <span className="font-medium">{t('pricePerUnit') || 'Price per unit'}:</span> {money(item.price)}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">
                            <span className="font-medium">{t('itemsSold') || 'Items sold'}:</span> {item.qty}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-xs text-gray-500 mb-1">{t('total') || 'Total'}:</p>
                      <p className="font-bold text-green-600 text-sm sm:text-base">
                        {money(item.total)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div className="text-gray-600 mb-2 sm:mb-0">
                    {t('totalRevenueFromSales') || 'Total revenue from sales'}:
                  </div>
                  <div className="font-bold text-lg text-green-600">
                    {money(4820000)}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity - Mobile only, Desktop hidden */}
            <div className="lg:hidden mt-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {t('recentActivity') || 'Recent Activity'}
                </h3>
                <div className="space-y-3">
                  {[
                    { text: 'New order placed', time: '10 min ago', color: 'blue' },
                    { text: 'Product restocked', time: '1 hour ago', color: 'green' },
                    { text: 'Low stock alert', time: '2 hours ago', color: 'orange' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-${activity.color}-500 mr-3`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">{activity.text}</p>
                      </div>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-center sm:text-left">
              <div className="text-gray-600 text-sm mb-2 sm:mb-0">
                © 2024 {t('inventoryManagementSystem') || 'Inventory Management System'}. {t('allRightsReserved') || 'All rights reserved'}.
              </div>
              <div className="text-xs text-gray-500">
                <span className="hidden sm:inline">•</span>
                <span className="mx-2">{t('version') || 'Version'} 2.0.1</span>
                <span className="hidden sm:inline">•</span>
                <span className="mx-2">Last updated: Today, 10:30 AM</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div className="text-gray-700 font-medium">{t('refreshing') || 'Refreshing data...'}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, text, active, onClick }) => (
  <div
    onClick={onClick}
    className={`
      flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200
      ${active 
        ? 'bg-blue-700 text-white' 
        : 'hover:bg-blue-700 hover:bg-opacity-50 text-blue-100'
      }
    `}
  >
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{text}</span>
    {active && (
      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
    )}
  </div>
);

export default Dashboard;