import React from 'react';
import { Bell, X, CheckCircle, AlertTriangle, Info, Clock, Settings } from 'lucide-react';

interface NotificationCenterProps {
  onClose: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ onClose }) => {
  const notifications = [
    {
      id: 1,
      title: 'Loan Payment Due Tomorrow',
      message: 'Your business loan payment of $485.50 is due on January 16th',
      type: 'warning',
      time: '2 hours ago',
      read: false,
      action: 'Make Payment'
    },
    {
      id: 2,
      title: 'Dividend Payment Received',
      message: 'Your quarterly dividend of $85.25 has been credited to your account',
      type: 'success',
      time: '1 day ago',
      read: false,
      action: 'View Details'
    },
    {
      id: 3,
      title: 'New Message from Loan Officer',
      message: 'Sarah Chen has sent you a message regarding your loan application',
      type: 'info',
      time: '2 days ago',
      read: true,
      action: 'View Message'
    },
    {
      id: 4,
      title: 'Security Alert',
      message: 'New login detected from iPhone 13 Pro in New York, NY',
      type: 'info',
      time: '3 days ago',
      read: true,
      action: 'Review Activity'
    },
    {
      id: 5,
      title: 'Goal Milestone Reached',
      message: 'Congratulations! You\'ve reached 50% of your Emergency Fund goal',
      type: 'success',
      time: '1 week ago',
      read: true,
      action: 'View Goal'
    },
    {
      id: 6,
      title: 'Annual General Assembly',
      message: 'Don\'t forget to register for the AGM scheduled for January 25, 2024',
      type: 'info',
      time: '1 week ago',
      read: true,
      action: 'Register Now'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-lg border border-slate-200 z-50">
      {/* Header */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-slate-600" />
            <h3 className="font-semibold text-slate-900">Notifications</h3>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
              <Settings className="h-4 w-4" />
            </button>
            <button 
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto">
        {notifications.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-slate-50 transition-colors ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h4 className={`text-sm font-medium ${
                        !notification.read ? 'text-slate-900' : 'text-slate-700'
                      }`}>
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 mt-1"></div>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-1">
                      {notification.message}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {notification.time}
                      </span>
                      {notification.action && (
                        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                          {notification.action}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <Bell className="h-8 w-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-500">No notifications</p>
          </div>
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-3 border-t border-slate-200">
          <div className="flex justify-between">
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Mark all as read
            </button>
            <button className="text-sm text-slate-600 hover:text-slate-700">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;