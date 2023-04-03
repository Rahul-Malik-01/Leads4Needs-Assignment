import React from 'react'
import userAvatar from "../assets/user-character.avif";
import storiesBg1 from "../assets/stories1.jpg";
import storiesBg2 from "../assets/stories2.webp";
import "./stories.css";

const Stories = () => {
  return (
    <div className="my-5 px-5">
      <div>
        <h2 className="text-lg my-2 font-['Poppins'] text-[#fff]">Stories</h2>
      </div>

      <div className="flex justify-around gap-3 md:gap-0">
        <div className="relative w-44">
          <img src={storiesBg1} alt="background-image" className="w-44 h-56 rounded-3xl -z-10"/>
          <div className="absolute z-10 h-[3rem] glass bottom-0 w-full rounded-b-2xl rounded-t-lg flex justify-center">
            <img src={userAvatar} alt="user-avatar" className="w-7 h-7 rounded-full absolute bottom-[2rem]"/>
            <p className="text-[#fff] bottom-2 absolute text-sm font-['Poppins']">Adison Mango</p>
          </div>
        </div>

        <div className="relative w-44">
          <img src={storiesBg2} alt="background-image" className="w-44 h-56 rounded-3xl -z-10"/>
          <div className="absolute z-0 h-[3rem] glass bottom-0 w-full rounded-b-2xl rounded-t-lg flex justify-center">
            <img src={userAvatar} alt="user-avatar" className="w-7 h-7 rounded-full absolute bottom-[2rem]"/>
            <p className="text-[#fff] bottom-2 absolute text-sm font-['Poppins']">Adison Mango</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories
