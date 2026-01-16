import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupStep, setPopupStep] = useState(0); // 0: initial, 1: animation, 2: complete
  const navigate = useNavigate();

  useEffect(() => {
    if (showSuccessPopup) {
      // Animation sequence
      const timer1 = setTimeout(() => setPopupStep(1), 300);
      const timer2 = setTimeout(() => setPopupStep(2), 1800);
      
      // Auto redirect after showing success message
      const redirectTimer = setTimeout(() => {
        navigate('/login');
      }, 4500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(redirectTimer);
      };
    }
  }, [showSuccessPopup, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Store registration data in localStorage
        const userData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          name: `${formData.firstName} ${formData.lastName}`
        };
        
        localStorage.setItem('authToken', 'dummy-jwt-token-' + Date.now());
        localStorage.setItem('userData', JSON.stringify(userData));
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: ''
        });
        
        // Show success popup
        setShowSuccessPopup(true);
        setPopupStep(0);
        
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const formatPhoneNumber = (value) => {
    const phone = value.replace(/\D/g, '');
    if (phone.length <= 3) return phone;
    if (phone.length <= 6) return `(${phone.slice(0,3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({
      ...formData,
      phoneNumber: formatted
    });
    if (errors.phoneNumber) {
      setErrors({
        ...errors,
        phoneNumber: ''
      });
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setPopupStep(0);
    navigate('/login');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <Navbar />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Create Your Account
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of businesses managing their inventory efficiently..
              </p>
            </div>

            {/* Registration Form Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Left Side - Benefits (Hidden on mobile) */}
                <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-10">
                  <div className="h-full flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Why Join Us?</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-blue-500 bg-opacity-20 p-2 rounded-lg mr-4">
                          <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">Real-time Inventory Tracking</h3>
                          <p className="text-blue-100 mt-1">Monitor stock levels across all locations in real-time</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-500 bg-opacity-20 p-2 rounded-lg mr-4">
                          <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">Automated Reports</h3>
                          <p className="text-blue-100 mt-1">Generate insightful analytics and reports automatically</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-500 bg-opacity-20 p-2 rounded-lg mr-4">
                          <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">Secure & Private</h3>
                          <p className="text-blue-100 mt-1">Enterprise-grade security for your business data</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-blue-400 border-opacity-30">
                      <p className="text-blue-200 italic text-sm">
                        "This platform reduced our inventory costs by 40% and improved operational efficiency."
                      </p>
                      <p className="text-white font-semibold mt-2">- Sarah Johnson, Operations Director</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Registration Form */}
                <div className="md:w-3/5 p-6 sm:p-8 lg:p-10">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.firstName 
                              ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                              : 'border-gray-300 bg-gray-50 hover:bg-white'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.lastName 
                              ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                              : 'border-gray-300 bg-gray-50 hover:bg-white'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          errors.email 
                            ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                            : 'border-gray-300 bg-gray-50 hover:bg-white'
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          errors.phoneNumber 
                            ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                            : 'border-gray-300 bg-gray-50 hover:bg-white'
                        }`}
                        placeholder="(123) 456-7890"
                        maxLength="14"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                          Password *
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.password 
                              ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                              : 'border-gray-300 bg-gray-50 hover:bg-white'
                          }`}
                          placeholder="Create a password"
                        />
                        {errors.password && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.password}
                          </p>
                        )}
                        <div className="mt-2 space-y-1">
                          <p className="text-xs text-gray-500 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            At least 8 characters
                          </p>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm Password *
                        </label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.confirmPassword 
                              ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                              : 'border-gray-300 bg-gray-50 hover:bg-white'
                          }`}
                          placeholder="Re-enter your password"
                        />
                        {errors.confirmPassword && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          required
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-gray-700">
                          I agree to the{' '}
                          <a href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 ${
                          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Creating Account...
                          </div>
                        ) : (
                          'Create Account'
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Divider */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-600">
                      Already have an account?{' '}
                      <button
                        onClick={handleLoginRedirect}
                        className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline focus:outline-none"
                      >
                        Login here
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Benefits Section */}
            <div className="mt-8 md:hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Benefits of Joining</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real-time inventory tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated reporting
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Multi-user collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute -inset-10 bg-gradient-to-r from-green-400 to-blue-500 opacity-20 ${popupStep >= 1 ? 'animate-ping' : ''}`}></div>
            </div>
            
            {/* Popup Content */}
            <div className="relative p-8">
              {/* Animation Container */}
              <div className="flex flex-col items-center justify-center">
                
                {/* Checkmark Animation */}
                <div className="relative mb-8">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center transform transition-all duration-1000 ${
                    popupStep === 0 ? 'scale-0 opacity-0' : 
                    popupStep === 1 ? 'scale-110 opacity-100' : 
                    'scale-100 opacity-100'
                  }`}>
                    <div className={`w-20 h-20 rounded-full bg-white flex items-center justify-center transform transition-all duration-700 ${
                      popupStep >= 1 ? 'scale-100' : 'scale-0'
                    }`}>
                      <svg 
                        className={`w-16 h-16 text-green-500 transition-all duration-1000 ${
                          popupStep === 1 ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Confetti Effect */}
                  {popupStep === 1 && (
                    <>
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `
                              translate(-50%, -50%)
                              rotate(${i * 30}deg)
                              translateY(-60px)
                            `,
                            animation: `confetti 0.8s ease-out ${i * 0.05}s forwards`
                          }}
                        ></div>
                      ))}
                      <style jsx>{`
                        @keyframes confetti {
                          0% {
                            transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-60px) scale(0);
                            opacity: 0;
                          }
                          50% {
                            opacity: 1;
                          }
                          100% {
                            transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-120px) scale(1);
                            opacity: 0;
                          }
                        }
                      `}</style>
                    </>
                  )}
                </div>

                {/* Success Message */}
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {popupStep >= 2 ? 'Registration Successful!' : 'Processing...'}
                  </h2>
                  
                  <p className="text-gray-600">
                    {popupStep >= 2 
                      ? `Welcome aboard, ${formData.firstName}! Your account has been created successfully. You can now access all features of our inventory management system.`
                      : 'Setting up your account...'
                    }
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-6 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-300 ease-out"
                      style={{ 
                        width: popupStep === 0 ? '0%' : 
                               popupStep === 1 ? '50%' : 
                               '100%' 
                      }}
                    ></div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`pt-6 space-y-3 transition-opacity duration-500 ${popupStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                      onClick={closeSuccessPopup}
                      className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Go to Login
                      <span className="ml-2">→</span>
                    </button>
                    
                    <p className="text-sm text-gray-500">
                      Redirecting in {popupStep >= 2 ? '3' : '5'} seconds...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForm;