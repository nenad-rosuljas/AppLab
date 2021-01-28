$(document).ready(function(){
  $("[data-tab-trigger]").click(function(event) {
    // Toggle active class on tab buttons
   // Button active state
   $(this).addClass("current");
   $(this).siblings().removeClass("current");
  });
  
});