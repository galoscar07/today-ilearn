const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const usernameInput = document.querySelector('input#username')


const usernameValidation = (username=null) => {
    if (username === null) username = form.username.value
    const usernamePattern = /^[a-zA-Z]{6,10}$/
    return usernamePattern.test(username)
}


form.addEventListener('submit', (event) => {
    event.preventDefault() 

    // validation
    if (usernameValidation()) {
        // Pattern match
        feedback.textContent = 'the username is valid'
        feedback.style.color = 'limegreen'
    } else {
        // Haven't matched pattern
        feedback.textContent = 'username must contain letters only & be between 6 & 10 character'
        feedback.style.color = 'red'
    }

})

usernameInput.addEventListener('keyup', (event) => {
    if (usernameValidation(event.target.value)) {
        usernameInput.style.background = 'lime'
        usernameInput.style.color = 'black'
    } else {
        usernameInput.style.background = 'red'
        usernameInput.style.color = 'white'
    }
})