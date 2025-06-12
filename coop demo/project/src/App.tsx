import React, { useState } from 'react';
import { Users, DollarSign, Vote, Building2, CreditCard, TrendingUp, Bell, Menu, X, MessageCircle, Shield, Target } from 'lucide-react';
import Dashboard from './components/Dashboard';
import MemberProfile from './components/MemberProfile';
import Loans from './components/Loans';
import Savings from './components/Savings';
import Governance from './components/Governance';
import Ventures from './components/Ventures';
import Messages from './components/Messages';
import Security from './components/Security';
import Goals from './components/Goals';
import Navigation from './components/Navigation';
import NotificationCenter from './components/NotificationCenter';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <MemberProfile />;
      case 'loans':
        return <Loans />;
      case 'savings':
        return <Savings />;
      case 'governance':
        return <Governance />;
      case 'ventures':
        return <Ventures />;
      case 'messages':
        return <Messages />;
      case 'security':
        return <Security />;
      case 'goals':
        return <Goals />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">CO-OP ONE</h1>
                <p className="text-xs text-slate-500">Integrated Cooperative System</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setCurrentView('messages')}
                className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-blue-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium text-slate-700">John Doe</span>
              </div>
            </div>

            <button 
              className="md:hidden p-2 text-slate-400 hover:text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Notification Center */}
        {showNotifications && (
          <NotificationCenter onClose={() => setShowNotifications(false)} />
        )}
      </header>

      <div className="flex">
        {/* Navigation */}
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderCurrentView()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;