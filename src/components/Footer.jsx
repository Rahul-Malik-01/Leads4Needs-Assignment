import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="sticky w-full bottom-0 shadow-xl bg-slate-700 py-4 rounded-t-xl text-xl text-[#fff]">
      <div className="relative flex justify-around items-center">
        {/* home button */}
        <button className="bg-slate-600 rounded-full p-3">
          <AiFillHome />
        </button>

        {/* user button */}
        <button>
          <FaUser />
        </button>
      </div>

      {/* add button */}
      <button className="absolute w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center text-2xl left-1/2 top-0 -m-6">
        <HiPlus />
      </button>
    </div>
  )
}

export default Footer
