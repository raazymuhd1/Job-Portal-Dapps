"use client"
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { rangeSalaries, experiences } from '@/constants'
import JobType from './JobType'
import SalaryExp from './SalaryExp'

const Sidebar = () => {

  return (
    <aside className={`min-w-[20%] h-screen sticky overflow-auto top-0 bg-[#fff]`}>
        <div className="flex items-center justify-between w-[80%] mx-auto p-[20px] border-b-[1px]">
            <h3 className="font-bold text-[18px]">Filter</h3>
            <h3 className="font-bold text-[18px] text-main">Clear All</h3>
        </div>

        {/* JOB TYPES */}
        <div className="w-[80%] mx-auto">
          <JobType />
          <div 
              className="flex items-center w-full justify-between p-[15px] border-b-[1px]">
            <Label 
              htmlFor="open-remote" 
              className="text-[14px] md:text-[1rem] lg:text-[2rem-14px] font-semibold"> Open to remote 
            </Label>
            <Switch id="open-remote" />
          </div>
          <SalaryExp title="Range Salary" items={rangeSalaries} />
          <SalaryExp title="Experiences" items={experiences}  />
        </div>
    </aside>
  )
}

export default Sidebar