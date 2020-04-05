const para2 = document.querySelector('p')

console.log(para2.innerText)
para2.innerText = "i'm awesome"

const paras3 = document.querySelectorAll('p')
paras3.forEach(para => para.innerText += 'New Text')