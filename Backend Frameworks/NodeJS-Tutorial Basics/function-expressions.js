// Normal function statement
function sayHi() {
    console.log('Hi')
}
sayHi()

// Function expression
var sayBye = function(){
    console.log('Bye')
}
sayBye()

function callFunction(fun) {
    fun(); // You can pass a function as a parameter
}
callFunction(sayBye)
