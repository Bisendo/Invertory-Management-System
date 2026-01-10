import React from 'react';
import { Routes, Route } from "react-router-dom";
import { TranslationProvider } from './Context/TranslationContext';
import Navbar from './Components/Navbar';
import Home from "./pages/LandingPage";

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
            {/* Uncomment and add these routes as you create the pages */}
            {/* 
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchResults />} />
            */}
          </Routes>
        </main>
      </div>
    </TranslationProvider>
  );
};

export default App;