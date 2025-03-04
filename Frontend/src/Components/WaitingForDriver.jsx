
import carImage from "../assets/OIP.jpeg";

function WaitingForDriver() {
  return (
      <div className="bg-white w-full">
        <h1 className="text-xl font-bold mb-3 px-2">Waiting For The Driver</h1>
      <div className="w-full flex justify-between items-center px-4 mt-5 pt-4">
        <img className="w-36 " src={carImage} alt="" />

        <div className="text-end">
            <p className="text-md text-base">Yogesh Budha</p>
            <p className="text-lg font-semibold">MP 223,23</p>
            <p className='text-sm text-gray-600'>Hice asdf asdf asdfasdf</p>
        </div>
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

export default WaitingForDriver