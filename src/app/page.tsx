import { Sidebar, JobInput } from "@/components"

export default function Home() {
  return (
   <main className={`flex w-full `}>
      <Sidebar />
      <article className="h-full p-[15px]">
          <div className="">
              <JobInput />
          </div>
      </article>
   </main>
  )
}
