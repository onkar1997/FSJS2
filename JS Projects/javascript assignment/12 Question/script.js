const time = new Date()

// YYYY-MM-DD HH:mm
console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`)

// DD-MM-YYYY HH:mm
console.log(`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)

// DD/MM/YYYY HH:mm
console.log(`${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)