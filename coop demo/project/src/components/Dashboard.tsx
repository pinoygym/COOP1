import React from 'react';
import { DollarSign, TrendingUp, Users, CreditCard, ArrowUp, ArrowDown, Bell, Target, MessageCircle, Shield } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Savings',
      value: '$12,450.00',
      change: '+5.2%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Share Capital',
      value: '$2,500.00',
      change: 'Tier 2 Member',
      changeType: 'neutral',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Active Loans',
      value: '$8,750.00',
      change: '2 loans',
      changeType: 'neutral',
      icon: CreditCard,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Dividend YTD',
      value: '$340.50',
      change: '+12.8%',
      changeType: 'positive',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const savingsData = [
    { month: 'Jan', amount: 8500 },
    { month: 'Feb', amount: 9200 },
    { month: 'Mar', amount: 9800 },
    { month: 'Apr', amount: 10500 },
    { month: 'May', amount: 11200 },
    { month: 'Jun', amount: 12450 }
  ];

  const expenseData = [
    { name: 'Loan Payments', value: 485, color: '#ef4444' },
    { name: 'Savings', value: 800, color: '#22c55e' },
    { name: 'Share Capital', value: 100, color: '#3b82f6' },
    { name: 'Other', value: 215, color: '#f59e0b' }
  ];

  const recentTransactions = [
    { id: 1, type: 'Credit', description: 'Salary Deposit', amount: '+$2,500.00', date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'Debit', description: 'Loan Payment', amount: '-$485.50', date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'Credit', description: 'Dividend Payment', amount: '+$85.25', date: '2024-01-12', status: 'completed' },
    { id: 4, type: 'Debit', description: 'Emergency Loan', amount: '-$1,000.00', date: '2024-01-10', status: 'pending' },
  ];

  const notifications = [
    { id: 1, title: 'Loan Payment Due', message: 'Your business loan payment of $485.50 is due tomorrow', time: '2 hours ago', type: 'warning' },
    { id: 2, title: 'Dividend Distributed', message: 'Your quarterly dividend of $85.25 has been credited', time: '1 day ago', type: 'success' },
    { id: 3, title: 'General Assembly', message: 'Annual General Assembly scheduled for January 25, 2024', time: '3 days ago', type: 'info' },
  ];

  const quickActions = [
    { title: 'Set Financial Goal', icon: Target, color: 'bg-purple-100 text-purple-600', action: 'goals' },
    { title: 'Send Message', icon: MessageCircle, color: 'bg-blue-100 text-blue-600', action: 'messages' },
    { title: 'Security Settings', icon: Shield, color: 'bg-green-100 text-green-600', action: 'security' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
            <p className="text-blue-100">Here's your financial overview for today</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-sm">Financial Health Score</p>
            <p className="text-3xl font-bold">85/100</p>
            <p className="text-blue-200 text-sm">Excellent</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                {stat.changeType === 'positive' && (
                  <span className="flex items-center text-green-600 text-sm font-medium">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    {stat.change}
                  </span>
                )}
                {stat.changeType === 'negative' && (
                  <span className="flex items-center text-red-600 text-sm font-medium">
                    <ArrowDown className="h-4 w-4 mr-1" />
                    {stat.change}
                  </span>
                )}
                {stat.changeType === 'neutral' && (
                  <span className="text-slate-500 text-sm font-medium">{stat.change}</span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-500 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Savings Growth Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Savings Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
              <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Expenses</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: $${value}`}
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex items-center space-x-3 p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-lg ${action.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-slate-900">{action.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Recent Transactions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'Credit' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {transaction.type === 'Credit' ? (
                        <ArrowUp className={`h-4 w-4 ${transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`} />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{transaction.description}</p>
                      <p className="text-sm text-slate-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Notifications</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className={`p-1 rounded-full ${
                    notification.type === 'warning' ? 'bg-yellow-100' :
                    notification.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <Bell className={`h-4 w-4 ${
                      notification.type === 'warning' ? 'text-yellow-600' :
                      notification.type === 'success' ? 'text-green-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{notification.title}</p>
                    <p className="text-slate-600 text-sm">{notification.message}</p>
                    <p className="text-slate-400 text-xs mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;