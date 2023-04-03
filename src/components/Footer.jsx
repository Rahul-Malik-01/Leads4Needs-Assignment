import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="sticky w-full bottom-0 shadow-xl bg-slate-700 py-4 rounded-t-xl text-xl text-[#fff]">
      <div className="relative flex justify-around items-center">
        <div className="bg-slate-600 rounded-full p-3">
          <AiFillHome />
        </div>

        <FaUser />
      </div>

      <div className="absolute w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center text-2xl left-1/2 top-0 -m-6">
        <HiPlus />
      </div>
    </div>
  )
}

export default Footer
