import React, { useState } from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import { FaSearch, FaRocket, FaHandHoldingUsd, FaLightbulb, FaTools, FaExternalLinkAlt } from 'react-icons/fa'

const Entrepreneur = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const schemes = [
        {
            id: 1,
            title: "Startup India",
            category: "Innovation",
            description: "A flagship initiative of the Government of India, intended to build a strong ecosystem for nurturing innovation and startups.",
            link: "https://www.startupindia.gov.in/",
            icon: <FaRocket />
        },
        {
            id: 2,
            title: "Stand-Up India",
            category: "Finance",
            description: "Facilitates bank loans between ₹10 lakh and ₹1 crore to SC/ST and woman borrowers for setting up greenfield enterprises.",
            link: "https://www.standupmitra.in/",
            icon: <FaHandHoldingUsd />
        },
        {
            id: 3,
            title: "MUDRA Yojana",
            category: "Finance",
            description: "Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises to encourage entrepreneurship.",
            link: "https://www.mudra.org.in/",
            icon: <FaHandHoldingUsd />
        },
        {
            id: 4,
            title: "Make in India",
            category: "Industry",
            description: "Initiative to encourage companies to manufacture their products in India and incentivize with dedicated investments.",
            link: "https://www.makeinindia.com/",
            icon: <FaTools />
        },
        {
            id: 5,
            title: "Atal Innovation Mission",
            category: "Innovation",
            description: "Promotes a culture of innovation and entrepreneurship through Atal Tinkering Labs and incubation centers.",
            link: "https://www.aim.gov.in/",
            icon: <FaLightbulb />
        },
        {
            id: 6,
            title: "PM Kaushal Vikas Yojana",
            category: "Skills",
            description: "Outcome-based skill training scheme to enable Indian youth to take up industry-relevant skill training.",
            link: "https://www.pmkvyofficial.org/",
            icon: <FaTools />
        },
        {
            id: 7,
            title: "Digital India",
            category: "Innovation",
            description: "Ensures government services are made available to citizens electronically by improving online infrastructure.",
            link: "https://www.digitalindia.gov.in/",
            icon: <FaLightbulb />
        },
        {
            id: 10,
            title: "NSIC Scheme",
            category: "Finance",
            description: "Provides technical, financial, and marketing support to small-scale industries in India to boost growth.",
            link: "https://nsic.co.in/",
            icon: <FaHandHoldingUsd />
        }
    ];

    const categories = ['All', 'Finance', 'Innovation', 'Skills', 'Industry'];

    const filteredSchemes = schemes.filter(scheme => {
        const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || scheme.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-blue-900 h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Success"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-white">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4 animate-fade-in-up">Empowering Next-Gen Entrepreneurs</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mb-8">
                        Explore government initiatives and schemes designed to help your startup flourish and grow.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">Government Schemes</h2>
                        <p className="text-gray-500 mt-1">Discover opportunities tailored for your vision</p>
                    </div>

                    {/* Search & Tabs */}
                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search schemes..."
                                className="pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-64"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Categories Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeCategory === cat
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Schemes Grid */}
                {filteredSchemes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSchemes.map(scheme => (
                            <div key={scheme.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {scheme.icon}
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">{scheme.category}</span>
                                    <h3 className="text-2xl font-semibold text-gray-800 mt-1">{scheme.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                    {scheme.description}
                                </p>
                                <a
                                    href={scheme.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all gap-1"
                                >
                                    Visit Official Site <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <div className="text-gray-300 text-6xl mb-4 flex justify-center"><FaSearch /></div>
                        <h3 className="text-xl font-semibold text-gray-700">No schemes found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your filters or search keywords.</p>
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

export default Entrepreneur
