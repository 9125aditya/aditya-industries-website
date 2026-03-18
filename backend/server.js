import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()
connectDB()

const app = express()

// ✅ SIMPLE CORS
app.use(cors())

// ✅ MANUAL HEADERS (fixes preflight)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

// ✅ OPTIONS handler
app.options("/*", (req, res) => {
  res.sendStatus(200)
})

app.use(express.json())

app.use("/api", contactRoutes)

app.get("/", (req,res)=>{
  res.send("API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})