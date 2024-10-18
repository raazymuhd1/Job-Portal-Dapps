"use client"
import { FC, SetStateAction, Dispatch } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { X } from "lucide-react"

type IProps = {
    jobId: number;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const JobDetail: FC<IProps> = ({ jobId, showModal, setShowModal }) => {

  return (
    <div className={` jobs-detail  ${showModal ? "inline-block inset-0 fixed translate-y-[0px]" : "hidden opacity-0 translate-y-[100px]"} transition-[transform_1s] duration-[1s] opacity-[1] delay-[3ms]`}>
      {/* close icon */}
      <X 
        onClick={() => setShowModal(false)}
        className="text-[3px] absolute right-[3rem] top-[2rem] text-secondary cursor-pointer" />

      {/* job details contents */}
      <article className="h-[90%] absolute bottom-0 w-full bg-secondary rounded-tr-[1rem] rounded-tl-[1rem] p-[20px]">
          <h2> details {jobId} </h2>
      </article>
    </div>
  )
}

export default JobDetail