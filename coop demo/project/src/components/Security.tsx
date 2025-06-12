import React, { useState } from 'react';
import { Shield, Lock, Smartphone, Eye, EyeOff, Key, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const Security: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const securityScore = 85;
  
  const securityItems = [
    {
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      status: 'enabled',
      icon: Smartphone,
      action: 'Manage'
    },
    {
      title: 'Strong Password',
      description: 'Your password meets security requirements',
      status: 'good',
      icon: Lock,
      action: 'Change'
    },
    {
      title: 'Login Notifications',
      description: 'Get notified of new login attempts',
      status: 'enabled',
      icon: AlertTriangle,
      action: 'Configure'
    },
    {
      title: 'Device Management',
      description: 'Manage devices that can access your account',
      status: 'review',
      icon: Smartphone,
      action: 'Review'
    }
  ];

  const loginHistory = [
    {
      id: 1,
      device: 'iPhone 13 Pro',
      location: 'New York, NY',
      time: '2024-01-15 10:30 AM',
      status: 'success',
      ip: '192.168.1.1'
    },
    {
      id: 2,
      device: 'Chrome on Windows',
      location: 'New York, NY',
      time: '2024-01-14 2:15 PM',
      status: 'success',
      ip: '192.168.1.1'
    },
    {
      id: 3,
      device: 'Safari on MacBook',
      location: 'New York, NY',
      time: '2024-01-13 9:45 AM',
      status: 'success',
      ip: '192.168.1.1'
    },
    {
      id: 4,
      device: 'Unknown Device',
      location: 'Los Angeles, CA',
      time: '2024-01-12 11:20 PM',
      status: 'blocked',
      ip: '203.0.113.1'
    }
  ];

  const connectedDevices = [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      type: 'Mobile',
      lastActive: '2 minutes ago',
      location: 'New York, NY',
      current: true
    },
    {
      id: 2,
      name: 'MacBook Pro',
      type: 'Desktop',
      lastActive: '1 hour ago',
      location: 'New York, NY',
      current: false
    },
    {
      id: 3,
      name: 'iPad Air',
      type: 'Tablet',
      lastActive: '2 days ago',
      location: 'New York, NY',
      current: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enabled':
      case 'good':
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'review':
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'blocked':
      case 'disabled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Security Center</h1>
          <p className="text-slate-600">Manage your account security and privacy settings</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Security Score</p>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-slate-200 rounded-full">
              <div 
                className="h-2 bg-green-500 rounded-full" 
                style={{ width: `${securityScore}%` }}
              ></div>
            </div>
            <span className="text-2xl font-bold text-green-600">{securityScore}/100</span>
          </div>
        </div>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.description}</p>
              <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                {item.action}
              </button>
            </div>
          );
        })}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Security Overview' },
              { id: 'password', label: 'Password & 2FA' },
              { id: 'devices', label: 'Connected Devices' },
              { id: 'activity', label: 'Login Activity' }
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-900">Your account is well protected</h3>
                    <p className="text-green-700">All critical security features are enabled and configured properly.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Recent Security Events</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">Successful login</p>
                        <p className="text-xs text-slate-500">iPhone 13 Pro • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">Blocked login attempt</p>
                        <p className="text-xs text-slate-500">Unknown device • 3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Security Recommendations</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-slate-200 rounded-lg">
                      <p className="text-sm font-medium text-slate-900">Review connected devices</p>
                      <p className="text-xs text-slate-500">Remove devices you no longer use</p>
                    </div>
                    <div className="p-3 border border-slate-200 rounded-lg">
                      <p className="text-sm font-medium text-slate-900">Enable login notifications</p>
                      <p className="text-xs text-slate-500">Get alerts for new sign-ins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Two-Factor Authentication</h3>
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-slate-900">Authenticator App</h4>
                        <p className="text-sm text-slate-600">Use an app to generate verification codes</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={twoFactorEnabled}
                          onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                          className="rounded border-slate-300"
                        />
                      </div>
                    </div>
                    {twoFactorEnabled && (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Two-factor authentication is enabled</span>
                        </div>
                        <button className="text-sm text-blue-600 hover:underline">
                          View backup codes
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'devices' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-900">Connected Devices</h3>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Sign Out All Devices
                </button>
              </div>

              <div className="space-y-4">
                {connectedDevices.map((device) => (
                  <div key={device.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-slate-100 rounded-lg">
                        <Smartphone className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 flex items-center space-x-2">
                          <span>{device.name}</span>
                          {device.current && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </h4>
                        <p className="text-sm text-slate-600">{device.type} • {device.location}</p>
                        <p className="text-xs text-slate-500">Last active: {device.lastActive}</p>
                      </div>
                    </div>
                    {!device.current && (
                      <button className="px-3 py-1 text-red-600 border border-red-300 rounded hover:bg-red-50 transition-colors">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-6">
              <h3 className="font-semibold text-slate-900">Login Activity</h3>
              
              <div className="space-y-4">
                {loginHistory.map((login) => (
                  <div key={login.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        login.status === 'success' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {login.status === 'success' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{login.device}</h4>
                        <p className="text-sm text-slate-600">{login.location} • {login.ip}</p>
                        <p className="text-xs text-slate-500">{login.time}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(login.status)}`}>
                      {login.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Security;