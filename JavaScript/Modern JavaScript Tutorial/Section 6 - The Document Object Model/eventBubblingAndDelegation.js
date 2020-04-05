const ul = document.querySelector('ul');
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.innerText = 'Some new element'
    ul.prepend(li) 
})

// const items = document.querySelectorAll('li')
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in li')
//         // to stop the event bubbling up you do stopPropagation
//         e.stopPropagation()
//         e.target.remove()
//     })
// })

ul.addEventListener('click', event => {
    console.log(event.target)
    if (event.target.tagName === 'LI') {
        // ul.removeChild(event.target)
        event.target.remove()
    }
})

// Event Bubbling: When an event happens on an element, it first runs the handlers 
// on it, then on its parent, then all the way up on other ancestors.

// Event Delegation: The idea is that if we have a lot of elements handled in a 
// similar way, then instead of assigning a handler to each of them – we put a single 
// handler on their common ancestor.