import React from 'react'
import { Link } from 'react-router-dom'

function FinishRide({setCompleteRide}) {
  return (
    <div className="bg-white w-full p-3">
    <div onClick={()=>setCompleteRide(false)} className="w-full bg-slate-50  flex items-center justify-center pt-2">

<i className="text-xl font-medium text-center ri-arrow-down-wide-fill"></i>
    </div>
  <h2 className="text-2xl font-semibold pb-2 ">Finish this Ride</h2>

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
    <div className="flex flex-col items-center mt-3 gap-4">
     
  <Link to="/captionHome" className="w-full bg-blue-600 py-2 px-4 text-white text-center   rounded-xl text-lg">Finish Ride</Link>

  <p className="text-xs text-red-600">If you hasn&apos;t payment yet? Please do  the payment first</p>
    </div>
  
</div>

  )
}

export default FinishRide