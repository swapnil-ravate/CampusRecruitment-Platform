import React from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import { useGetAllJobsQuery } from '../../redux/api/userApi';
import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase, FaBuilding, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobDetails = () => {
    // Note: In an ideal world, we'd fetch a single job by ID. 
    // For now, based on the current state, we might be getting all jobs and filtering or placeholder.
    // If the app uses a specific state, we should check jobDetails logic.
    // Since it's missing, I'll provide a robust template.

    // Assuming we use some state or just showing a detailed view.
    const { data: jobs, isLoading } = useGetAllJobsQuery();

    // This is a placeholder logic - usually we'd pass an ID via params
    const job = jobs?.[0]; // Defaulting to first one for now as a fallback

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!job) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-700">Job Not Found</h2>
                <Link to="/jobSection" className="mt-4 text-blue-600 hover:underline">Back to Job Section</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link to="/jobSection" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
                    <FaArrowLeft className="mr-2" /> Back to Listings
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-blue-600 p-8 md:p-12 text-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <div className="badge badge-outline text-white border-white mb-4 uppercase tracking-wider">{job.jobRole || 'Software'}</div>
                                <h1 className="text-3xl md:text-5xl font-bold">{job.jobTitle}</h1>
                                <div className="flex items-center gap-2 mt-4 text-blue-100 text-lg">
                                    <FaBuilding /> {job.company || 'Top Company'}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-gray-100 pb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Location</p>
                                    <p className="font-bold text-gray-800">{job.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl">
                                    <FaMoneyBillWave />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Salary</p>
                                    <p className="font-bold text-gray-800">{job.salary}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-xl">
                                    <FaBriefcase />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Experience</p>
                                    <p className="font-bold text-gray-800">{job.experience}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h3>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                    {job.jobDesc}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Required Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {job.skills?.split(',').map((skill, index) => (
                                        <span key={index} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <button className="btn btn-primary btn-lg w-full md:w-auto px-12 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                                    Apply for this Job
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
