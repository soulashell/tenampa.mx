$(document).ready(function() {
  $('body').fadeIn(1500);
  $('#logo').addClass('animated fadeInDown');
  $('#loadArtists').click(function(e){
    e.preventDefault();
    $('.arrow_box').animate({height: "toggle"}, 1500);
  });
});
