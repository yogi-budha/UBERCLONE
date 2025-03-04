import React, { useEffect, useRef } from 'react'
import carImage from '../assets/OIP.jpeg'
import gsap from 'gsap';

function LookingForDriver() {
    const lineRef = useRef(null);

    useEffect(() => {
        gsap.to(lineRef.current, {
          x: "100%", 
          duration: 2,
          repeat: -1, 
          ease: "linear",
        });
    
        gsap.to(lineRef.current, {
          background: "linear-gradient(to right, red, yellow, green, blue)",
          duration: 2,
          repeat: -1,
          ease: "linear",
        });
      }, []);

  return (
   <div className="bg-white w-full">
            <h1 className="text-xl font-bold mb-3 px-2">Looking for Driver</h1>
            <div className="w-full h-1 bg-gray-300 relative overflow-hidden">
      <div ref={lineRef} className="absolute h-1 w-full bg-blue-500"></div>
    </div>
         <div className="w-72 flex justify-center items-center">
           <img className="brightness-100 hover:brightness-150 transition duration-300 " src={carImage} alt="" />
         </div>
         <hr className="h-1" />
   
         <div className="w-full p-3 ">
           <div className="flex items-center gap-5">
             <i className="text-xl  ri-map-pin-range-fill"></i>
             <div className="flex flex-col text-xl ">
               <h3 className="font-bold">5434,234</h3>
               <h3 className="text-slate-500 mb-3">somethings random words</h3>
             </div>
           </div>
   
   
             <hr />
           <div className="flex  items-center gap-5 mb-3 mt-2">
           <i className="ri-square-fill"></i>
             <div className="flex flex-col text-xl ">
               <h3 className="font-bold">5434,234</h3>
               <h3 className="text-slate-500">somethings random words</h3>
             </div>
           </div>
              <hr />
           
   
   
           <div className="flex  items-center gap-5 mt-2">
        <i className="ri-bank-card-fill"></i>
             <div className="flex flex-col text-xl ">
               <h3 className="font-bold">5434,234</h3>
               <h3 className="text-slate-500">somethings random words</h3>
             </div>
           </div>
   
   
          
   
   
          
   
   
     
   
   
         </div>
   
        
       </div>
  )
}

export default LookingForDriver