import { Caption } from "../models/caption.model.js"



export const captionService = async ({firstName,lastName,email,password,color,plate,vehicleType,capacity})=>{
    if(!firstName || !email || !password || !color || !plate || !vehicleType || !capacity){
        throw new Error("All field must be required")
    }

    const caption = await Caption.create({
        fullName:{
            firstName, lastName
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return caption
}