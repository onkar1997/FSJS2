let number = 5
let star = ''

// *
// * *
// * * *
// for (let i = 0; i < number; i++) {
//     for (let j = 0; j <= i; j++) {
//         star += '* '
//     }
//     star += '\n'
// }

// * * *
// * * *
// * * *
// for (let i = 0; i < number; i++) {
//     for (let j = 0; j < number; j++) {
//         star += '* '
//     }
//     star += '\n'
// }

//     *
//   * * *
// * * * * *
for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) {
        for (let j = number-i; j > 0 ; j--) {
          star += ' ';
        } 

        for (let k = 1; k <= i; k++) {
            star += '* '
        }    
    } 
    star += '\n'
}

console.log(star)