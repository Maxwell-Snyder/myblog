            function share () {
        // document.getElementById ("share").style.display = "block";
        document.getElementById ("share").style.transform = "scale(1.0)";
        document.getElementById ("f").style.display = "none";
        document.getElementById ("hi").style.display = "block";
    }

    function hide () {
        // document.getElementById ("share").style.display = "none";
        document.getElementById ("share").style.transform = "scale(0.0)";
        document.getElementById ("home").style.display = "block";
        document.getElementById ("f").style.display = "block";
        document.getElementById ("hi").style.display = "none"; 
    }

    function hide2 () {
        document.getElementById ("share").style.display = "none";
    }
        
        function copy() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
            alert ("Link copied!");
}
