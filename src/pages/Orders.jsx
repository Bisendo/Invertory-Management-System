import React, { useState } from "react";
import { 
  FiHome, 
  FiShoppingCart, 
  FiBox, 
  FiUsers, 
  FiHelpCircle, 
  FiLogOut, 
  FiMenu,
  FiX,
  FiDollarSign,
  FiCalendar,
  FiPlus,
  FiChevronRight
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Menu Items
  const menuItems = [
    { icon: <FiHome />, text: "Dashboard", path: "/dashboard" },
    { icon: <FiShoppingCart />, text: "Orders", path: "/orders", active: true },
    { icon: <FiBox />, text: "Products", path: "/products" },
    { icon: <FiUsers />, text: "Users", path: "/users" },
    { icon: <FiHelpCircle />, text: "Help Center", path: "/help" },
    { icon: <FiLogOut />, text: "Logout", path: "/logout", isLogout: true },
  ];

  // Orders data matching the image
  const ordersData = [
    {
      date: "January, 7 2026",
      totalSales: 1020000,
      products: [
        {
          name: "JBL Headsets",
          pricePerUnit: 300000,
          itemsSold: 3,
          total: 900000,
          image: "https://images.unsplash.com/photo-1585298723685-d7b9d5dde7f6?w=400&h=400&fit=crop"
        },
        {
          name: "Speaker",
          pricePerUnit: 120000,
          itemsSold: 1,
          total: 120000,
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
        }
      ]
    },
    {
      date: "January, 5 2026",
      totalSales: 1300000,
      products: [
        {
          name: "JBL Speaker",
          pricePerUnit: 650000,
          itemsSold: 2,
          total: 1300000,
          image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop"
        }
      ]
    },
    {
      date: "January, 3 2026",
      totalSales: 2500000,
      products: [
        {
          name: "Samsung TV",
          pricePerUnit: 2500000,
          itemsSold: 1,
          total: 2500000,
          image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop"
        }
      ]
    }
  ];

  const handleNavigation = (path) => {
    if (path === '/logout') {
      // Handle logout logic
      console.log('Logging out...');
      navigate('/login');
    } else {
      navigate(path);
    }
    setSidebarOpen(false);
  };

  const handleAddOrder = () => {
    navigate("/add-order");
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US") + " Tsh";
  };

  const calculateTotalAllOrders = () => {
    return ordersData.reduce((sum, order) => sum + order.totalSales, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-700 text-white rounded-lg shadow-lg"
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
        {/* Sidebar - Matches the image style */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-blue-900 text-white p-6 space-y-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:translate-x-0
        `}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Admin orders page</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-blue-800 rounded"
            >
              <FiX size={20} />
            </button>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`
                  w-full text-left flex items-center gap-3 p-3 rounded-lg transition-colors duration-200
                  ${location.pathname === item.path || item.active
                    ? 'bg-blue-700 text-white font-semibold' 
                    : 'hover:bg-blue-800 text-blue-100'
                  }
                  ${item.isLogout ? 'mt-8 border-t border-blue-700 pt-8' : ''}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
                {(location.pathname === item.path || item.active) && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-blue-200 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-2"></div>
              <p>System Online</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-h-screen overflow-x-hidden">
          {/* Top Bar */}
          <header className="bg-white shadow px-4 sm:px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
                <div className="flex items-center mt-1 text-gray-600 text-sm">
                  <FiCalendar className="mr-2" />
                  <span>Total Orders: {ordersData.length}</span>
                  <span className="mx-2">•</span>
                  <FiDollarSign className="mr-1" />
                  <span>Total Sales: {formatCurrency(calculateTotalAllOrders())}</span>
                </div>
              </div>
              
              <button
                onClick={handleAddOrder}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors duration-200"
              >
                <FiPlus size={20} />
                <span>Add new order</span>
              </button>
            </div>
          </header>

          {/* Orders Content */}
          <main className="p-4 sm:p-6">
            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-sm mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-800">{ordersData.length}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-sm mb-1">Total Products Sold</p>
                <p className="text-2xl font-bold text-gray-800">
                  {ordersData.reduce((sum, order) => 
                    sum + order.products.reduce((pSum, p) => pSum + p.itemsSold, 0), 0
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(calculateTotalAllOrders())}</p>
              </div>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
              {ordersData.map((order, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  {/* Order Header */}
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-semibold mr-4">
                          Sold Products
                        </div>
                        <div className="text-gray-700 font-medium">
                          <FiCalendar className="inline mr-2" />
                          {order.date}
                        </div>
                      </div>
                      
                      <div className="bg-green-50 px-4 py-2 rounded-lg">
                        <div className="text-sm text-gray-600">Total sales:</div>
                        <div className="text-lg font-bold text-green-600">{formatCurrency(order.totalSales)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Products List */}
                  <div className="divide-y divide-gray-100">
                    {order.products.map((product, pIndex) => (
                      <div key={pIndex} className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          {/* Product Info */}
                          <div className="flex items-start gap-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-20 h-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                            />
                            
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.name}</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                <div className="text-gray-600">
                                  <span className="font-medium">Price per unit:</span> {formatCurrency(product.pricePerUnit)}
                                </div>
                                <div className="text-gray-600">
                                  <span className="font-medium">Items sold:</span> {product.itemsSold}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Total Price */}
                          <div className="lg:text-right">
                            <div className="text-sm text-gray-500 mb-1">Total</div>
                            <div className="text-2xl font-bold text-green-600">
                              {formatCurrency(product.total)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity - Mobile */}
            <div className="lg:hidden mt-6">
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { text: 'New order completed', time: 'Just now' },
                    { text: 'Payment received', time: '10 min ago' },
                    { text: 'Order shipped', time: '1 hour ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{activity.text}</span>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 py-4 mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-center sm:text-left">
              <div className="text-gray-600 text-sm mb-2 sm:mb-0">
                © 2024 Inventory Management System. All rights reserved.
              </div>
              <div className="text-xs text-gray-500">
                <span>Version 2.0.1</span>
                <span className="mx-2">•</span>
                <span>Last updated: Today</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Orders;