// CALCULATOR

let num1 = Number(prompt('Enter number 1 : '))
let num2 = Number(prompt('Enter number 2 : '))

let optionNumber = Number(prompt('Select the option: 1.Addition 2.Subtraction 3.Multiplication 4.Division 5.Modulus'))

switch (optionNumber) {
    case 1:
        alert('Addition : ', num1+num2)
        break
    case 2:
        alert('Subtraction : ', num1-num2)
        break
    case 3:
        alert('Multiplication : ', num1*num2)
        break
    case 4:
        alert('Division : ', num1/num2)
        break
    case 5:
        alert('Modulus : ', num1%num2)
        break
    default:
        alert('Invalid Input! Try Again.')
}
