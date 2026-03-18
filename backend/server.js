import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

connectDB()

const app = express()

app.use(cors({
  origin: "*",
}))

app.use(express.json())

// ✅ FIXED
app.use("/api", contactRoutes)

app.get("/", (req,res)=>{
  res.send("API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Server up and running on port ${PORT}`)
})