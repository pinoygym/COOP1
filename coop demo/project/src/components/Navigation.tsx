import React from 'react';
import { LayoutDashboard, User, DollarSign, PiggyBank, Vote, Building2, MessageCircle, Shield, Target } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentView, 
  setCurrentView, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'loans', label: 'Loans', icon: DollarSign },
    { id: 'savings', label: 'Savings', icon: PiggyBank },
    { id: 'goals', label: 'Financial Goals', icon: Target },
    { id: 'governance', label: 'Governance', icon: Vote },
    { id: 'ventures', label: 'Ventures', icon: Building2 },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="h-full pt-6 pb-4 overflow-y-auto">
          <nav className="px-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }
                  `}
                >
                  <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {item.label}
                  {item.id === 'messages' && (
                    <span className="ml-auto bg-blue-500 text-white text-xs rounded-full px-2 py-1">3</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navigation;