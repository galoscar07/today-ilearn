var fs = require('fs')

// var readme = fs.readFileSync('reading_writing_file_fs/readme.txt', 'utf8', function(err, data){
//     console.log(data)
// }) 
// console.log('I am gonna be printed before the readme data inside the callback function above')
// console.log(readme)
// fs.writeFileSync('reading_writing_file_fs/writeme.txt', readme) 
    // The function above doesn't have a callback function so this function is a sync one (will stop the execution of the code)

// This is faster and doesn't block the code execution
fs.readFileSync('reading_writing_file_fs/readme.txt', 'utf8', function(error, data){ 
    fs.writeFileSync('reading_writing_file_fs/writeme.txt', data)
})

// This is how you delete a file
fs.unlink('./reading_writing_file_fs/writeme.txt', function(error, data){
    if (error) {
        console.log(`You've got an error: ${error}`)
        return
    }
    console.log('File deleted')
})