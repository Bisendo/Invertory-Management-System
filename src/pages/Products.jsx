import React, { useState } from "react";
import { Menu, Plus, Minus, X, Home, Package, Users, HelpCircle, LogOut, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      name: "JBL Headsets",
      status: "Available",
      buyPrice: 250000,
      sellPrice: 300000,
      quantity: 10,
      category: "Electronics",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      name: "Bluetooth Speaker",
      status: "Low Stock",
      buyPrice: 180000,
      sellPrice: 220000,
      quantity: 3,
      category: "Electronics",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      name: "Wireless Earbuds",
      status: "Out of Stock",
      buyPrice: 120000,
      sellPrice: 150000,
      quantity: 0,
      category: "Electronics",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      name: "Studio Headphones",
      status: "Available",
      buyPrice: 350000,
      sellPrice: 450000,
      quantity: 15,
      category: "Electronics",
    },
  ];

  const menuItems = [
    { 
      name: "Dashboard", 
      icon: <Home size={18} />, 
      active: false, 
      path: "/dashboard" 
    },
    { 
      name: "Orders", 
      icon: <ShoppingCart size={18} />, 
      active: false, 
      path: "/orders" 
    },
    { 
      name: "Products", 
      icon: <Package size={18} />, 
      active: true, 
      path: "/products" 
    },
    { 
      name: "Users", 
      icon: <Users size={18} />, 
      active: false, 
      path: "/users" 
    },
    { 
      name: "Help Center", 
      icon: <HelpCircle size={18} />, 
      active: false, 
      path: "/help" 
    },
    { 
      name: "Logout", 
      icon: <LogOut size={18} />, 
      active: false, 
      isLogout: true,
      action: () => {
        // Handle logout logic
        console.log("Logging out...");
        // Navigate to login page after logout
        navigate("/login");
      }
    },
  ];

  const handleNavigation = (item) => {
    if (item.isLogout && item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
    }
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Available": return "text-green-600 bg-green-50";
      case "Low Stock": return "text-amber-600 bg-amber-50";
      case "Out of Stock": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Available": return "🟢";
      case "Low Stock": return "🟡";
      case "Out of Stock": return "🔴";
      default: return "⚪";
    }
  };

  const handleAddProduct = () => {
    // Navigate to add product page or show modal
    console.log("Add new product clicked");
    // Example: navigate("/products/add");
  };

  const handleViewDetails = (productId) => {
    // Navigate to product details page
    navigate(`/products/${productId}`);
    console.log(`Viewing details for product ID: ${productId}`);
  };

  const handlePagination = (action) => {
    // Handle pagination logic
    console.log(`Pagination: ${action}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-700 text-white rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 space-y-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:translate-x-0
        `}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Admin Panel</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-blue-700 rounded"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className={`
                  flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 w-full text-left
                  ${item.active 
                    ? 'bg-blue-700 text-white' 
                    : 'hover:bg-blue-700 hover:bg-opacity-50 text-blue-100'
                  }
                  ${item.isLogout ? 'mt-8 border-t border-blue-700 pt-8' : ''}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                {item.active && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-blue-200 text-sm">
              <p className="font-medium">IMS v2.0</p>
              <p className="text-xs mt-1">Inventory Management System</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>System Online</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-h-screen overflow-x-hidden">
          {/* Top Bar */}
          <header className="bg-white shadow-sm px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Products Management</h1>
                <p className="text-gray-600 text-sm mt-1">Manage your inventory products and stock levels</p>
              </div>

              <Link 
                to="/add-product"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                <Plus size={18} />
                Add New Product
              </Link>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-4 sm:p-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">Total Products</p>
                <p className="text-2xl font-bold text-gray-800">{products.length}</p>
                <p className="text-green-600 text-xs mt-1">All Categories</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">In Stock</p>
                <p className="text-2xl font-bold text-gray-800">
                  {products.filter(p => p.status === "Available").length}
                </p>
                <p className="text-blue-600 text-xs mt-1">Available for sale</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">Low Stock</p>
                <p className="text-2xl font-bold text-gray-800">
                  {products.filter(p => p.status === "Low Stock").length}
                </p>
                <p className="text-amber-600 text-xs mt-1">Need reorder</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">Out of Stock</p>
                <p className="text-2xl font-bold text-gray-800">
                  {products.filter(p => p.status === "Out of Stock").length}
                </p>
                <p className="text-red-600 text-xs mt-1">Restock needed</p>
              </div>
            </div>

            {/* Products Table Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Product Inventory</h2>
                    <p className="text-gray-600 text-sm mt-1">{products.length} products found</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleAddProduct}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      title="Add Product"
                    >
                      <Plus size={18} />
                    </button>
                    <button 
                      onClick={() => console.log("Remove product clicked")}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      title="Remove Product"
                    >
                      <Minus size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products List - Responsive */}
              <div className="divide-y divide-gray-200">
                {products.map((product) => {
                  const profitPerUnit = product.sellPrice - product.buyPrice;
                  const totalBuy = product.buyPrice * product.quantity;
                  const totalSell = product.sellPrice * product.quantity;
                  const totalProfit = profitPerUnit * product.quantity;

                  return (
                    <div key={product.id} className="p-4 sm:p-6">
                      {/* Product Row - Responsive Layout */}
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                        {/* Product Image and Basic Info */}
                        <div className="flex items-start gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                          />
                          
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                              <div>
                                <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                                  <span>{getStatusIcon(product.status)}</span>
                                  {product.status}
                                </span>
                                
                                <button 
                                  onClick={() => handleViewDetails(product.id)}
                                  className="px-4 py-2 border border-blue-400 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-500 text-sm">Buy / Unit</p>
                          <p className="font-semibold text-gray-800 text-lg">
                            {product.buyPrice.toLocaleString()} Tsh
                          </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-500 text-sm">Sell / Unit</p>
                          <p className="font-semibold text-gray-800 text-lg">
                            {product.sellPrice.toLocaleString()} Tsh
                          </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-500 text-sm">Profit / Unit</p>
                          <p className="font-semibold text-green-600 text-lg">
                            {profitPerUnit.toLocaleString()} Tsh
                          </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-500 text-sm">Quantity</p>
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-800 text-lg">{product.quantity}</p>
                            {product.quantity < 5 && product.quantity > 0 && (
                              <span className="text-xs text-amber-600 font-medium">Reorder Soon</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Total Calculations */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                        <div className="text-center sm:text-left">
                          <p className="text-gray-500 text-sm">Total Buy Value</p>
                          <p className="font-semibold text-gray-800">
                            {totalBuy.toLocaleString()} Tsh
                          </p>
                        </div>
                        
                        <div className="text-center sm:text-left">
                          <p className="text-gray-500 text-sm">Total Sell Value</p>
                          <p className="font-semibold text-gray-800">
                            {totalSell.toLocaleString()} Tsh
                          </p>
                        </div>
                        
                        <div className="text-center sm:text-left">
                          <p className="text-gray-500 text-sm">Total Profit</p>
                          <p className="font-semibold text-green-600">
                            {totalProfit.toLocaleString()} Tsh
                          </p>
                        </div>
                        
                        <div className="text-center sm:text-left">
                          <p className="text-gray-500 text-sm">Profit Margin</p>
                          <p className="font-semibold text-blue-600">
                            {profitPerUnit > 0 ? `${Math.round((profitPerUnit / product.buyPrice) * 100)}%` : '0%'}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table Footer */}
              <div className="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-gray-600 text-sm">
                    Showing {products.length} of {products.length} products
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handlePagination('previous')}
                      className="px-3 py-1 text-gray-600 hover:bg-white border border-gray-300 rounded text-sm"
                    >
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 rounded text-sm">
                      1
                    </button>
                    <button 
                      onClick={() => handlePagination('next')}
                      className="px-3 py-1 text-gray-600 hover:bg-white border border-gray-300 rounded text-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-center sm:text-left">
              <div className="text-gray-600 text-sm mb-2 sm:mb-0">
                © 2024 Inventory Management System. All rights reserved.
              </div>
              <div className="text-xs text-gray-500">
                <span>Version 2.1.0</span>
                <span className="mx-2">•</span>
                <span>Last updated: Today</span>
                <span className="mx-2">•</span>
                <button 
                  onClick={() => navigate("/settings")}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Settings
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Products;