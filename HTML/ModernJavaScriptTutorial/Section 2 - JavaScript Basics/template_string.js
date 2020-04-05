// tempalte string
const title = 'Best reads of 2019'
const author = 'Mario'
const likes = 30

// Concatenation way
let result = "The blog called " + title + ' by ' + author + ' has ' + likes + ' likes'
console.log(result)

// template string way
result = `the blog called ${title} by ${author} has ${likes} likes`
console.log(result)

// create html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`