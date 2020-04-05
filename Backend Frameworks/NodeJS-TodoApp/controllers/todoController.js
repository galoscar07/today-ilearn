var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// Connect to the database
var uri = `mongodb+srv://admin:admin@todo-a7nq1.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(uri).catch((error) => {console.log(error)})

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
})

var Todo = mongoose.model('Todo', todoSchema)
// var itemOne = Todo({item: 'buy flowers'}).save(function(error){
//   if (error) throw error;
//   console.log('item saved')
// });

// var data = [
//   {item: 'get milk'},
//   {item: 'walk dog'},
//   {item: 'kick some coding ass'}
// ]
var urlEncodedParser = bodyParser.urlencoded({extends: false})

module.exports = function(app) {
  app.get('/todo', function(request, response){
    // // server memory
    // response.render('todo', {todos: data})

    // // get data from mongo db
    // Todo.find({item: 'send flowers'})
    Todo.find({}, function(error, data){
      if (error) throw error;
      response.render('todo', {todos: data})
    })
  })
  app.post('/todo', urlEncodedParser, function(request, response){
    // // Server Memory
    // data.push(request.body);
    // response.json(data)

    // Get data from the view and add it to the mongo db
    var newTodo = Todo(request.body).save(function(error, data){
      if (error) throw error
      response.json(data)
    })
  })
  app.delete('/todo/:id', function(request, response){
    // // Server Memory
    // data = data.filter(function(todo){
    //   return todo.item.replace(/ /g, '-') !== request.params.id
    // })
    // response.json(data)

    // Delete the requested item from the mongo DB
    Todo.findOneAndDelete({item: request.params.id.replace(/\-/g, " ")}, (error, res) => {
      if (error) throw error
      Todo.find({}, function(error, data){
        if (error) throw error;
        response.json(data)
      })
    })
  })
}