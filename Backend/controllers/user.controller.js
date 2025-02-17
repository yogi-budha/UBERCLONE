import { validationResult } from "express-validator";
import User from "../models/user.model.js";
import { createUser } from "../services/user.service.js";

export const registerUser = async(req,res)=>{
    
   const error =  validationResult(req)

   if(!error.isEmpty()){
   return  res.status(400).json({error:error.array()})
   }

   const {fullName,email,password} = req.body
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

  return res.status(200).json({success:true,message:{user,token}})



}