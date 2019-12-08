let ninjas = ['shaun', 'ryu', 'chun-li']
console.log(ninjas)

console.log(ninjas[1])
ninjas[1] = 'ken'
console.log(ninjas[1])

let ages = [20, 25, 30, 35]
console.log(ages[2])

let random = ['shaun', 'crystal', 30, 21]
console.log(random)

console.log(ninjas.length)

// array methods

let result = ninjas.join(',')
console.log(result)

result = ninjas.join('-')
console.log(result)

result = ninjas.indexOf('chun-li')
console.log(result)

result = ninjas.concat(['This is another array', 'That will be concatenated to the first one'])
console.log(result)

result = ninjas.push('ken') // alter the original array
console.log(result)
console.log(ninjas)

result = ninjas.pop()
console.log(result)
console.log(ninjas)