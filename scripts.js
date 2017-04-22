$( document ).ready(function() {

  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


  $(".jumbotron h1").css("color", "red");
  $("#contact-button").click(function(){
    $("#contact-info").animateCss("tada");

  });

  $("#projects-button").click(function(){
    $("#project-info").animateCss("tada");

  });


});
