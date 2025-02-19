
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import { BlackListToken } from '../models/blacklistToken.model.js'

export const authUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(400).json({success:false,message:"unauthorized"})
    }

    const blackListedToken = await BlackListToken.findOne({token})

    if(blackListedToken){
        return res.status(400).json({success:false,message:"unauthorized"})
    }
    try {

        const userId = jwt.verify(token,process.env.JWT_SECREAT)

        const user = await User.findById(userId)

        req.user = user;
    

       return next();
        
    } catch (error) {

        return res.status(400).json({success:false,message:"unauthorized"})
    }
}