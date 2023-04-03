import React from 'react'
import { FaBell } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5">
      <div>
        <h2 className="font-['Poppins'] font-[600] text-xl text-[#fff]">Sosmad</h2>
      </div>

      <div className="flex ">
        <button className="w-[2.625rem] h-[2.625rem] text-lg p-3 mr-2 bg-[#1E293B] text-[#fff] rounded-full flex justify-center items-center">
          <FaBell />
        </button>
        <button className="w-[2.625rem] h-[2.625rem] text-xl bg-[#1E293B] text-[#fff] rounded-full flex justify-center items-center">
          <TbMessageCircle2Filled />
        </button>
      </div>
    </div>
  )
}

export default Header
