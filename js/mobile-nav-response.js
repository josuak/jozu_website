/*jslint browser: true*/
/*global $, $navLi, $navUl, $indicator, window*/
  
"use strict";
  
$navLi.on("click", mobileNavResponse);

function mobileNavResponse() {
  var $this = $(this);
  //get the positionLeft from the clicked item. Also taking the overflowing distance into account by adding the scrollLeft position. Otherwise the positionLeft would change depending on the scroll position. P.S. kinda hard to explain in words
  var $thisPositionLeft = $this.position().left + $navUl.scrollLeft(),
      $thisWidth = $this.width(),
      windowWidth = $( window ).width();

  //Determine newScrollPosition 
  var newScrollPosition = $thisPositionLeft + ($thisWidth / 2) - (windowWidth / 2);

  //Make a smooth transition to the newScrollPosition
  $navUl.animate({
    scrollLeft: newScrollPosition
  }, 500);
     
  //set proper css position and width for pos-indicator
  $indicator.css({"left": $thisPositionLeft, "width": $thisWidth});
  
  //removeClass active from all Nav elements and add class active to the clicked element
  $navLi.removeClass("active");
  $this.addClass("active");
  
  $("#helper").text("blub");
}