import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectMongoose } from "./db/connectDB.js"
import userRouter from "./routes/user.routes.js"
import captionRouter from "./routes/caption.routes.js"


const app = express()

// Connection with DataBase
connectMongoose()

// Express built-in Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// third-party middleware
app.use(cors())
app.use(cookieParser())

// created Middleware
app.use("/user",userRouter)
app.use("/caption",captionRouter)

// checking routes 
app.get("/",(req,res)=>{
    res.json({"success":true,"message":"its working properly"})
})


export default app