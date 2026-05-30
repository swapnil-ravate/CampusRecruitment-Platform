const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")

require("dotenv").config()

const app = express()

// ─── Middlewares ───────────────────────────────────────────────────────────────
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        process.env.CLIENT_URL
    ].filter(Boolean),
    credentials: true
}))

// ─── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/v1/auth', require('./routes/authroute'))
app.use('/api/v1/admin', require('./routes/adminRoute'))
app.use('/api/v1/user', require('./routes/userRoute'))

// 404 for API routes
app.use("/api/*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

// In production (traditional host), serve the React build
// On Vercel, the frontend is a separate project — this block is skipped
if (process.env.NODE_ENV === 'production' && process.env.SERVE_STATIC === 'true') {
    app.use(express.static(path.join(__dirname, '../client/dist')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
    })
} else {
    app.use("*", (req, res) => {
        res.status(404).json({ message: "resource not found" })
    })
}

// ─── Error Handler ─────────────────────────────────────────────────────────────
app.use(require('./middleware/errorMiddleware'))

// ─── Database Connection (singleton for serverless cold starts) ────────────────
let isConnected = false

const connectDB = async () => {
    if (isConnected) return
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        isConnected = conn.connections[0].readyState === 1
        console.log("MongoDB Connected")
    } catch (err) {
        console.error("MongoDB Connection Error:", err)
        throw err
    }
}

// ─── Start Server (local dev only) ────────────────────────────────────────────
// Vercel does NOT call listen() — it imports `app` directly as a serverless function
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Server Running : http://localhost:${PORT}`)
        })
    }).catch((err) => {
        console.error("Failed to start server:", err)
        process.exit(1)
    })
}

// ─── Serverless handler for Vercel ────────────────────────────────────────────
// Vercel calls this exported function on each request
module.exports = async (req, res) => {
    await connectDB()
    app(req, res)
}