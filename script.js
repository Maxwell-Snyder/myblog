const element = document.getElementById('f')

element.addEventListener("click", () => {
    document.getElementById ('share').style.transform = "scale(1.0)";
});

const element2 = document.getElementById('hide')

element2.addEventListener("click", () => {
    document.getElementById ("share").style.transform = "scale(0.0)";
    document.getElementById ("f").style.display = "block";
    document.getElementById ("hi").style.display = "none"; 
});

const element3 = document.getElementById('top')

element3.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
});


var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("ellimegasus").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("explode").style.display = "none":
  }
}, 1000);
