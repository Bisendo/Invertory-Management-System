import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleUserTypeSelect = (type) => {
    setFormData({ ...formData, userType: type });
    if (errors.userType) {
      setErrors({ ...errors, userType: "" });
    }
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.userType) newErrors.userType = "Select a role";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= REGISTER =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const { confirmPassword, ...dataToSend } = formData;

      const res = await axios.post(
        "http://localhost:4001/auth/register",
        dataToSend
      );

      alert(res.data.message || "Registration Successful 🎉");

      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] py-8 px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 md:p-16 mt-16 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* USER TYPE */}
            <div>
              <label className="block mb-3 font-medium text-gray-700">
                Select Your Role *
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["shopkeeper", "storekeeper"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleUserTypeSelect(type)}
                    className={`p-6 border-2 rounded-xl text-left transition ${
                      formData.userType === type
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <h3 className="font-semibold capitalize">{type}</h3>
                  </button>
                ))}
              </div>
              {errors.userType && (
                <p className="text-red-600 text-sm mt-1">{errors.userType}</p>
              )}
            </div>

            {/* NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["firstName", "lastName"].map((field) => (
                <div key={field}>
                  <label className="block mb-2 font-medium text-gray-700 capitalize">
                    {field} *
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errors[field] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors[field] && (
                    <p className="text-red-600 text-sm">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
              )}
            </div>

            {/* PASSWORDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["password", "confirmPassword"].map((field) => (
                <div key={field}>
                  <label className="block mb-2 font-medium text-gray-700 capitalize">
                    {field} *
                  </label>
                  <input
                    type="password"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      errors[field] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors[field] && (
                    <p className="text-red-600 text-sm">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="text-center mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 font-medium hover:underline"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
