import React from 'react'
import { GoSearch } from "react-icons/go";
import {Input} from "@/components/ui/input"

const JobSearch = () => {
  return (
    <div className={`w-[30%] flex items-center py-[5px] bg-secondary px-[8px] rounded-[10px] border-[1px]`}>
        <GoSearch className="text-[14px] md:text-[20px] cursor-pointer" />
        <Input type='text' placeholder="Frontend Developer" />
    </div>
  )
}

const LocationSearch = () => {
  return (
    <div className={`w-[30%] flex items-center py-[5px] bg-secondary px-[8px] rounded-[10px] border-[1px]`}>
        <GoSearch className="text-[14px] md:text-[20px] cursor-pointer" />
        <Input type='text' placeholder="All City" />
    </div>
  )
}


export { JobSearch, LocationSearch }
