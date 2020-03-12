$(document).ready(function(){
  //Mouse Over bounce animation
  $(".title-start").mouseenter(() => {
    $(".title-start").animate({
      'bottom': '+=10px' 
    }, 160);
    $(".title-start").animate({
      'bottom': '-=10px'
    });
  });

  $("#title").click(() => {
    $("#title").animate({
      'bottom': '270px'
    }); 
  });

});