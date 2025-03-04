import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserWrapper({children}) {

    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()
    const {user,setUser} = useContext(userContext)
    const token =  localStorage.getItem("token")

    const getuserData = async()=>{
      await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`,{
        headers:{
          Authorization:`brearer ${token}`
        }
      }).then((res)=>{
        if(res.status==200){

          setUser(res.data.message)
          setIsLoading(false)
        }
        
      }).catch(error=>{
        console.log(error)
        localStorage.removeItem("token")
        navigate("/user-login")
      })
    }

    useEffect(()=>{
      getuserData()
       if(!token){
        navigate("/user-login")
       }
    },[token])

    if(isLoading){
      return <div>Loading.........</div>
    }
  return (
   <>
   {children}
   </>
  )
}

export default UserWrapper