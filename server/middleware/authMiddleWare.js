const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

exports.userVerification = asyncHandler(async (req, res, next) => {
    const token = req.cookies.userAuth
    if (!token) {
        return res.status(401).json({ message: "Unauthorized, please login" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            return res.status(401).json({ message: "Invalid Token" })
        }
        req.user = decode
        next()
    })
})
