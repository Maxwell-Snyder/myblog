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

$(document).ready(function(){
    $("#showsusword").click(function(){
        if($(this).is(":checked")){
        	document.getElementById ("susword").style.filter "blur(0px)";
        }else if($(this).is(":not(:checked)")){
        	document.getElementById ("susword").style.filter "blur(5px)";
        }
    });
});
