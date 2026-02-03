import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "", // email or phone
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4001/auth/login", {
        email: formData.identifier, // backend uses email
        password: formData.password,
      });

      // Save token & user
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      const role = res.data.user.userType;

      // Role based navigation
      if (role === "storekeeper") {
        navigate("/dashboard");
      } else if (role === "shopkeeper") {
        navigate("/users");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email / Phone */}
            <div>
              <label className="mb-2 font-medium text-gray-700 block">
                Email or Phone
              </label>
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                placeholder="Enter email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 font-medium text-gray-700 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-3 text-gray-400">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="text-center">
            <span className="text-gray-700">Don't have an account? </span>
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
