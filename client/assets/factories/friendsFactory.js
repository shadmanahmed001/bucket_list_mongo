console.log('friendsFactory has started');
app.factory('friendsFactory', ['$http', function($http) {
  var factory = {};
  factory.index = function(callback) {
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        callback(returned_data.data);
      });
  }
  factory.show = function($routeParams, callback) {
    $http.get('/edit/'+$routeParams ).then(function(response){
      if(typeof callback === 'function'){
        callback(response.data);
      }
    })
  }
  factory.create = function(newfriend, callback) {
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log('this is the retun',  returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.update = function(friend, callback) {
    $http.put('/friends/'+ friend._id, friend).then(function(returned_data) {
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.delete = function(friend, callback) {
    $http.delete('/friends/'+friend._id).then(function(response) {
            console.log(response.data);
            if (typeof callback === 'function') {
              callback(response.data);
            }
          })
  }
  return factory;
}]);
