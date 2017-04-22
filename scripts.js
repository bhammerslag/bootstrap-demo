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
  $(".navbar-btn a").click(function(){
    //Debug print stand-in:
    //alert($(this).attr("href"));
    $($(this).attr("href")).animateCss("tada");
  });

  $(".navbar-btn").css("margin", "5px");

  $('.nav a').on('click', function(){
    $('.navbar-toggle').click()
});

});
