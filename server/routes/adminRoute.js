// const router = require('./authroute')

const { adminJobPost, getAdminStats, deleteJob, getAllUsers, deleteUser } = require('../controllers/adminController')

const router = require('express').Router()

router
    .post("/jobPost", adminJobPost)
    .get("/stats", getAdminStats)
    .delete("/job/delete/:id", deleteJob)
    .get("/users", getAllUsers)
    .delete("/user/delete/:id", deleteUser)

module.exports = router    
