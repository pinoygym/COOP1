import React, { useState } from 'react';
import { Building2, ShoppingCart, Shield, Home, TrendingUp, Users, MapPin, Star } from 'lucide-react';

const Ventures: React.FC = () => {
  const [activeTab, setActiveTab] = useState('marketplace');

  const ventures = [
    {
      id: 1,
      name: 'CO-OP Mart',
      type: 'Consumer Cooperative',
      description: 'Your neighborhood grocery store with member discounts and quality products',
      status: 'active',
      memberDiscount: '15%',
      location: 'Main Street Plaza',
      revenue: '$125,000',
      members: 450,
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 2,
      name: 'Community Insurance',
      type: 'Insurance Services',
      description: 'Affordable group insurance plans for life, health, and property protection',
      status: 'active',
      memberDiscount: '25%',
      location: 'Online & Office',
      revenue: '$89,000',
      members: 320,
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Housing Project Alpha',
      type: 'Real Estate Development',
      description: 'Affordable housing units for cooperative members',
      status: 'planning',
      memberDiscount: 'Priority Access',
      location: 'Riverside District',
      revenue: 'In Development',
      members: 150,
      icon: Home,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Fresh Organic Vegetables',
      category: 'Groceries',
      price: '$12.99/kg',
      memberPrice: '$10.99/kg',
      discount: '15%',
      rating: 4.8,
      inStock: true,
      venture: 'CO-OP Mart'
    },
    {
      id: 2,
      name: 'Whole Grain Bread',
      category: 'Bakery',
      price: '$3.50',
      memberPrice: '$2.98',
      discount: '15%',
      rating: 4.6,
      inStock: true,
      venture: 'CO-OP Mart'
    },
    {
      id: 3,
      name: 'Family Health Insurance',
      category: 'Insurance',
      price: '$280/month',
      memberPrice: '$210/month',
      discount: '25%',
      rating: 4.9,
      inStock: true,
      venture: 'Community Insurance'
    },
    {
      id: 4,
      name: 'Premium Life Coverage',
      category: 'Insurance',
      price: '$85/month',
      memberPrice: '$64/month',
      discount: '25%',
      rating: 4.7,
      inStock: true,
      venture: 'Community Insurance'
    }
  ];

  const housingUnits = [
    {
      id: 1,
      type: '2-Bedroom Apartment',
      size: '850 sq ft',
      price: '$185,000',
      memberPrice: '$165,000',
      status: 'available',
      features: ['Modern Kitchen', 'Balcony', 'Parking Space', 'Community Garden']
    },
    {
      id: 2,
      type: '3-Bedroom Townhouse',
      size: '1,200 sq ft',
      price: '$245,000',
      memberPrice: '$220,000',
      status: 'reserved',
      features: ['Private Yard', 'Garage', 'Storage Room', 'Playground Access']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'planning': return 'bg-yellow-100 text-yellow-700';
      case 'paused': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Cooperative Ventures</h1>
          <p className="text-slate-600">Explore and participate in our multipurpose business ventures</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Propose New Venture
        </button>
      </div>

      {/* Ventures Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ventures.map((venture) => {
          const Icon = venture.icon;
          return (
            <div key={venture.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${venture.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(venture.status)}`}>
                    {venture.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{venture.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{venture.type}</p>
                <p className="text-slate-600 mb-4">{venture.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Member Discount:</span>
                    <span className="font-medium text-green-600">{venture.memberDiscount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-medium text-slate-900">{venture.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Revenue:</span>
                    <span className="font-medium text-slate-900">{venture.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Active Members:</span>
                    <span className="font-medium text-slate-900">{venture.members}</span>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'marketplace', label: 'Marketplace' },
              { id: 'housing', label: 'Housing Units' },
              { id: 'analytics', label: 'Performance' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'marketplace' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">Featured Products & Services</h3>
                <div className="flex space-x-3">
                  <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>All Categories</option>
                    <option>Groceries</option>
                    <option>Insurance</option>
                    <option>Services</option>
                  </select>
                  <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>All Ventures</option>
                    <option>CO-OP Mart</option>
                    <option>Community Insurance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-slate-900">{product.name}</h4>
                        <p className="text-sm text-slate-500">{product.venture}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600">({product.rating})</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500">Regular Price:</span>
                          <span className="text-sm line-through text-slate-400">{product.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500">Member Price:</span>
                          <span className="font-semibold text-green-600">{product.memberPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500">You Save:</span>
                          <span className="font-semibold text-blue-600">{product.discount}</span>
                        </div>
                      </div>
                    </div>

                    <button className={`w-full py-2 rounded-lg transition-colors ${
                      product.inStock 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}>
                      {product.category === 'Insurance' ? 'Get Quote' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'housing' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">Housing Project Alpha</h3>
                <div className="flex space-x-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                    Phase 1 - Planning
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Register Interest
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {housingUnits.map((unit) => (
                  <div key={unit.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-slate-900">{unit.type}</h4>
                        <p className="text-sm text-slate-500">{unit.size}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        unit.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {unit.status}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-500">Market Price:</span>
                        <span className="text-sm line-through text-slate-400">{unit.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-500">Member Price:</span>
                        <span className="font-semibold text-green-600">{unit.memberPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-500">You Save:</span>
                        <span className="font-semibold text-blue-600">
                          ${parseInt(unit.price.replace(/[$,]/g, '')) - parseInt(unit.memberPrice.replace(/[$,]/g, ''))}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-medium text-slate-900 mb-2">Features</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {unit.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className={`w-full py-2 rounded-lg transition-colors ${
                      unit.status === 'available' 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}>
                      {unit.status === 'available' ? 'Reserve Unit' : 'Already Reserved'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-2">Housing Project Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-blue-600 font-medium">Total Units:</span>
                    <p className="text-blue-800">24 units planned</p>
                  </div>
                  <div>
                    <span className="text-blue-600 font-medium">Construction Start:</span>
                    <p className="text-blue-800">Q2 2024</p>
                  </div>
                  <div>
                    <span className="text-blue-600 font-medium">Expected Completion:</span>
                    <p className="text-blue-800">Q4 2025</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900">Venture Performance</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-sm text-green-600 font-medium">+12.5%</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">$214,000</h4>
                  <p className="text-slate-600">Total Revenue YTD</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-sm text-blue-600 font-medium">+8.3%</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">920</h4>
                  <p className="text-slate-600">Active Participants</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Building2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-sm text-purple-600 font-medium">3 Active</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">5</h4>
                  <p className="text-slate-600">Total Ventures</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Venture Breakdown</h4>
                <div className="space-y-4">
                  {ventures.map((venture) => {
                    const revenueValue = venture.revenue === 'In Development' ? 0 : parseInt(venture.revenue.replace(/[$,]/g, ''));
                    const totalRevenue = 214000;
                    const percentage = totalRevenue > 0 ? (revenueValue / totalRevenue) * 100 : 0;
                    
                    return (
                      <div key={venture.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${venture.color}`}>
                            <venture.icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-slate-900">{venture.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${Math.max(percentage, 2)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-20 text-right">
                            {venture.revenue}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ventures;