import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CaptionLogout({children}) {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const handlelogout = async()=>{

        await axios.post(`${import.meta.env.VITE_BASE_URL}/caption/logout`,{
            
                headers:{
                    Authorization:"Brearer " + token
                }
            
        })
    }

    useEffect(()=>{

        handlelogout()

        localStorage.removeItem("token")

        if(!token){
            navigate("/caption-login")
        }

    },[handlelogout,token])
  return (
    <>
    {children}
    </>
  )
}

export default CaptionLogout