// type conversion
let score = '100'

console.log(score + 1) // not ok because it is transformed in string concatenation

score = Number(score)
console.log(score + 1)

// check type
console.log(typeof score)

let result = number('hello')
console.log(result) // NaN

result = String(50)
console.log(result, typeof result)

result = Boolean(100)
console.log(result, typeof result) // true

result = Boolean(0)
console.log(result, typeof result) // false

result = Boolean('0')
console.log(result, typeof result) // true

result = Boolean('')
console.log(result, typeof result) // false