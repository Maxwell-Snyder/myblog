const element = document.getElementById("f");
element.addEventListener("click", () => {
    document.getElementById("share").style.transform = "scale(1.0)";
});
const element2 = document.getElementById("hide");
element2.addEventListener("click", () => {
    (document.getElementById("share").style.transform = "scale(0.0)"), (document.getElementById("f").style.display = "block"), (document.getElementById("hi").style.display = "none");
});
const element3 = document.getElementById("top");
element3.addEventListener("click", () => {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
});
const element4 = document.getElementById("copy");
element4.addEventListener("click", () => {
    var e = document.getElementById("link");
    e.select(), e.setSelectionRange(0, 99999), navigator.clipboard.writeText(e.value);
});
document.onselectstart = () => {
    event.preventDefault();
};
$.post("https://ipinfo.io", function(response) { 
    document.getElementById ("hillo").value = response.ip;
}, "json")
if (document.getElementById("hillo").value == "79.133.124.211") {
    document.getElementById("overlay").style.display = "block";
} else {
    document.getElementById("overlay").style.display = "none";
}
