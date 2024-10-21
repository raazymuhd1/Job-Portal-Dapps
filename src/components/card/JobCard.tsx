"use client"
import {FC, useState, Fragment} from 'react'
import Link from "next/link"
import { google } from "@/assets"
import { LuBookmark } from "react-icons/lu";
import { Button } from "@/components/ui/button" 
import { JobDetail } from "@/components"
import Image from "next/image"
interface IProps {
   id: number;
   title: string;
   "company-name": string;
   applicants: number;
   date: string;
   workplace: string;
   "work-type": string;
   salary: string;
   exp: string;
}

const JobCard: FC<IProps> = (props) => {
     const [showModal, setShowModal] = useState<boolean>(false);
     const { id, title, applicants, date, workplace, salary, exp } = props;

  return (
   <Fragment>
      <article className={`lg:basis-[23%] basis-[30%] max-w-[400px] bg-secondary rounded-[5px] p-[10px] mt-[30px]`}>
         <div className="w-full flex flex-row items-start justify-between">
            <aside className="flex w-[30%] flex-row items-center gap-[15px]">
               <Image src={google} alt="company-logo" className="w-[40px] h-[40px] rounded-[5px] object-fill" />
               <div className="w-[15%]">
                     <h2 className="font-bold text-[1.5vmin]"> { props["company-name"] } </h2>
                     <h4 className="font-medium text-[1.2vmin] text-grey-small whitespace-nowrap"> { title } </h4>
               </div>
            </aside>

            <LuBookmark size={30} className="text-[1rem+16px]" />
         </div>

         <div className="w-full flex flex-col gap-[15px] mt-[5px]">
            <h3 className="text-grey-small text-[14px] font-normal"> Match your profile </h3>

            <div className="flex flex-col items-start gap-[10px]">
               <div className="flex-center gap-[10px]">
                     <p className="job-info-text"> { workplace  } </p>
                     <p className="job-info-text"> { props["work-type"]  } </p>
                     <p className="job-info-text"> { exp  } Years </p>
               </div>
               
               <div className="flex-center gap-[5px]">
                  <p className={`text-grey-small`}> {date} </p>
                  <div className="h-[3px] w-[3px] rounded-[100%] bg-[#000]" />
                  <p className={`text-grey-small`}> {applicants} applicants </p>
               </div>

               <div className="flex-center w-full justify-between">
                  <p className="text-main font-bold"> {salary} <span className="text-[#000] font-normal"> /m </span>  </p>
                  <Link 
                     href=""
                     onClick={() => setShowModal(true)}
                     >
                        <Button className="text-main apply-btn min-w-[100px] p-[4px] font-bold"> Apply Now </Button>
                  </Link>
               </div>
            </div>

         </div>
      </article>
   
      <JobDetail showModal={showModal} setShowModal={setShowModal} jobId={id} />
   </Fragment>
  )
}

export default JobCard