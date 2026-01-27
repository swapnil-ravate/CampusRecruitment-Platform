import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import JobCard from './JobCard'

const JobSection = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 mb-10 text-center text-white shadow-xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Browse through hundreds of opportunities from top companies. Login to apply and track your application status.
            </p>
          </div>

          <JobCard isHomePage={false} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobSection
