$(document).ready(function() {
        $('body').fadeIn(1500);
        $('#logo').addClass('animated flipInX');
        var loadLink = document.getElementById("loadFrame");
        loadLink.onclick = loadFrame;

        function loadFrame(e){
          var container = document.getElementById("frameHolder");
          e = e || window.event;
  
          $('.arrow_box').css('display', 'inherit');
          container.innerHTML = "<iframe src=" + loadLink.href + ">";
          stopEvent(e);
        }

        function stopEvent(e){
          e = e || window.event;
  
          e.cancelBubble = true;
          e.returnValue = false;
  
          if(e.stopPropagation){
            e.stopPropagation();
            e.preventDefault();
          }
          return false;
        }
});
