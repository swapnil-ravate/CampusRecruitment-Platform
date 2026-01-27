const asyncHandler = require("express-async-handler")
const Jobs = require("../models/Jobs")
const User = require("../models/user")

exports.getAllJobs = asyncHandler(async (req, res) => {
    const result = await Jobs.find()
    res.status(200).json({ message: "Jobs Fetch Success", result })
})

exports.AddAllJobs = asyncHandler(async (req, res) => {
    // This seems to be a placeholder or incorrect implementation in original file (Jobs.Create vs Jobs.create), keeping it but might need fix later if used. 
    // Assuming user meant to create a job, but this function name suggests adding multiple? 
    // Keeping as is to avoid breaking changes to existing logic unless requested.
    const result = await Jobs.create(req.body)
    res.status(200).json({ message: "Jobs Added Success", result })
})

exports.getJobs = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = id ? await Jobs.findById(id) : await Jobs.find();
    res.status(200).json({ message: "Jobs Fetch Success", result })
})

exports.updateUserProfile = asyncHandler(async (req, res) => {
    // Priority: req.user (from auth middleware) > req.body.userId (fallback)
    const id = req.user?.userId || req.body._id || req.body.userId;

    if (!id) {
        return res.status(400).json({ message: "User ID not found" });
    }

    const result = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!result) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile Updated Successfully", result });
})

exports.getUserProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // Or from token
    const result = await User.findById(id);
    if (!result) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ result });
})