console.log('hello world');

// setTimeout(function(){
//     console.log('3 seconds passed')
// }, 3000);

var time = 0

var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds passed')
    if (time > 6) {
        clearInterval(timer)
    }
}, 2000);

console.log(__dirname); // Get the path to the directory you are in
console.log(__filename); // Get the full path to the file you are in