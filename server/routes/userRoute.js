const { getAllJobs, updateUserProfile, getUserProfile, getJobById } = require('../controllers/userController')
const { userVerification } = require('../middleware/authMiddleWare')
const validate = require('../middleware/validate')
const { updateProfileSchema, jobIdSchema } = require('../validations/userValidation')

const router = require('express').Router()

router
    .get("/getJobs", getAllJobs)
    .get("/getJob/:id", validate(jobIdSchema), getJobById)
    .use(userVerification)
    .put("/updateProfile", validate(updateProfileSchema), updateUserProfile)
    .get("/profile/:id", getUserProfile)

module.exports = router