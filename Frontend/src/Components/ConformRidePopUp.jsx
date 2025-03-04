import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ConformRidePopUp({setConformShowRidePopUp,setShowRidePopUp}) {
    const [otp,setOtp] = useState()

    const submitHandler = (e)=>{
        e.preventDefault()
        setOtp(e.target.value)
    }
  return (
    <div className="bg-white h-[90%] w-full p-3 pt-12">
           
          <h2 className="text-2xl font-semibold pb-2 ">Conform this ride to start</h2>

          <div className="flex items-center justify-between my-5 bg-yellow-400 py-3 px-2 rounded-md ">
           <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover " src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg" alt="" />
          <p className="font-semibold text-lg ">Yogesh Budha</p>
        </div>

        <div>
          <p className="text-xl font-semibold">2.2KM</p>
        
        </div> 
        </div>

    
          <div className="w-full p-3 ">
            <div className="flex items-center gap-5">
              <i className="text-xl  ri-map-pin-range-fill"></i>
              <div className="flex flex-col text-lg ">
                <h3 className="font-bold">5434,234</h3>
                <h3 className="text-slate-500 mb-2">somethings random words</h3>
              </div>
            </div>
    
    
              <hr />
            <div className="flex  items-center gap-5 mb-2 mt-2">
            <i className="ri-square-fill"></i>
              <div className="flex flex-col text-lg ">
                <h3 className="font-bold">5434,234</h3>
                <h3 className="text-slate-500">somethings random words</h3>
              </div>
            </div>
               <hr />
            
    
    
            <div className="flex  items-center gap-5 mt-2">
         <i className="ri-bank-card-fill"></i>
              <div className="flex flex-col text-lg ">
                <h3 className="font-bold">5434,234</h3>
                <h3 className="text-slate-500">somethings random words</h3>
              </div>
            </div>

    
          </div>
            <div className=" mt-4">
                <form onSubmit={(e)=>submitHandler(e)}  className="flex flex-col  gap-4 mt-2">

                    <input value={otp} className="border border-black px-3 py-2 text-lg rounded-xl font-mono mb-2" placeholder='Enter OTP' type="text" />
                    <Link to={"/caption-Riding"} className="text-center bg-green-600 py-1 px-2 text-white   rounded-xl text-lg">Accept</Link>
                <button onClick={()=>setConformShowRidePopUp(false) || setShowRidePopUp(false)}className="bg-red-500 py-1 px-2 text-white   rounded-xl text-lg">Cancle</button>
                </form>
          
            </div>
          
        </div>
  )
}

export default ConformRidePopUp