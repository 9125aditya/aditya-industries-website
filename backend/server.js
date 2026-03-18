import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()
connectDB()

const app = express()

// ✅ CORS FIX (FINAL)
const allowedOrigins = [
  "http://localhost:5173",
  "https://aditya-industries-website.vercel.app"
]

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

// ✅ EXTRA SAFETY HEADERS (VERY IMPORTANT)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://aditya-industries-website.vercel.app")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

// ✅ BODY PARSER
app.use(express.json())

// ✅ ROUTES
app.use("/api", contactRoutes)

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API Running")
})

// ✅ SERVER START
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})