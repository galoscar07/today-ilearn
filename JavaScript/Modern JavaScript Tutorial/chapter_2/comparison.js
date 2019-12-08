let age = 25;

// loose comparison (different types can still be equal)
console.log(age == 25)   // true
console.log(age == '25') // true
console.log(age != 25)   // fale
console.log(age != '25') // false

// strinct comparison (different types cannot be equal)
console.log(age === 25)   // true
console.log(age === '25') // false
console.log(age !== '25') // true
console.log(age !== 25)   // false
