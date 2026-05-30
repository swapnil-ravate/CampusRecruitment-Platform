import React from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import { useGetAllJobsQuery } from '../../redux/api/userApi';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase, FaBuilding, FaArrowLeft, FaCalendarAlt, FaTools } from 'react-icons/fa';
import Loading from '../../components/ui/Loading';
import ErrorState from '../../components/ui/ErrorState';

const JobDetails = () => {
    const { id } = useParams();
    const { data: jobs, isLoading, isError, error } = useGetAllJobsQuery();

    // Find the specific job
    const job = jobs?.find(j => j._id === id);

    if (isLoading) return <div className="min-h-screen pt-20"><Loading /></div>;
    if (isError) return <div className="min-h-screen pt-20 container mx-auto"><ErrorState message={error?.message || "Failed to load job details."} /></div>;

    if (!job) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-16">
                <Navbar />
                <div className="text-center p-8">
                    <h2 className="text-3xl font-bold text-gray-700 mb-2">Job Not Found</h2>
                    <p className="text-gray-500 mb-6">The job you are looking for might have been removed or is unavailable.</p>
                    <Link to="/jobSection" className="btn btn-primary rounded-full px-8">Browse All Jobs</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8 pt-24 max-w-5xl">
                <Link to="/jobSection" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 font-medium transition-colors">
                    <FaArrowLeft className="mr-2" /> Back to Listings
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
                    {/* Decorative Header */}
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
                        <div className="absolute -bottom-10 left-8 md:left-12">
                            <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
                                <FaBuilding className="text-4xl text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pb-12 px-8 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{job.jobTitle}</h1>
                                <div className="flex items-center gap-2 text-xl text-gray-600 font-medium">
                                    <span>{job.company || 'Top Company'}</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-blue-600 text-base bg-blue-50 px-3 py-1 rounded-full">{job.jobRole || 'Software'}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-sm text-gray-400 flex items-center gap-1">
                                    <FaCalendarAlt /> Posted {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'Recently'}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Location</p>
                                    <p className="font-bold text-gray-800">{job.location}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl">
                                    <FaMoneyBillWave />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Salary</p>
                                    <p className="font-bold text-gray-800">{job.salary}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl">
                                    <FaBriefcase />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Experience</p>
                                    <p className="font-bold text-gray-800">{job.experience}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    Job Description
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                    {job.jobDesc}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <FaTools className="text-indigo-500" /> Required Skills
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {job.skills?.split(',').map((skill, index) => (
                                        <span key={index} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium border border-gray-200">
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 flex justify-end">
                                <button className="btn btn-primary btn-lg px-12 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JobDetails;
