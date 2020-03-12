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
  //Click slide up animation
  $("#title").click(() => {
    $("#title").removeClass(["title-start"]);
    $("#title").animate({
      'bottom': '270px'
    }); 
  });

});