
var countDownDate = new Date("March 28, 2023 00:00:00").getTime();

const daytext = document.getElementById("day")
const hourtext = document.getElementById("hour")
const minutetext = document.getElementById("minute")
const secondtext = document.getElementById("second");



var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daytext.innerHTML= days;
  hourtext.innerHTML

  

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
