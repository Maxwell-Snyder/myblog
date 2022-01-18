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


var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("ellimegasus").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("explode").style.display = "none":
  }
}, 1000);
