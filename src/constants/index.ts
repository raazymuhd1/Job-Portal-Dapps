import { IJobTypes, Country, Sort } from "@/types"

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

const countries: Country[] = [ 
{"id": 1, "name": "Afghanistan", "code": "AF"}, 
{"id": 2, "name": "land Islands", "code": "AX"}, 
{"id": 3, "name": "Albania", "code": "AL"}, 
{"id": 4, "name": "Algeria", "code": "DZ"}, 
{"id": 5, "name": "American Samoa", "code": "AS"}, 
{"id": 6, "name": "AndorrA", "code": "AD"}, 
{"id": 7, "name": "Angola", "code": "AO"}, 
{"id": 8, "name": "Anguilla", "code": "AI"}, 
{"id": 9, "name": "Antarctica", "code": "AQ"}, 
{"id": 10, "name": "Antigua and Barbuda", "code": "AG"}, 
{"id": 11, "name": "Argentina", "code": "AR"}, 
{"id": 12, "name": "Armenia", "code": "AM"}, 
{"id": 13, "name": "Aruba", "code": "AW"}, 
{"id": 14, "name": "Australia", "code": "AU"}, 
{"id": 15, "name": "Austria", "code": "AT"}, 
{"id": 16, "name": "Azerbaijan", "code": "AZ"}, 
{"id": 17, "name": "Bahamas", "code": "BS"}, 
{"id": 18, "name": "Bahrain", "code": "BH"}, 
{"id": 19, "name": "Bangladesh", "code": "BD"}, 
{"id": 20, "name": "Barbados", "code": "BB"}, 
{"id": 21, "name": "Belarus", "code": "BY"}, 
{"id": 22, "name": "Belgium", "code": "BE"}, 
{"id": 23, "name": "Belize", "code": "BZ"}, 
{"id": 24, "name": "Benin", "code": "BJ"}, 
{"id": 25, "name": "Bermuda", "code": "BM"}, 
{"id": 26, "name": "Bhutan", "code": "BT"}, 
{"id": 27, "name": "Bolivia", "code": "BO"}, 
{"id": 28, "name": "Bosnia and Herzegovina", "code": "BA"}, 
{"id": 29, "name": "Botswana", "code": "BW"}, 
{"id": 30, "name": "Bouvet Island", "code": "BV"}, 
{"id": 31, "name": "Brazil", "code": "BR"}, 
{"id": 32, "name": "British Indian Ocean Territory", "code": "IO"}, 
{"id": 33, "name": "Brunei Darussalam", "code": "BN"}, 
{"id": 34, "name": "Bulgaria", "code": "BG"}, 
{"id": 35, "name": "Burkina Faso", "code": "BF"}, 
{"id": 36, "name": "Burundi", "code": "BI"}, 
{"id": 37, "name": "Cambodia", "code": "KH"}, 
{"id": 38, "name": "Cameroon", "code": "CM"}, 
{"id": 39, "name": "Canada", "code": "CA"}, 
{"id": 40, "name": "Cape Verde", "code": "CV"}, 
{"id": 41, "name": "Cayman Islands", "code": "KY"}, 
{"id": 42, "name": "Central African Republic", "code": "CF"}, 
{"id": 43, "name": "Chad", "code": "TD"}, 
{"id": 44, "name": "Chile", "code": "CL"}, 
{"id": 45, "name": "China", "code": "CN"}, 
{"id": 46, "name": "Christmas Island", "code": "CX"}, 
{"id": 47, "name": "Cocos (Keeling) Islands", "code": "CC"}, 
{"id": 48, "name": "Colombia", "code": "CO"}, 
{"id": 49, "name": "Comoros", "code": "KM"}, 
{"id": 50, "name": "Congo", "code": "CG"}, 
{"id": 51, "name": "Congo, The Democratic Republic of the", "code": "CD"}, 
{"id": 52, "name": "Cook Islands", "code": "CK"}, 
{"id": 53, "name": "Costa Rica", "code": "CR"}, 
{"id": 54, "name": "Cote D\"Ivoire", "code": "CI"}, 
{"id": 55, "name": "Croatia", "code": "HR"}, 
{"id": 56, "name": "Cuba", "code": "CU"}, 
{"id": 57, "name": "Cyprus", "code": "CY"}, 
{"id": 58, "name": "Czech Republic", "code": "CZ"}, 
{"id": 59, "name": "Denmark", "code": "DK"}, 
{"id": 60, "name": "Djibouti", "code": "DJ"}, 
{"id": 61, "name": "Dominica", "code": "DM"}, 
{"id": 62, "name": "Dominican Republic", "code": "DO"}, 
{"id": 63, "name": "Ecuador", "code": "EC"}, 
{"id": 64, "name": "Egypt", "code": "EG"}, 
{"id": 65, "name": "El Salvador", "code": "SV"}, 
{"id": 66, "name": "Equatorial Guinea", "code": "GQ"}, 
{"id": 67, "name": "Eritrea", "code": "ER"}, 
{"id": 68, "name": "Estonia", "code": "EE"}, 
{"id": 69, "name": "Ethiopia", "code": "ET"}, 
{"id": 70, "name": "Falkland Islands (Malvinas)", "code": "FK"}, 
{"id": 71, "name": "Faroe Islands", "code": "FO"}, 
{"id": 72, "name": "Fiji", "code": "FJ"}, 
{"id": 73, "name": "Finland", "code": "FI"}, 
{"id": 74, "name": "France", "code": "FR"}, 
{"id": 75, "name": "French Guiana", "code": "GF"}, 
{"id": 76, "name": "French Polynesia", "code": "PF"}, 
{"id": 77, "name": "French Southern Territories", "code": "TF"}, 
{"id": 78, "name": "Gabon", "code": "GA"}, 
{"id": 79, "name": "Gambia", "code": "GM"}, 
{"id": 80, "name": "Georgia", "code": "GE"}, 
{"id": 81, "name": "Germany", "code": "DE"}, 
{"id": 82, "name": "Ghana", "code": "GH"}, 
{"id": 83, "name": "Gibraltar", "code": "GI"}, 
{"id": 84, "name": "Greece", "code": "GR"}, 
{"id": 85, "name": "Greenland", "code": "GL"}, 
{"id": 86, "name": "Grenada", "code": "GD"}, 
{"id": 87, "name": "Guadeloupe", "code": "GP"}, 
{"id": 88, "name": "Guam", "code": "GU"}, 
{"id": 89, "name": "Guatemala", "code": "GT"}, 
{"id": 90, "name": "Guernsey", "code": "GG"}, 
{"id": 91, "name": "Guinea", "code": "GN"}, 
{"id": 92, "name": "Guinea-Bissau", "code": "GW"}, 
{"id": 93, "name": "Guyana", "code": "GY"}, 
{"id": 94, "name": "Haiti", "code": "HT"}, 
{"id": 95, "name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
{"id": 96, "name": "Holy See (Vatican City State)", "code": "VA"}, 
{"id": 97, "name": "Honduras", "code": "HN"}, 
{"id": 98, "name": "Hong Kong", "code": "HK"}, 
{"id": 99, "name": "Hungary", "code": "HU"}, 
{"id": 100, "name": "Iceland", "code": "IS"}, 
{"id": 101, "name": "India", "code": "IN"}, 
{"id": 102, "name": "Indonesia", "code": "ID"}, 
{"id": 103, "name": "Iran, Islamic Republic Of", "code": "IR"}, 
{"id": 104, "name": "Iraq", "code": "IQ"}, 
{"id": 105, "name": "Ireland", "code": "IE"}, 
{"id": 106, "name": "Isle of Man", "code": "IM"}, 
{"id": 107, "name": "Israel", "code": "IL"}, 
{"id": 108, "name": "Italy", "code": "IT"}, 
{"id": 109, "name": "Jamaica", "code": "JM"}, 
{"id": 110, "name": "Japan", "code": "JP"}, 
{"id": 111, "name": "Jersey", "code": "JE"}, 
{"id": 112, "name": "Jordan", "code": "JO"}, 
{"id": 113, "name": "Kazakhstan", "code": "KZ"}, 
{"id": 114, "name": "Kenya", "code": "KE"}, 
{"id": 115, "name": "Kiribati", "code": "KI"}, 
{"id": 116, "name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
{"id": 117, "name": "Korea, Republic of", "code": "KR"}, 
{"id": 118, "name": "Kuwait", "code": "KW"}, 
{"id": 119, "name": "Kyrgyzstan", "code": "KG"}, 
{"id": 120, "name": "Lao People\"S Democratic Republic", "code": "LA"}, 
{"id": 121, "name": "Latvia", "code": "LV"}, 
{"id": 122, "name": "Lebanon", "code": "LB"}, 
{"id": 123, "name": "Lesotho", "code": "LS"}, 
{"id": 124, "name": "Liberia", "code": "LR"}, 
{"id": 125, "name": "Libyan Arab Jamahiriya", "code": "LY"}, 
{"id": 126, "name": "Liechtenstein", "code": "LI"}, 
{"id": 127, "name": "Lithuania", "code": "LT"}, 
{"id": 128, "name": "Luxembourg", "code": "LU"}, 
{"id": 129, "name": "Macao", "code": "MO"}, 
{"id": 130, "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
{"id": 131, "name": "Madagascar", "code": "MG"}, 
{"id": 132, "name": "Malawi", "code": "MW"}, 
{"id": 133, "name": "Malaysia", "code": "MY"}, 
{"id": 134, "name": "Maldives", "code": "MV"}, 
{"id": 135, "name": "Mali", "code": "ML"}, 
{"id": 136, "name": "Malta", "code": "MT"}, 
{"id": 137, "name": "Marshall Islands", "code": "MH"}, 
{"id": 138, "name": "Martinique", "code": "MQ"}, 
{"id": 139, "name": "Mauritania", "code": "MR"}, 
{"id": 140, "name": "Mauritius", "code": "MU"}, 
{"id": 141, "name": "Mayotte", "code": "YT"}, 
{"id": 142, "name": "Mexico", "code": "MX"}, 
{"id": 143, "name": "Micronesia, Federated States of", "code": "FM"}, 
{"id": 144, "name": "Moldova, Republic of", "code": "MD"}, 
{"id": 145, "name": "Monaco", "code": "MC"}, 
{"id": 146, "name": "Mongolia", "code": "MN"}, 
{"id": 147, "name": "Montenegro", "code": "ME"},
{"id": 148, "name": "Montserrat", "code": "MS"},
{"id": 149, "name": "Morocco", "code": "MA"}, 
{"id": 150, "name": "Mozambique", "code": "MZ"}, 
{"id": 151, "name": "Myanmar", "code": "MM"}, 
{"id": 152, "name": "Namibia", "code": "NA"}, 
{"id": 153, "name": "Nauru", "code": "NR"}, 
{"id": 154, "name": "Nepal", "code": "NP"}, 
{"id": 155, "name": "Netherlands", "code": "NL"}, 
{"id": 156, "name": "Netherlands Antilles", "code": "AN"}, 
{"id": 157, "name": "New Caledonia", "code": "NC"}, 
{"id": 158, "name": "New Zealand", "code": "NZ"}, 
{"id": 159, "name": "Nicaragua", "code": "NI"}, 
{"id": 160, "name": "Niger", "code": "NE"}, 
{"id": 161, "name": "Nigeria", "code": "NG"}, 
{"id": 162, "name": "Niue", "code": "NU"}, 
{"id": 163, "name": "Norfolk Island", "code": "NF"}, 
{"id": 164, "name": "Northern Mariana Islands", "code": "MP"}, 
{"id": 165, "name": "Norway", "code": "NO"}, 
{"id": 166, "name": "Oman", "code": "OM"}, 
{"id": 167, "name": "Pakistan", "code": "PK"}, 
{"id": 168, "name": "Palau", "code": "PW"}, 
{"id": 169, "name": "Palestinian Territory, Occupied", "code": "PS"}, 
{"id": 170, "name": "Panama", "code": "PA"}, 
{"id": 171, "name": "Papua New Guinea", "code": "PG"}, 
{"id": 172, "name": "Paraguay", "code": "PY"}, 
{"id": 173, "name": "Peru", "code": "PE"}, 
{"id": 174, "name": "Philippines", "code": "PH"}, 
{"id": 175, "name": "Pitcairn", "code": "PN"}, 
{"id": 176, "name": "Poland", "code": "PL"}, 
{"id": 177, "name": "Portugal", "code": "PT"}, 
{"id": 178, "name": "Puerto Rico", "code": "PR"}, 
{"id": 179, "name": "Qatar", "code": "QA"}, 
{"id": 180, "name": "Reunion", "code": "RE"}, 
{"id": 181, "name": "Romania", "code": "RO"}, 
{"id": 182, "name": "Russian Federation", "code": "RU"}, 
{"id": 183, "name": "RWANDA", "code": "RW"}, 
{"id": 184, "name": "Saint Helena", "code": "SH"}, 
{"id": 185, "name": "Saint Kitts and Nevis", "code": "KN"}, 
{"id": 186, "name": "Saint Lucia", "code": "LC"}, 
{"id": 187, "name": "Saint Pierre and Miquelon", "code": "PM"}, 
{"id": 188, "name": "Saint Vincent and the Grenadines", "code": "VC"}, 
{"id": 189, "name": "Samoa", "code": "WS"}, 
{"id": 190, "name": "San Marino", "code": "SM"}
]

const sortLists: Sort[] = [
    { id: 0, name: "Relevancy" },
    { id: 1, name: "Asc" },
    { id: 2, name: "Desc" },
]


// dummy jobs data
const jobs = [
    { 
        id: 0, 
        title: "Frontend Developer", 
        "company-name": "Alibaba", 
        applicants: 150, 
        date: "3 days ago", 
        "work-type": "fulltime", 
        workplace: "hybrid", 
        salary: "$5000", 
        exp: "3-4", 
        description: "Develop and maintain the user interface and user experience of our web applications.",
        responsibility: [
            "Develop and maintain the user interface and user experience of our web applications.",
            "Collaborate with the design team to create visually appealing and user-friendly interfaces.",
            "Write clean, efficient, and well-documented code.",
            "Participate in code reviews and contribute to the improvement of the codebase."
        ],
        qualification: [
            "Bachelor's degree in Computer Science or related field, 3+ years of experience in frontend development.",
            "Proficiency in HTML, CSS, JavaScript, and React.",
            "Experience with modern frontend build tools such as Webpack and Babel.",
            "Strong understanding of responsive design and mobile-first development."
        ],
        aboutRole: "As a Frontend Developer, you will be responsible for developing and maintaining the user interface and user experience of our web applications."
    },
    { 
        id: 1, 
        title: "Backend Developer", 
        "company-name": "Alibaba", 
        applicants: 150, 
        date: "3 days ago", 
        "work-type": "fulltime", 
        workplace: "hybrid", 
        salary: "$5000", 
        exp: "3-4", 
        description: "Design, develop, and maintain the server-side logic, database integration, and API connectivity.",
        responsibility: [
            "Design, develop, and maintain the server-side logic, database integration, and API connectivity.",
            "Work with the frontend team to integrate backend services with frontend applications.",
            "Implement security measures to protect against data breaches and cyber threats.",
            "Optimize database performance and query efficiency."
        ],
        qualification: [
            "Bachelor's degree in Computer Science or related field, 3+ years of experience in backend development.",
            "Proficiency in languages such as Java, Python, or Ruby.",
            "Experience with database management systems such as MySQL or MongoDB.",
            "Strong understanding of API design and RESTful architecture."
        ],
        aboutRole: "As a Backend Developer, you will be responsible for designing, developing, and maintaining the server-side logic, database integration, and API connectivity."
    },
    { 
        id: 2, 
        title: "Web Designer", 
        "company-name": "Alibaba", 
        applicants: 150, 
        date: "3 days ago", 
        "work-type": "fulltime", 
        workplace: "hybrid", 
        salary: "$5000", 
        exp: "3-4", 
        description: "Create visually appealing and user-friendly interfaces for our web applications.",
        responsibility: [
            "Create visually appealing and user-friendly interfaces for our web applications.",
            "Design and develop responsive and mobile-first interfaces.",
            "Collaborate with the development team to implement designs.",
            "Conduct user research and testing to inform design decisions."
        ],
        qualification: [
            "Bachelor's degree in Graphic Design or related field, 3+ years of experience in web design.",
            "Proficiency in design tools such as Sketch, Figma, or Adobe XD.",
            "Experience with front-end development frameworks such as React or Angular.",
            "Strong understanding of user experience (UX) principles and human-centered design."
        ],
        aboutRole: "As a Web Designer, you will be responsible for creating visually appealing and user-friendly interfaces for our web applications."
    },
    { 
        id: 3, 
        title: "UI Designer", 
        "company-name": "Alibaba", 
        applicants: 150, 
        date: "3 days ago", 
        "work-type": "fulltime", 
        workplace: "hybrid", 
        salary: "$5000", 
        exp: "3-4", 
        description: "Design intuitive and aesthetically pleasing user interfaces for our applications.",
        responsibility: [
            "Design intuitive and aesthetically pleasing user interfaces for our applications.",
            "Create wireframes, prototypes, and high-fidelity designs.",
            "Collaborate with the development team to implement designs.",
            "Conduct user research and testing to inform design decisions."
        ],
        qualification: [
            "Bachelor's degree in Graphic Design or related field, 3+ years of experience in UI design.",
            "Proficiency in design tools such as Sketch, Figma, or Adobe XD.",
            "Experience with front-end development frameworks such as React or Angular.",
            "Strong understanding of user experience (UX) principles and human-centered design."
        ],
        aboutRole: "As a UI Designer, you will be responsible for designing intuitive and aesthetically pleasing user interfaces for our applications."
    },
    { 
        id: 4, 
        title: "Front Office Officer", 
        "company-name": "Alibaba", 
        applicants: 150, 
        date: "3 days ago", 
        "work-type": "fulltime", 
        workplace: "hybrid", 
        salary: "$5000", 
        exp: "3-4", 
        description: "Manage the day-to-day operations of the front office, including reception, administration, and customer service.",
        responsibility: [
            "Manage the day-to-day operations of the front office, including reception, administration, and customer service.",
            "Greet and assist visitors, clients, and employees.",
            "Answer and direct phone calls, emails, and other correspondence.",
            "Maintain accurate and up-to-date records and databases."
        ],
        qualification: [
            "Bachelor's degree in Business Administration or related field, 3+ years of experience in front office operations.",
            "Excellent communication and interpersonal skills.",
            "Proficiency in Microsoft Office and Google Suite.",
            "Strong organizational and time management skills."
        ],
        aboutRole: "As a Front Office Officer, you will be responsible for managing the day-to-day operations of the front office, including reception, administration, and customer service."
    },
]

export { jobTypes, rangeSalaries, experiences, countries, sortLists, jobs }