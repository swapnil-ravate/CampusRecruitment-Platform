import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAllJobsQuery } from '../../redux/api/userApi'
import { Link } from 'react-router-dom'
import { FaBriefcase, FaCheckCircle, FaEye, FaArrowRight, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'

const UserDashboard = () => {
  const { user } = useSelector(state => state.user)
  const { data: jobs, isLoading } = useGetAllJobsQuery()

  // Animation for the main container
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 }
  })

  // Get latest 5 jobs since we have more space now
  const latestJobs = jobs?.slice(0, 5) || []

  return (
    <animated.div style={fadeIn} className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, <span className="text-blue-600">{user?.name || 'Student'}</span>! 👋
        </h1>
        <p className="text-gray-600 mt-2">Here are the latest job opportunities for you.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: 'Applied Jobs', count: user?.appliedJobs?.length || 0, icon: FaBriefcase, color: 'bg-blue-500', link: '/user/applications' },
          { title: 'Shortlisted', count: user?.shortlisted?.length || 0, icon: FaCheckCircle, color: 'bg-green-500', link: '/user/shortlisted' },
          { title: 'Profile Views', count: user?.profileViews || 0, icon: FaEye, color: 'bg-purple-500', link: '/user/profile' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">{stat.count}</h3>
              </div>
              <div className={`p-4 rounded-xl ${stat.color} bg-opacity-10 text-${stat.color.split('-')[1]}-600`}>
                <stat.icon className={`text-2xl text-${stat.color.split('-')[1]}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Recent Job Openings - Takes up 3/4 space */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Latest Job Openings</h2>
            <Link to="/jobSection" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All <FaArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-10 text-gray-500">Loading jobs...</div>
            ) : latestJobs.length > 0 ? (
              latestJobs.map((job) => (
                <div key={job._id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{job.company}</h3>
                      <p className="text-gray-600 font-medium">{job.jobTitle}</p>

                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-gray-400" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMoneyBillWave className="text-gray-400" /> {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaBriefcase className="text-gray-400" /> {job.employmentType || 'Full Time'}
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-primary btn-sm rounded-xl px-6">Apply Now</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-500">No jobs found available right now.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Profile Summary */}
        <div className="lg:col-span-1 space-y-8">
          {/* Profile Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">My Profile</h3>
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <h4 className="font-bold text-gray-800">{user?.name}</h4>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Role</span>
                <span className="font-bold text-gray-800 capitalize">{user?.role}</span>
              </div>
              {user?.location && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Location</span>
                  <span className="font-bold text-gray-800">{user?.location}</span>
                </div>
              )}
            </div>

            <Link to="/user/profile" className="btn btn-outline btn-block mt-6 rounded-xl">View Full Profile</Link>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default UserDashboard
