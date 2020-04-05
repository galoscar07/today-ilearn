// Object literals
function colorTrace(msg, color) {
    console.log("%c" + msg, "color:" + color + ";font-weight:bold;");
}
colorTrace("Object Literals", "green");

let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@haha.com',
    location: 'Berlin',
    blogs: ['Why mac and cheese rules', 'How to create a react website'],
}
console.log(user)
console.log(user.name)
console.log(user.blogs)

// update prop on an object
console.log(user.age)
user.age = 35
console.log(user.age)
user['age'] = 32
console.log(user['age'])

const key = 'location'
console.log(user[key])

console.log(typeof user)