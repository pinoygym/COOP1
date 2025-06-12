import React, { useState } from 'react';
import { DollarSign, Plus, Calendar, AlertCircle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const Loans: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const activeLoans = [
    {
      id: 1,
      type: 'Business Loan',
      amount: '$5,000.00',
      balance: '$3,250.00',
      rate: '8.5%',
      term: '24 months',
      nextPayment: '$485.50',
      dueDate: '2024-01-16',
      status: 'current'
    },
    {
      id: 2,
      type: 'Emergency Loan',
      amount: '$1,500.00',
      balance: '$875.00',
      rate: '6.0%',
      term: '12 months',
      nextPayment: '$125.75',
      dueDate: '2024-01-20',
      status: 'current'
    }
  ];

  const loanProducts = [
    {
      name: 'Salary Loan',
      description: 'Quick personal loans for members with regular income',
      maxAmount: '$10,000',
      rate: '7.5%',
      term: '12-36 months',
      features: ['Quick approval', 'Flexible terms', 'Low interest rate']
    },
    {
      name: 'Business Loan',
      description: 'Support your entrepreneurial ventures',
      maxAmount: '$25,000',
      rate: '8.5%',
      term: '12-60 months',
      features: ['Business mentorship', 'Flexible repayment', 'Growth support']
    },
    {
      name: 'Emergency Loan',
      description: 'Fast access to funds for unexpected expenses',
      maxAmount: '$5,000',
      rate: '6.0%',
      term: '6-24 months',
      features: ['Same-day approval', 'Minimal documentation', 'Emergency support']
    },
    {
      name: 'Educational Loan',
      description: 'Invest in your future with educational financing',
      maxAmount: '$15,000',
      rate: '5.5%',
      term: '12-48 months',
      features: ['Deferred payments', 'Student discounts', 'Career support']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Loan Management</h1>
          <p className="text-slate-600">Manage your loans and apply for new financing</p>
        </div>
        <button 
          onClick={() => setShowApplicationForm(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Apply for Loan</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm text-orange-600 font-medium">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">$4,125.00</h3>
          <p className="text-slate-600">Total Outstanding</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">Due Soon</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">$611.25</h3>
          <p className="text-slate-600">Next Payment</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600 font-medium">Credit Score</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">750</h3>
          <p className="text-slate-600">Excellent Rating</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'active', label: 'Active Loans' },
              { id: 'products', label: 'Loan Products' },
              { id: 'history', label: 'Loan History' }
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
          {activeTab === 'active' && (
            <div className="space-y-6">
              {activeLoans.map((loan) => (
                <div key={loan.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{loan.type}</h3>
                      <p className="text-slate-600">Loan ID: LOAN-{loan.id.toString().padStart(6, '0')}</p>
                    </div>
                    <span className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Current</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-slate-500">Original Amount</p>
                      <p className="font-semibold text-slate-900">{loan.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Outstanding Balance</p>
                      <p className="font-semibold text-slate-900">{loan.balance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Interest Rate</p>
                      <p className="font-semibold text-slate-900">{loan.rate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Term</p>
                      <p className="font-semibold text-slate-900">{loan.term}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm text-slate-500">Next Payment Due</p>
                      <p className="font-semibold text-slate-900">{loan.nextPayment} on {loan.dueDate}</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Make Payment
                      </button>
                      <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'products' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loanProducts.map((product, index) => (
                <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Max Amount:</span>
                      <span className="font-medium text-slate-900">{product.maxAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Interest Rate:</span>
                      <span className="font-medium text-slate-900">{product.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Term:</span>
                      <span className="font-medium text-slate-900">{product.term}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-slate-900 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="text-center py-12">
              <Clock className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Loan History</h3>
              <p className="text-slate-600">Your completed and closed loans will appear here</p>
            </div>
          )}
        </div>
      </div>

      {/* Loan Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-900">Loan Application</h2>
                <button 
                  onClick={() => setShowApplicationForm(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Plus className="h-5 w-5 rotate-45 text-slate-500" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Loan Type</label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select loan type</option>
                      <option>Salary Loan</option>
                      <option>Business Loan</option>
                      <option>Emergency Loan</option>
                      <option>Educational Loan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Loan Amount</label>
                    <input 
                      type="number" 
                      placeholder="Enter amount"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Loan Term (months)</label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select term</option>
                      <option>6 months</option>
                      <option>12 months</option>
                      <option>24 months</option>
                      <option>36 months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Purpose</label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select purpose</option>
                      <option>Business Capital</option>
                      <option>Personal Use</option>
                      <option>Education</option>
                      <option>Emergency</option>
                      <option>Home Improvement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Information</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide additional details about your loan request..."
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded border-slate-300" />
                  <label htmlFor="terms" className="text-sm text-slate-600">
                    I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button 
                    type="submit"
                    className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loans;