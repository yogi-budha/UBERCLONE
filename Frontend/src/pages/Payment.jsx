import { Link } from "react-router-dom";
import carImage from "../assets/OIP.jpeg";
import ubergooglemapImage from "../assets/uberImage.png";

function Payment() {
  return (
    <div className="w-screen h-screen p-4">
      <div className="w-screen h-[60%]">
        <Link
          to="/home"
          className="w-10 h-10 bg-white cursor-pointer absolute top-4 right-4 rounded-full flex items-center justify-center"
        >
          <i className=" text-lg font-medium ri-home-5-line"></i>
        </Link>
        <img
          className="w-full h-full object-cover"
          src={ubergooglemapImage}
          alt=""
        />
      </div>
      <div className="bg-white w-full h-[40%]">
        <hr className="h-1" />

        <div className="w-full p-3 ">
          <div className="w-full flex justify-between items-center mb-3  pt-4">
            <img className="w-24 " src={carImage} alt="" />

            <div className="text-end">
              <p className=" text-sm font-medium">Yogesh Budha</p>
              <p className="text-sm font-medium">MP 223,23</p>
              <p className="text-sm text-gray-600">Hice asdf asdf asdfasdf</p>
            </div>
          </div>

          <hr />
          <div className="flex  items-center gap-5 mb-3 mt-2">
            <i className="ri-square-fill"></i>
            <div className="flex flex-col text-sm ">
              <h3 className="font-semibold">5434,234</h3>
              <h3 className="text-slate-500 text-sm">
                somethings random words
              </h3>
            </div>
          </div>
          <hr />

          <div className="flex  items-center gap-5 mb-3 mt-2">
            <i className="ri-bank-card-fill"></i>
            <div className="flex flex-col text-sm ">
              <h3 className="font-semibold">5434,234</h3>
              <h3 className="text-slate-500 text-sm">
                somethings random words
              </h3>
            </div>
          </div>
          <hr />
        </div>

        <button
          onClick={() => console.log("first")}
          className="bg-green-600 w-full text-white py-2 mt-3 rounded-md text-lg"
        >
          {" "}
          Pay the payment
        </button>
      </div>
    </div>
  );
}

export default Payment;
