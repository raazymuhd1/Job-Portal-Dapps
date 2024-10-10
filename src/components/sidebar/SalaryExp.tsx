"use client"
import { useState, FC } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface IProps {
  id: number;
  title: string;
  isSelected: boolean;
  htmlFor: string;
}

const SalaryExp: FC<IProps> = ({ title, htmlFor }) => {
    const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <aside className={`w-[80%] mx-auto p-[15px] border-b-[1px]`}>
        <div
          className={`flex items-center w-full justify-between cursor-pointer`}
          onClick={() => setShowItems(!showItems)}>
            <h3 className='text-[14px] md:text-[1rem] lg:text-[2rem-14px] font-semibold'> Job Types </h3>
            { showItems ? <MdKeyboardArrowUp className="text-[20px]" /> : <MdKeyboardArrowDown className="text-[20px]" />}
        </div>

        <div className={`${showItems ? "flex flex-col gap-[10px]" : "hidden"} p-[15px] transition-all duration-500 delay-300`}>
            <div 
                className={`flex items-center gap-[10px]`}
                >
                <Checkbox id={`${htmlFor}`} />
                <label htmlFor={`${htmlFor}`}> { title } </label>
            </div>
        </div>
    </aside>
  )
}

export default SalaryExp