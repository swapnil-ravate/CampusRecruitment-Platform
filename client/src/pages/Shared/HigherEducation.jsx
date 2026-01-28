import React, { useState } from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import {
    FaUniversity,
    FaGraduationCap,
    FaSearch,
    FaMapMarkerAlt,
    FaBook,
    FaGlobe,
    FaLightbulb,
    FaChartLine,
    FaMoneyCheckAlt,
    FaFileAlt,
    FaArrowRight
} from 'react-icons/fa'

const HigherEducation = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('universities');
    const [activeCategory, setActiveCategory] = useState('All');

    const universities = [
        {
            id: 1,
            name: "Indian Institute of Technology (IIT)",
            location: "Multiple Locations",
            category: "Engineering",
            description: "Premier institutes for engineering and technology education offering undergraduate, postgraduate, and doctoral programs.",
            programs: ["B.Tech", "M.Tech", "PhD"],
            icon: <FaGraduationCap />
        },
        {
            id: 2,
            name: "Indian Institute of Management (IIM)",
            location: "Multiple Locations",
            category: "Management",
            description: "Top business schools offering MBA and executive programs with world-class faculty and placement opportunities.",
            programs: ["MBA", "Executive MBA", "PhD"],
            icon: <FaBook />
        },
        {
            id: 3,
            name: "National Institute of Technology (NIT)",
            location: "Multiple Locations",
            category: "Engineering",
            description: "Government institutes providing quality engineering education with excellent infrastructure and faculty.",
            programs: ["B.Tech", "M.Tech", "MCA"],
            icon: <FaUniversity />
        },
        {
            id: 4,
            name: "All India Institute of Medical Sciences (AIIMS)",
            location: "Multiple Locations",
            category: "Medical",
            description: "Premier medical institutes offering undergraduate and postgraduate medical education and research.",
            programs: ["MBBS", "MD", "MS"],
            icon: <FaGraduationCap />
        },
        {
            id: 5,
            name: "Delhi University",
            location: "New Delhi",
            category: "Arts & Science",
            description: "One of India's largest universities offering diverse courses in arts, science, and commerce.",
            programs: ["BA", "BSc", "BCom", "MA", "MSc"],
            icon: <FaUniversity />
        },
        {
            id: 6,
            name: "Jawaharlal Nehru University (JNU)",
            location: "New Delhi",
            category: "Arts & Science",
            description: "Renowned for social sciences and humanities with a vibrant academic environment.",
            programs: ["BA", "MA", "MPhil", "PhD"],
            icon: <FaBook />
        }
    ];

    const entranceExams = [
        {
            id: 1,
            name: "GATE",
            fullName: "Graduate Aptitude Test in Engineering",
            purpose: "Masters in Engineering & PSU Recruitment",
            difficulty: "High",
            frequency: "Annual",
            description: "Testing comprehensive understanding of various undergraduate subjects in engineering and science.",
            icon: <FaChartLine />
        },
        {
            id: 2,
            name: "CAT",
            fullName: "Common Admission Test",
            purpose: "MBA in IIMs and Top B-Schools",
            difficulty: "Very High",
            frequency: "Annual",
            description: "Entrance for post-graduate management programs, testing quantitative, verbal, and logical reasoning.",
            icon: <FaLightbulb />
        },
        {
            id: 3,
            name: "GRE",
            fullName: "Graduate Record Examinations",
            purpose: "Masters & PhD Abroad (US, Europe, etc.)",
            difficulty: "Moderate",
            frequency: "Monthly",
            description: "Standardized test required for admission to many graduate schools in English-speaking countries.",
            icon: <FaGlobe />
        },
        {
            id: 4,
            name: "GMAT",
            fullName: "Graduate Management Admission Test",
            purpose: "MBA Programs Globally",
            difficulty: "High",
            frequency: "Ongoing",
            description: "Specifically designed for business school admissions, testing analytical and critical thinking.",
            icon: <FaFileAlt />
        },
        {
            id: 5,
            name: "IELTS/TOEFL",
            fullName: "English Language Proficiency Tests",
            purpose: "Education & Work in English-speaking countries",
            difficulty: "Moderate",
            frequency: "Varies",
            description: "Tests English reading, writing, speaking, and listening skills.",
            icon: <FaGlobe />
        }
    ];

    const careerGuides = [
        {
            id: 1,
            title: "MS vs MBA",
            tag: "Higher Studies",
            advice: "Technical specialized growth (MS) or Leadership and business management growth (MBA).",
            points: ["MS focused on depth", "MBA focused on breadth", "Job roles differ significantly"],
            icon: <FaSearch />
        },
        {
            id: 2,
            title: "Research & PhD",
            tag: "Academic Path",
            advice: "Ideal for those wanting to contribute to global knowledge or pursue teaching.",
            points: ["Requires patience", "Strong analytical skills", "Grant & Funding opportunities"],
            icon: <FaLightbulb />
        },
        {
            id: 3,
            title: "Scholarships",
            tag: "Financial Aid",
            advice: "Don't let finances stop you. Thousands of scholarships go unused.",
            points: ["Inlaks Scholarships", "Erasmus Mundus", "University specific aid"],
            icon: <FaMoneyCheckAlt />
        }
    ];

    const categories = activeTab === 'universities' ? ['All', 'Engineering', 'Management', 'Medical', 'Arts & Science'] : [];

    const getFilteredData = () => {
        if (activeTab === 'universities') {
            return universities.filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
                return matchesSearch && matchesCategory;
            });
        } else if (activeTab === 'exams') {
            return entranceExams.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            return careerGuides.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    };

    const displayData = getFilteredData();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative pt-16 pb-8 flex items-center overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 animate-fade-in-up">Your Academic Future Starts Here</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        From top universities to preparation for global entrance exams, we provide the resources you need for higher education success.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 relative z-20">
                {/* Navigation Tabs */}
                <div className="bg-white p-4 rounded-3xl shadow-2xl flex flex-wrap justify-center gap-4 mb-16 border border-gray-100 max-w-4xl mx-auto">
                    {[
                        { id: 'universities', label: 'Top Universities', icon: <FaUniversity /> },
                        { id: 'exams', label: 'Entrance Exams', icon: <FaChartLine /> },
                        { id: 'guides', label: 'Career Guidance', icon: <FaLightbulb /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id); setActiveCategory('All'); }}
                            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Sub-Header & Search */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-semibold text-gray-900 capitalize">
                            {activeTab.replace('_', ' ')} Insights
                        </h2>
                        <p className="text-gray-500 mt-2 text-lg">
                            {activeTab === 'universities' && "Explore India's premier institutes for academic excellence."}
                            {activeTab === 'exams' && "Master the path to admission with details on key entrance exams."}
                            {activeTab === 'guides' && "Strategic advice to navigate your higher education journey."}
                        </p>
                    </div>

                    <div className="relative w-full lg:w-[400px]">
                        <FaSearch className="absolute left-4 top-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder={`Search ${activeTab}...`}
                            className="w-full pl-12 pr-6 py-4 rounded-2xl border-none shadow-md focus:ring-4 focus:ring-blue-100 outline-none placeholder-gray-400 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Categories Bar (Universities Only) */}
                {activeTab === 'universities' && (
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-xl font-semibold transition-all border-2 ${activeCategory === cat
                                    ? 'bg-blue-50 border-blue-600 text-blue-600'
                                    : 'bg-white border-transparent text-gray-400 hover:bg-gray-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {/* Content Display */}
                {displayData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {activeTab === 'universities' && displayData.map(uni => (
                            <div key={uni.id} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                                    {uni.icon}
                                </div>
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-[0.2em] mb-2 block">{uni.category}</span>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2 truncate">{uni.name}</h3>
                                <div className="flex items-center text-gray-400 text-sm mb-4">
                                    <FaMapMarkerAlt className="mr-2" /> {uni.location}
                                </div>
                                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">{uni.description}</p>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {uni.programs.map((prog, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-xl text-xs font-semibold border border-gray-100">{prog}</span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-4 transition-all pt-4">Learn More <FaArrowRight /></button>
                                </div>
                            </div>
                        ))}

                        {activeTab === 'exams' && displayData.map(exam => (
                            <div key={exam.id} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-3xl flex items-center justify-center text-3xl shadow-lg">
                                        {exam.icon}
                                    </div>
                                    <div className="badge badge-error text-white font-semibold p-3 border-none">{exam.difficulty} Difficulty</div>
                                </div>
                                <h3 className="text-3xl font-semibold text-gray-900 mb-1">{exam.name}</h3>
                                <p className="text-blue-600 font-semibold mb-6 text-sm italic">{exam.fullName}</p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                                        <FaLightbulb className="text-orange-500 shrink-0" />
                                        <span className="text-sm font-medium"><strong>Target:</strong> {exam.purpose}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed">{exam.description}</p>
                                </div>
                                <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">Exam Resources <FaArrowRight /></button>
                            </div>
                        ))}

                        {activeTab === 'guides' && displayData.map(guide => (
                            <div key={guide.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col group">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative">
                                    <div className="absolute -right-4 -bottom-4 opacity-10 text-8xl transform rotate-12">{guide.icon}</div>
                                    <span className="bg-white/20 px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-4 inline-block">{guide.tag}</span>
                                    <h3 className="text-2xl font-semibold">{guide.title}</h3>
                                </div>
                                <div className="p-8 flex-grow">
                                    <p className="text-gray-700 font-semibold mb-6 italic border-l-4 border-blue-600 pl-4">"{guide.advice}"</p>
                                    <ul className="space-y-4">
                                        {guide.points.map((pt, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-gray-600 items-start">
                                                <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5"><FaArrowRight className="text-[8px]" /></div>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 border-t border-gray-50 bg-gray-50/30">
                                    <button className="text-blue-600 font-semibold flex items-center gap-2 text-sm">Read Full Roadmap <FaArrowRight /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200">
                        <div className="text-gray-200 text-8xl mb-6 mx-auto animate-pulse flex justify-center"><FaSearch /></div>
                        <h3 className="text-2xl font-semibold text-gray-800">No results found</h3>
                        <p className="text-gray-400 mt-2 text-lg">Try widening your search or using different filters.</p>
                        <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="mt-8 px-10 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all">Clear Search</button>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default HigherEducation
