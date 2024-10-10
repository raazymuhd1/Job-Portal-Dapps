import { IJobTypes } from "@/types"

const jobTypes: IJobTypes[] = [
    { id: 1, title: "full-time", isSelected: false, htmlFor: "full-time" },
    { id: 2, title: "part-time", isSelected: false, htmlFor: "part-time" },
    { id: 3, title: "contract", isSelected: false, htmlFor: "contract" },
    { id: 4, title: "Internship", isSelected: false, htmlFor: "Internship" },
]

const rangeSalaries = [
    { id: 1, title: "Less than $1000", isSelected: true, htmlFor: "Less than $1000"},
    { id: 2, title: "$1000 - $15000", isSelected: false, htmlFor: "$1000 - $15000"},
    { id: 3, title: "More than $15000", isSelected: false, htmlFor: "More than $15000"},
    { id: 4, title: "Custom", isSelected: false, htmlFor: "Custom"},
]

const experiences = [
    { id: 1, title: "Less than a year", isSelected: true, htmlFor: "Less than a year" },
    { id: 2, title: "1 - 3 years", isSelected: false, htmlFor: "1 - 3 years" },
    { id: 3, title: "3 - 5 years", isSelected: false, htmlFor: "3 - 5 years" },
    { id: 4, title: "Custom", isSelected: false, htmlFor: "Custom" },
]

export { jobTypes, rangeSalaries, experiences }