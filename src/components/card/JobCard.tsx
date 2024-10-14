import React from 'react'
import { jobs } from '@/constants'
import { MdOutlineBookmark } from "react-icons/md";
import Image from "next/image"

const jobsTypesExample = ["Hybrid", "Fulltime", "2-4 Years"]

const JobCard = () => {
  return (
    <article className={`min-w-[250px] max-w-[300px] bg-secondary rounded-[5px] p-[10px]`}>
       <div className="w-[90%] mx-auto flex flex-row items-start justify-between">
           <aside className="flex w-[30%] flex-row items-center">
              <Image src="" alt="company-logo" className="w-[30px] h-[30px]" />
              <div className="w-[15%]">
                  <h2 className="font-bold text-[1.5vmin]"> Alibaba </h2>
                  <h4 className="font-medium text-[1.2vmin] text-[#d1d6d8] "> Frontend Developer </h4>
              </div>
           </aside>

           <MdOutlineBookmark className="text-[1rem+10px]" />
       </div>

       <div className="flex flex-col gap-[15px] mt-[5px]">
          <h3 className="text-[#d1d6d8] text-[14px] font-normal"> Match your profile </h3>
          
          <div className="flex flex-col gap-[10px]">
              <div className="flex-center gap-[10px]">
                { jobsTypesExample.map(job => (
                    <p className="rounded-[5px] py-[2px] px-[7px] text-[14px] bg-[#d1d6d8]"> { job } </p>
                )) }
              </div>
             
             <div className="flex-center gap-[5px]">
                <p className={`text-grey-small`}>2 Days ago </p>
                 <div className="h-[20px] rounded-[100%] bg-[#000]" />
                <p className={`text-grey-small`}>100 Applicants</p>
             </div>
          </div>
       </div>
    </article>
  )
}

export default JobCard