// | require('./modules_and_require')
// | console.log(counter(['Oscar', 'Mihai'])) -> won't work because is not available outside the module

var counter = require('./modules_and_require');
console.log(counter(['Oscar']))