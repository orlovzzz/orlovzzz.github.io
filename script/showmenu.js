document.getElementById("menu").addEventListener("click", function() {
    var x = document.getElementById("blackmenu");
    x.style.display = "grid";
    if (x.style.opacity == "1") {
        x.style.opacity = "0";
    } else {
        x.style.opacity = "1";
    }
})