import { validationResult } from "express-validator";
import User from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { BlackListToken } from "../models/blacklistToken.model.js";

export const registerUser = async(req,res)=>{
    
   const error =  validationResult(req)

   if(!error.isEmpty()){
   return  res.status(400).json({error:error.array()})
   }

   const {fullName,email,password} = req.body

   const prevuser = await User.findOne({email})

   if(prevuser){
    return res.status(400).json({success:false,message:"user with this email already exist"})
   }

   const hashPassword = await User.hashPassword(password)
  const user =  await createUser({firstName:fullName.firstName,lastName:fullName.lastName,email,password : hashPassword})

  const token = await user.generateAuthToken()

  return res.status(200).json({success:true,message:{
    token,user
  }})
}

export const loginUser = async(req,res)=>{
  const error = validationResult(req)

  if(!error.isEmpty()){
    return res.status(400).json({error:error.array()})
  }

  const {email,password} = req.body

  const user = await User.findOne({email}).select("+password")

  if(!user){
    return res.status(400).json({success:false,message:"Invalid email or passsword"})
  }

  const isMatch = await user.comparePassword(password)

  if(!isMatch){
    return res.status(400).json({success:false,message:"Invalid email or passsword"})
  }

  const token = await user.generateAuthToken()

  res.cookie(token)

  return res.status(200).json({success:true,message:{user,token}})



}

export const userProfile = async(req,res)=>{

  try {
    const user = req.user

    return res.status(200).json({success:true,message:user})
  } catch (error) {
    return res.status(400).json({success:false,message:error.message})
  }

}

export const logout = async(req,res)=>{
  res.clearCookie("token")

  const token = req.cookies.token || req.headers.authorization.split(" ")[1]

  await BlackListToken.create({token})
  return res.status(400).json({success:true,message:"logout successfully"})
}