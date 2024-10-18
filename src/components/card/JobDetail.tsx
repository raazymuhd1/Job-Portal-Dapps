"use client"
import { FC, SetStateAction, Dispatch } from 'react'
import { MdOutlineClose } from "react-icons/md";

type IProps = {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const JobDetail: FC<IProps> = ({ showModal, setShowModal }) => {

  return (
    <div className={`h-[100vh] w-[100vw] fixed jobs-detail inset-0  ${showModal ? "inline-block" : "hidden opacity-0"} transition-opacity duration-[500] opacity-[1]`}>
      {/* close icon */}
      <MdOutlineClose 
        onClick={() => setShowModal(false)}
        className="text-[3px] absolute right-[3rem] top-[2rem] text-secondary" />

      {/* job details contents */}
      <article className="h-[90%] absolute bottom-0 w-full bg-secondary rounded-tr-[1rem] rounded-tl-[1rem] p-[20px]">
          <h2> details </h2>
      </article>
    </div>
  )
}

export default JobDetail