var mongoose = require('mongoose');
var task = require('../controllers/task')
var path = require('path')

// console.log('routes');
module.exports = function(app){
app.get('/task', function(request, response) {
  task.index(request, response);
});
app.get('/edit/:id', function(request, response) {
  task.show(request, response);
});
app.post('/task', function(request, response) {
  task.create(request, response);
});
app.put('/task/:id', function(request, response) {
  task.update(request, response);
});
app.delete('/task/:id', function(request, response) {
  task.delete(request, response);
});
//*********************************************************
                    // iOS
//*********************************************************
// get all method
app.get('/ios/tasks', function(request, response) {
  console.log("we reached the ios department of the server");
  task.index(request, response);
});
// create method
app.post('/ios/tasks', function(request, response) {
  console.log("we got iOS talking");
  task.create(request, response);
});
// update method
app.put('/ios/task/:id', function(request, response) {
  console.log("updating");
  task.update(request, response);
});
// delete method
app.delete('/ios/task/:id', function(request, response) {
  console.log("got to the delete");
  task.delete(request, response);
});


}
