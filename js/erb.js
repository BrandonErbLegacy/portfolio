//Rather than using a full cms or dynamic server side for this
//I'd rather just hard code for one-time use
var listOfTitles = [
  "Software Engineer",
  "Full Stack developer",
  "Web developer",
  "Back-end developer",
  "Programmer",
  "Coder",
  "Software Architect",
  "Technology Specialist",
  "Application Programmer",
  "Systems Analyst",
  "Technician",
  "Computer Architect"
];


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(listOfTitles);

var playAnimation = true;

(function($){
  "use strict";

  //Bind learn-more button to slide floater
  $("#erb-learn-more").click(function(){
    $(".floater").slideToggle(function(){
      $("body").css("overflow", "scroll");
      $("body").css("overflow-x", "hidden");
    });
  });

  //Incremently fade job titles
  var currentTitle = 0;
  $(".job-title-slider").text(listOfTitles[currentTitle]);
  setInterval(function(){
    if (playAnimation){
      $(".job-title-slider").stop();
      $(".job-title-slider").fadeToggle(function(){
        var title = listOfTitles[currentTitle];
        $(".job-title-slider").text(title);
      });
      $(".job-title-slider").fadeToggle();
      currentTitle++;
      if (currentTitle >= listOfTitles.length) {
        currentTitle = 0;
      }
    }
  }, 3000);

  //If a slider is hovered over, disable transitions temporarily
  $(".job-title-slider").mouseenter(function(){
    playAnimation = false;
  }).mouseleave(function(){
    playAnimation = true;
  });

  //Check for fragmentation and disable splash if it exists
  if (window.location.hash){
    setTimeout(function(){
      $(".floater").slideToggle(function(){
        $("body").css("overflow", "scroll");
        $("body").css("overflow-x", "hidden");
      });
    }, 1000);
  } else {
    //No fragmentation, but the page could be refreshed, so scroll to the top
    $(window).scrollTop(0);
 };
})(jQuery);
