"use client"
import { useState, useRef, FC } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface IProps {
   title: string;
   items: {
    id: number;
    title: string;
    isSelected: boolean;
    htmlFor: string;
   }[]
}

const SalaryExp: FC<IProps> = ({ title, items }) => {
       const [showItems, setShowItems] = useState<boolean>(false);
       const [isCustom, setIsCustom] = useState<boolean>(false);
       const customRef = useRef<HTMLLabelElement>(null);
       const [sliderValue, setSliderValue] = useState<string>("")
       const [sliderValueTwo, setSliderValueTwo] = useState<number>(0)

       const handleCustomValue = () => {
            console.log(customRef.current)
            setIsCustom(!isCustom)
       }

  return (
        <aside className={`w-full p-[15px] border-b-[1px]`}>
             <div
                className={`flex items-center w-full justify-between cursor-pointer`}
                onClick={() => setShowItems(!showItems)}>
                 <h3 className='text-[14px] md:text-[1rem] lg:text-[2rem-14px] font-semibold'> {title} </h3>
                { showItems ? <MdKeyboardArrowUp className="text-[20px]" /> : <MdKeyboardArrowDown className="text-[20px]" />}
            </div>

            <div 
              className={`${showItems ? "flex flex-col gap-[10px]" : "hidden"} p-[15px] transition-all duration-500 delay-300`}>
                { items.map(item => (
                  <div
                      key={item.id}
                      className={`flex items-center gap-[10px]`}>
                      <Checkbox id={`${item.htmlFor}`} />
                      <label 
                         ref={customRef}
                        htmlFor={`${item.htmlFor}`}  
                        onClick={() => handleCustomValue()}> { item.title } </label>
                  </div>
                )) }
            </div>

            <article className={`w-full items-center ${isCustom ? "flex" : "hidden"}`}>
                <div className="flex flex-col">
                  <input
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    min={0}
                    max={1000} 
                    type="range" 
                    className="h-[4px]" />
                  <p> ${sliderValue || 0} </p>
                </div>
                <div className="flex flex-col">
                  <input
                    value={sliderValueTwo}
                    onChange={(e) => setSliderValueTwo(Number(e.target.value))} 
                    min={1000}
                    max={15000}
                    type="range" 
                    className="h-[4px]" />
                  <p> ${sliderValueTwo || 0} </p>
                </div>
            </article>

        </aside>

  )
}

export default SalaryExp