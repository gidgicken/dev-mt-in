angular.module('app').controller('browseCtrl', function($scope, $http, usersService){

  $scope.users = JSON.parse(localStorage.getItem('localStoreUsers'));

  $scope.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  $scope.updateUsersMinusFriends = function(){
    $scope.usersMinusFriends = usersService.usersMinusFriends();
  }
  $scope.updateCurrentFriends = function(){
    $scope.currentFriends = usersService.getCurrentFriends();
  }
  $scope.getRandomUsers = usersService.getRandomUsers();
  $scope.updateSelectedFriend = function(friend){
    $scope.selectedFriend = friend;
  };
  $scope.updateInfo = function(newName, newTagline, newProfileUrl, newBio){
    usersService.updateInfo(newName, newTagline, newProfileUrl, newBio);
  }
  $scope.addFriend = function(){
    var userListToUpdate = JSON.parse(localStorage.getItem('localStoreUsers'));
    $scope.loggedInUser.friends.push($scope.selectedFriend._id);
    $scope.selectedFriend.friends.push($scope.loggedInUser._id);
    for(var i = 0; i < userListToUpdate.length; i++){
      if(userListToUpdate[i]._id === $scope.loggedInUser._id){
        userListToUpdate[i] = $scope.loggedInUser;
      }else if(userListToUpdate[i]._id === $scope.selectedFriend._id){
        userListToUpdate[i] = $scope.selectedFriend;
      }
    }
    localStorage.setItem('localStoreUsers', JSON.stringify(userListToUpdate));
    localStorage.setItem('loggedInUser', JSON.stringify($scope.loggedInUser));
  };
})

//KD http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254
//RW http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254
