const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "teacher", "admin"]
    },
    education: {
        type: String,
        required: false
    },
    skills: {
        type: String, // Stored as comma separated string
        required: false
    },
    resume: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    about: {
        type: String,
        required: false
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)