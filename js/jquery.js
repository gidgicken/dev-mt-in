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
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
  })
  $('.find-friends-tab').on('click', function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'flex');
    $('.update-profile-column').css('display', 'none');
    $('.triangle-images-column').css('display', 'none');
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '3px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '0px solid #00FFE9');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
  })
  $('.update-profile-tab').on('click', function(){
    $('.friends-images-column').css('display', 'none');
    $('.new-friends-images-column').css('display', 'none');
    $('.update-profile-column').css('display', 'flex');
    $('.triangle-images-column').css('display', 'none');
    $('.view-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.find-friends-tab').css('border-bottom', '0px solid #00FFE9');
    $('.update-profile-tab').css('border-bottom', '3px solid #00FFE9');
    $('.profile-icon-container').css('display', 'none');
    $('.back-icon-container').css('display', 'inline');
  })
})
