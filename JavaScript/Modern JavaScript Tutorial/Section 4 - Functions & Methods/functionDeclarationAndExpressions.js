// function declaration
// If you are using function declaration you can use the function anywhere in the file and it will work
function greet() {
    console.log('hello there')
}

// function expression
// The function is stored inside of a variable
// With function expression if you try to inkove it before the declaration you will get an error
const speak = function() {
    console.log('good day')
};

// greet() // this is calling the function / invoking the function
// greet()
// greet()

speak()
speak()
speak()