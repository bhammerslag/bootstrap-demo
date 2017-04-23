$( document ).ready(function() {

  $.fn.extend({ //taken from the creator of animate.css
    animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });

  //Let's write pseudocode, like the old days!
  /*
  * Code should activate whenever *any* button in the nav is pressed
  * When button is pressed, grab some info indicating the div to animate
  * Then do it
  */
  $("ul.nav li a").click(function(){
    var $target = $(this).attr("href");
    $($target).animateCss("bounceIn");
  });

  $('.nav a').on('click', function(){
    $('.navbar-toggle').click()
});

});
