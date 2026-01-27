import React, { useEffect, useState } from 'react';
import { useAddjobMutation } from '../../redux/api/adminApi';
import { toast } from 'react-hot-toast';

const AdminJobPost = () => {
    const [postJob, { isSuccess, isLoading }] = useAddjobMutation();
    const [jobData, setJobData] = useState({
        jobTitle: '',
        company: '',
        experience: '',
        jobDesc: '',
        salary: '',
        location: '',
        skills: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        postJob(jobData);
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Job Added Successfully");
            setJobData({
                jobTitle: '',
                company: '',
                experience: '',
                jobDesc: '',
                salary: '',
                location: '',
                skills: ''
            });
        }
    }, [isSuccess]);

    const InputField = ({ label, name, type = "text", value, onChange, placeholder, required = true }) => (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-600 px-8 py-6">
                    <h2 className="text-2xl font-bold text-white">Post a New Job</h2>
                    <p className="text-blue-100 mt-1">Fill in the details to publish a new job opening.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Job Title" name="jobTitle" value={jobData.jobTitle} onChange={handleChange} placeholder="e.g. Senior Developer" />
                        <InputField label="Company Name" name="company" value={jobData.company} onChange={handleChange} placeholder="e.g. Tech Corp" />

                        <InputField label="Experience (Years)" name="experience" value={jobData.experience} onChange={handleChange} placeholder="e.g. 3-5 years" />
                        <InputField label="Salary" name="salary" value={jobData.salary} onChange={handleChange} placeholder="e.g. $80,000" />

                        <InputField label="Location" name="location" value={jobData.location} onChange={handleChange} placeholder="e.g. Remote / New York" />
                        <InputField label="Required Skills" name="skills" value={jobData.skills} onChange={handleChange} placeholder="e.g. React, Node.js" />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="jobDesc" className="block text-sm font-semibold text-gray-700 mb-2">Job Description</label>
                        <textarea
                            id="jobDesc"
                            name="jobDesc"
                            rows="4"
                            value={jobData.jobDesc}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                            placeholder="Detailed description of the role..."
                            required
                        ></textarea>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-8 py-3 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1'}`}
                        >
                            {isLoading ? 'Posting...' : 'Post Job'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminJobPost;
