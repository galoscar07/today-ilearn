// Variables and block scope
let age = 30; // This variables has a global scope because it is declared at the root level of the document

// let age = 50; you can't declare the same variable in the same scope

if (true) {
    let age = 40;
    // here it creates a local scope and age will have the value 40 only inside of the if
    let name = 'shaun'
    console.log('inside 1st code block: ', age, name) 

    if (true) {
        // let age = 50; if this is uncomented the code below will print 50 because you redeclare the variable
        console.log('inside 2st code block: ', age, name) // age will still be 40 decause it is declared in the previous code block
        var test = 'hello' // var variables don't have a block scope
    }
}

console.log('outside code block: ', age, name, test) // here shaun will not be visible because it is not in the same scope

// Also all the above rules applies for the consts
