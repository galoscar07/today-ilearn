// arguments and parameters

const speak = function(name, time) {
    console.log(`good ${time} ${name}`)
}

// speak() // will print good undefined undefined
speak('Mike', 'morning') // will print good morning Mike


const speak2 = function(name = 'luigi', time = 'night') { // here you declare default value for params
    console.log(`good ${time} ${name}`)
}

// speak2() // will print good night luigi
speak2('Maria') // will print good night Maria
speak2('Mike', 'morning') // will print good morning Mike
