document.getElementById("light").style.display = "none";
var sum = localStorage.getItem ("dark-mode");
if (sum.value = "true") {
    document.body.style.background = "#1B1212";
    document.getElementById("demo").style.color = "white";
    document.getElementById("nav").style.backgroundColor = "#36454f";
    document.getElementById("share").style.backgroundColor = "#36454f";
} else {
    document.body.style.background = "white";
    document.getElementById("demo").style.color = "black";
    document.getElementById("nav").style.backgroundColor = "whitesmoke";
    document.getElementById("share").style.backgroundColor = "whitesmoke";
}

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

const element4 = document.getElementById('dark')

element4.addEventListener("click", () => {
document.body.style.background = "#1B1212";
    document.getElementById("demo").style.color = "white";
    document.getElementById("nav").style.backgroundColor = "#36454f";
    document.getElementById("share").style.backgroundColor = "#36454f";
    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "block";
    localStorage.setItem ("dark-mode","true");
});

const element5 = document.getElementById('light')

element5.addEventListener("click", () => {
    document.body.style.background = "white";
    document.getElementById("demo").style.color = "black";
    document.getElementById("nav").style.backgroundColor = "whitesmoke";
    document.getElementById("share").style.backgroundColor = "whitesmoke";
    document.getElementById("dark").style.display = "block";
    document.getElementById("light").style.display = "none";
    localStoarge.clear();
});
