import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"

import { connectMongoose } from "./db/connectDB.js"
import userRouter from "./routes/user.routes.js"


const app = express()

connectMongoose()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.json({"success":true,"message":"its working properly"})
})


export default app