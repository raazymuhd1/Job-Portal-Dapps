"use client"
import { useState } from 'react'
import { rangeSalaries, experiences } from '@/constants'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import JobType from './JobType'
import SalaryExp from './SalaryExp'

const Sidebar = () => {
      const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <aside className={`min-w-[20%]`}>
        <div className="flex items-center justify-between w-[80%] mx-auto p-[20px] border-b-[1px]">
            <h3 className="font-semibold text-[18px]">Filter</h3>
            <h3 className="font-semibold text-[18px] text-main">Clear All</h3>
        </div>

        {/* JOB TYPES */}
        <JobType />
        {/* // range salary and experiences comp can be combined */}
        <aside className={`w-[80%] mx-auto p-[15px] border-b-[1px]`}>
          <div
            className={`flex items-center w-full justify-between cursor-pointer`}
            onClick={() => setShowItems(!showItems)}>
              <h3 className='text-[14px] md:text-[1rem] lg:text-[2rem-14px] font-semibold'> Range Salary </h3>
              { showItems ? <MdKeyboardArrowUp className="text-[20px]" /> : <MdKeyboardArrowDown className="text-[20px]" />}
          </div>

          <div className={`${showItems ? "flex flex-col gap-[10px]" : "hidden"} p-[15px] transition-all duration-500 delay-300`}>
              { rangeSalaries.map(salary => {
                  // const salaries = {...salary, showItems}
                return (
                    <div 
                        key={salary.id} 
                        className={`flex items-center gap-[10px]`}>
                      <SalaryExp { ...salary } />
                    </div>
                )
            }) }
          </div>
        </aside>

        { experiences.map(exp => (
          <SalaryExp  { ...exp }  />
        )) }
        {/* EXPERIENCES */}
    </aside>
  )
}

export default Sidebar