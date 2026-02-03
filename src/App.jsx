import React from 'react';
import { Routes, Route } from "react-router-dom";
import { TranslationProvider } from './Context/TranslationContext';
import Home from "./pages/LandingPage";
import RegisterForm from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OrderManagement from './pages/AddNewOrder';
import Products from './pages/Products';
import HelpCenter from './pages/Helpcenter';
import Orders from './pages/Orders';
import AddProductForm from './pages/AddNewProduct';
import Users from './pages/Users';
import AboutUs from './pages/Aboutus';

// Import other pages as you create them
// import Inventory from "./pages/Inventory";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import Reports from "./pages/Reports";
// import Settings from "./pages/Settings";
// import Profile from "./pages/Profile";

const App = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/add-order" element={<OrderManagement />} />
            <Route path="/products" element={<Products />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/add-product" element={<AddProductForm />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Aboutus" element={<AboutUs />} />




          </Routes>
        </main>
      </div>
    </TranslationProvider>
  );
};

export default App;