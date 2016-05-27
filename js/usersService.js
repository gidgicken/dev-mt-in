angular.module('app').service('usersService', function($http){

  this.usersMinusFriends = function(){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var usersAdjusted = [];
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    for(var i = 0; i < users.length; i++){
      if(loggedInUser.friends.indexOf(users[i]._id) === -1 && users[i]._id != loggedInUser._id){
        usersAdjusted.push(users[i]);
      }
    }
    return usersAdjusted;
  }
  this.addUser = function(pname, ptagline, pimageUrl, pbio){
    var users = [];
    var newUserId = makeid();
    if(localStorage.getItem('localStoreUsers')){
      users = JSON.parse(localStorage.getItem('localStoreUsers'));
    }
    var newUser = {
      _id: newUserId,
      name: pname,
      tagline: ptagline,
      profileUrl: pimageUrl,
      bio: pbio,
      friends: []
    }
    users.push(newUser);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    localStorage.setItem('localStoreUsers', JSON.stringify(users));
  }
  this.getRandomUsers = function(){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var randomUsers = [];
    // for(var i = 0; i < 6; i++){
    //   randomProfileImages.push(users[Math.floor(Math.random() * users.length)].profileUrl);
    // }
    for(var i = 0; i < users.length; i++){
      randomUsers.push(users[i]);
    }
    return randomUsers;
  }
  // this.addFriend = function(){
  //   var users = JSON.parse(localStorage.getItem('localStoreUsers'));
  //   loggedInUser.friends.push(selectedFriend._id);
  //   for(var i = 0; i < users.length; i++){
  //     if(users[i]._id === loggedInUser._id){
  //       users[i] = loggedInUser;
  //     }
  //   }
  //   localStorage.setItem('localStoreUsers', JSON.stringify(users));
  // }

  // this.updateSelectedFriend = function(friend){
  //   selectedFriend = friend
  // }

  this.tryLogIn = function(fullName){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    for(var i = 0; i < users.length; i++){
      if(fullName === users[i].name){
        localStorage.setItem('loggedInUser', JSON.stringify(users[i]));
        window.location = "tabsviews.html"
      }
    }
  }
  this.getCurrentFriends = function(){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var currentFriends = [];
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    for(var i = 0; i < users.length; i++){
      if(loggedInUser.friends.indexOf(users[i]._id) != -1){
        currentFriends.push(users[i]);
      }
    }
    return currentFriends;
  }
  this.updateInfo = function(newName, newTagline, newProfileUrl, newBio){
    var users = JSON.parse(localStorage.getItem('localStoreUsers'));
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if(newName){loggedInUser.name = newName;}
    if(newTagline){loggedInUser.tagline = newTagline;}
    if(newProfileUrl){loggedInUser.profileUrl = newProfileUrl;}
    if(newBio){loggedInUser.bio = newBio;}

    for(var i = 0; i < users.length; i++){
      if(users[i]._id === loggedInUser._id){
        users[i] = loggedInUser;
        break;
      }
    }

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    localStorage.setItem('localStoreUsers', JSON.stringify(users));
    location.reload();
  }
  function makeid()
  {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

})
