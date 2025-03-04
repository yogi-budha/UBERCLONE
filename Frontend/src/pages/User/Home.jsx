import  { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from "../../Components/LocationSearchPannel";
import VehiclePannel from "../../Components/VehiclePannel";
import uberImage from '../../assets/uberImage.png'
import ConformRide from "../../Components/ConformRide";
import LookingForDriver from "../../Components/LookingForDriver";
import WaitingForDriver from "../../Components/WaitingForDriver";

function Home() {
  const [showPannel, setShowPannel] = useState(false);
  const [showVehiclePannel,setShowVehiclePannel] = useState(false)
  const [showConformRidePannel,setShowConformRidePannel] = useState(false)
  const [showLookingForDriverPannel,setShowLookingForDriverPannel] = useState(false)
  const [waitingForDriver,setWaitingForDriver] = useState(false)

  const containerRef = useRef(null);
  const iconRef = useRef(null)
  const hiddenRef = useRef(null)
  const vehicleRef = useRef(null)
  const conformRideRef = useRef(null)
  const lookingForDriverRef = useRef(null)
  const waitingDriverRef = useRef(null)


  useGSAP(() => {
    if (showPannel) {
      gsap.to(containerRef.current, {
        height: "100vh",
      })
      gsap.to(iconRef.current,{
        opacity:1
      })
      
      gsap.to(hiddenRef.current,{
        opacity:1,
        display:"block"
      })
    }else{
      gsap.to(hiddenRef.current,{
        opacity:0,
        display:"none"
      })
          gsap.to(containerRef.current,{
      height:"25%",
    })
    gsap.to(iconRef.current,{
      opacity:0
    })
    }
   

  }, [showPannel]);


  useGSAP(()=>{
    console.log(vehicleRef)
    if(showVehiclePannel){
      gsap.to(vehicleRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
    }else{
        gsap.to(vehicleRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power3.in",
        
          
        })
      }
  },[showVehiclePannel])


  useGSAP(()=>{
    if(showConformRidePannel){
      gsap.to(conformRideRef.current, {
        display:"block",
        opacity:1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
    }else{
        gsap.to(conformRideRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power3.in",
          opacity:0,

        
          
        })
      }
  },[showConformRidePannel])
  useGSAP(()=>{
    if(showLookingForDriverPannel){
      gsap.to(lookingForDriverRef.current, {
        display:"block",
        opacity:1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
    }else{
        gsap.to(lookingForDriverRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power3.in",
          opacity:0,

        
          
        })
      }
  },[showLookingForDriverPannel])
  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingDriverRef.current, {
        display:"block",
        opacity:1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
    }else{
        gsap.to(waitingDriverRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power3.in",
          opacity:0,

        
          
        })
      }
  },[waitingForDriver])
 
  return (
    <div className="w-screen h-screen bg-cyan-500 overflow-hidden ">
      <div className="w-full h-full ">
      <div className="w-full h-full relative overflow-hidden  ">
    
      <img className="w-full h-full object-cover" src={uberImage} alt="" />
      </div>

      <div
        ref={containerRef}
        className="w-full overflow-hidden  bg-white absolute bottom-0 p-6"
      >
        <div className="  flex flex-col w-full gap-4 mb-5  ">
          <div className="flex justify-between">
                <h4 className="text-2xl font-semibold font-mono">Find a trip</h4>
          <i ref={iconRef} onClick={()=>setShowPannel(false)} className="text-2xl ri-arrow-down-wide-fill"></i>
          </div>
      
          <input
            type="text"
            placeholder="Add the pick-up location"
            className="px-3 py-2 outline-none text-base rounded-md bg-[#eee]"
            onClick={() => setShowPannel(true)}
          />
          <input
            type="text"
            placeholder="Enter the destination"
            className="px-3 py-2 outline-none text-base rounded-md bg-[#eee]"
            onClick={() => setShowPannel(true)}
          />
        </div>
        <div ref={hiddenRef} className="h-[80%]   hidden">
        <LocationSearchPannel  setShowVehiclePannel={setShowVehiclePannel} setShowPannel={setShowPannel}/>
    
        </div>
      </div>
          <div ref={vehicleRef} className=" absolute bottom-0 left-0  mb-6  px-1 py-3  translate-y-[100%] w-full  ">

        <VehiclePannel setShowVehiclePannel={setShowVehiclePannel} setShowConformRidePannel={setShowConformRidePannel}  />
          </div>
          <div ref={conformRideRef} className=" absolute bottom-0 left-0  mb-6  px-1 py-3  translate-y-[100%] w-full  ">

          <ConformRide setShowLookingForDriverPannel={setShowLookingForDriverPannel} />
          </div>
          
          
          <div ref={lookingForDriverRef} className=" absolute bottom-0 left-0  mb-6  px-1 py-3  translate-y-[100%] w-full  ">

          <LookingForDriver />
          </div>
         
         
          <div ref={waitingDriverRef} className=" absolute bottom-0 left-0  mb-6  px-1 py-3 translate-y-[100%]    w-full  ">

          <WaitingForDriver />
          </div>
      </div>
      
    </div>
  );
}

export default Home;
