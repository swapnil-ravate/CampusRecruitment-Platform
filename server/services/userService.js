const User = require("../models/user");
const Jobs = require("../models/Jobs");
const AppError = require("../utils/AppError");

exports.getAllJobsService = async () => {
    return await Jobs.find();
};

exports.getJobByIdService = async (id) => {
    const job = await Jobs.findById(id);
    if (!job) {
        throw new AppError("Job not found", 404);
    }
    return job;
};

exports.updateUserProfileService = async (id, updateData) => {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!user) {
        throw new AppError("User not found", 404);
    }
    return user;
};

exports.getUserProfileService = async (id) => {
    const user = await User.findById(id);
    if (!user) {
        throw new AppError("User not found", 404);
    }
    return user;
};
