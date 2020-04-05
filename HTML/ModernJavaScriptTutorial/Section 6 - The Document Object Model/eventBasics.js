const button = document.querySelector('button')

button.addEventListener('click', ()=> {
    console.log('I was clicked')
})

const items = document.querySelectorAll('li')
items.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log('You just clicked on: ', element, ' and the event is: ', event)
        console.log(event.target) // to see what is the target of the event
        event.target.style.textDecoration = 'line-through'
    })
});