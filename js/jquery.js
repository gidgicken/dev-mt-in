$(document).ready(function(){
  // $('.friends-images-column').css('display', 'none');
  // $('.new-friends-images-column').css('display', 'none');
  // $('.update-profile-column').css('display', 'none');
  $('.view-friends-tab').on('click', function(){
    $('.friends-images-column').css('display', 'flex');
    $('.new-friends-images-column').css('display', 'none');
    $('.update-profile-column').css('display', 'none');
    $('.triangle-images-column').css('display', 'none');
    $('.view-friends-tab').css('border-bottom', '3px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '0px solid #00FFE9');
    $('#loggedInUserProfile').css('display', 'flex');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
    $('#friend-profile-view').css('display', 'none');
    $('#friend-triangle-column').css('display', 'none');
  })
  $('.find-friends-tab').on('click', function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'flex');
    $('.update-profile-column').css('display', 'none');
    $('.triangle-images-column').css('display', 'none');
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '3px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '0px solid #00FFE9');
    $('#loggedInUserProfile').css('display', 'flex');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
    $('#friend-profile-view').css('display', 'none');
    $('#friend-triangle-column').css('display', 'none');
  })
  $('.update-profile-tab').on('click', function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'none');
    $('.update-profile-column').css('display', 'flex');
    $('.triangle-images-column').css('display', 'none');
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '3px solid #00FFE9');
    $('#loggedInUserProfile').css('display', 'flex');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
    $('#friend-profile-view').css('display', 'none');
    $('#friend-triangle-column').css('display', 'none');
  })
  $('.back-icon-container').on('click',function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'none');
    $('.update-profile-column').css('display', 'none');
    $('.triangle-images-column').css('display', 'flex');
    $('.profile-icon-container').css('display', 'flex');
    $('.back-icon-container').css('display', 'none');
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '0px solid #00FFE9');
    $('#loggedInUserProfile').css('display', 'flex');
    $('#friend-profile-view').css('display', 'none');
    $('#friend-triangle-column').css('display', 'none');
  })
  $(document).on('click', '.friend-image', function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'none');
    $('.update-profile-column').css('display', 'none');
    $('.triangle-images-column').css('display', 'none');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
    $('#loggedInUserProfile').css('display', 'none')
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '0px solid #00FFE9');
    $('#friend-profile-view').css('display', 'flex');
    $('#friend-triangle-column').css('display', 'flex');
    $('#add-friend-button').css('display', 'inline');
  })
  $(document).on('click', '#current-friend-image', function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'none');
    $('.update-profile-column').css('display', 'none');
    $('.triangle-images-column').css('display', 'none');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
    $('#loggedInUserProfile').css('display', 'none')
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '0px solid #00FFE9');
    $('#friend-profile-view').css('display', 'flex');
    $('#friend-triangle-column').css('display', 'flex');
    $('#add-friend-button').css('display', 'none');
  })
  $('#switch-to-log-in-button').on('click', function(event){
    event.preventDefault();
    $('#register-left-column').css('display', 'none');
    $('#log-in-left-column').css('display', 'flex');
  })
  $('#switch-to-register-button').on('click', function(event){
    event.preventDefault();
    $('#register-left-column').css('display', 'flex');
    $('#log-in-left-column').css('display', 'none');
  })
  $('#add-friend-button').on('click', function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'flex');
    $('.update-profile-column').css('display', 'none');
    $('.triangle-images-column').css('display', 'none');
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '3px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '0px solid #00FFE9');
    $('#loggedInUserProfile').css('display', 'flex');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
    $('#friend-profile-view').css('display', 'none');
    $('#friend-triangle-column').css('display', 'none');
  })
  // $('a').on('click', function(event){
  //   event.preventDefault();
  // })
})
