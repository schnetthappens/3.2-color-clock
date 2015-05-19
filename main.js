(function() {
  'use strict';

//VARIABLES

var currentTime;
var $hours = document.querySelector('.hours');
var $minutes = document.querySelector('.minutes');
var $seconds = document.querySelector('.seconds');
var $display = document.querySelector('.display-time');


function startStopwatch(event){
  currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  $hours.textContent = hours;
  $minutes.textContent = minutes;
  $seconds.textContent = seconds;
}

window.setInterval(startStopwatch, 1000);




//EVENT LISTENERS

window.addEventListener('load', startStopwatch, false);

})();
