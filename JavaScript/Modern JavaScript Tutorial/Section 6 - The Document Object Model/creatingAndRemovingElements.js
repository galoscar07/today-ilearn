const ul = document.querySelector('ul');
// ul.remove() // This is how to remove an element

const button = document.querySelector('button')

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>some new element</li>'
    const li = document.createElement('li')
    li.innerText = 'Some new element'


    // ul.appendChild(li) // append to the end
    // ul.append(li) // append to the end
    ul.prepend(li) // add the element on the top
})


const items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click', e => {
        // e.target.style.textDecoration = 'line-through';
        e.target.remove()
    })
})