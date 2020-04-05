// if statement

const age = 25

if (age > 20 ) {
    console.log('you are over 20 years old')
}

const ninjas = ['shaun', 'ryu', 'chun-li']

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas")
}

const password = 'pass'

if (password.length >= 12) {
    console.log('that password is might strong')
} else if (password.length >= 8) {
    console.log('that password is long enough!')
} else {
    console.log('this password is not long enough!')
}