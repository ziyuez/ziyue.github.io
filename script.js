$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
              $('.nav-stuff').removeClass('grey-text');
              $('.nav-stuff').addClass('dark-text');
              $('.nav-button').removeClass('btn-info');
              $('.nav-button').addClass('btn-outline-info');
              $('.logo').removeClass('logobright');
              $('.logo').addClass('logoregular');
          } else {
              $('.navbar').removeClass('solid');
              $('.nav-stuff').removeClass('dark-text');
              $('.nav-stuff').addClass('grey-text');
              $('.nav-button').removeClass('btn-outline-info');
              $('.nav-button').addClass('btn-info');
              $('.logo').removeClass('logoregular');
              $('.logo').addClass('logobright');
          }
        });
});