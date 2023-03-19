const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())

const oldDate = new Date('01-01-1970')
const newDate = new Date()

console.log(newDate.getTime() - oldDate.getTime())

