import React, { useState } from 'react';
import { Vote, Users, FileText, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Governance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('voting');

  const activeVotes = [
    {
      id: 1,
      title: 'Board of Directors Election 2024',
      description: 'Election of 7 board members for the 2024-2026 term',
      candidates: 12,
      deadline: '2024-02-15',
      status: 'active',
      participated: false,
      category: 'election'
    },
    {
      id: 2,
      title: 'Loan Interest Rate Adjustment',
      description: 'Proposal to adjust business loan rates from 8.5% to 8.0%',
      deadline: '2024-01-25',
      status: 'active',
      participated: true,
      category: 'policy',
      votes: { yes: 245, no: 89, abstain: 12 }
    },
    {
      id: 3,
      title: 'New Branch Location Approval',
      description: 'Approval for opening a new branch in Downtown District',
      deadline: '2024-01-30',
      status: 'active',
      participated: false,
      category: 'expansion'
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: 'Annual General Assembly 2024',
      date: '2024-01-25',
      time: '9:00 AM',
      location: 'Community Center, Main Hall',
      type: 'general',
      agenda: ['Financial Report', 'Board Elections', 'Strategic Plan 2024']
    },
    {
      id: 2,
      title: 'Quarterly Board Meeting',
      date: '2024-02-05',
      time: '2:00 PM',
      location: 'CO-OP ONE Office, Conference Room',
      type: 'board',
      agenda: ['Q4 Performance Review', 'Budget Approval', 'New Policies']
    }
  ];

  const documents = [
    {
      id: 1,
      title: 'Annual Financial Report 2023',
      type: 'financial',
      date: '2024-01-10',
      size: '2.4 MB',
      downloads: 156
    },
    {
      id: 2,
      title: 'Cooperative Bylaws (Updated)',
      type: 'governance',
      date: '2023-12-15',
      size: '850 KB',
      downloads: 234
    },
    {
      id: 3,
      title: 'Strategic Plan 2024-2026',
      type: 'planning',
      date: '2024-01-05',
      size: '1.8 MB',
      downloads: 89
    },
    {
      id: 4,
      title: 'Board Meeting Minutes - December 2023',
      type: 'minutes',
      date: '2023-12-20',
      size: '450 KB',
      downloads: 67
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'closed': return 'bg-gray-100 text-gray-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Governance Portal</h1>
          <p className="text-slate-600">Participate in cooperative governance and decision-making</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View My Votes
          </button>
          <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
            Meeting Calendar
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Vote className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600 font-medium">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">3</h3>
          <p className="text-slate-600">Open Votes</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">Participated</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">12</h3>
          <p className="text-slate-600">Votes Cast</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm text-purple-600 font-medium">Upcoming</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">2</h3>
          <p className="text-slate-600">Meetings</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm text-orange-600 font-medium">Total</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">1,247</h3>
          <p className="text-slate-600">Members</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'voting', label: 'Active Voting' },
              { id: 'meetings', label: 'Meetings' },
              { id: 'documents', label: 'Documents' }
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
          {activeTab === 'voting' && (
            <div className="space-y-6">
              {activeVotes.map((vote) => (
                <div key={vote.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{vote.title}</h3>
                      <p className="text-slate-600 mb-3">{vote.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span>Deadline: {vote.deadline}</span>
                        {vote.candidates && <span>{vote.candidates} candidates</span>}
                        {vote.votes && (
                          <span>
                            {vote.votes.yes + vote.votes.no + vote.votes.abstain} votes cast
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(vote.status)}`}>
                        {vote.status}
                      </span>
                      {vote.participated ? (
                        <span className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          <CheckCircle className="h-4 w-4" />
                          <span>Voted</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                          <Clock className="h-4 w-4" />
                          <span>Pending</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {vote.votes && (
                    <div className="mb-4 p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-medium text-slate-900 mb-3">Current Results</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Yes</span>
                          <span className="text-sm font-medium text-green-600">{vote.votes.yes} votes</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(vote.votes.yes / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">No</span>
                          <span className="text-sm font-medium text-red-600">{vote.votes.no} votes</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full" 
                            style={{ width: `${(vote.votes.no / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    {!vote.participated ? (
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Cast Vote
                      </button>
                    ) : (
                      <button className="px-6 py-2 bg-slate-100 text-slate-500 rounded-lg cursor-not-allowed">
                        Vote Submitted
                      </button>
                    )}
                    <button className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900">Upcoming Meetings</h3>
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{meeting.title}</h4>
                      <div className="space-y-1 text-sm text-slate-600">
                        <p className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{meeting.date} at {meeting.time}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{meeting.location}</span>
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      meeting.type === 'general' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {meeting.type === 'general' ? 'General Assembly' : 'Board Meeting'}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium text-slate-900 mb-2">Agenda</h5>
                    <ul className="space-y-1">
                      {meeting.agenda.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      RSVP
                    </button>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">Official Documents</h3>
                <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Documents</option>
                  <option>Financial Reports</option>
                  <option>Governance</option>
                  <option>Meeting Minutes</option>
                  <option>Planning</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((doc) => (
                  <div key={doc.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{doc.title}</h4>
                          <p className="text-sm text-slate-500">{doc.date} • {doc.size}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        doc.type === 'financial' ? 'bg-green-100 text-green-700' :
                        doc.type === 'governance' ? 'bg-blue-100 text-blue-700' :
                        doc.type === 'planning' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {doc.type}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">{doc.downloads} downloads</span>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                          Download
                        </button>
                        <button className="px-3 py-1 border border-slate-300 text-slate-700 rounded text-sm hover:bg-slate-50 transition-colors">
                          Preview
                        </button>
                      </div>
                    </div>
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

export default Governance;