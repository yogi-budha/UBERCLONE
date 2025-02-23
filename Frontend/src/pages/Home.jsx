import React from "react";
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-between items-start flex-col  bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover  ">
      <div className="p-10">
              <img
        className="w-20"
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt=""
      />
      </div>

      <div className="  w-full backdrop-blur-md flex flex-col px-4 py-5">
        <h1 className="font-semibold text-2xl pb-3 rounded text-white">
          Get started with uber
        </h1>
        <button onClick={()=>{navigate("/user-login")}} className="w-full bg-slate-900 px-2 py-4 rounded text-center text-white font-semibold text-lg">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Home;
