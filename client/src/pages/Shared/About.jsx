import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import { FaCheckCircle, FaBriefcase, FaUniversity, FaUserGraduate } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
    return <>
        <Navbar />

        <section className="flex items-center bg-gray-50 font-poppins min-h-screen text-gray-800 py-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-blue-600 font-semibold tracking-wide uppercase">
                        Welcome to Campus Recruitment
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-5xl mt-2 text-gray-900">
                        Bridging Talent & Opportunity
                    </h2>
                    <div className="flex w-24 mt-4 mb-6 overflow-hidden rounded mx-auto">
                        <div className="flex-1 h-2 bg-blue-200"></div>
                        <div className="flex-1 h-2 bg-blue-400"></div>
                        <div className="flex-1 h-2 bg-blue-600"></div>
                    </div>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        We are dedicated to simplifying the recruitment process, connecting ambitious students with leading organizations for a brighter future.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661517335128-2bcf290d58f6?w=600&auto=format&fit=crop&q=80"
                                alt="Team collaboration"
                                className="relative z-10 w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                            Empowering Your Career Journey
                        </h3>
                        <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                            Our platform serves as a dynamic bridge between academic institutions and the corporate world. We streamline campus placements, making it easier for students to showcase their skills and for recruiters to find the perfect talent.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <FaCheckCircle className="text-green-500 mt-1 mr-3 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Streamlined Process</h4>
                                    <p className="text-gray-500 text-sm">Efficient application and tracking system for all users.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaCheckCircle className="text-green-500 mt-1 mr-3 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Top Opportunities</h4>
                                    <p className="text-gray-500 text-sm">Access to premium roles from verified companies.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaCheckCircle className="text-green-500 mt-1 mr-3 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Career Growth</h4>
                                    <p className="text-gray-500 text-sm">Tools and resources to enhance your professional profile.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/jobSection">
                            <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 border-none rounded-full shadow-lg transform hover:-translate-y-1 transition-transform">
                                Explore Opportunities
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-500 text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4">
                            <FaUserGraduate />
                        </div>
                        <h4 className="text-4xl font-bold text-gray-800">500+</h4>
                        <p className="text-gray-500 font-medium">Students Placed</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-purple-500 text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl mb-4">
                            <FaBriefcase />
                        </div>
                        <h4 className="text-4xl font-bold text-gray-800">50+</h4>
                        <p className="text-gray-500 font-medium">Partner Companies</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-500 text-center hover:scale-105 transition-transform">
                        <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">
                            <FaUniversity />
                        </div>
                        <h4 className="text-4xl font-bold text-gray-800">20+</h4>
                        <p className="text-gray-500 font-medium">Universities</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />

    </>
}

export default About
