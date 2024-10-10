"use client"
import React from 'react'
import { rangeSalaries, experiences } from '@/constants'
import JobType from './JobType'
import SalaryExp from './SalaryExp'

const Sidebar = () => {
  return (
    <aside className={`min-w-[20%]`}>
        <div className="flex items-center justify-between w-[80%] mx-auto p-[20px] border-b-[1px]">
            <h3 className="font-semibold text-[18px]">Filter</h3>
            <h3 className="font-semibold text-[18px] text-main">Clear All</h3>
        </div>

        {/* JOB TYPES */}
        <JobType />
        { rangeSalaries.map(salary => (
          <SalaryExp key={salary.id}  { ...salary } />
        )) }

        { experiences.map(exp => (
          <SalaryExp key={exp.id}  { ...exp } />
        )) }
        {/* EXPERIENCES */}
    </aside>
  )
}

export default Sidebar