var express = require('express')
var bodyParse = require('body-parser')
var app = express()

var urlencoderParser = bodyParse.urlencoded({extended: false})

app.set('view engine', 'ejs')

// Middleware usage
// next is used to send the request from the middleware here to 
// the next middleware
// app.use('/assets', function(request, response, next){
//   console.log(request.url)
//   next();
// })
// this is how we serve static files
app.use('/assets', express.static('assets'))

app.get('/', function(request, response){
  response.render('index')
})
app.get('/contact', function(request, response){
  console.log(request.query)
  response.render('contact', {qs: request.query})
})
app.get('/profile/:name', function(request, response){
  var data = {age: 29, job: 'ninja', hobbies: ['cooking', 'daancing']}
  response.render('profile', {person: request.params.name, data: data})
})
app.post('/contact', urlencoderParser, function(request, response){
  console.log(request.body)
  response.render('contact-success', {data: request.body})
})

app.listen(3000)