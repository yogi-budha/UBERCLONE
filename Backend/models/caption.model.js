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

captionSchema.methods.generateToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECREAT,{expiresIn:"24h"})
    return token
}

captionSchema.statics.hashPassword = async function(password){

    return await bcrypt.hash(password,10)

}

captionSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

export const Caption = mongoose.model("Caption",captionSchema)