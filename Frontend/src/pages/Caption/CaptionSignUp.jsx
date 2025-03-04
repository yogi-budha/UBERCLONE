import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { captionContext } from "../../context/CaptionContext";

function CaptionSignUp() {
  const { caption, setCaption } = useContext(captionContext);

  const navigate = useNavigate();

  const [captionData, setCaptionData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      vehicleType: "",
      capacity: "",
    },
  });

  const submitHandler = async (e) => {

    e.preventDefault();

    try {
      await axios
        .post(`${import.meta.env.VITE_BASE_URL}/caption/register`, captionData)
        .then((res) => {
          if (res.data.success) {

            setCaption(res.data.caption);

            toast.success("Caption Created Successfully");

            localStorage.setItem("token", res.data.token);
            navigate("/captionHOme");
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            toast.error(error.response.data.message);
          }
        });
    } catch (error) {
      toast.error(error.message);
    }

    setCaptionData({
      fullName: { firstName: "", lastName: "" },
      email: "",
      password: "",
      vehicle: {
        color: "",
        plate: "",
        vehicleType: "",
        capacity: "",
      },
    });
  };
  return (
    <div className="w-full p-6 h-screen">
      <div className="mb-10">
        <img
          className="w-20"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 justify-between h-[90%] ">
        <form onSubmit={submitHandler}>
          <h2 className="text-center font-bold text-xl mb-5">
            Create an Account as Caption
          </h2>

          <div className="flex w-full items-center justify-between gap-4 ">
            <div className="w-1/2 flex flex-col gap-1 mb-4">
              <label htmlFor="" className="inline-block font-semibold">
                Full Name:
              </label>
              <input
                className="border px-3 py-1/2 rounded bg-slate-100/75 outline-none"
                type="text"
                placeholder="First Name"
                value={captionData.fullName.firstName}
                onChange={(e) => {
                  setCaptionData((prev) => ({
                    ...prev,
                    fullName: {
                      ...prev.fullName,
                      firstName: e.target.value,
                    },
                  }));
                }}
              />
            </div>

            <div className="w-1/2 flex flex-col gap-1 mb-4">
              <label htmlFor="" className="inline-block font-semibold">
                Last Name:
              </label>
              <input
                className="border px-3 py-1/2 rounded bg-slate-100/75 outline-none"
                type="text"
                placeholder="Last Name"
                value={captionData.fullName.lastName}
                onChange={(e) => {
                  setCaptionData((prev) => ({
                    ...prev,
                    fullName: {
                      ...prev.fullName,
                      lastName: e.target.value,
                    },
                  }));
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <h3 className="text-md font-semibold">Enter Email:</h3>
            <input
              className=" border px-3 py-1 rounded bg-slate-100/75 outline-none"
              type="email"
              required
              placeholder="example@abc.com"
              value={captionData.email}
              onChange={(e) => {
                setCaptionData((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <h3 className="text-md font-semibold">Enter Password:</h3>
            <input
              className=" border px-3 py-1 rounded bg-slate-100/75 outline-none"
              type="password"
              placeholder="******"
              value={captionData.password}
              onChange={(e) => {
                setCaptionData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
          </div>

          <div>
            <h3 className="font-semibold font-xl mb-1">Vehicle Information</h3>
            <div className="flex w-full items-center justify-between gap-4 ">
              <div className="w-1/2 flex flex-col gap-1 mb-4">
                <label htmlFor="" className="inline-block font-semibold">
                  Color:
                </label>
                <input
                  className="border px-3 py-1/2 rounded bg-slate-100/75 outline-none"
                  type="text"
                  placeholder="RED"
                  value={captionData.vehicle.color}
                  onChange={(e) => {
                    setCaptionData((prev) => ({
                      ...prev,
                      vehicle: {
                        ...prev.vehicle,
                        color: e.target.value,
                      },
                    }));
                  }}
                />
              </div>

              <div className="w-1/2 flex flex-col gap-1 mb-4">
                <label htmlFor="" className="inline-block font-semibold">
                  Plate no.:
                </label>
                <input
                  className="border px-3 py-1/2 rounded bg-slate-100/75 outline-none"
                  type="text"
                  placeholder="XXXX"
                  value={captionData.vehicle.plate}
                  onChange={(e) => {
                    setCaptionData((prev) => ({
                      ...prev,
                      vehicle: {
                        ...prev.vehicle,
                        plate: e.target.value,
                      },
                    }));
                  }}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-4 ">
              <div className="w-1/2 flex flex-col gap-1 mb-4">
                <label htmlFor="" className="inline-block font-semibold">
                  Capacity:
                </label>
                <input
                  className="border px-3 py-1/2 rounded bg-slate-100/75 outline-none"
                  type="text"
                  placeholder="1"
                  value={captionData.vehicle.capacity}
                  onChange={(e) => {
                    setCaptionData((prev) => ({
                      ...prev,
                      vehicle: {
                        ...prev.vehicle,
                        capacity: e.target.value,
                      },
                    }));
                  }}
                />
              </div>

              <div className="w-1/2 flex flex-col gap-1 mb-4">
                <label htmlFor="" className="inline-block font-semibold">
                  Vehicle Type:
                </label>

                <select
                  className="border px-3 py-1/2 rounded bg-slate-100/75 outline-none"
                  name=""
                  id=""
                  onClick={(e) => {
                    setCaptionData((prev) => ({
                      ...prev,
                      vehicle: {
                        ...prev.vehicle,
                        vehicleType: e.target.value,
                      },
                    }));
                  }}
                >
                  <option value="car">Car</option>
                  <option value="moterCycle">MoterCycle</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          </div>

          <button className="bg-black text-white font-semibold text-lg px-3 py-2 rounded mt-2 w-full">
            Create an Account
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/caption-login" className="text-blue-700 font-medium">
              Login
            </Link>
          </p>
        </form>

        <p className="mt-4 text-sm font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          ipsa eius! Provident eveniet in rerum, assumenda harum amet expedita
          error ipsa tempore dolor nemo deleniti officia suscipit odio
          aspernatur ullam itaque nostrum ratione temporibus!
        </p>
      </div>
    </div>
  );
}

export default CaptionSignUp;
