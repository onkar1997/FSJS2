let even = []
let odd = []

function isEvenOdd() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            even.push(i)
        } else {
            odd.push(i)
        }
    }
}

isEvenOdd()
console.log('Even : ', even)
console.log('Odd : ', odd)