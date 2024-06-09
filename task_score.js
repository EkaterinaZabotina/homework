let studentName = "Katya"
let studentSurname = "Zabotina"

let shortName = studentName.slice (0,1)

let introModuleScore = 80
let gitModuleScore = 90
let jsModuleScore = 100

let averageScore = (introModuleScore+gitModuleScore+jsModuleScore)/3
console.log(`The average score for ${shortName}. ${studentSurname} is ${averageScore}`)