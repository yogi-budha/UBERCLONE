import React, { useContext, useEffect } from 'react'
import { userContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

function UserWrapper({children}) {

    const navigate = useNavigate()
    const {user} = useContext(userContext)

    useEffect(()=>{
       const token =  localStorage.getItem("token")

       if(!token){
        navigate("/user-login")
       }
    })
  return (
   <>
   {children}
   </>
  )
}

export default UserWrapper