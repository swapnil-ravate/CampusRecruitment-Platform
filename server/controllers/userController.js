const asyncHandler = require("express-async-handler");
const userService = require("../services/userService");

exports.getAllJobs = asyncHandler(async (req, res) => {
    const result = await userService.getAllJobsService();
    res.status(200).json({ status: 'success', result });
});

exports.getJobById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await userService.getJobByIdService(id);
    res.status(200).json({ status: 'success', result });
});

exports.updateUserProfile = asyncHandler(async (req, res) => {
    const id = req.user?.userId || req.body._id || req.body.userId;
    const result = await userService.updateUserProfileService(id, req.body);
    res.status(200).json({ status: 'success', message: "Profile Updated Successfully", result });
});

exports.getUserProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await userService.getUserProfileService(id);
    res.status(200).json({ status: 'success', result });
});