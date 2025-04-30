import express from "express"
import dotnev from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { conenctDB } from "./lib/db.js"
import cookieParser from "cookie-parser"

dotnev.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
  conenctDB();
})