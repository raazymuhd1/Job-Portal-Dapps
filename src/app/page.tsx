"use client"
import { 
    Select, 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectItem, 
    SelectGroup,
    SelectLabel } from "@/components/ui/select"
import { useState } from "react"
import { Sidebar, Countries } from "@/components"
import { Button } from "@/components/ui/button"
import { JobSearch, LocationSearch } from "@/components/inputs/Search"
import { sortLists } from "@/constants"

export default function Home() {
      const [jobFound, setJobFound] = useState<boolean>(false)

  return (
   <main className={`flex w-full `}>
      <Sidebar />
      <article className="h-full w-full p-[15px]">
          <div className="w-full flex items-center gap-[20px]">
              <JobSearch />
              <Countries />
              <LocationSearch />
              <Button className="bg-main w-[10%] text-secondary py-[8px] px-[10px] hover:opacity-70 transition-opacity duration-500" > Search </Button>
          </div>

          <div className={`w-[100%] flex items-center justify-between mt-[3rem]`}>
            <h3 className="italic"> Showing <strong> 100 </strong> jobs <strong> Frontend developer </strong> in <strong> Indonesia </strong> </h3>
            <aside className={`w-[fit-content] flex items-center gap-[20px]`}>
               <p className="whitespace-nowrap font-medium"> sort by </p>
                <Select>
                    <SelectTrigger className="h-10">
                        <SelectValue placeholder="Relevancy" />
                    </SelectTrigger>
                    <SelectContent className="box-border">
                       <SelectGroup>
                          { sortLists.map(sort => (
                            <SelectItem key={sort.id} value={sort.name}> {sort.name} </SelectItem>
                          )) }
                       </SelectGroup>
                    </SelectContent>
                </Select>
            </aside>
          </div>
      </article>
   </main>
  )
}
