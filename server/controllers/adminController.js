const asyncHandler = require("express-async-handler")
const Jobs = require("../models/Jobs")
const User = require("../models/user")

exports.adminJobPost = asyncHandler(async (req, res) => {
    const result = await Jobs.create(req.body)
    res.status(200).json({ message: "Jobs Added Success", result })
})

exports.getAdminStats = asyncHandler(async (req, res) => {
    const totalJobs = await Jobs.countDocuments();
    // Assuming 'active' jobs might be a future feature, for now total is active
    // You might want to filter by status if you add a status field later
    const activeJobs = totalJobs;

    // For pending queries, we don't have a model yet, returning 0 or placeholder
    const pendingQueries = 0;

    // You can also get recent jobs here if needed, or stick to the existing /user/getJobs
    const recentJobs = await Jobs.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).json({
        result: {
            totalJobs,
            activeJobs,
            pendingQueries,
            recentJobs
        }
    })
})

exports.deleteJob = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await Jobs.findByIdAndDelete(id);
    res.status(200).json({ message: "Job Deleted Successfully" });
})

exports.getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({ role: { $ne: "admin" } }); // Exclude admin
    res.status(200).json({ result: users });
})

exports.deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User Deleted Successfully" });
})
