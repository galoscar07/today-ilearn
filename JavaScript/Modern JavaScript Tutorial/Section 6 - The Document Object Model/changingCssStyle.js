const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 15px') // It overwrites the existing style on the element
console.log(title.style)
console.log(title.style.color)

title.style.margin = 50 // this way you just set the property of the object and you are not 
                        // overwriting the existing props

title.style.color = 'crimson'
title.style.fontSize = '60px' // If the prop has the '-' in the name u use camel case font-size becomes
// fontSize

title.style.margin = '' // Like this you remove the props