import React, { useState } from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaLinkedin, FaTwitter, FaFacebook, FaPlus, FaMinus, FaQuestionCircle, FaArrowRight, FaUser } from 'react-icons/fa'
import { MdOutlineSubject } from 'react-icons/md'
import { toast } from 'react-hot-toast'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        {
            question: "How do I register as a student?",
            answer: "Click on the 'Register' button in the home page or navigation bar. Fill in your details including your education and skills, and verify your email to get started."
        },
        {
            question: "How can I apply for a job?",
            answer: "Once logged in, go to the 'Jobs' section, browse open positions, and click 'Apply Now' on any job that matches your profile."
        },
        {
            question: "How do I update my placement profile?",
            answer: "Navigate to your Dashboard and select 'Profile'. You can update your resume, skills, and contact information there."
        },
        {
            question: "Who can I contact for technical issues?",
            answer: "You can use this contact form or email our support team directly at connect@deogiricampus.com for any technical assistance."
        }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast.success("Message sent successfully! We will get back to you soon.");
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            {/* Refined Hero Section */}
            <div className="bg-white border-b border-gray-100 py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                        <FaEnvelope className="text-sm" /> Support Hub
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        We're Here to <span className="text-blue-600">Help</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Have a question about placements, companies, or our platform? <br className="hidden md:block" />
                        Our team is dedicated to providing you with the best support.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-12 relative z-20 pb-20">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Info Column */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="group flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Our Location</h4>
                                        <p className="text-gray-500 text-sm mt-1">Vishwakarma University, Pune, Maharashtra, India</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email & Support</h4>
                                        <p className="text-gray-500 text-sm mt-1">admissions@vupune.ac.in</p>
                                        <p className="text-gray-500 text-sm">connect@vupune.ac.in</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Call Us</h4>
                                        <p className="text-gray-500 text-sm mt-1">+91 90670 02223</p>
                                        <p className="text-gray-500 text-sm">+91 90670 02224</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <h4 className="font-semibold text-gray-800 mb-4">Follow Our Socials</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><FaLinkedin /></a>
                                    <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"><FaTwitter /></a>
                                    <a href="#" className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all"><FaFacebook /></a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats or Note */}
                        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-lg">
                            <FaQuestionCircle className="text-4xl opacity-20 mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Need a faster answer?</h4>
                            <p className="text-blue-100 text-sm leading-relaxed mb-4">
                                Most queries about recruitment can be found in our FAQ section or in the student dashboard resources.
                            </p>
                            <a href="#faq" className="text-white font-semibold flex items-center gap-2 hover:gap-4 transition-all">Check FAQs <FaArrowRight /></a>
                        </div>
                    </div>

                    {/* Main Form Column */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden group/card transition-all duration-500 hover:shadow-blue-100/50">
                            {/* Subtle Decorative Gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50 blur-2xl"></div>

                            <h3 className="text-3xl font-semibold text-gray-900 mb-2 relative z-10">Send us a Message</h3>
                            <p className="text-gray-500 mb-10 text-lg relative z-10">We aim to respond to all inquiries within 24 business hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 uppercase tracking-widest pl-1">Full Name</label>
                                        <div className="relative group/input">
                                            <FaUser className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-blue-600 transition-colors" />
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full pl-14 pr-6 py-4.5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder-gray-300 font-medium"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 uppercase tracking-widest pl-1">Email Address</label>
                                        <div className="relative group/input">
                                            <FaEnvelope className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-blue-600 transition-colors" />
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="hello@example.com"
                                                className="w-full pl-14 pr-6 py-4.5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder-gray-300 font-medium"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700 uppercase tracking-widest pl-1">Subject</label>
                                    <div className="relative group/input">
                                        <MdOutlineSubject className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within/input:text-blue-600 transition-colors pointer-events-none" />
                                        <select
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full pl-14 pr-12 py-4.5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-gray-600 appearance-none font-medium cursor-pointer"
                                            required
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="Placement">Placement Queries</option>
                                            <option value="Recruitment">Hiring Partnership</option>
                                            <option value="Technical">Technical Issue</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <FaArrowRight className="rotate-90 text-[10px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 uppercase tracking-widest pl-1">Your Message</label>
                                    <div className="relative group/input">
                                        <FaPaperPlane className="absolute left-6 top-6 text-gray-400 group-focus-within/input:text-blue-600 transition-colors" />
                                        <textarea
                                            id="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us how we can help you..."
                                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder-gray-300 resize-none font-medium"
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full md:w-auto px-12 py-5 rounded-2xl text-white font-semibold text-lg shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden group/btn ${isSubmitting ? 'bg-gray-400 cursor-not-allowed shadow-none' : 'bg-blue-600 hover:bg-blue-700'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="loading loading-spinner"></span>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer"></div>
                                            <FaPaperPlane className="text-sm group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                            Send Inquiry
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500 text-lg">Quick answers to common questions from students and recruiters.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center transition-all hover:bg-gray-50"
                                >
                                    <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === index ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                                        {activeFaq === index ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                                    </div>
                                </button>
                                <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactUs
