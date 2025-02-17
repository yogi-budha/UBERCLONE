import mongoose from "mongoose";

export const connectMongoose = ()=>{
    try {
        mongoose.connect(process.env.DB_URI).then(()=>{
            console.log("mongodb connected successfully")
        })
    } catch (error) {
        console.log("error while connecting mongoose",error)
        
    }
}