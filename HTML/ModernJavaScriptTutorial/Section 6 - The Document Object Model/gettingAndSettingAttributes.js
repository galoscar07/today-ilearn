// Get attribute get any attribute of an html tag, just specify the attribute that you want
// And you can set an attribute with the setAttribute method which takes as param the 
// attribute that you want to change and the value that you cahange to

// You you use set attribute with an attribute that doesn't exist it will just create the attribute

const link = document.querySelector('a')

console.log(link.getAttribute('href'))
link.setAttribute('href', 'http://wwww.facebook.com')
link.innerText = 'facebook wesite'

const message = document.querySelector('p')
console.log(message.getAttribute('class'))
message.setAttribute('class', 'success')
message.setAttribute('style', 'color: green;')