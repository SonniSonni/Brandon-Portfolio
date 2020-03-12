$(document).ready(function(){
  $("#title").on("mouseover", function(){
    $("#title").animate({
      bottom: 10 
    }, 160);
    $("#title").animate({
      top: 0
    });
  });
});