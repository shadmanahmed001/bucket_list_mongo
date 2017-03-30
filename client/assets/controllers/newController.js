console.log('newController has started');
app.controller('newController', ['$scope','friendsFactory','$routeParams', function($scope, friendsFactory, $routeParams) {

      friendsFactory.index(function(data) {
      $scope.friends = data;
      })
  $scope.create = function() {
    console.log("hsdlfsdmnflk");
      friendsFactory.create($scope.newFriend, function(data) {
          friendsFactory.index(function(data) {
              $scope.friends = data;
              $scope.newFriend = {};
          })
      });
  }
  $scope.delete = function(friend){
    friendsFactory.delete(friend, function(data){
      friendsFactory.index(function(data){
        $scope.friends = data;
      });
    });
  }
  // $scope.show = function(friend){
  //   friendsFactory.show(friend, function(data){
  //     console.log(data);
  //     $scope.data = data;
  //   })
  // }
}]);
