import mongoose from "mongoose"
import dotenv from "dotenv" 

dotenv.config()


export const conenctDB = async()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`)
  } catch (error) {
    console.log("Error in connecting to MongoDB",error)
    process.exit(1) // failure code 1
  }
}