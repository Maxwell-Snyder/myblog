const element = document.getElementById('f')

element.addEventListener("click", () => {
    document.getElementsByTagName ('div').style.transform = "scale(1.0)";
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

document.addEventListener("contextmenu", function(evt){
  evt.preventDefault();
}, false);

document.querySelector('#content').addEventListener('selectstart', (e) => {
    e.preventDefault();
})

