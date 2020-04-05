const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', (event) => {
    event.preventDefault() // The default behavior is to refresh the page of form submission
    console.log(event)
    // console.log(username.value)
    console.log(form.username.value) // But you have to add id or name to the input
})

// testing regex

// test method on the pattern (regex)
let username = 'shaun'
const pattern = /^[a-z]{6,}$/
let result = pattern.test(username)
console.log(result) // false because shaun is not 6 character long

username = 'asdasdasd'
result = pattern.test(username)
console.log(result) // true because shaun is more than 6 character long

// search method on string
result = username.search(pattern)
console.log(result)
