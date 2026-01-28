const { register, login, logout } = require('../controllers/authController')
const validate = require('../middleware/validate')
const { registerSchema, loginSchema } = require('../validations/authValidation')

const router = require('express').Router()

router
    .post("/register", validate(registerSchema), register)
    .post("/login", validate(loginSchema), login)
    .post("/logout", logout)

module.exports = router    