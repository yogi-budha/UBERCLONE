import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const captionSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minLength:[3,"firstName must be at least 3 character long"]
        },
        lastName:{
            type:String,
            minLength:[3,"lastName must be at least 3 character long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true,
        match:[5,"email must be at least 5 character long"]
    },
    password:{
        type:String,
        required:true
    },
    socketId:{
        type:String,
        
    },

    status:{
        type:String,
        enum:["active","inactive"],
        required:true,
        default:"inactive"
        
    },

    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[2,"color must be at least 2 character long"]
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"plate must be at least 3 character long"]

        },
        capacity:{
            type:String,
            required:true,
            min:[1,"capacity at least 1"]
        },
        vehicleType:{
            type:String,
            enum:["moterCycle","car","auto"],
            required:true
        }
    },

    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }


})

captionSchema.method.generateToken = ()=>{
    const token = jwt.sign({_id:this._id},process.env.JWT_SECREAT,{expiresIn:"24h"})
    return token
}

captionSchema.static.hashPassword = async (password)=>{

    return await bcrypt.hash(password,10)

}

captionSchema.method.comparePassword = async (password)=>{
    return await bcrypt.compare(password,this.password)
}