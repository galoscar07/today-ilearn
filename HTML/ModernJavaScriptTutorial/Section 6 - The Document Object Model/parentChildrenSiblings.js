const articleTag = document.querySelector('article')
console.log(articleTag.children) // Return a html colection with all the children

// YOU CANNOT USE FOR EACH ON AN HTMLCOLLECTION

// we have to make the html collection into an array
// console.log(Array.from(articleTag.children))
// Array.from its not destructive so it doesn't alter the original value of the 
// html collection

articleChildrenArray = Array.from(articleTag.children)
articleChildrenArray.forEach(element => {
    element.classList.add('article-element')
});

const title = document.querySelector('h2')
console.log(title.parentElement) // here take the children and get the parent from the children
console.log(title.parentElement.parentElement)
console.log(title.previousElementSibling)
console.log(title.nextElementSibling)

// chaining
console.log(title.nextElementSibling.parentElement.children)
