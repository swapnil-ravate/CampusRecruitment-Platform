const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const User = require("../models/user")

exports.register = asyncHandler(async (req, res) => {
    // Validation handled by middleware
    const { name, email, password, role, number } = req.body

    const result = await User.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "User already exists" })
    }
    const hashPass = await bcrypt.hash(password, 10)
    await User.create({ ...req.body, role: role || 'student', password: hashPass })
    res.status(201).json({ message: "User Register Success" })
})

exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "Invalid email or password" })
    }

    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({ message: "Invalid email or password" })
    }

    const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })

    // HTTP-Only Cookie
    res.cookie('userAuth', token, {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    })

    const { password: userPassword, ...userData } = result.toObject()
    res.status(200).json({
        message: "Login Success",
        result: userData
    })
})
exports.logout = asyncHandler(async (req, res) => {
    // Clear the cookie with the same options it was set with
    res.clearCookie("userAuth", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    })
    res.status(200).json({ message: "logout Success" })
})