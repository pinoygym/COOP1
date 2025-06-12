import React, { useState } from 'react';
import { Target, Plus, TrendingUp, Calendar, DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Goals: React.FC = () => {
  const [showCreateGoal, setShowCreateGoal] = useState(false);
  const [activeTab, setActiveTab] = useState('active');

  const goals = [
    {
      id: 1,
      title: 'Emergency Fund',
      description: 'Build an emergency fund to cover 6 months of expenses',
      targetAmount: 15000,
      currentAmount: 8500,
      deadline: '2024-12-31',
      category: 'savings',
      status: 'on-track',
      monthlyTarget: 1083,
      progress: 56.7
    },
    {
      id: 2,
      title: 'New Car Purchase',
      description: 'Save for a down payment on a new vehicle',
      targetAmount: 8000,
      currentAmount: 3200,
      deadline: '2024-08-15',
      category: 'purchase',
      status: 'behind',
      monthlyTarget: 800,
      progress: 40
    },
    {
      id: 3,
      title: 'Vacation Fund',
      description: 'Family vacation to Europe next summer',
      targetAmount: 5000,
      currentAmount: 4800,
      deadline: '2024-06-01',
      category: 'lifestyle',
      status: 'ahead',
      monthlyTarget: 200,
      progress: 96
    },
    {
      id: 4,
      title: 'Home Improvement',
      description: 'Kitchen renovation project',
      targetAmount: 12000,
      currentAmount: 2400,
      deadline: '2025-03-31',
      category: 'home',
      status: 'on-track',
      monthlyTarget: 800,
      progress: 20
    }
  ];

  const completedGoals = [
    {
      id: 5,
      title: 'Laptop Purchase',
      description: 'New MacBook Pro for work',
      targetAmount: 2500,
      currentAmount: 2500,
      completedDate: '2023-11-15',
      category: 'technology',
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'bg-green-100 text-green-700';
      case 'ahead': return 'bg-blue-100 text-blue-700';
      case 'behind': return 'bg-red-100 text-red-700';
      case 'completed': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-track': return <CheckCircle className="h-4 w-4" />;
      case 'ahead': return <TrendingUp className="h-4 w-4" />;
      case 'behind': return <AlertCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'savings': return 'from-green-500 to-green-600';
      case 'purchase': return 'from-blue-500 to-blue-600';
      case 'lifestyle': return 'from-purple-500 to-purple-600';
      case 'home': return 'from-orange-500 to-orange-600';
      case 'technology': return 'from-indigo-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const totalGoalsValue = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalSaved = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const overallProgress = (totalSaved / totalGoalsValue) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Financial Goals</h1>
          <p className="text-slate-600">Track and achieve your financial objectives</p>
        </div>
        <button 
          onClick={() => setShowCreateGoal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>New Goal</span>
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600 font-medium">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{goals.length}</h3>
          <p className="text-slate-600">Total Goals</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">Saved</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">${totalSaved.toLocaleString()}</h3>
          <p className="text-slate-600">Total Saved</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm text-purple-600 font-medium">Progress</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{overallProgress.toFixed(1)}%</h3>
          <p className="text-slate-600">Overall Progress</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm text-orange-600 font-medium">Target</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">${totalGoalsValue.toLocaleString()}</h3>
          <p className="text-slate-600">Total Target</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'active', label: 'Active Goals' },
              { id: 'completed', label: 'Completed Goals' },
              { id: 'insights', label: 'Insights' }
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
              {goals.map((goal) => (
                <div key={goal.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(goal.category)}`}>
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{goal.title}</h3>
                        <p className="text-slate-600">{goal.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getStatusColor(goal.status)}`}>
                        {getStatusIcon(goal.status)}
                        <span>{goal.status.replace('-', ' ')}</span>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-slate-500">Current Amount</p>
                      <p className="text-xl font-bold text-slate-900">${goal.currentAmount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Target Amount</p>
                      <p className="text-xl font-bold text-slate-900">${goal.targetAmount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Monthly Target</p>
                      <p className="text-xl font-bold text-slate-900">${goal.monthlyTarget}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Deadline</p>
                      <p className="text-xl font-bold text-slate-900">{goal.deadline}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-600">Progress</span>
                      <span className="text-sm font-medium text-slate-900">{goal.progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${getCategoryColor(goal.category)}`}
                        style={{ width: `${Math.min(goal.progress, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Add Funds
                    </button>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      Edit Goal
                    </button>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'completed' && (
            <div className="space-y-6">
              {completedGoals.length > 0 ? (
                completedGoals.map((goal) => (
                  <div key={goal.id} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(goal.category)}`}>
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{goal.title}</h3>
                          <p className="text-slate-600">{goal.description}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Completed
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-slate-500">Amount Achieved</p>
                        <p className="text-xl font-bold text-green-600">${goal.targetAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Completed Date</p>
                        <p className="text-lg font-semibold text-slate-900">{goal.completedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Progress</p>
                        <p className="text-lg font-semibold text-green-600">100%</p>
                      </div>
                    </div>

                    <div className="w-full bg-green-200 rounded-full h-3">
                      <div className="h-3 bg-green-500 rounded-full w-full"></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Completed Goals Yet</h3>
                  <p className="text-slate-600">Complete your first goal to see it here</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-4">Goal Performance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Goals on track:</span>
                      <span className="font-semibold text-blue-900">2 of 4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Average progress:</span>
                      <span className="font-semibold text-blue-900">{overallProgress.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Monthly savings needed:</span>
                      <span className="font-semibold text-blue-900">$2,883</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-green-900 mb-4">Recommendations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p className="text-green-800 text-sm">Increase car fund savings by $200/month to stay on track</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p className="text-green-800 text-sm">Consider setting up automatic transfers for consistent savings</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p className="text-green-800 text-sm">Your vacation goal is ahead of schedule - great job!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Savings Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Automate Your Savings</h4>
                    <p className="text-sm text-slate-600">Set up automatic transfers to your goal accounts to ensure consistent progress.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Review Monthly</h4>
                    <p className="text-sm text-slate-600">Regular reviews help you stay on track and adjust goals as needed.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Start Small</h4>
                    <p className="text-sm text-slate-600">Begin with achievable amounts and gradually increase as you build the habit.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Celebrate Milestones</h4>
                    <p className="text-sm text-slate-600">Acknowledge progress at 25%, 50%, and 75% completion to stay motivated.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Goal Modal */}
      {showCreateGoal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-900">Create New Goal</h2>
                <button 
                  onClick={() => setShowCreateGoal(false)}
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Goal Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Emergency Fund"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select category</option>
                      <option>Savings</option>
                      <option>Purchase</option>
                      <option>Lifestyle</option>
                      <option>Home</option>
                      <option>Technology</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea 
                    rows={3}
                    placeholder="Describe your goal..."
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Target Amount</label>
                    <input 
                      type="number" 
                      placeholder="10000"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Target Date</label>
                    <input 
                      type="date"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Initial Deposit (Optional)</label>
                  <input 
                    type="number" 
                    placeholder="500"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex space-x-4">
                  <button 
                    type="submit"
                    className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Goal
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowCreateGoal(false)}
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

export default Goals;