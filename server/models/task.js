var mongoose = require('mongoose');
// console.log('task model');
var TaskSchema = new mongoose.Schema({
  task: String,

})
var Task = mongoose.model('Task', TaskSchema);
