let number = 11

for (let i = 2; i <= number; i++) {
    if (number === i) {
        console.log(`${number} is Prime Number`)
        break
    }
    if (number % i === 0) {
        console.log(`${number} is Not Prime Number`)
        break
    } 
}
