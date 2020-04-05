
// Mouse events https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events

// Event when copy text
const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', () => {
    console.log('Oi, my content is copyright')
})

// Event moving mouse
const box = document.querySelector('.box')
box.addEventListener('mousemove', (event) => {   
    console.log('The mouse is at cordonate (x,y)=', `(${event.offsetX},${event.offsetY})`)
    box.textContent = `(x,y)=(${event.offsetX},${event.offsetY})`
})
box.addEventListener('mouseleave', (event) => {   
    box.textContent = `Move the mouse around this box and get the position of the mouse inside the box`
})


// Wheel event
document.addEventListener('wheel', (event) => {
    console.log(event.pageX, event.pageY)
})