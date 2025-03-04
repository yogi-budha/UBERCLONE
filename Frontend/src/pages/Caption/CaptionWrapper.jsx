import axios from "axios";
import  { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { captionContext } from "../../context/CaptionContext";

function CaptionWrapper({ children }) {
  const {setCaption} = useContext(captionContext)
  const [isLoading,setIsLoading] = useState(true)
  const navigate = useNavigate();
    const token = localStorage.getItem("token");
  const getuserProfile = async ()=>{

    await axios.get(`${import.meta.env.VITE_BASE_URL}/caption/profile`,{
      headers:{
        Authorization:`brearer ${token}`
      }
    }).then((res)=>{

      if(res.status == 200){
        setCaption(res.data.caption)
        setIsLoading(false)
      }


    }).catch((error)=>{
      console.log(error)
      navigate("/caption-login")
    })
  }

  useEffect(() => {
    getuserProfile()
    if (!token ) {
      navigate("/caption-login");
    } 
  }, [token]);

  if(isLoading){
    return <>
    <div>Loading........</div>
    </>
  }
  return <>{children}</>;
}

export default CaptionWrapper;
