import React from "react";
import {  MdLightMode} from "react-icons/md";
import { CiLogin} from "react-icons/ci";
import { PiSignIn } from "react-icons/pi";
import { FaClosedCaptioning } from "react-icons/fa";

function Navbar() {
  return (
    <div className="mx-40 px-4 flex shadow-neutral-700 shadow-2xl rounded-full justify-between bg-neutral-800"> 
      <div className=" m-4 px-4 flex justify-center align-center"> 
        <div className="flex justify-center align-center p-2">
          <FaClosedCaptioning className=" w-10 h-10 mx-1  text-white" />
          <h1 className="  text-3xl font-bold mx-1"> CAPTION</h1>
        </div>
       
      </div>
      <div className=" m-4 px-4 flex justify-center align-center"> 
        <div className="flex justify-center align-center p-2">
          <CiLogin className=" w-7 h-7 mx-1 text-white" />
          <p className="  text-xl mx-1"> LogIn</p>
        </div>
        <div className="flex justify-center align-center p-2">
          <PiSignIn className=" w-7 h-7 mx-1 text-white" />
          <p className=" text-xl mx-1"> SignIn</p>
        </div>
        <div className="flex justify-center align-center p-2">
          <MdLightMode className=" w-7 h-7 mx-1 text-white" /> 
          <p className="  text-xl mx-1"> Light</p> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
