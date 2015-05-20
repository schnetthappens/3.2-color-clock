(function() {
  'use strict';

//VARIABLES

var currentTime;
var $hours = document.querySelector('.hours');
var $minutes = document.querySelector('.minutes');
var $seconds = document.querySelector('.seconds');
var $display = document.querySelector('.display-time');
var $line = document.querySelector('.line');


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
      if (hours < 10) {
        hours = "0" + minutes;
      }

      extendLine();

      $hours.textContent = hours;
      $minutes.textContent = minutes;
      $seconds.textContent = seconds;
}

window.setInterval(startStopwatch, 1000);


function extendLine() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var percentWidth = (seconds/60) * 100;
  var lineWidth = String(percentWidth + "%");
  $line.style.width = lineWidth;
}



//EVENT LISTENERS

window.addEventListener('load', startStopwatch, false);

})();
