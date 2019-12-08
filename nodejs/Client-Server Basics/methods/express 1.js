var express = require('express')

var app = express()

app.get('/', function(request, response){
    response.send("this is the homepage")
})
app.get('/contact', function(request, response){
    response.send("this is the contact page")
})
app.get('/profile/:id', function(request, response){
    response.send('You requested to see a profile with the id of ' + request.params.id)
})

app.listen(3000)