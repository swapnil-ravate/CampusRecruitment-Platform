const { getAllJobs, updateUserProfile, getUserProfile } = require('../controllers/userController')
const { userVerification } = require('../middleware/authMiddleWare') // Assuming this exists or will implement/check

const router = require('express').Router()

router
    .get("/getJobs", getAllJobs)
    .use(userVerification) // Protect subsequent routes
    .put("/updateProfile", updateUserProfile)
    .get("/profile/:id", getUserProfile)

module.exports = router    