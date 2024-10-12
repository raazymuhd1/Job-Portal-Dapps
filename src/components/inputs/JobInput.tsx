import React from 'react'
import { GoSearch } from "react-icons/go";
import {Input} from "@/components/ui/input"

const JobInput = () => {
  return (
    <div className={`min-w-[170px] flex items-center py-[5px] bg-secondary px-[8px] rounded-[15px] border-[1px]`}>
        <GoSearch className="text-[14px] md:text-[18px]" />
        <Input type='text' placeholder="Frontend Developer" />
    </div>
  )
}

export default JobInput