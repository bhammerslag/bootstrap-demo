$( document ).ready(function() {

  $.fn.extend({
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
    //Debug print stand-in:
    //alert($(this).attr("href"));
    var $target = $(this).attr("href");
    //alert($target);
    $($target).animateCss("bounceIn");
  });

  $(".col-sm-4").css("padding-top", "-1000px");

  $('.nav a').on('click', function(){
    $('.navbar-toggle').click()
});

});
