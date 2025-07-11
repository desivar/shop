import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, LogOut, ShoppingBag, Heart, Package, Shield, Palette, Users, Store, Star, Settings } from 'lucide-react';

const HandcraftedHavenAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login', 'register', 'select-type'
  const [selectedUserType, setSelectedUserType] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    businessName: '',
    craftingExperience: '',
    specialties: '',
    bio: '',
    adminCode: ''
  });

  const userTypes = [
    {
      id: 'customer',
      title: 'Customer',
      icon: ShoppingBag,
      description: 'Shop for unique handcrafted items',
      color: 'green',
      features: ['Browse products', 'Purchase items', 'Save to wishlist', 'Track orders']
    },
    {
      id: 'crafter',
      title: 'Crafter/Artisan',
      icon: Palette,
      description: 'Sell your handcrafted creations',
      color: 'orange',
      features: ['List products', 'Manage inventory', 'Track sales', 'Connect with customers']
    },
    {
      id: 'admin',
      title: 'Administrator',
      icon: Shield,
      description: 'Manage the platform',
      color: 'red',
      features: ['User management', 'Product moderation', 'Analytics', 'Platform settings']
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUserTypeSelection = (type) => {
    setSelectedUserType(type);
    setAuthMode('register');
  };

  const handleSubmit = () => {
    // Simulate registration/login
    const userData = {
      ...formData,
      userType: selectedUserType,
      id: Date.now()
    };
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSelectedUserType('');
    setAuthMode('login');
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      businessName: '',
      craftingExperience: '',
      specialties: '',
      bio: '',
      adminCode: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderUserDashboard = () => {
    const userType = currentUser?.userType;
    
    if (userType === 'admin') {
      return (
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="text-red-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">Users</h3>
            </div>
            <p className="text-2xl font-bold text-red-600 mb-2">1,234</p>
            <p className="text-sm text-gray-600">Total registered users</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
            <div className="flex items-center space-x-3 mb-4">
              <Store className="text-orange-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">Products</h3>
            </div>
            <p className="text-2xl font-bold text-orange-600 mb-2">567</p>
            <p className="text-sm text-gray-600">Active listings</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <ShoppingBag className="text-green-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">Orders</h3>
            </div>
            <p className="text-2xl font-bold text-green-600 mb-2">89</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="text-purple-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Manage
            </button>
          </div>
        </div>
      );
    }

    if (userType === 'crafter') {
      return (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
            <div className="flex items-center space-x-3 mb-4">
              <Package className="text-orange-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">My Products</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage your craft listings</p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              View Products
            </button>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <ShoppingBag className="text-green-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">Sales</h3>
            </div>
            <p className="text-gray-600 mb-4">Track your earnings</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              View Sales
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <Star className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">Reviews</h3>
            </div>
            <p className="text-gray-600 mb-4">Customer feedback</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Reviews
            </button>
          </div>
        </div>
      );
    }

    // Customer dashboard
    return (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <ShoppingBag className="text-green-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">My Orders</h3>
          </div>
          <p className="text-gray-600 mb-4">Track your handcrafted treasures</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            View Orders
          </button>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="text-red-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Wishlist</h3>
          </div>
          <p className="text-gray-600 mb-4">Save your favorite items</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            View Wishlist
          </button>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <User className="text-purple-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Profile</h3>
          </div>
          <p className="text-gray-600 mb-4">Manage your account</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    );
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-green-600 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Handcrafted Haven</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-green-200 transition-colors">Home</a>
              <a href="#" className="hover:text-green-200 transition-colors">Products</a>
              <a href="#" className="hover:text-green-200 transition-colors">Artisans</a>
              <a href="#" className="hover:text-green-200 transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-green-700 px-3 py-1 rounded-full capitalize">
                {currentUser?.userType}
              </span>
              <button
                onClick={handleLogout}
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* User Dashboard */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <User size={32} className="text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Welcome back, {currentUser?.firstName || 'User'}!
                </h2>
                <p className="text-gray-600">{currentUser?.email}</p>
                {currentUser?.userType === 'crafter' && currentUser?.businessName && (
                  <p className="text-sm text-orange-600 font-medium">{currentUser.businessName}</p>
                )}
              </div>
            </div>
            
            {renderUserDashboard()}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <ShoppingBag size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Account created successfully</p>
                  <p className="text-sm text-gray-600">Welcome to Handcrafted Haven!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // User Type Selection
  if (authMode === 'select-type') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-green-600 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Handcrafted Haven</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-green-200 transition-colors">Home</a>
              <a href="#" className="hover:text-green-200 transition-colors">Products</a>
              <a href="#" className="hover:text-green-200 transition-colors">Artisans</a>
              <a href="#" className="hover:text-green-200 transition-colors">About</a>
            </nav>
          </div>
        </header>

        <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Account Type</h2>
              <p className="text-gray-600 mb-8">Select the option that best describes how you'll use Handcrafted Haven</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {userTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div
                    key={type.id}
                    className={`bg-white rounded-lg shadow-md border-2 border-gray-200 hover:border-${type.color}-500 transition-all duration-300 cursor-pointer transform hover:scale-105`}
                    onClick={() => handleUserTypeSelection(type.id)}
                  >
                    <div className="p-6">
                      <div className={`w-16 h-16 bg-${type.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                        <IconComponent size={32} className={`text-${type.color}-600`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-center mb-4">{type.description}</p>
                      <ul className="space-y-2 mb-6">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 bg-${type.color}-500 rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full bg-${type.color}-600 text-white py-2 rounded-lg hover:bg-${type.color}-700 transition-colors`}>
                        Select {type.title}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <button
                onClick={() => setAuthMode('login')}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                ← Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Login/Register Form
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Handcrafted Haven</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-green-200 transition-colors">Home</a>
            <a href="#" className="hover:text-green-200 transition-colors">Products</a>
            <a href="#" className="hover:text-green-200 transition-colors">Artisans</a>
            <a href="#" className="hover:text-green-200 transition-colors">About</a>
          </nav>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <User size={32} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {authMode === 'login' ? 'Welcome Back' : `Join as ${selectedUserType ? userTypes.find(t => t.id === selectedUserType)?.title : 'User'}`}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {authMode === 'login' 
                ? 'Sign in to your account to continue' 
                : 'Create your account to get started'
              }
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              {authMode === 'register' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {authMode === 'register' && selectedUserType === 'crafter' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name (Optional)
                  </label>
                  <input
                    name="businessName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your Craft Business"
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="confirmPassword"
                      type="password"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {authMode === 'register' && selectedUserType === 'admin' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Admin Code
                  </label>
                  <input
                    name="adminCode"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter admin authorization code"
                    value={formData.adminCode}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {authMode === 'register' && selectedUserType === 'crafter' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Craft Specialties
                  </label>
                  <input
                    name="specialties"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Pottery, Woodworking, Jewelry"
                    value={formData.specialties}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  {authMode === 'login' ? 'Remember me' : 'I agree to the terms and conditions'}
                </label>
              </div>

              {authMode === 'login' && (
                <div className="text-sm">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500">
                    Forgot password?
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
              >
                {authMode === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <button
                  type="button"
                  onClick={() => {
                    if (authMode === 'login') {
                      setAuthMode('select-type');
                    } else {
                      setAuthMode('login');
                      setSelectedUserType('');
                    }
                  }}
                  className="ml-1 font-medium text-green-600 hover:text-green-500"
                >
                  {authMode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandcraftedHavenAuth;