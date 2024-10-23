"use client"
import { FC, SetStateAction, Dispatch } from 'react'
import { jobs } from "@/constants"
import { X } from "lucide-react"
import Image from "next/image"
import { google } from '@/assets'

type IProps = {
    jobId: number;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const JobDetail: FC<IProps> = ({ jobId, showModal, setShowModal }) => {

   const filterItems = () => {
      const selectedItem = jobs.filter(job => job.id == jobId)
      return selectedItem;  
   }


  return (
    <div className={`jobs-detail ${showModal ? "inline-block inset-0 fixed translate-y-[0px]" : "hidden translate-y-[100px]"} transition-[transform_2s] duration-[2s] delay-[400ms]`}>
      {/* close icon */}
      <X 
        onClick={() => setShowModal(false)}
        className="text-[3px] absolute right-[3rem] top-[2rem] text-secondary cursor-pointer" />

      {/* job details contents */}
      <article className="h-[90%] absolute bottom-0 w-full bg-secondary rounded-tr-[1rem] rounded-tl-[1rem] py-[40px] px-[80px]">
         { filterItems().map(job => (
            <aside key={job.id} className="w-[70%]">
                <div className="flex-center w-full">
                   <h2 className={`text-[16px] md:text-[18px] lg:text-[24px] font-bold`}> { job.title } </h2>
                   {/* { apply buttons } */}
                </div>
                <div className="flex-center gap-[10px] mt-[30px]">
                    <Image src={google} alt="company-logo" className="w-[70px] h-[70px] rounded-[15px] object-fill" />
                    <div className="flex flex-col gap-[10px]">
                        <h4 className="text-main text-[14px] md:text-[16px] lg:text-[18px] font-bold"> { job['company-name'] } </h4>
                        <div className="flex-center gap-[10px]">
                          <p className="job-info-text"> { job.workplace  } </p>
                          <p className="job-info-text"> { job["work-type"]  } </p>
                          <p className="job-info-text"> { job.exp  } Years </p>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col mt-[30px] w-full`}>
                    <aside className="w-full">
                       <h3 className="font-bold text-[14px] md:text-[16px] lg:text-[18px]"> About this role </h3>
                       <p className="mt-[10px] font-normal text-[2vmin]"> { job.aboutRole } </p>
                    </aside>
                </div>
            </aside>
         )) }
      </article>
    </div>
  )
}

export default JobDetail