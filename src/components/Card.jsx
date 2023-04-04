import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { TbHeartFilled, TbMessageCircle2Filled } from "react-icons/tb";
import { FaShare } from "react-icons/fa";
import userImage from "../assets/user-img.avif";
import cardBg from "../assets/card-bg.avif";

const Card = () => {
  return (
    <div className="bg-slate-800 my-10 rounded-2xl font-['Poppins'] mx-5">
      {/* header */}
      <div className="flex justify-between p-3 my-2">
        <div className="flex">
          {/* user image */}
          <img src={userImage} alt="user-image" className="w-10 h-10 rounded-full border-blue-600 border-2"/>
          {/* user info */}
          <div className="ml-2 font-['Poppins'] text-[#fff]">
            <h3>Ahmed Dorwart</h3>
            <p className="text-xs text-slate-400">10 Mins Ago</p>
          </div>
        </div>
        {/* more button */}
        <div className="w-10 h-10 bg-slate-700 rounded-full flex justify-center items-center font-bold text-[#fff] pt-2">
          <BsThreeDots />
        </div>
      </div>

      {/* background image */}
      <div>
        <img src={cardBg} alt="background-image" className="w-full h-60"/>
      </div>

      {/* buttons */}
      <div className="flex justify-start my-2 text-lg gap-3 p-3 text-[#fff]">
        {/* like button */}
        <button>
          <TbHeartFilled />
        </button>
        {/* message button */}
        <button>
          <TbMessageCircle2Filled />
        </button>
        {/* share button */}
        <button>
          <FaShare />
        </button>
      </div>

      {/* likes and comments counter */}
      <div className="flex justify-start items-center gap-3 ml-3 text-[#fff]">
        <p>
          <span className="font-semibold">229 </span>
           Likes
        </p>
        <span>.</span>
        <p>
          <span className="font-semibold">229 </span>
           Comments
        </p>
      </div>

      {/* comments */}
      <div className="p-3 text-[#fff]">
        <p>
          <span className="font-semibold mr-2">Amat Pauji</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aliquam?
        </p>
      </div>
    </div>
  )
}

export default Card
