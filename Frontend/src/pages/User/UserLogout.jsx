import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogout({children}) {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    const handleLogout = async()=>{

        await axios.post(`${import.meta.env.VITE_BASE_URL}/user/logout`,{
            headers:{
                Authorization: "Bearer "+token
            }
        })
    }
    useEffect( ()=>{
      
        handleLogout()
        localStorage.removeItem("token")

        if(!token){
            navigate("/user-login")
        }
         

    },[handleLogout,token])
  return (
   <>
   {children}
   </>
  )
}

export default UserLogout