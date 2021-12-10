const element = document.getElementById('f')

element.addEventListener("click", () => {
    document.getElementById ("share").style.transform = "scale(1.0)";
    document.getElementById ("f").style.display = "none";
    document.getElementById ("hi").style.display = "block";
});

const element2 = document.getElementById('hi')

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

document.getElementsByTagName(body).oncontextmenu = "return false";
