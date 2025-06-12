import React, { useState } from 'react';
import { MessageCircle, Send, Search, Phone, Video, MoreVertical, Paperclip, Smile, User } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Loan Officer - Sarah Chen',
      role: 'Loan Department',
      lastMessage: 'Your loan application has been approved! Please check your dashboard for details.',
      time: '10:30 AM',
      unread: 2,
      online: true,
      avatar: 'SC'
    },
    {
      id: 2,
      name: 'Support Team',
      role: 'Customer Support',
      lastMessage: 'Thank you for contacting us. How can we help you today?',
      time: 'Yesterday',
      unread: 0,
      online: true,
      avatar: 'ST'
    },
    {
      id: 3,
      name: 'Board Secretary',
      role: 'Governance',
      lastMessage: 'Reminder: Annual General Assembly is scheduled for January 25th.',
      time: '2 days ago',
      unread: 1,
      online: false,
      avatar: 'BS'
    },
    {
      id: 4,
      name: 'Financial Advisor',
      role: 'Advisory Services',
      lastMessage: 'I\'ve reviewed your financial goals. Let\'s schedule a meeting to discuss.',
      time: '3 days ago',
      unread: 0,
      online: false,
      avatar: 'FA'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      content: 'Hello John! I hope you\'re doing well.',
      time: '10:15 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Hi Sarah! Yes, thank you. I wanted to check on my loan application status.',
      time: '10:18 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Sarah Chen',
      content: 'Great news! Your business loan application has been approved for $5,000 at 8.5% interest rate.',
      time: '10:25 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Sarah Chen',
      content: 'The funds will be disbursed to your savings account within 24 hours. Please check your dashboard for the loan agreement.',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 5,
      sender: 'You',
      content: 'That\'s wonderful! Thank you so much for the quick processing.',
      time: '10:32 AM',
      isOwn: true
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex h-full">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-slate-200 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(conversation.id)}
                className={`p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors ${
                  selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">{conversation.avatar}</span>
                    </div>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-slate-900 truncate">{conversation.name}</h3>
                      <span className="text-xs text-slate-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-1">{conversation.role}</p>
                    <p className="text-sm text-slate-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">{selectedConversation.avatar}</span>
                    </div>
                    {selectedConversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{selectedConversation.name}</h3>
                    <p className="text-sm text-slate-500">{selectedConversation.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                    <Video className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600">
                      <Smile className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Select a conversation</h3>
                <p className="text-slate-600">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;