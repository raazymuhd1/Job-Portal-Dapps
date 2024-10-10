"use client"
import { useState } from 'react'
import { jobTypes } from '@/constants'
import { Checkbox } from "@/components/ui/checkbox"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const JobType = () => {
    const [showJobTypes, setShowJobTypes] = useState<boolean>(false);

  return (
    <aside className={`w-[80%] mx-auto p-[15px] border-b-[1px]`}>
        <div
          className={`flex items-center w-full justify-between cursor-pointer`}
          onClick={() => setShowJobTypes(!showJobTypes)}>
            <h3 className='text-[14px] md:text-[1rem] lg:text-[2rem-14px] font-semibold'> Job Types </h3>
            { showJobTypes ? <MdKeyboardArrowUp className="text-[20px]" /> : <MdKeyboardArrowDown className="text-[20px]" />}
        </div>

        <div className={`${showJobTypes ? "flex flex-col gap-[10px]" : "hidden"} p-[15px] transition-all duration-500 delay-300`}>
          { jobTypes.map(types => (
            <div 
                className={`flex items-center gap-[10px]`}
                key={types.id}>
                <Checkbox id={`${types.htmlFor}`} />
                <label htmlFor={`${types.htmlFor}`}> { types.title } </label>
            </div>
          )) }
        </div>
    </aside>
  )
}

export default JobType