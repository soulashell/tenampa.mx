$(document).ready(function() {
  $('body').fadeIn(1500);
  $('#logo').addClass('animated flipInX');
  $('#loadArtists').click(function(e){
    e.preventDefault();
    $('.arrow_box').animate({height: "toggle"}, 1500);
  });
});
