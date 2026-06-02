const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")

require("dotenv").config()

const app = express()

// ─── Database Connection (singleton for serverless cold starts) ────────────────
const globalCache = global.__MONGO_CONN__ || { conn: null, promise: null }
global.__MONGO_CONN__ = globalCache

const connectDB = async () => {
    if (globalCache.conn && mongoose.connection.readyState === 1) {
        return globalCache.conn
    }

    if (!process.env.MONGO_URL) {
        throw new Error("MONGO_URL is not configured")
    }

    if (!globalCache.promise) {
        globalCache.promise = mongoose.connect(process.env.MONGO_URL).then((conn) => {
            console.log("MongoDB Connected")
            return conn
        }).catch((err) => {
            globalCache.promise = null
            throw err
        })
    }

    globalCache.conn = await globalCache.promise
    return globalCache.conn
}

const parseAllowedOrigins = () => {
    const configuredOrigins = [
        process.env.CLIENT_URL,
        ...(process.env.CLIENT_URLS || "")
            .split(",")
            .map((origin) => origin.trim())
            .filter(Boolean)
    ]

    if (process.env.VERCEL_URL) {
        configuredOrigins.push(`https://${process.env.VERCEL_URL}`)
    }
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
        configuredOrigins.push(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
    }

    if (process.env.NODE_ENV !== "production") {
        configuredOrigins.push(
            "http://localhost:5173",
            "http://127.0.0.1:5173"
        )
    }

    return [...new Set(configuredOrigins.filter(Boolean))]
}

const allowedOrigins = parseAllowedOrigins()
const corsOptions = {
    origin: (origin, callback) => {
        // Allow non-browser or same-origin requests without Origin header.
        if (!origin) return callback(null, true)
        if (allowedOrigins.includes(origin)) return callback(null, true)
        return callback(null, false)
    },
    credentials: true
}

// ─── Middlewares ───────────────────────────────────────────────────────────────
app.use(express.json())
app.use(cookieParser())

app.use(cors(corsOptions))
app.options("*", cors(corsOptions))

// Lightweight health check endpoint for uptime/verification.
app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" })
})

// Database connection middleware for API routes in serverless environment
app.use("/api", async (req, res, next) => {
    try {
        await connectDB()
        next()
    } catch (err) {
        console.error("Database connection middleware error:", err)
        res.status(500).json({
            message: "Database connection failed"
        })
    }
})

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
module.exports = app