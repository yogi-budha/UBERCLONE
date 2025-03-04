import React from "react";
import carImage from "../assets/OIP.jpeg";
import motorImage from '../assets/motor.webp'

function ConformRide({ setShowLookingForDriverPannel }) {
  return (
    <div className="bg-white w-full">
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

      <button onClick={()=>setShowLookingForDriverPannel(true)} className="bg-green-600 w-full text-white py-3 mt-3 rounded-md text-lg">Conform Ride Now</button>
    </div>
  );
}

export default ConformRide;
