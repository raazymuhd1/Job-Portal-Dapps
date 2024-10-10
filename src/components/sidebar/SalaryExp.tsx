"use client"
import { SetStateAction, Dispatch , FC } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

interface IProps {
  id: number;
  title: string;
  isSelected: boolean;
  htmlFor: string;
}

const SalaryExp: FC<IProps> = ({  title, htmlFor }) => {

  return (
        <div 
            className={`flex items-center gap-[10px]`}>
            <Checkbox id={`${htmlFor}`} />
            <label htmlFor={`${htmlFor}`}> { title } </label>
        </div>
  )
}

export default SalaryExp