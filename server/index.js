const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
require("dotenv").config({ path: './.env' })


// Connect Database
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connection Initiated"))
    .catch(err => {
        console.error("MongoDB Connection Error:", err);
        // Optional: Still start server or exit? Better to know.
    })

// MiddleWares => to access the data of body
app.use(express.json())

app.use(cookieParser())

app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true
}))

// Routes
app.use('/api/v1/auth', require('./routes/authroute'))
app.use('/api/v1/admin', require('./routes/adminRoute'))
app.use('/api/v1/user', require('./routes/userRoute'))
// 404
// 404 for API routes
app.use("/api/*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
    })
} else {
    // Basic 404 for non-production/non-API
    app.use("*", (req, res) => {
        res.status(404).json({ message: "resource not found" })
    })
}
// Error Handlers
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "something went wrong" })
})



// Connect to the server
mongoose.connection.once("open", () => {
    console.log("Mongo Conncted");
    app.listen(process.env.PORT, console.log(`Server Running : http://localhost:${process.env.PORT}`))
})