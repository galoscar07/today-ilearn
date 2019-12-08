var http = require('http')
var fs = require('fs')

// Reading chinks of data from a file 
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
var myWriteStream = fs.createReadStream(__dirname + '/writeme.txt', 'utf8')

// Buffer method
myReadStream.on('data', function(chunk){
    console.log('new chunk received:')
    myWriteStream.write(chunk)
})

// Pipe method
myReadStream.pipe(myWriteStream)