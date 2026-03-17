import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

connectDB()

const app = express()



app.use(cors())
app.use(express.json())

// Middleware
app.use("/api/contact", contactRoutes)

app.get("/", (req,res)=>{
    res.send("Aditya Industries API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server up andrunning on port http://localhost:${PORT}`)
})