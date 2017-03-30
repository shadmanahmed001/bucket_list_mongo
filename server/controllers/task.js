// console.log('tasks controller');
var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
  index: function(request,response){
    Task.find({}, function(err, data){
      if (err){
        console.log('there was a problem here');
      }
      else{
        response.json({data: data})
      }
    })},
  create: function(request,response){
    console.log('got to the create function in server', request.body);

    var newTask = new Task();
    var x = request.body
    newTask.task = x.objective

    newTask.save(function(err){
      if (err){
        console.log('error in creation');
        response.json(err);
      }
      else{
        console.log('created');
        Task.find({}, function(err, data){
          if (err){
            console.log('there was a problem here');
          }
          else{
            console.log('your sending all the tasks json');
            response.json({data: data});
          }
        })
      }
    })
  },
  update: function(request,response){
      Task.update({_id: request.params.id},request.body, function(err) {
        if(err){
          console.log('Updating didnt work');
        }
        else{
          console.log('you updated');
          Task.findOne({_id: request.params.id}, function(err, task) {
            if (err){
              console.log('the show had an error');
              response.json(err);
            }
            else{
              response.json(task)
            }
      })  }
    })
  },

  delete: function(request,response){
    Task.remove({_id: request.params.id}, function(err){
      if(err){
        console.log('delete had an err');
        response.json(err)
      }
      else{
        console.log('The delete worked');
        response.json({placeholder:'deleted'});
      }
    })
  },
  show: function(request,response){
    Task.findOne({_id: request.params.id}, function(err, friend) {
      if (err){
        console.log('the show had an error');
        response.json(err);
      }
      else{
        response.json(friend)
      }
})  }
}
