import { useState } from "react";
import { Minus, Plus, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function OrdersPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "JBL Headsets",
      price: 300000,
      stock: 30,
      qty: 2,
      image: "https://images.unsplash.com/photo-1518443895914-5b9d37b1c71f",
    },
    {
      id: 2,
      name: "Speaker",
      price: 120000,
      stock: 10,
      qty: 4,
      image: "https://images.unsplash.com/photo-1585386959984-a41552262d42",
    },
    {
      id: 3,
      name: "JBL Speaker",
      price: 650000,
      stock: 20,
      qty: 0,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    },
    {
      id: 4,
      name: "Samsung TV",
      price: 2500000,
      stock: 40,
      qty: 0,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
    },
  ]);

  const updateQty = (id, type) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              qty:
                type === "inc"
                  ? Math.min(p.qty + 1, p.stock)
                  : Math.max(p.qty - 1, 0),
            }
          : p
      )
    );
  };

  const totalProducts = products.filter((p) => p.qty > 0).length;
  const totalUnits = products.reduce((sum, p) => sum + p.qty, 0);
  const totalPrice = products.reduce((sum, p) => sum + p.qty * p.price, 0);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠", active: location.pathname === "/dashboard" },
    { name: "Orders", path: "/orders", icon: "📦", active: location.pathname === "/orders" },
    { name: "Products", path: "/products", icon: "📊", active: location.pathname === "/products" },
    { name: "Users", path: "/users", icon: "👥", active: location.pathname === "/users" },
    { name: "Help center", path: "/help", icon: "❓", active: location.pathname === "/help" },
    { name: "Logout", path: "/login", icon: "🚪", active: false, isLogout: true },
  ];

  const handleNavigation = (path, isLogout = false) => {
    if (isLogout) {
      // Handle logout logic here
      console.log("Logging out...");
      // Clear any user session/tokens
      // localStorage.removeItem('authToken');
      // Then navigate to login
    }
    navigate(path);
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const handleAddOrder = () => {
    // Get selected products
    const selectedProducts = products.filter(p => p.qty > 0);
    
    if (selectedProducts.length === 0) {
      alert("Please select at least one product to add to order");
      return;
    }

    // Prepare order data
    const orderData = {
      products: selectedProducts,
      totalProducts,
      totalUnits,
      totalPrice,
      timestamp: new Date().toISOString(),
      status: "pending"
    };

    console.log("Order created:", orderData);
    
    // In a real app, you would:
    // 1. Save order to backend
    // 2. Update product stock
    // 3. Show success message
    // 4. Redirect to orders list or show receipt
    
    alert(`Order created successfully!\nTotal: ${totalPrice.toLocaleString()} Tsh\nProducts: ${totalProducts}`);
    
    // Reset quantities after order
    setProducts(prev => prev.map(p => ({ ...p, qty: 0 })));
  };

  const handleSaveDraft = () => {
    const selectedProducts = products.filter(p => p.qty > 0);
    
    if (selectedProducts.length === 0) {
      alert("No items selected to save as draft");
      return;
    }

    const draftData = {
      products: selectedProducts,
      totalProducts,
      totalUnits,
      totalPrice,
      savedAt: new Date().toISOString()
    };

    // Save to localStorage or backend
    localStorage.setItem('orderDraft', JSON.stringify(draftData));
    alert("Order saved as draft successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-950 text-white rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-40 w-64 bg-blue-950 text-white p-6 flex-col gap-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:translate-x-0 md:flex
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Admin</h2>
            <p className="text-blue-300 text-sm mt-1">admin@example.com</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 hover:bg-blue-900 rounded"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="space-y-2 text-sm flex-1">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item.path, item.isLogout)}
              className={`
                flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200
                ${item.active 
                  ? 'bg-blue-800 text-white font-semibold' 
                  : 'hover:bg-blue-900 text-blue-100'
                }
                ${item.isLogout ? 'mt-6 border-t border-blue-800 pt-6' : ''}
              `}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
              {item.active && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto pt-6 border-t border-blue-800">
          <p className="text-sm text-blue-300">IMS v2.0</p>
          <p className="text-xs text-blue-400 mt-1">© 2024 Inventory System</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-blue-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Create New Order</h1>
              <p className="text-gray-600 mt-2">Select products and quantities for your order</p>
            </div>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-lg">
              Order ID: <span className="font-mono font-semibold">ORD-{Date.now().toString().slice(-6)}</span>
            </div>
          </div>
        </div>

        {/* Products Card */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-blue-100 p-4 md:p-6 space-y-4 md:space-y-6 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Select Products</h2>
            <span className="text-sm text-gray-500">
              {products.filter(p => p.qty > 0).length} of {products.length} selected
            </span>
          </div>
          
          {products.map((p) => (
            <div
              key={p.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 md:pb-6 border-b last:border-b-0"
            >
              {/* Product Info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 flex-1">
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg md:rounded-xl object-cover flex-shrink-0"
                  />
                  {p.qty > 0 && (
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {p.qty}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg">{p.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2 mt-1">
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Price per unit:</span>{" "}
                      <span className="font-semibold text-gray-900">
                        {p.price.toLocaleString()} Tsh
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Available units:</span>{" "}
                      <span className={`font-semibold ${p.stock < 10 ? 'text-red-600' : 'text-green-600'}`}>
                        {p.stock}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Control and Total */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-end gap-4">
                {/* Quantity Controls */}
                <div className="flex items-center justify-between sm:justify-start gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQty(p.id, "dec")}
                      disabled={p.qty === 0}
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 font-semibold text-gray-800 min-w-[3rem] text-center">
                      {p.qty}
                    </span>
                    <button
                      onClick={() => updateQty(p.id, "inc")}
                      disabled={p.qty >= p.stock}
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Total:</p>
                  <p className="font-bold text-green-600 text-base md:text-lg min-w-[120px]">
                    {(p.qty * p.price).toLocaleString()} Tsh
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-blue-100 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Order Summary */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                  <p className="text-sm text-gray-600">Products</p>
                  <p className="text-xl font-bold text-blue-700">{totalProducts}</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3 md:p-4">
                  <p className="text-sm text-gray-600">Units</p>
                  <p className="text-xl font-bold text-green-700">{totalUnits}</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-3 md:p-4">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-xl font-bold text-purple-700">
                    {totalPrice.toLocaleString()} Tsh
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleSaveDraft}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Save as Draft
              </button>
              <button 
                onClick={handleAddOrder}
                className="px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white rounded-lg font-medium shadow-sm transition-colors"
              >
                Add Order
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium mb-1">Order Notes:</p>
                <p className="text-gray-500">No special instructions</p>
              </div>
              <div className="text-right">
                <p className="font-medium mb-1">Order Status:</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  Draft
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Action Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-lg font-bold text-green-600">
                {totalPrice.toLocaleString()} Tsh
              </p>
            </div>
            <button 
              onClick={handleAddOrder}
              className="px-6 py-3 bg-blue-950 text-white rounded-lg font-medium"
            >
              Add Order
            </button>
          </div>
        </div>
      </main>

      {/* Empty space for mobile bottom bar */}
      <div className="md:hidden h-20"></div>
    </div>
  );
}