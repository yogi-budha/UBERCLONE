import uberGoogleimg from '../../assets/uberImage.png'
import uberLogo from '../../assets/Uber_logo_2018.png'
import RiderDetails from '../../Components/RiderDetails'
import RidePopUp from '../../Components/RidePopUp'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConformRidePopUp from '../../Components/ConformRidePopUp'
function CaptionHome() {

  const [showRidePopUp, setShowRidePopUp] = useState(true)
  const [showConformRidePopUp, setConformShowRidePopUp] = useState(false)

  const showRidePopUpRef = useRef(null)
  const showConformRidePopUpRef = useRef(null)

  useGSAP(()=>{
    if(showConformRidePopUp){
      gsap.to(showConformRidePopUpRef.current, {
        display:"block",
        opacity:1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
    }else{
        gsap.to(showConformRidePopUpRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power3.in",
          opacity:0,

        
          
        })}
  },[showConformRidePopUp])


  useGSAP(()=>{
    if(showRidePopUp){
      gsap.to(showRidePopUpRef.current, {
        display:"block",
        
        opacity:1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
    }else{
        gsap.to(showRidePopUpRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power3.in",
          opacity:0,

        
          
        })}
  },[showRidePopUp])

  
  return (
    <div className="w-screen h-screen relative ">
      <img className="absolute w-24 top-6 left-4" src={uberLogo} alt="" />
      <div className="absolute top-6 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 "><i className="text-2xl text-slate-700 ri-logout-box-r-line"></i></div>
      <div className="w-full h-full ">
        <img className="w-full h-full object-cover" src={uberGoogleimg} alt="" />
      </div>

      <div className="w-full absolute bottom-0 bg-white h-64 px-6">
      <RiderDetails/>
      </div>


      <div ref={showRidePopUpRef} className=" absolute bottom-0 left-0  mb-6  px-1 py-3 translate-y-[100%]    w-full  ">

<RidePopUp setShowRidePopUp={setShowRidePopUp} setConformShowRidePopUp={setConformShowRidePopUp}/>
</div>

      <div ref={showConformRidePopUpRef} className="  absolute bottom-0 left-0  mb-6  px-1 py-3 translate-y-[100%]    w-full h-[100%] bg-white  ">

<ConformRidePopUp setConformShowRidePopUp={setConformShowRidePopUp} setShowRidePopUp={setShowRidePopUp} />
</div>
    </div>
  )
}

export default CaptionHome