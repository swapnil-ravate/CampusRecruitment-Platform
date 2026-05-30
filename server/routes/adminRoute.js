const { adminJobPost, getAdminStats, deleteJob, getAllUsers, deleteUser } = require('../controllers/adminController')
const { userVerification } = require('../middleware/authMiddleWare')

const router = require('express').Router()

// All admin routes require authentication
router.use(userVerification)

router
    .post("/jobPost", adminJobPost)
    .get("/stats", getAdminStats)
    .delete("/job/delete/:id", deleteJob)
    .get("/users", getAllUsers)
    .delete("/user/delete/:id", deleteUser)

module.exports = router
