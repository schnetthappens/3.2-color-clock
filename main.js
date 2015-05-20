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

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      $hours.textContent = hours;
      $minutes.textContent = minutes;
      $seconds.textContent = seconds;
}

window.setInterval(startStopwatch, 1000);

// function addZeros(currentTime) {
//   if {
//     (seconds > 10);
//     ("0" + seconds);
//   }
//   if  {
//     (minutes > 10);
//     ("0" + seconds);
//   }


//EVENT LISTENERS

window.addEventListener('load', startStopwatch, false);

})();
