// for loops
for (let i = 0; i < 5; i++) {
    console.log('in loop: ', i)
}

console.log('looped finished')

const names = ['anna', 'mike', 'me']

for (let j = 0; j < names.length; j++) {
    console.log(names[j])
    let html = `<div>${names[j]}</div>`
    console.log(html)
}