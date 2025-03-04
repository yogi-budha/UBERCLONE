

function RiderDetails() {
  return (
    <>
     <div className="flex items-center justify-between my-5 ">
           <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover " src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg" alt="" />
          <p className="font-semibold text-lg ">Yogesh Budha</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Rs 1234</p>
          <p className="text-base text-gray-500 font-semibold ">Earned</p>
        </div> 
        </div>

        <div className="w-full flex items-center gap-3 justify-between font-semibold bg-yellow-500/80 py-2 px-3 rounded-xl">
          <div className="flex items-center justify-center flex-col gap-1/2" >
          <i className="text-xl font-medium ri-time-line"></i>
          <p className="text-lg">10.2</p>
          <p className="text-base text-gray-500">Hours Online</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-1/2" >
          <i className="text-xl font-medium ri-speed-up-fill"></i>
          <p className="text-lg">10.2</p>
          <p className="text-base text-gray-500">Hours Online</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-1/2" >
          <i className="text-xl font-medium ri-booklet-line"></i>
          <p className="text-lg">10.2</p>
          <p className="text-base text-gray-500">Hours Online</p>
          </div>
         
        </div>
    </>
  )
}

export default RiderDetails