angular.module('app').controller('registrationCtrl', function($scope, $http, usersService){

  // $scope.addUser = mainService.addUser;
  // $scope.getUsers = usersService.getUsers().then(function(data){
  //   $scope.users = data;
  // })
  // $scope.addUser = usersService.addUser;
  $scope.addUser = usersService.addUser;
  $scope.logIn = function(fullName){
    usersService.tryLogIn(fullName);
  }
})
