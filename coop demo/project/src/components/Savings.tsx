import React, { useState } from 'react';
import { PiggyBank, TrendingUp, Plus, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';

const Savings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('accounts');

  const savingsAccounts = [
    {
      id: 1,
      name: 'Regular Savings',
      type: 'Primary Account',
      balance: '$8,450.00',
      rate: '3.5%',
      growth: '+$125.50',
      status: 'active'
    },
    {
      id: 2,
      name: 'Time Deposit',
      type: '12-Month CD',
      balance: '$3,000.00',
      rate: '5.2%',
      growth: '+$78.00',
      status: 'locked',
      maturityDate: '2024-08-15'
    },
    {
      id: 3,
      name: 'Emergency Fund',
      type: 'High-Yield Savings',
      balance: '$1,000.00',
      rate: '4.0%',
      growth: '+$12.50',
      status: 'active'
    }
  ];

  const recentTransactions = [
    { id: 1, type: 'deposit', description: 'Salary Deposit', amount: '+$2,500.00', date: '2024-01-15', account: 'Regular Savings' },
    { id: 2, type: 'withdrawal', description: 'ATM Withdrawal', amount: '-$200.00', date: '2024-01-14', account: 'Regular Savings' },
    { id: 3, type: 'interest', description: 'Interest Credit', amount: '+$15.75', date: '2024-01-12', account: 'Time Deposit' },
    { id: 4, type: 'transfer', description: 'Internal Transfer', amount: '+$300.00', date: '2024-01-10', account: 'Emergency Fund' },
    { id: 5, type: 'deposit', description: 'Share Capital', amount: '+$100.00', date: '2024-01-08', account: 'Regular Savings' }
  ];

  const savingsProducts = [
    {
      name: 'Youth Savings Account',
      description: 'Special savings account for members under 25',
      minBalance: '$25.00',
      rate: '4.5%',
      features: ['No monthly fees', 'Higher interest rate', 'Financial education resources']
    },
    {
      name: 'Christmas Club',
      description: 'Save throughout the year for holiday expenses',
      minBalance: '$50.00',
      rate: '3.0%',
      features: ['Automatic deposits', 'Holiday bonus', 'Cannot withdraw until November']
    },
    {
      name: 'Vacation Savings',
      description: 'Dedicated account for travel and vacation funds',
      minBalance: '$100.00',
      rate: '3.8%',
      features: ['Goal tracking', 'Travel discounts', 'Flexible deposits']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Savings Management</h1>
          <p className="text-slate-600">Track and manage your savings accounts</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-5 w-5" />
          <span>New Account</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <PiggyBank className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+5.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">$12,450.00</h3>
          <p className="text-slate-600">Total Savings</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600 font-medium">This Month</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">$216.00</h3>
          <p className="text-slate-600">Interest Earned</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm text-purple-600 font-medium">Avg Rate</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">4.1%</h3>
          <p className="text-slate-600">Annual Yield</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'accounts', label: 'My Accounts' },
              { id: 'transactions', label: 'Transactions' },
              { id: 'products', label: 'Savings Products' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'accounts' && (
            <div className="space-y-6">
              {savingsAccounts.map((account) => (
                <div key={account.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{account.name}</h3>
                      <p className="text-slate-600">{account.type}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        account.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {account.status === 'active' ? 'Active' : 'Locked'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-slate-500">Current Balance</p>
                      <p className="text-xl font-bold text-slate-900">{account.balance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Interest Rate</p>
                      <p className="font-semibold text-green-600">{account.rate} APY</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Monthly Growth</p>
                      <p className="font-semibold text-green-600">{account.growth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">
                        {account.maturityDate ? 'Maturity Date' : 'Account Type'}
                      </p>
                      <p className="font-semibold text-slate-900">
                        {account.maturityDate || account.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <ArrowUpRight className="h-4 w-4 inline mr-1" />
                      Deposit
                    </button>
                    {account.status === 'active' && (
                      <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                        <ArrowDownRight className="h-4 w-4 inline mr-1" />
                        Withdraw
                      </button>
                    )}
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">Recent Transactions</h3>
                <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>All Accounts</option>
                  <option>Regular Savings</option>
                  <option>Time Deposit</option>
                  <option>Emergency Fund</option>
                </select>
              </div>

              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'deposit' || transaction.type === 'interest' ? 'bg-green-100' :
                        transaction.type === 'withdrawal' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        {transaction.type === 'deposit' || transaction.type === 'interest' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : transaction.type === 'withdrawal' ? (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        ) : (
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{transaction.description}</p>
                        <p className="text-sm text-slate-500">{transaction.account} • {transaction.date}</p>
                      </div>
                    </div>
                    <p className={`font-semibold ${
                      transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savingsProducts.map((product, index) => (
                <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Min Balance:</span>
                      <span className="font-medium text-slate-900">{product.minBalance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Interest Rate:</span>
                      <span className="font-medium text-green-600">{product.rate} APY</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-slate-900 mb-2">Features</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Open Account
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Savings;