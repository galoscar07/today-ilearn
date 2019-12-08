var http = require('http')
var fs = require('fs')


var server = http.createServer(function(request, response){
    console.log(`Request was made on: ${request.url}`)
    switch (request.url) {
        case '/home' || '/':{
            response.writeHead(200,{'Content-Type': 'text/html'})
            fs.createReadStream(__dirname + '/index.html').pipe(response)
            break
        }
        case '/contact': {
            response.writeHead(200,{'Content-Type': 'text/html'})
            fs.createReadStream(__dirname + '/contact.html').pipe(response)
            break
        }
        case '/api/loydoge2': {
            var lodoge = [{name: 'Shelly',health: 4380},{name: 'Colt',health: 3280,}]
            response.writeHead(200, {'Content-Type': 'application/json'})
            response.end(JSON.stringify(lodoge))
        }
        default: {
          response.writeHead(404, {'Content-Type': 'text/html'})
          fs.createReadStream(__dirname + '/404.html').pipe(response)
        }
    }
})

server.listen(3000, '127.0.0.1')
console.log("Now listening on port 3000")