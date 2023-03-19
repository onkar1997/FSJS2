const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

console.log('\nShopping Cart : ', shoppingCart)

// Add Meat in the beginning
if (shoppingCart.includes("Meat") !== true) {
    shoppingCart.unshift('Meat')
    console.log('\nMeat Added !')
}
console.log('Updated Shopping Cart : ', shoppingCart)

// Add Sugar at end
if (shoppingCart.includes("Sugar") !== true) {
    shoppingCart.push('Sugar')
    console.log('\nSugar Added !')
}
console.log('Updated Shopping Cart : ', shoppingCart)

// Remove Honey
let indexOfHoney = shoppingCart.indexOf('Honey')
shoppingCart.splice(indexOfHoney, 1)
console.log('\nHoney Removed !')
console.log('Updated Shopping Cart : ', shoppingCart)

// Modify Tea to Green Tea
let indexOfTea = shoppingCart.indexOf('Tea')
shoppingCart.splice(indexOfTea, 1, 'Green Tea')
console.log('\nTea Modified to Green Tea !')
console.log('Updated Shopping Cart : ', shoppingCart)

console.log('\nTHANK YOU FOR SHOPPING :)')