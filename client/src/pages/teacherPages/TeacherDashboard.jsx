import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FaUserGraduate, FaCheckCircle, FaTimesCircle, FaClipboardList, FaSearch } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const TeacherDashboard = () => {
  // Mock Data
  const [studentRequests, setStudentRequests] = useState([
    { id: 1, name: 'John Doe', rollNo: '101', collegePRN: 'A123456', universityPRN: 'U789456', studentOf: 'BCA', status: 'pending', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', rollNo: '102', collegePRN: 'A654321', universityPRN: 'U123789', studentOf: 'BscIT', status: 'pending', email: 'jane@example.com' },
    { id: 19, name: 'Mia Martin', rollNo: '119', collegePRN: 'A789123', universityPRN: 'U456123', studentOf: 'MCA', status: 'pending', email: 'mia@example.com' },
    { id: 20, name: 'Alexander Thompson', rollNo: '120', collegePRN: 'A987654', universityPRN: 'U987654', studentOf: 'MSC', status: 'pending', email: 'alex@example.com' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Animation for dashboard entry
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
  });

  // Calculate Stats
  const totalRequests = studentRequests.length;
  const pendingRequests = studentRequests.filter(s => s.status === 'pending').length;

  const handleAccept = (id) => {
    // Ideally call API here
    setStudentRequests(prev => prev.map(s => s.id === id ? { ...s, status: 'accepted' } : s));
    toast.success('Student request accepted successfully!');
    console.log(`Accepted student with id ${id}`);
  };

  const handleReject = (id) => {
    // Ideally call API here
    setStudentRequests(prev => prev.filter(s => s.id !== id));
    toast.error('Student request rejected.');
    console.log(`Rejected student with id ${id}`);
  };

  const filteredStudents = studentRequests.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.includes(searchTerm)
  );

  return (
    <animated.div style={fadeIn} className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage student registrations and approvals</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Academic Year 2025-26
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Requests"
          value={totalRequests}
          icon={<FaClipboardList />}
          color="bg-purple-500"
        />
        <StatsCard
          title="Pending Approvals"
          value={pendingRequests}
          icon={<FaUserGraduate />}
          color="bg-orange-500"
        />
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white flex flex-col justify-center">
          <h3 className="text-lg font-bold">Quick Action</h3>
          <p className="text-blue-100 text-sm mb-4">Review all pending applications to ensure students can access the portal.</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold w-fit hover:bg-gray-100 transition-colors">
            View Pending
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Table Header / Controls */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FaUserGraduate className="text-blue-600" /> Student Verification
          </h2>

          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or roll no..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          </div>
        </div>

        {/* Responsive Table/Grid */}
        <div className="p-6">
          {filteredStudents.length > 0 ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onAccept={() => handleAccept(student.id)}
                  onReject={() => handleReject(student.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaClipboardList className="text-gray-400 text-2xl" />
              </div>
              <p className="text-gray-500">No student requests found matching your search.</p>
            </div>
          )}
        </div>
      </div>

    </animated.div>
  );
};

// Sub-components for cleaner code
const StatsCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-3xl font-bold text-gray-800 mt-1">{value}</h3>
    </div>
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white text-xl shadow-md`}>
      {icon}
    </div>
  </div>
);

const StudentCard = ({ student, onAccept, onReject }) => {
  const isAccepted = student.status === 'accepted';

  return (
    <div className={`p-5 rounded-xl border ${isAccepted ? 'border-green-200 bg-green-50' : 'border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all'} flex flex-col md:flex-row justify-between gap-4`}>
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
          {student.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{student.name}</h4>
          <p className="text-sm text-gray-500 mb-1">{student.email}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 font-medium">Roll: {student.rollNo}</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 font-medium">Class: {student.studentOf}</span>
            <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 font-medium">PRN: {student.collegePRN}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:self-center">
        {isAccepted ? (
          <span className="flex items-center gap-1 text-green-600 font-bold px-4 py-2 bg-green-100 rounded-lg text-sm">
            <FaCheckCircle /> Verification Complete
          </span>
        ) : (
          <>
            <button
              onClick={onAccept}
              className="flex-1 md:flex-none flex items-center justify-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
            >
              <FaCheckCircle /> Approve
            </button>
            <button
              onClick={onReject}
              className="flex-1 md:flex-none flex items-center justify-center gap-1 bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
            >
              <FaTimesCircle /> Reject
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
