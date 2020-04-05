// Math object
colorTrace("Math Object", "green");

console.log(Math) // You can see all the Methods that you can use 
console.log(Math.PI)
console.log(Math.E)
const area = 7.7

console.log(Math.round(area))
console.log(Math.floor(area)) // Round down 7.7 = 7
console.log(Math.ceil(area)) // Round up 7.3 = 7
console.log(Math.trunc(area)) // get only the integer

// random numbers

const random = Math.random()
console.log(random)
console.log(Math.round(random * 100)) // Random number between 1 and 100