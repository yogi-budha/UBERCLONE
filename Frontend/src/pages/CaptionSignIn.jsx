import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptionSignIn() {
  const [captionData,setcaptionData] = useState({email:"" ,password:""})
  
    const submitHandler = (e)=>{
      e.preventDefault()
      console.log(captionData)
    }
  return (
    <div className="p-6 h-screen">
      <div className="mb-10">
        <img
          className="w-20"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between h-[90%] ">
        <form onSubmit={submitHandler}>
        <h2 className="text-center font-bold text-2xl mb-5">Login As a Captain</h2>
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-md font-semibold">Enter Your Email:</h3>
          <input
            className=" border px-3 py-2 rounded bg-slate-100/75 outline-none"
            type="email"
            required
            placeholder="example@abc.com"
            value={captionData.email}
            
            onChange={(e)=>{
              setcaptionData((prev)=>({...prev,email:e.target.value}))
            }}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-md font-semibold">Enter Your Password:</h3>
          <input
            className=" border px-3 py-2 rounded bg-slate-100/75 outline-none"
            type="password"
            placeholder="******"
            value={captionData.password}
            onChange={(e)=>{
              setcaptionData((prev)=>({...prev,password:e.target.value}))

            }}
          />
        </div>

        <button className="bg-black text-white font-semibold text-lg px-3 py-2 rounded mt-2 w-full">Login</button>
      <p className="mt-4">Don&lsquo;t have an account? <Link to="/caption-signup" className="text-blue-700 font-medium">Create a account</Link></p>
      </form>

   <Link to="/user-login" className="bg-[#14b053d0] text-white px-3 py-2 rounded w-full text-lg text-center font-semibold">sign in as a user</Link>
    </div>
      </div>
      
  )
}

export default CaptionSignIn