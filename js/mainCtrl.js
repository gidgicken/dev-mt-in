angular.module('app').controller('mainCtrl', function($scope, mainService){

  $scope.addUser = mainService.addUser;
  
})
