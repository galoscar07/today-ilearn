// regular function
const calcArea = function(radius){
    return 3.14 * radius ** 2
}
// arrow functions
const calcArea = (radius) => {
    return 3.14 * radius ** 2
}
// When you have only one param then you can loose the braces
const calcArea = radius => {
    return 3.14 * radius ** 2
}
// No params you have to use paranthesis
const calcArea = () => {
    return 3.14 * 5 ** 2
}
// also you can do
const calcArea = radius => 3.14 * radius ** 2

calcArea(5)
