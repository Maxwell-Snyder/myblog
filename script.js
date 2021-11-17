function share () {
        document.getElementById ("share").style.transform = "scale(1.0)";
        document.getElementById ("f").style.display = "none";
        document.getElementById ("hi").style.display = "block";
    }

    function hide () {
        document.getElementById ("share").style.transform = "scale(0.0)";
        document.getElementById ("home").style.display = "block";
        document.getElementById ("f").style.display = "block";
        document.getElementById ("hi").style.display = "none"; 
    }

    function hide2 () {
        document.getElementById ("share").style.display = "none";
    }
        

function top () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function dark () {
          document.getElementsByTagName(p).style.color = "white";
          document.getElementsByTagName(h2).style.color = "white";
          document.body.style.background = "grey";
}
