"use client"
import React from 'react'
import { MdOutlineNotificationsNone, MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { dummyAvatar } from "@/assets"

const Header = () => {
  return (
    <header className={`flex flex-col items-center h-[100px] w-full border-b-[1px] border-t-[1px]`}>
      <nav className={`flex w-[95%] h-full mx-auto items-center justify-between `}>
        <div>
            <h2 className={`text-[16px] md:text-[20px] lg:text-[25px] font-bold text-main`}> WerkLinker </h2>
        </div>

        <aside className="flex items-center gap-[10px]">
            <div className="flex">
              <MdOutlineNotificationsNone className="text-[30px]" />
              <div className="h-[10px] w-[10px] rounded-[50%] bg-[red] translate-y-[12px] translate-x-[-15px]" />
            </div>
            <div className="flex items-center gap-[10px]">
              <Image 
                src={dummyAvatar} 
                alt="user-profile-avatar" 
                className="rounded-[50%] h-[40px] w-[40px] object-cover" />
                <h3 className="text-[18px] font-medium"> Miss Kayla </h3>
            </div>
            <MdKeyboardArrowDown className="text-[30px]" />
        </aside>
      </nav>
    </header>
  )
}

export default Header