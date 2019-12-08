var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in the array.'
}

var adder = function (a,b) {
    return `${a} + ${b} = ${a+b}`
}

var pi = 3.142;

// You can set the prop on the exports object to be a function
// module.exports.youCanDoItLikeThis = () => {}
// module.exports.orThis = function() {}

// Or you can add the props on the exports
// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi,
// }

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;