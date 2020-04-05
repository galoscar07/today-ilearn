const para = document.querySelector('p')
console.log(para)

const error = document.querySelector('.error')
console.log(error)

const divError = document.querySelector('div.error')
console.log(divError)

const paras = document.querySelectorAll('p')
console.log(paras)
console.log(paras[0])

paras.forEach(para => console.log(para))

const errors = document.querySelectorAll('.error')
errors.forEach(error => console.log(error))