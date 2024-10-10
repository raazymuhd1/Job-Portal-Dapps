import { IJobTypes } from "@/types"

const jobTypes: IJobTypes[] = [
    { id: 1, title: "full-time", isSelected: false },
    { id: 2, title: "part-time", isSelected: false },
    { id: 3, title: "contract", isSelected: false },
    { id: 4, title: "Internship", isSelected: false },
]

const rangeSalaries = [
    { id: 1, title: "Less than $1000", isSelected: true},
    { id: 2, title: "$1000 - $15000", isSelected: false},
    { id: 3, title: "More than $15000", isSelected: false},
    { id: 4, title: "Custom", isSelected: false},
]

const experiences = [
    { id: 1, title: "Less than a year", isSelected: true },
    { id: 2, title: "1 - 3 years", isSelected: false },
    { id: 3, title: "3 - 5 years", isSelected: false },
    { id: 4, title: "Custom", isSelected: false },
]

export { jobTypes, rangeSalaries, experiences }