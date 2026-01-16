import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiPhone, FiCheckCircle } from 'react-icons/fi';
import { useTranslation } from '../Context/TranslationContext';
import Navbar from '../Components/Navbar';

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showCongrats, setShowCongrats] = useState(false);
    const [popupStep, setPopupStep] = useState(0);
    const [redirectCountdown, setRedirectCountdown] = useState(5);

    useEffect(() => {
        if (showCongrats) {
            const timer1 = setTimeout(() => setPopupStep(1), 300);
            const timer2 = setTimeout(() => setPopupStep(2), 1800);

            const countdownInterval = setInterval(() => {
                setRedirectCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(countdownInterval);
                        navigate('/dashboard');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearInterval(countdownInterval);
            };
        }
    }, [showCongrats, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.emailOrPhone.trim()) {
            newErrors.emailOrPhone = t('emailOrPhoneRequired') || 'Email or phone is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.emailOrPhone) && !/^\d{10,}$/.test(formData.emailOrPhone.replace(/\D/g, ''))) {
            newErrors.emailOrPhone = t('invalidEmailOrPhone') || 'Invalid email or phone format';
        }

        if (!formData.password) {
            newErrors.password = t('passwordRequired') || 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = t('passwordMinLength') || 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            const mockUserData = {
                id: '123',
                name: 'John Doe',
                email: formData.emailOrPhone.includes('@') ? formData.emailOrPhone : '',
                phone: !formData.emailOrPhone.includes('@') ? formData.emailOrPhone : '',
                role: 'user'
            };

            const token = 'mock-jwt-token-' + Date.now();

            if (rememberMe) {
                localStorage.setItem('authToken', token);
                localStorage.setItem('userData', JSON.stringify(mockUserData));
            } else {
                sessionStorage.setItem('authToken', token);
                sessionStorage.setItem('userData', JSON.stringify(mockUserData));
            }

            setShowCongrats(true);
            setPopupStep(0);
            setRedirectCountdown(5);

        } catch (error) {
            console.error('Login error:', error);
            setErrors(prev => ({
                ...prev,
                submit: t('loginFailed') || 'Login failed. Please try again.'
            }));
        } finally {
            setIsLoading(false);
        }
    };

    const handleDemoLogin = () => {
        setFormData({
            emailOrPhone: 'demo@example.com',
            password: 'demo123'
        });
    };

    const closeSuccessPopup = () => {
        setShowCongrats(false);
        setPopupStep(0);
        navigate('/dashboard');
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
                <Navbar />

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-md mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                                {t('welcomeBack') || 'Welcome Back'}
                            </h1>
                            <p className="text-gray-600 text-base">
                                {t('loginDescription') || 'Sign in to your IMS account to manage your inventory efficiently.'}
                            </p>
                        </div>

                        {/* Login Form Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                            <div className="flex items-center justify-center mb-6">
                                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                                {t('loginToYourAccount') || 'Login to Your Account'}
                            </h2>
                            <p className="text-gray-600 mb-6 text-center text-sm">
                                {t('enterCredentials') || 'Enter your credentials to access your dashboard'}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Email or Phone Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('emailOrPhone') || 'Email or Phone'}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {formData.emailOrPhone.includes('@') ? (
                                                <FiMail className="h-5 w-5 text-gray-400" />
                                            ) : (
                                                <FiPhone className="h-5 w-5 text-gray-400" />
                                            )}
                                        </div>
                                        <input
                                            type="text"
                                            name="emailOrPhone"
                                            value={formData.emailOrPhone}
                                            onChange={handleChange}
                                            placeholder={t('enterEmailOrPhone') || 'Enter email or phone'}
                                            className={`w-full pl-10 pr-3 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${errors.emailOrPhone
                                                ? 'border-red-300 bg-red-50 focus:ring-red-500'
                                                : 'border-gray-300 bg-gray-50 hover:bg-white focus:ring-blue-500'
                                                }`}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    {errors.emailOrPhone && (
                                        <p className="mt-1 text-xs text-red-600 flex items-center">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.emailOrPhone}
                                        </p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {t('password') || 'Password'}
                                        </label>
                                        <Link
                                            to="/forgot-password"
                                            className="text-xs text-blue-600 hover:text-blue-700 transition-colors duration-200"
                                        >
                                            {t('forgotPassword') || 'Forgot Password'}?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiLock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder={t('enterPassword') || 'Enter your password'}
                                            className={`w-full pl-10 pr-10 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${errors.password
                                                ? 'border-red-300 bg-red-50 focus:ring-red-500'
                                                : 'border-gray-300 bg-gray-50 hover:bg-white focus:ring-blue-500'
                                                }`}
                                            disabled={isLoading}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            {showPassword ? (
                                                <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                                            ) : (
                                                <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-1 text-xs text-red-600 flex items-center">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            disabled={isLoading}
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                            {t('rememberMe') || 'Remember me'}
                                        </label>
                                    </div>
                                </div>


                                {/* Error Message */}
                                {errors.submit && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-xs text-red-600 flex items-center">
                                            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            {errors.submit}
                                        </p>
                                    </div>
                                )}

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span className="text-sm">{t('loggingIn') || 'Logging in'}...</span>
                                        </div>
                                    ) : (
                                        <span className="text-sm">{t('login') || 'Login'}</span>
                                    )}
                                </button>

                                {/* Divider */}
                                <div className="my-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-gray-500">
                                                {t('noAccount') || "Don't have an account?"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Signup Link */}
                                <div className="text-center">
                                    <Link
                                        to="/signup"
                                        className="inline-block py-2.5 px-4 w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 border border-gray-300 text-sm"
                                    >
                                        {t('createAccountHere') || 'Create New Account'}
                                    </Link>
                                </div>
                            </form>

                            {/* Security Tips */}
                            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
                                <h3 className="font-semibold text-blue-800 mb-2 flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    {t('securityTips') || 'Security Tips'}
                                </h3>
                                <ul className="space-y-1 text-xs text-blue-700">
                                    <li className="flex items-start">
                                        <span className="mr-1">•</span>
                                        <span>{t('tip1') || 'Use a strong, unique password'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">•</span>
                                        <span>{t('tip2') || 'Enable two-factor authentication'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-1">•</span>
                                        <span>{t('tip3') || 'Log out from shared devices'}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </main>

            </div>

            {/* Success Popup Modal */}
            {showCongrats && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-auto overflow-hidden">
                        {/* Background Animation */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className={`absolute -inset-8 bg-gradient-to-r from-green-400 to-blue-500 opacity-20 ${popupStep >= 1 ? 'animate-ping' : ''}`}></div>
                        </div>

                        {/* Popup Content */}
                        <div className="relative p-6">
                            <div className="flex flex-col items-center justify-center">

                                {/* Checkmark Animation */}
                                <div className="relative mb-6">
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center transform transition-all duration-1000 ${popupStep === 0 ? 'scale-0 opacity-0' :
                                        popupStep === 1 ? 'scale-110 opacity-100' :
                                            'scale-100 opacity-100'
                                        }`}>
                                        <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center transform transition-all duration-700 ${popupStep >= 1 ? 'scale-100' : 'scale-0'
                                            }`}>
                                            <FiCheckCircle
                                                className={`w-12 h-12 text-green-500 transition-all duration-1000 ${popupStep === 1 ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Confetti Effect */}
                                    {popupStep === 1 && (
                                        <>
                                            {[...Array(12)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
                                                    style={{
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: `
                              translate(-50%, -50%)
                              rotate(${i * 30}deg)
                              translateY(-50px)
                            `,
                                                        animation: `confetti 0.8s ease-out ${i * 0.05}s forwards`
                                                    }}
                                                ></div>
                                            ))}
                                        </>
                                    )}
                                </div>

                                {/* Success Message */}
                                <div className="text-center space-y-3">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {popupStep >= 2 ? t('congratulations') || 'Congratulations!' : 'Authenticating...'}
                                    </h2>

                                    <p className="text-gray-600 text-sm">
                                        {popupStep >= 2
                                            ? t('loginSuccessful') || 'Login successful! Welcome back to your dashboard.'
                                            : 'Verifying your credentials...'
                                        }
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-4 overflow-hidden">
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
                                    <div className={`pt-4 space-y-2 transition-opacity duration-500 ${popupStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                                        <button
                                            onClick={closeSuccessPopup}
                                            className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                                        >
                                            {t('goToDashboard') || 'Go to Dashboard'}
                                            <span className="ml-1">→</span>
                                        </button>

                                        <p className="text-xs text-gray-500">
                                            {t('redirectingIn') || 'Redirecting in'} {redirectCountdown} {t('seconds') || 'seconds'}...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add custom animations */}
            <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-50px) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-100px) scale(1);
            opacity: 0;
          }
        }
        
        .animate-confetti {
          animation: confetti 0.8s ease-out forwards;
        }
      `}</style>
        </>
    );
};

export default Login;