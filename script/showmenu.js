document.getElementById("menu").addEventListener("click", function() {
    var x = document.getElementById("blackmenu");
    if (x.style.opacity == "1") {
        x.style.opacity = "0";
        x.style.display = "none";
        
    } else {
        x.style.display = "grid";
        x.style.opacity = "1";
    }
})