let age = prompt("Enter your age : ")
if (age >= 18) {
    alert("You are old enough to drive")
} else {
    age = 18 - age
    alert(`You have to wait for ${age} years in order to complete 18 years.`)
}