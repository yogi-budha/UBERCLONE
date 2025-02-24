import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CaptionWrapper({children}) {

    const navigate = useNavigate()

useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
        navigate("/caption-login")
    }else{

        navigate("/captionHOme")
    }
},[navigate])
  
  return (
    <>
    {children}
    </>
  )
}

export default CaptionWrapper