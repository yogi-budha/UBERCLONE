import { useGSAP } from '@gsap/react'
import uberGoogleimg from '../../assets/uberImage.png'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import FinishRide from '../../Components/FinishRide'

function CaptionRading() {

    const[completeRide,setCompleteRide] = useState(false)

    const completeRideRef = useRef(null)

    useGSAP(()=>{
        if(completeRide){
          gsap.to(completeRideRef.current, {
            display:"block",
      
            opacity:1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          })
        }else{
            gsap.to(completeRideRef.current, {
              y: "100%",
              duration: 0.5,
              ease: "power3.in",
              opacity:0,
    
            
              
            })}
      },[completeRide])
  return (
    <div className="w-screen h-screen relative">
         <div className="w-full h-4/5 ">
                <img className="w-full h-full object-cover" src={uberGoogleimg} alt="" />
              </div>

              <div className="h-1/5 bg-yellow-500 px-5 relative">
             <div className=" text-xl font-bold flex items-center justify-center pt-2 ">
             <i className=" text-center ri-arrow-up-wide-fill"></i>
             </div>
             <div className="flex items-center justify-between  pt-8">
<div className="text-xl font-semibold">
                2.2 km Away
              </div>

              <button onClick={()=>setCompleteRide(true)} className="bg-blue-600 py-3  px-8 text-white   rounded-xl text-xl">Completed</button>
             </div>
              
              </div>

              <div ref={completeRideRef} className="  absolute bottom-0 left-0  mb-6  px-1 py-3 translate-y-[100%]    w-full  bg-white  ">

<FinishRide setCompleteRide={setCompleteRide} />
</div>

    </div>
  )
}

export default CaptionRading