import React from 'react';
import { useGetAdminStatsQuery, useDeleteJobMutation } from '../../redux/api/adminApi';
import { toast } from 'react-hot-toast';
import { FaBriefcase, FaCheckCircle, FaHourglassHalf, FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
  const { data } = useGetAdminStatsQuery();
  const [deleteJob, { isSuccess }] = useDeleteJobMutation();

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Job Deleted Successfully");
    }
  }, [isSuccess]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(id);
    }
  };

  const StatCard = ({ title, count, icon, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between transform hover:scale-105 transition-transform duration-300">
      <div>
        <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">{count}</p>
      </div>
      <div className={`p-4 rounded-full ${color} text-white text-2xl`}>
        {icon}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">Admin Dashboard</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Jobs"
            count={data?.totalJobs || 0}
            icon={<FaBriefcase />}
            color="bg-blue-500"
          />
          <StatCard
            title="Active Jobs"
            count={data?.activeJobs || 0}
            icon={<FaCheckCircle />}
            color="bg-green-500"
          />
          <StatCard
            title="Pending Queries"
            count={data?.pendingQueries || 0}
            icon={<FaHourglassHalf />}
            color="bg-yellow-500"
          />
        </div>

        {/* Recent Jobs Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">Recent Job Posts</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                  <th className="p-4 font-semibold">#</th>
                  <th className="p-4 font-semibold">Title</th>
                  <th className="p-4 font-semibold">Company</th>
                  <th className="p-4 font-semibold">Salary</th>
                  <th className="p-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data?.recentJobs && data.recentJobs.map((job, i) => (
                  <tr key={job._id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="p-4 text-gray-500 font-medium">{i + 1}</td>
                    <td className="p-4 text-gray-800 font-semibold">{job.jobTitle}</td>
                    <td className="p-4 text-gray-600">{job.company}</td>
                    <td className="p-4 text-green-600 font-medium">{job.salary}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 flex items-center justify-center mx-auto gap-1"
                      >
                        <FaTrash className="text-xs" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {(!data?.recentJobs || data.recentJobs.length === 0) && (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-400">No recent jobs found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
