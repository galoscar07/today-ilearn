const content = document.querySelector('p')

console.log(content.classList) // get all the classes of the element

content.classList.add('error') // these are methods on a list
content.classList.remove('error')
content.classList.add('success')


// Query all the elements p and if the inner text has error add class error
// And if it has the word success add the class success to it
const pTagLists = document.querySelectorAll('p')
pTagLists.forEach(el => {
    if (el.textContent.search('error') !== -1) el.classList.add('error')
    if (el.textContent.includes('success')) el.classList.add('success')
})

// TO REMEMBER
// Inner text takes the text that is displayed to the dom
// textContent takes all the text even if the text has display none

const title = document.querySelector('.title')
title.classList.toggle('test')

// toggle if in the array is the class test then it removes it and if it doesn't have it then 
// if just adds it