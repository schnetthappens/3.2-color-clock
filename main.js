(function() {
  'use strict';

var $display = document.querySelector('.display-time');


function showTime(event){
  var currentTime = new Date();
  console.log(currentTime);
}


window.addEventListener('load', showTime, false)






})();
