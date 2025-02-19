import jwt from "jsonwebtoken"
import { Caption } from "../models/caption.model.js"
import { BlackListToken } from "../models/blacklistToken.model.js"

export const captionAuth = async (req,res,next)=>{
    const token= req.cookies.token || req.headers.authorization?.split(" ")[1]


    if(!token){
        return res.status(400).json({success:false,message:"unauthorized"})
    }

    
    try {
        const blackListedToken = await BlackListToken.findOne({token})
    
        if(blackListedToken){
         return   res.status(400).json({success:false,message:"unauthorized"})
        }
           const captionId = await jwt.verify(token,process.env.JWT_SECREAT)
           

    const caption = await Caption.findById(captionId)

    req.caption = caption

    next()
    } catch (error) {
        return res.status(400).json({success:false,message:"unauthorized cannot get the caption"})
    }

 
}