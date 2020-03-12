$(document).ready(function(){
  //Mouse Over bounce animation
  $("#title").mouseenter(() => {
    $("#title").animate({
      'bottom': '+=10px' 
    }, 160);
    $("#title").animate({
      'bottom': '-=10px'
    });
  });

  $("#title").click(() => {
    $("#title").animate({
      'bottom': '270px'
    }); 
  });
  
});