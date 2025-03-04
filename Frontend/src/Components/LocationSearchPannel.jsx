import { useState } from "react"

function LocationSearchPannel({setShowPannel,setShowVehiclePannel}) {


  const [locations,setLocations]= useState([
     " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
     " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
     " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
     " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  ])
  return (

    
      locations.map((ele,i)=>(
        
        <div onClick={()=>setShowVehiclePannel(true)||setShowPannel(false)} key={i} className="flex items-center gap-4 bg-slate-100 rounded-xl px-2 py-3 cursor-pointer mb-3 active:border active:border-slate-800 active:rounded-xl">
        <div className="font-base text-base font-medium" ><i className="ri-map-pin-fill"></i></div>
        <div className=" text-lg font-medium">{ele}</div>
       </div>
      ))
    
   
  )
}

export default LocationSearchPannel