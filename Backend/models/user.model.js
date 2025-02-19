import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minLength:[3,'FirstName must be three character Long']
        },
        lastName:{
            type:String,
            minLength:[3,'lastName must be three chatacter long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:[5,"email must be five character long"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECREAT,{expiresIn:"24h"})

    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const User = mongoose.model('User',userSchema)

export default User