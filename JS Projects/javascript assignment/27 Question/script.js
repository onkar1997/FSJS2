let primeNumbers = []

for (let i = 0; i <= 100; i++) {
    for (let j = 2; j <= i; j++) {
        if (i == 0 || i == 1) {
            continue
        } else if (i == 2) {
            primeNumbers.push(i)
            break
        } else if (i % j == 0) {
            break
        } else {
            primeNumbers.push(i)
            break
        }
    }
}

console.log('Prime Numbers from 1 to 100 : ', primeNumbers)