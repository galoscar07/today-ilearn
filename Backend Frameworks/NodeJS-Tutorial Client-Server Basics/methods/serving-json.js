var http = require('http')
var fs = require('fs')


var server = http.createServer(function(request, response){
    console.log(`Request was made on: ${request.url}`)
    response.writeHead(200, {'Content-Type': 'application/json'})
    var myObj = {
        name: 'loydoge2',
        job: 'dev',
        age: 21
    }
    response.end(JSON.stringify(myObj))

})

server.listen(3000, '127.0.0.1')
console.log("Now listening on port 3000")