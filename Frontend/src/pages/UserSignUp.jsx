import { useState } from "react";
import { Link } from "react-router-dom";

function UserSignUp() {
  const [userData, setUserData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
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
          <h2 className="text-center font-bold text-2xl mb-5">
            Create an Account as User
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
                value={userData.fullName.firstName}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    fullName: {
                      ...prev.fullName,
                      firstName: e.target.value,
                    }
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
                value={userData.fullName.lastName}
                onChange={(e) => {
                  setUserData((prev) => ({
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
            <h3 className="text-md font-semibold">Enter Your Email:</h3>
            <input
              className=" border px-3 py-1 rounded bg-slate-100/75 outline-none"
              type="email"
              required
              placeholder="example@abc.com"
              value={userData.email}
              onChange={(e) => {
                setUserData((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <h3 className="text-md font-semibold">Enter Your Password:</h3>
            <input
              className=" border px-3 py-1 rounded bg-slate-100/75 outline-none"
              type="password"
              placeholder="******"
              value={userData.password}
              onChange={(e) => {
                setUserData((prev) => ({ ...prev, password: e.target.value }));
              }}
            />
          </div>

          <button className="bg-black text-white font-semibold text-lg px-3 py-2 rounded mt-2 w-full">
            Login
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/user-login" className="text-blue-700 font-medium">
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

export default UserSignUp;
