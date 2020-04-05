// The core modules are imported also with require but without ./
var events = require('events')
var util = require('util')

// element.on('click', function(){})

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg)
// })
// myEmitter.emit('someEvent', 'This should be printed')

var Person = function(name){
    this.name = name
}

util.inherits(Person, events.EventEmitter)
var James = new Person('James')
var Bob = new Person('Bob')
var Mary = new Person('Mary')

var people = [James, Bob, Mary]
people.forEach((person) => {
    person.on('speak', (mssg) => {
        console.log(`${person.name} said: ${mssg}`)
    })
})

James.emit('speak', 'hey dudes');
Mary.emit('speak', 'hey, I am a girl');