"use client"
import { FC } from 'react'

type IProps = {
    showModal: boolean;
}

const JobDetail: FC<IProps> = ({ showModal }) => {

  return (
    <div className={`h-[90vh] w-[100vw] fixed bg-[red] ${showModal ? "block" : "hidden"}`}>
       <h2> job detail </h2>
    </div>
  )
}

export default JobDetail