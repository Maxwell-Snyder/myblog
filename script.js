function share () {
        document.getElementById ("share").style.transform = "scale(1.0)";
        document.getElementById ("f").style.display = "none";
        document.getElementById ("hi").style.display = "block";
    }

    function hide () {
        document.getElementById ("share").style.transform = "scale(0.0)";
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

document.cookie = "read_image_policy=false";

if (document.cookie = "false") {
        alert ("Images from this website may be screenshotted and used elsewhere as long as you add a link to this site.");
        document.cookie = "read_image_policy=true";
} else {
       
}
