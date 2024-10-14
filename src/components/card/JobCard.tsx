import React from 'react'
import { google } from "@/assets"
import { MdOutlineBookmark } from "react-icons/md";
import { Button } from "@/components/ui/button" 
import Image from "next/image"

const jobsTypesExample = ["Hybrid", "Fulltime", "2-4 Years"]

const JobCard = () => {
  return (
    <article className={`min-w-[250px] max-w-[300px] bg-secondary rounded-[5px] p-[10px] mt-[30px]`}>
       <div className="w-full flex flex-row items-start justify-between">
           <aside className="flex w-[30%] flex-row items-center gap-[15px]">
              <Image src={google} alt="company-logo" className="w-[40px] h-[40px] rounded-[5px] object-fill" />
              <div className="w-[15%]">
                  <h2 className="font-bold text-[1.5vmin]"> Alibaba </h2>
                  <h4 className="font-medium text-[1.2vmin] text-grey-small whitespace-nowrap"> Frontend Developer </h4>
              </div>
           </aside>

           <MdOutlineBookmark size={30} className="text-[1rem+16px]" />
       </div>

       <div className="w-full flex flex-col gap-[15px] mt-[5px]">
          <h3 className="text-grey-small text-[14px] font-normal"> Match your profile </h3>

          <div className="flex flex-col gap-[10px]">
              <div className="flex-center gap-[10px]">
                { jobsTypesExample.map(job => (
                    <p className="rounded-[5px] py-[2px] px-[7px] text-[14px] jobs-info-bg {
"> { job } </p>
                )) }
              </div>
             
             <div className="flex-center gap-[5px]">
                <p className={`text-grey-small`}>2 Days ago </p>
                 <div className="h-[3px] w-[3px] rounded-[100%] bg-[#000]" />
                <p className={`text-grey-small`}>100 Applicants</p>
             </div>

             <div className="flex-center w-full justify-between">
                <p className="text-main font-bold"> $2000 <span className="text-[#000] font-normal"> /m </span>  </p>
                <Button className="text-main apply-btn min-w-[100px] p-[4px] font-bold"> Apply </Button>
             </div>
          </div>

       </div>
    </article>
  )
}

export default JobCard