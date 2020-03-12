$(document).ready(function(){
  $("#title").on("mouseover", function(){
    $("#title").animate({
      bottom: 20 
    });
    $("#title").animate({
      top: 0
    });
  });
});