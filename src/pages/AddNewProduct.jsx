import React, { useState } from "react";
import { 
  Plus, 
  Check, 
  X, 
  Home, 
  ShoppingCart, 
  Package, 
  Users, 
  HelpCircle, 
  LogOut,
  Image as ImageIcon,
  DollarSign,
  Tag,
  Hash,
  FileText,
  Menu
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const AddProductForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    purchasePrice: "",
    salesPrice: "",
    stockQuantity: "",
  });

  const menuItems = [
    { 
      icon: <Home size={18} />, 
      text: "Dashboard", 
      path: "/dashboard",
      active: location.pathname === "/dashboard"
    },
    { 
      icon: <ShoppingCart size={18} />, 
      text: "Orders", 
      path: "/orders",
      active: location.pathname === "/orders"
    },
    { 
      icon: <Package size={18} />, 
      text: "Products", 
      path: "/products",
      active: location.pathname === "/products"
    },
    { 
      icon: <Users size={18} />, 
      text: "Users", 
      path: "/users",
      active: location.pathname === "/users"
    },
    { 
      icon: <HelpCircle size={18} />, 
      text: "Help Center", 
      path: "/help",
      active: location.pathname === "/help"
    },
    { 
      icon: <LogOut size={18} />, 
      text: "Logout", 
      isLogout: true,
      action: () => {
        console.log("Logging out...");
        // Add your logout logic here
        // For example: localStorage.removeItem('token');
        navigate("/login");
      }
    },
  ];

  const categories = [
    "Electronics",
    "Clothing & Fashion",
    "Home & Kitchen",
    "Books & Stationery",
    "Sports & Outdoors",
    "Health & Beauty",
    "Toys & Games",
    "Automotive"
  ];

  const handleNavigation = (item) => {
    if (item.isLogout && item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
    }
    setSidebarOpen(false);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages].slice(0, 5));
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(images[index]); // Clean up object URL
    setImages(images.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const { description, category, purchasePrice, salesPrice, stockQuantity } = formData;
    if (!description || !category || !purchasePrice || !salesPrice || !stockQuantity) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically send data to your backend
    const productData = {
      ...formData,
      purchasePrice: parseFloat(formData.purchasePrice),
      salesPrice: parseFloat(formData.salesPrice),
      stockQuantity: parseInt(formData.stockQuantity),
      images: images
    };
    
    console.log("Product data:", productData);
    
    // In a real application, you would do:
    // fetch('/api/products', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(productData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setShowSuccess(true);
    // })
    // .catch(error => console.error('Error:', error));
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        description: "",
        category: "",
        purchasePrice: "",
        salesPrice: "",
        stockQuantity: "",
      });
      // Clean up image URLs
      images.forEach(img => URL.revokeObjectURL(img));
      setImages([]);
      setShowSuccess(false);
      
      // Navigate to products page after success
      navigate("/products");
    }, 3000);
  };

  const calculateProfit = () => {
    const purchase = parseFloat(formData.purchasePrice) || 0;
    const sales = parseFloat(formData.salesPrice) || 0;
    if (purchase > 0 && sales > 0) {
      const profit = sales - purchase;
      const margin = (profit / purchase * 100).toFixed(1);
      return { profit, margin };
    }
    return { profit: 0, margin: 0 };
  };

  const { profit, margin } = calculateProfit();

  const clearForm = () => {
    setFormData({
      description: "",
      category: "",
      purchasePrice: "",
      salesPrice: "",
      stockQuantity: "",
    });
    images.forEach(img => URL.revokeObjectURL(img));
    setImages([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full transform transition-all duration-300 scale-100 animate-fadeIn">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product Added Successfully!</h3>
              <p className="text-gray-600 mb-6">
                Your product has been saved to the inventory. You will be redirected to the products page.
              </p>
              <div className="flex justify-center space-x-3">
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    navigate("/products");
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  View Products
                </button>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
                >
                  Stay Here
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row">
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

        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-5 lg:p-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:translate-x-0
        `}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Admin Panel</h2>
              <p className="text-blue-200 text-sm mt-1">Inventory Management</p>
            </div>
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
                  w-full text-left flex items-center gap-3 p-3 rounded-lg transition-colors duration-200
                  ${item.active || (location.pathname === "/add-product" && item.text === "Products")
                    ? 'bg-blue-700 text-white font-semibold' 
                    : 'hover:bg-blue-700 hover:bg-opacity-50 text-blue-100'
                  }
                  ${item.isLogout ? 'mt-8 border-t border-blue-700 pt-8' : ''}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
                {(item.active || (location.pathname === "/add-product" && item.text === "Products")) && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-blue-700">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-blue-300 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>System Online</span>
              </div>
              <p className="text-xs text-blue-400">Add Product Form</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-h-screen overflow-x-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
                <p className="text-gray-600 text-sm mt-1">Fill in the details to add a new product to your inventory</p>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate("/products")}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 text-sm"
                >
                  Back to Products
                </button>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Ready to Add
                </span>
              </div>
            </div>
          </header>

          {/* Form Content */}
          <main className="p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FileText size={20} />
                  Product Information
                </h2>
                
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter detailed product description..."
                      rows={4}
                      required
                    />
                    <p className="text-gray-500 text-sm mt-2">
                      Describe your product features, specifications, and unique selling points
                    </p>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white transition-all duration-200"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <Tag className="absolute right-3 top-3.5 text-gray-400" size={20} />
                    </div>
                  </div>

                  {/* Price Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <DollarSign size={16} />
                          Purchase Price *
                        </div>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">Tsh</span>
                        <input
                          type="number"
                          name="purchasePrice"
                          value={formData.purchasePrice}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                      <p className="text-gray-500 text-sm mt-2">Cost per unit from supplier</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <DollarSign size={16} />
                          Sales Price *
                        </div>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">Tsh</span>
                        <input
                          type="number"
                          name="salesPrice"
                          value={formData.salesPrice}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                      <p className="text-gray-500 text-sm mt-2">Selling price to customers</p>
                    </div>
                  </div>

                  {/* Profit Display */}
                  {(profit > 0 || margin > 0) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Profit per Unit</p>
                        <p className="text-xl font-bold text-green-600">
                          {profit.toLocaleString()} Tsh
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Profit Margin</p>
                        <p className="text-xl font-bold text-blue-600">
                          {margin}%
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Stock Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Hash size={16} />
                        Stock Quantity *
                      </div>
                    </label>
                    <input
                      type="number"
                      name="stockQuantity"
                      value={formData.stockQuantity}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter quantity (e.g., 60)"
                      min="0"
                      required
                    />
                    <p className="text-gray-500 text-sm mt-2">Number of units available in stock</p>
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ImageIcon size={20} />
                  Product Images
                </h2>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Upload up to 5 images. The first image will be used as the main product image.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {/* Upload Button */}
                    <label className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group">
                      <Plus className="text-gray-400 group-hover:text-blue-500 mb-2" size={24} />
                      <span className="text-sm text-gray-500 group-hover:text-blue-600">Add Image</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                        disabled={images.length >= 5}
                      />
                    </label>

                    {/* Image Previews */}
                    {images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square group">
                        <img
                          src={img}
                          alt={`Product ${idx + 1}`}
                          className="w-full h-full object-cover rounded-xl border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
                          title="Remove image"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  {images.length > 0 && (
                    <div className="mt-4 text-sm text-gray-500">
                      {images.length} of 5 images uploaded
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Plus size={20} />
                  <span>Save Product</span>
                </button>
                
                <button
                  type="button"
                  onClick={clearForm}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                >
                  Clear Form
                </button>
                
                <button
                  type="button"
                  onClick={() => navigate("/products")}
                  className="flex-1 px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>

           
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
                <span>Add Product Form</span>
                <span className="mx-2">•</span>
                <button
                  onClick={() => navigate("/help")}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Need Help?
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;