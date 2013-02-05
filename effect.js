$(document).ready(function() {
        $('body').fadeIn(1500);
        $('#logo').addClass('animated flipInX');
        $('#loadFrame').click(function(e){
          e.preventDefault();
          $('.arrow_box').toggle(100);
        });
});
