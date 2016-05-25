angular.module('app').service('mainService', function(){
  var users = [];

  this.getUsers = function(){
    return users;
  }

  this.addUser = function(){
    users.push({
      "name": 'Chis Johnson',
      "tagline": 'Some awesome tagline about you',
      "bio": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      "profileUrl": 'temp',
      "friends": []
    });
  }

})
