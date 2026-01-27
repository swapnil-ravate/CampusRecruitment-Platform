import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { useUpdateProfileMutation } from '../../redux/api/userApi';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaFileAlt, FaEdit, FaSave } from 'react-icons/fa';

const UserProfile = () => {
    const { user } = useSelector(state => state.user);
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();
    const [isEditing, setIsEditing] = useState(false);

    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        number: yup.string().required('Phone number is required'),
        education: yup.string().nullable(),
        skills: yup.string().nullable(),
        location: yup.string().nullable(),
        experience: yup.string().nullable(),
        about: yup.string().nullable(),
        resume: yup.string().url('Must be a valid URL').nullable(),
    });

    const formik = useFormik({
        initialValues: {
            name: user?.name || '',
            email: user?.email || '',
            number: user?.number || '',
            education: user?.education || '',
            skills: user?.skills || '',
            location: user?.location || '',
            experience: user?.experience || '',
            about: user?.about || '',
            resume: user?.resume || '',
            _id: user?._id
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values) => {
            try {
                await updateProfile(values).unwrap();
                toast.success('Profile updated successfully');
                setIsEditing(false);
            } catch (error) {
                toast.error(error?.data?.message || 'Failed to update profile');
            }
        },
    });

    if (!user && !isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-700">Please login to view your profile</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                    <button
                        onClick={() => isEditing ? formik.handleSubmit() : setIsEditing(true)}
                        className={`flex items-center gap-2 px-6 py-2 rounded-xl text-white font-medium transition-all ${isEditing
                            ? 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
                            : 'bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl'
                            }`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : isEditing ? <><FaSave /> Save Changes</> : <><FaEdit /> Edit Profile</>}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Personal Info */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="glass-card rounded-2xl p-6 text-center">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg">
                                {user?.name?.charAt(0).toUpperCase()}
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
                            <p className="text-gray-500">{user?.role === 'user' ? 'Student' : user?.role}</p>
                        </div>

                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaUser className="text-blue-600" /> Personal Info
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-500 block">Full Name</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            {...formik.getFieldProps('name')}
                                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                        />
                                    ) : (
                                        <p className="text-gray-800 font-medium">{user?.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="text-sm text-gray-500 block">Email</label>
                                    <div className="flex items-center gap-2 text-gray-800">
                                        <FaEnvelope className="text-gray-400 text-sm" />
                                        <p className="font-medium">{user?.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-500 block">Phone</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            {...formik.getFieldProps('number')}
                                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-2 text-gray-800">
                                            <FaPhone className="text-gray-400 text-sm" />
                                            <p className="font-medium">{user?.number}</p>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="text-sm text-gray-500 block">Location</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            {...formik.getFieldProps('location')}
                                            placeholder="e.g. Bangalore, India"
                                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-2 text-gray-800">
                                            <FaMapMarkerAlt className="text-gray-400 text-sm" />
                                            <p className="font-medium">{user?.location || 'Not specified'}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="md:col-span-2 space-y-6">
                        {/* About Section */}
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaUser className="text-purple-600" /> About
                            </h3>
                            {isEditing ? (
                                <textarea
                                    {...formik.getFieldProps('about')}
                                    rows="4"
                                    placeholder="Tell us about yourself..."
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />
                            ) : (
                                <p className="text-gray-700 leading-relaxed">
                                    {user?.about || 'No information added completely.'}
                                </p>
                            )}
                        </div>

                        {/* Education & Experience */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-card rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaGraduationCap className="text-green-600" /> Education
                                </h3>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        {...formik.getFieldProps('education')}
                                        placeholder="Highest Qualification"
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    />
                                ) : (
                                    <p className="text-gray-800 font-medium">{user?.education || 'Not Specified'}</p>
                                )}
                            </div>

                            <div className="glass-card rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaBriefcase className="text-orange-600" /> Experience
                                </h3>
                                {isEditing ? (
                                    <select
                                        {...formik.getFieldProps('experience')}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    >
                                        <option value="">Select Experience</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="0-1 Years">0-1 Years</option>
                                        <option value="1-3 Years">1-3 Years</option>
                                        <option value="3-5 Years">3-5 Years</option>
                                        <option value="5+ Years">5+ Years</option>
                                    </select>
                                ) : (
                                    <p className="text-gray-800 font-medium">{user?.experience || 'Not Specified'}</p>
                                )}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaFileAlt className="text-pink-600" /> Skills
                            </h3>
                            {isEditing ? (
                                <div>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps('skills')}
                                        placeholder="e.g. React, Node.js, Python (comma separated)"
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {user?.skills ? (
                                        user.skills.split(',').map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {skill.trim()}
                                            </span>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 italic">No skills added yet</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Resume Link */}
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaFileAlt className="text-red-500" /> Resume / CV
                            </h3>
                            {isEditing ? (
                                <input
                                    type="text"
                                    {...formik.getFieldProps('resume')}
                                    placeholder="Link to your resume (Google Drive, LinkedIn, etc.)"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />
                            ) : (
                                <div>
                                    {user?.resume ? (
                                        <a
                                            href={user.resume}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            View Resume <FaFileAlt className="ml-2" />
                                        </a>
                                    ) : (
                                        <p className="text-gray-500 italic">No resume uploaded</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
