const element = document.getElementById("f");
element.addEventListener("click", () => {
    document.getElementById("share").style.transform = "scale(1.0)";
});
const element2 = document.getElementById("hide");
element2.addEventListener("click", () => {
    document.getElementById("share").style.transform = "scale(0.0)"
    document.getElementById("f").style.display = "block";
    document.getElementById("hi").style.display = "none";
});
const element3 = document.getElementById("top");
element3.addEventListener("click", () => {
    document.body.scrollTop = 0 
    document.documentElement.scrollTop = 0;
});
const element4 = document.getElementById("copy");
element4.addEventListener("click", () => {
    var e = document.getElementById("link");
    e.select(), e.setSelectionRange(0, 99999), navigator.clipboard.writeText(e.value);
});
const element5 = document.getElementById("submit");
element5.addEventListener("click", () => {
    localStorage.setItem ("submitted","true");
});
document.onselectstart = () => {
    event.preventDefault();
};
var test = localStorage.getItem ("submitted");
if (test.value = "true") {
    document.getElementById("submit").disabled = true;
}
window.setInterval(function() {
  var security = document.getElementById ("reviewtext").value;
if (security.includes("<") || security.includes(">") || security.includes("https") || security.includes("http")) {
    document.getElementById ("submit").disabled = true;
} else {
    document.getElementById ("submit").disabled = false;
}
}, 100);
