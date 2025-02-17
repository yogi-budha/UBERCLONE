import User from "../models/user.model.js"

export const createUser = async ({firstName,lastName,email,password})=>{
    if(!firstName || !email || !password){
        throw new Error("All field is required")
    }

 const user =   await User.create({
    fullName:{firstName,lastName},email,password})

 return user
}