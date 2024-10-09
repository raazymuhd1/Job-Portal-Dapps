"use client"
import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className={`min-w-[20%]`}>
        <div className="flex items-center justify-between w-[80%] mx-auto p-[20px] border-b-[1px]">
            <h3 className="font-semibold text-[18px]">Filter</h3>
            <h3 className="font-semibold text-[18px] text-main">Clear All</h3>
        </div>

        {/* Job type comp */}
    </aside>
  )
}

export default Sidebar