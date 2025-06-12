import React, { useState } from 'react';
import { User, CreditCard, QrCode, Calendar, Phone, Mail, MapPin, Edit3, Camera } from 'lucide-react';

const MemberProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const memberData = {
    name: 'John Doe',
    memberId: 'COOP-2024-001234',
    memberSince: 'January 15, 2020',
    tier: 'Tier 2 Member',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Anytown, State 12345',
    shareCapital: '$2,500.00',
    totalSavings: '$12,450.00',
    creditScore: 750,
    status: 'Active'
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">JD</span>
              </div>
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Camera className="h-4 w-4 text-slate-600" />
              </button>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">{memberData.name}</h1>
              <p className="text-blue-100 mb-2">{memberData.memberId}</p>
              <div className="flex items-center space-x-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {memberData.tier}
                </span>
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  {memberData.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'profile', label: 'Profile Info', icon: User },
              { id: 'membership', label: 'Membership', icon: CreditCard },
              { id: 'digital-id', label: 'Digital ID', icon: QrCode }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Edit3 className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <User className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-900">{memberData.name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <Mail className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-900">{memberData.email}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <Phone className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-900">{memberData.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Member Since</label>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-900">{memberData.memberSince}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-900">{memberData.address}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Credit Score</label>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-900 font-semibold">{memberData.creditScore}</span>
                          <span className="text-sm text-green-600">Excellent</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(memberData.creditScore / 850) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'membership' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900">Membership Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Share Capital</h4>
                  <p className="text-2xl font-bold text-blue-700">{memberData.shareCapital}</p>
                  <p className="text-sm text-blue-600 mt-1">Your ownership stake</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-2">Total Savings</h4>
                  <p className="text-2xl font-bold text-green-700">{memberData.totalSavings}</p>
                  <p className="text-sm text-green-600 mt-1">Across all accounts</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-2">Member Tier</h4>
                  <p className="text-2xl font-bold text-purple-700">Tier 2</p>
                  <p className="text-sm text-purple-600 mt-1">Enhanced benefits</p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-semibold text-slate-900 mb-4">Membership Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Preferred loan interest rates',
                    'Higher dividend distribution',
                    'Priority customer service',
                    'Exclusive investment opportunities',
                    'Free financial advisory services',
                    'Access to premium co-op ventures'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'digital-id' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900">Digital Member ID</h3>
              
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-lg font-semibold">CO-OP ONE</h4>
                        <p className="text-blue-200 text-sm">Member ID Card</p>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-xl font-bold">{memberData.name}</p>
                      <p className="text-blue-200">{memberData.memberId}</p>
                      <p className="text-blue-200 text-sm">Member since {memberData.memberSince}</p>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-blue-200 text-sm">Status</p>
                        <p className="font-semibold">{memberData.status}</p>
                      </div>
                      <div className="w-16 h-16 bg-white p-2 rounded-lg">
                        <QrCode className="w-full h-full text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-slate-600">
                  Use this digital ID for secure authentication and transactions
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Download QR Code
                  </button>
                  <button className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                    Share ID
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;