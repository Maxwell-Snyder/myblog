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
document.getElementById ("hillo").value = navigator.userAgent;
if (document.getElementById("hillo").value == "Mozilla/5.0 (X11; CrOS x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36") {
    document.getElementById ("demo").style.display = "none":
}
