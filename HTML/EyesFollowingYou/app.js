console.log('Hello world')

const eye1 = document.querySelector('#eye1')
const eye2 = document.querySelector('#eye2')
const container = document.querySelector('.container')
const eyeContainer = document.querySelector('.eye')
const eyebrow = document.querySelector('#special')

container.addEventListener('mousemove', (event) => {
    mouseXPosition = event.clientX
    mouseYPosition = event.clientY

    containerHeight = container.clientHeight
    containerWidth = container.clientWidth

    eyeHeight = eyeContainer.clientHeight
    eyeWidth = eyeContainer.clientWidth

    pupilHeight = eye1.clientHeight
    pupilWidth = eye1.clientWidth


    pupilXPosition = ((eyeWidth -pupilWidth) * (mouseXPosition - pupilWidth)) / containerWidth
    pupilYPosition = ((eyeHeight- pupilHeight) * (mouseYPosition - pupilHeight)) / containerHeight


    eye1.style.top = `${Math.ceil(pupilYPosition)}px`
    eye1.style.left = `${Math.ceil(pupilXPosition)}px`

    eye2.style.top = `${Math.ceil(pupilYPosition)}px`
    eye2.style.left = `${Math.ceil(pupilXPosition)}px`
})

const colorInput = document.querySelector('#eyesColor')
colorInput.addEventListener('change', (event) => {
    eye1.style.backgroundColor = event.target.value
    eye2.style.backgroundColor = event.target.value
})