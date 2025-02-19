import {Caption} from "../models/caption.model.js"
import { captionService } from "../services/caption.service.js"


const registerCaption = async (req,res)=>{

    const {fullName:{firstName,lastName},email,password,vehicle:{color,plate,capacity,vehicleType}} = req.body

    const captionAlreadyExist = await Caption.findOne({email})

    if(captionAlreadyExist){
        return res.status(400).json({success:false,message:"caption already exist"})
    }

    try {
       const hashPassword = await Caption.hashPassword(password)
        
          const caption =   await captionService({
        firstName,lastName,email,password:hashPassword,color,plate,capacity,vehicleType
    })

    const token = await caption.generateToken()
    res.cookie(token)

    return res.status(201).json({success:true,message:"caption is successfully registerd", caption,token})
    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false,message:"error while registering the caption"})
    }

}

const loginCaption = async (req,res)=>{
    const {email,password} = req.body

    try {
         const captionExist = await Caption.findOne({email})

    if(!captionExist){
        return res.status(400).json({success:false,message:"Invalid email or password"})
    }

    
   const right =  await captionExist.comparePassword(password)

    if(!right){
        return res.status(400).json({success:false, message:"Invalid email or password"})
    }

    const token = await captionExist.generateToken()
    res.cookie(token)

    return res.status(200).json({success:true,message:"login successfully", caption:captionExist,token})
    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false,message:"error while login in caption"})
    }
   


}

const profileCaption = async (req,res)=>{
    
    return res.status(200).json({success:true,caption:req.caption})
}

const logout = async(req,res)=>{
    const token = req.cookies.token || req.headers.authorization.split("")[1]
    const blackListedToken = await BlackListToken.create({token})
    res.clearCookie("token")
    return res.status(200).json({success:false,message:"logout successfully"})
}
export {
    registerCaption,loginCaption,profileCaption,logout
}