import React, { useState } from 'react';
import { FaCheck, FaTimes, FaEye, FaUserTie, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhone } from 'react-icons/fa';

const AdminJobReview = () => {
  // Enhanced Mock Data
  const [applications, setApplications] = useState([
    {
      id: 1,
      applicantName: 'Alex Johnson',
      email: 'alex.j@example.com',
      phone: '+1 234 567 890',
      position: 'Senior React Developer',
      company: 'Tech Corp',
      status: 'Pending',
      date: '2024-01-25',
      location: 'New York, USA',
      avatar: 'https://i.pravatar.cc/150?u=1'
    },
    {
      id: 2,
      applicantName: 'Sarah Williams',
      email: 'sarah.w@example.com',
      phone: '+1 987 654 321',
      position: 'UI/UX Designer',
      company: 'Creative Studio',
      status: 'Reviewed',
      date: '2024-01-24',
      location: 'London, UK',
      avatar: 'https://i.pravatar.cc/150?u=2'
    },
    {
      id: 3,
      applicantName: 'Michael Brown',
      email: 'mike.b@example.com',
      phone: '+1 111 222 333',
      position: 'Backend Engineer',
      company: 'Data Systems',
      status: 'Rejected',
      date: '2024-01-20',
      location: 'Remote',
      avatar: 'https://i.pravatar.cc/150?u=3'
    },
    {
      id: 4,
      applicantName: 'Emily Davis',
      email: 'emily.d@example.com',
      phone: '+1 555 666 777',
      position: 'Product Manager',
      company: 'Innovate Inc',
      status: 'Hired',
      date: '2024-01-18',
      location: 'San Francisco, CA',
      avatar: 'https://i.pravatar.cc/150?u=4'
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Reviewed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Hired': return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleAction = (id, action) => {
    alert(`${action} action triggered for application #${id}`);
    // In a real app, this would make an API call
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Application Review</h1>
            <p className="text-gray-500 mt-1">Manage and review candidates for your job postings</p>
          </div>
          <div className="text-sm text-gray-500 font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            Total Applications: <span className="text-blue-600 font-bold">{applications.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
              {/* Card Header with Status */}
              <div className="p-6 pb-4 relative">
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border ${getStatusColor(app.status)}`}>
                  {app.status}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <img src={app.avatar} alt={app.applicantName} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{app.applicantName}</h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-gray-400" /> {app.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
                    <FaBriefcase className="text-blue-500 mr-2" />
                    <span className="font-medium truncate">{app.position}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 px-2">
                    <FaBriefcase className="text-gray-400 mr-2" size={12} />
                    <span className="truncate">{app.company}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-400 border-t pt-3 flex justify-between items-center">
                  <span>Applied on {app.date}</span>
                  <div className="flex gap-2">
                    <FaEnvelope className="hover:text-blue-600 cursor-pointer" title={app.email} />
                    <FaPhone className="hover:text-green-600 cursor-pointer" title={app.phone} />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-gray-50 px-6 py-4 flex justify-between gap-2 border-t border-gray-100">
                <button
                  onClick={() => handleAction(app.id, 'View')}
                  className="flex-1 flex items-center justify-center text-gray-600 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-600 font-medium py-2 rounded-lg text-sm transition-colors shadow-sm"
                >
                  <FaEye className="mr-2" /> View
                </button>
                <button
                  onClick={() => handleAction(app.id, 'Accept')}
                  className="p-2 text-green-600 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors shadow-sm"
                  title="Accept"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => handleAction(app.id, 'Reject')}
                  className="p-2 text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors shadow-sm"
                  title="Reject"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminJobReview;
