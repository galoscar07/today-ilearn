var fs = require('fs')

// // Sync methods
// fs.mkdirSync('stuff') // create dir
// fs.rmdirSync('stuff') // remove dir

// // Async
// // Create Directory with a file read from a file
// fs.mkdir('stuff', function(){
//     fs.readFile('readme.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeme.txt', data)
//     })
// })

// YOU CANNOT REMOVE DIRECTORY IF IT ISN'T EMPTY
// Remove directory with files inside
fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff') 
})