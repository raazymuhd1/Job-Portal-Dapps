import { Sidebar, Countries } from "@/components"
import { Button } from "@/components/ui/button"
import { JobSearch, LocationSearch } from "@/components/inputs/Search"

export default function Home() {
  return (
   <main className={`flex w-full `}>
      <Sidebar />
      <article className="h-full w-full p-[15px]">
          <div className="w-full flex items-center gap-[20px]">
              <JobSearch />
              <Countries />
              <LocationSearch />
              <Button className="bg-main w-[10%] text-secondary py-[8px] px-[10px]" > Search </Button>
          </div>
      </article>
   </main>
  )
}
