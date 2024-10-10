"use client"
import React from 'react'
import JobType from './JobType'

const Sidebar = () => {
  return (
    <aside className={`min-w-[20%]`}>
        <div className="flex items-center justify-between w-[80%] mx-auto p-[20px] border-b-[1px]">
            <h3 className="font-semibold text-[18px]">Filter</h3>
            <h3 className="font-semibold text-[18px] text-main">Clear All</h3>
        </div>

        {/* JOB TYPES */}
        <JobType />
        {/* RANGE SALARIES */}
        {/* EXPERIENCES */}
    </aside>
  )
}

export default Sidebar