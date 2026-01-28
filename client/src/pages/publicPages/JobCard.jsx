import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useJobs } from '../../hooks/useJobs';
import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import Loading from '../../components/ui/Loading';
import EmptyState from '../../components/ui/EmptyState';
import ErrorState from '../../components/ui/ErrorState';

const JobCard = ({ isHomePage = true }) => {
    const { user } = useSelector(state => state.user);
    const { data: jobs, isLoading, isError, error } = useJobs();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLocation, setFilterLocation] = useState('');

    // Filter Logic
    const filteredJobs = jobs?.filter(job => {
        const matchesSearch = job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (job.company && job.company.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesLocation = filterLocation ? job.location?.toLowerCase().includes(filterLocation.toLowerCase()) : true;

        return matchesSearch && matchesLocation;
    }) || [];

    // On Home Page, limit to 6. On Job Section, show all (or filtered).
    const displayJobs = isHomePage ? (filteredJobs.slice(0, 6) || []) : filteredJobs;

    if (isLoading) return <Loading />;
    if (isError) return <div className="container mx-auto px-4"><ErrorState message={error?.message || "Failed to load jobs."} /></div>;

    return (
        <section className={`py-16 ${isHomePage ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {isHomePage ? 'Latest Job Openings' : 'All Available Jobs'}
                    </h2>
                    <p className="text-gray-600">
                        {isHomePage ? 'Explore the most recent opportunities added to our platform' : 'Find the perfect role that matches your skills and career goals'}
                    </p>
                </div>

                {/* Search & Filter Section (Only on Job Page) */}
                {!isHomePage && (
                    <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto">
                        <div className="relative flex-grow">
                            <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by Job Title or Company..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="text"
                                placeholder="Filter by Location..."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={filterLocation}
                                onChange={(e) => setFilterLocation(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {/* Jobs Grid */}
                {displayJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayJobs.map(item => (
                            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100" key={item._id}>
                                <div className="card-body">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="badge badge-primary badge-outline mb-2">{item.jobRole || 'Software'}</div>
                                        <span className="text-xs text-gray-400 flex items-center gap-1">
                                            <FaCalendarAlt /> {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Recent'}
                                        </span>
                                    </div>

                                    <h2 className="card-title text-xl font-bold text-gray-800 mb-1">{item.jobTitle}</h2>
                                    <h3 className="text-gray-600 font-medium mb-4 text-sm">{item.company || 'Top Company'}</h3>

                                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <FaBriefcase className="text-gray-400" />
                                            <span>{item.experience} Exp</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMoneyBillWave className="text-gray-400" />
                                            <span>{item.salary}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-gray-400" />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>

                                    <div className="card-actions justify-end mt-auto pt-4 border-t border-gray-100">
                                        {user && (user.role === "user") ? (
                                            <Link to={`/jobDetails/${item._id}`} className="btn btn-primary btn-sm w-full rounded-full">Apply Now</Link>
                                        ) : (
                                            <Link to='/userLogin' className='btn btn-outline btn-sm w-full rounded-full'>Login to Apply</Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyState message="No jobs found matching your criteria." />
                )}

                {/* View All Button (Only on Home Page) */}
                {isHomePage && displayJobs.length > 0 && (
                    <div className="text-center mt-12">
                        <Link to="/jobSection" className="btn btn-outline px-8 rounded-full">View All Jobs</Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default JobCard;
