import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TEXT = "Welcome to Inventory Management System";

const Landing = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full text-white relative overflow-hidden">

      {/* 🌄 Background image for SMALL screens */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          alt="Inventory"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/85"></div>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-6 sm:px-12 md:bg-blue-950/80">

          {/* Typing Title */}
          <motion.h1
            key={key}
            initial={{ width: "0ch" }}
            animate={{ width: `${TEXT.length}ch` }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 pr-2
                       text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          >
            {TEXT}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 max-w-xl"
          >
            Manage stock, track products, and control your business operations
            faster and smarter using our modern inventory platform.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate("/login")}
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg active:scale-95 transition"
            >
              Get Started
            </button>

            <button className="border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold transition">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE (Desktop only) */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Inventory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>

      </div>
    </div>
  );
};

export default Landing;
