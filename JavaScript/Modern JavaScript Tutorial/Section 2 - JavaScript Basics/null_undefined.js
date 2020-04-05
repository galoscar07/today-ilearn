// Both null and undefined represents a complete lack of value
// The main difference between the two is that null is on purpose empty and undefined isn't

let age; // this is undefined
console.log(age, age + 3, `the age is ${age}`)
age = null; // this is null
// null in mathematical formulas takes the value of 0
console.log(age, age + 3, `the age is ${age}`)
