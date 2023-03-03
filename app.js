
var countDownDate = new Date("March 28, 2023 00:00:00").getTime();


let daytext = document.getElementById("daytext");
let hourtext = document.getElementById("hourtext");
let minutetext = document.getElementById("minutetext");
let secondtext = document.getElementById("secondtext");



var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daytext.innerHTML= days;
  hourtext.innerHTML = hours;
  minutetext.innerHTML = minutes;
  secondtext.innerHTML = seconds;

  

}, 1000);
