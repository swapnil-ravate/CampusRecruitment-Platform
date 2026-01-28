import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import JobCard from './JobCard'

const JobSection = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-8 pb-16">
        {/* <div className="container mx-auto px-4"> */}
        {/* Hero Section */}
        <div className="relative pt-8 pb-12 flex items-center overflow-hidden">

          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Job Success"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 animate-fade-in-up">Find Your Dream Job</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Browse through hundreds of opportunities from top companies. Login to apply and track your application status.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">

          <JobCard isHomePage={false} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobSection
