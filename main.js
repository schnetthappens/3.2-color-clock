(function() {
  'use strict';

//VARIABLES

var currentTime;
var $display = document.querySelector('.display-time');


function startStopwatch(event){
  currentTime = new Date();
  console.log(currentTime);
  $display.textContent = currentTime;
}

window.setInterval(startStopwatch, 1000);


//EVENT LISTENERS

window.addEventListener('load', startStopwatch, false);

})();
