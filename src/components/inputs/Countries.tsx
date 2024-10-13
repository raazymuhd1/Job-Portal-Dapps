"use client"
import React from 'react'
import { 
    Select, 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectItem, 
    SelectGroup,
    SelectLabel } from "@/components/ui/select"
import { countries } from '@/constants'

const Countries = () => {
  return (
    <Select>
        <SelectTrigger className="bg-secondary p-[10px] w-[20%]">
            <SelectValue placeholder="Indonesia" />  
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                { countries.map(country => (
                    <SelectItem 
                        key={country.id} 
                        value={country.name}
                        className="cursor-pointer bg-secondary py-[5px] px-[8px]"
                        > {country.name}
                    </SelectItem>
                )) }
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default Countries