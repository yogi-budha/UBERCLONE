import React from "react";
import carImage from "../assets/OIP.jpeg";
import auto from "../assets/auto.webp";
import motor from "../assets/motor.webp";

function VehiclePannel({ setShowVehiclePannel,setShowConformRidePannel}) {
  return (
    <div  className="bg-white py-3 ">
      <div className="flex items-center justify-between px-4">
        <h3 className="font-bold text-xl p-4">Choose a Vehicle</h3>
        <i
          onClick={() => {
            setShowVehiclePannel(false);
          }}
          className="text-2xl ri-arrow-down-wide-fill"
        ></i>
      </div>

      <div className="flex items-center gap-3 mb-3 active:border active:border-slate-800 active:rounded-xl " onClick={()=>setShowVehiclePannel(false) || setShowConformRidePannel(true)}>
        <div className="w-24">
          <img className="w-full -z-10" src={carImage} alt="" />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-3">
            <p className="font-serif font-semibold">UberGO</p>
            <i className="ri-user-fill">4</i>
          </div>
          <p className="text-md font-semibold text-slate-800">2min, aways</p>
          <p className="text-slate-400 text-sm font-semibold">
            Affortable,compactable Price
          </p>
        </div>
        <div className="font-semibold text-lg">Rs.123</div>
      </div>

      <div className="flex items-center gap-3 mb-3 active:border active:border-slate-800 active:rounded-xl " onClick={()=>setShowVehiclePannel(false) || setShowConformRidePannel(true)}>
        <div className="w-24">
          <img className="w-full" src={motor} alt="" />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-3">
            <p className="font-serif font-semibold">Motor</p>
            <i className="ri-user-fill">4</i>
          </div>
          <p className="text-md font-semibold text-slate-800">2min, aways</p>
          <p className="text-slate-400 text-sm font-semibold">
            Affortable,compactable Price
          </p>
        </div>
        <div className="font-semibold text-lg">Rs.123</div>
      </div>
      <div className="flex items-center gap-3 mb-3 active:border active:border-slate-800 active:rounded-xl " onClick={()=>setShowVehiclePannel(false) || setShowConformRidePannel(true)}>
        <div className="w-24">
          <img className="w-full" src={auto} alt="" />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-3">
            <p className="font-serif font-semibold">Auto</p>
            <i className="ri-user-fill">4</i>
          </div>
          <p className="text-md font-semibold text-slate-800">2min, aways</p>
          <p className="text-slate-400 text-sm font-semibold">
            Affortable,compactable Price
          </p>
        </div>
        <div className="font-semibold text-lg">Rs.123</div>
      </div>
    </div>
  );
}

export default VehiclePannel;
