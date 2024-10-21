"use client"
import { FC, SetStateAction, Dispatch } from 'react'
import { jobs } from "@/constants"
import { X } from "lucide-react"

type IProps = {
    jobId: number;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const JobDetail: FC<IProps> = ({ jobId, showModal, setShowModal }) => {

  return (
    <div className={`jobs-detail ${showModal ? "inline-block inset-0 fixed translate-y-[0px]" : "hidden translate-y-[100px]"} transition-[transform_2s] duration-[2s] delay-[400ms]`}>
      {/* close icon */}
      <X 
        onClick={() => setShowModal(false)}
        className="text-[3px] absolute right-[3rem] top-[2rem] text-secondary cursor-pointer" />

      {/* job details contents */}
      <article className="h-[90%] absolute bottom-0 w-full bg-secondary rounded-tr-[1rem] rounded-tl-[1rem] p-[20px]">
        
      </article>
    </div>
  )
}

export default JobDetail