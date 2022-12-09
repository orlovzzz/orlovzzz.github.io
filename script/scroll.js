var m = document.getElementById("manfooter");
var w = document.getElementById("womanfooter");
var c = document.getElementById("childfooter");
var kat = document.getElementById("kat")

m.addEventListener("click", function() {
    kat.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
    man.style.background = "black";
    man.style.color = "white";
    woman.style.background = "white";
    woman.style.color = "black";
    child.style.background = "white";
    child.style.color = "black";
    manO.style.display = "grid";
    womanO.style.display = "none";
    childO.style.display = "none";
});

w.addEventListener("click", function() {
    kat.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
    man.style.background = "white";
    man.style.color = "black";
    woman.style.background = "black";
    woman.style.color = "white";
    child.style.background = "white";
    child.style.color = "black";
    manO.style.display = "none";
    womanO.style.display = "grid";
    childO.style.display = "none";
});

c.addEventListener("click", function() {
    kat.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
    child.style.background = "black";
    child.style.color = "white";
    woman.style.background = "white";
    woman.style.color = "black";
    man.style.background = "white";
    man.style.color = "black";
    manO.style.display = "none";
    womanO.style.display = "none";
    childO.style.display = "grid";
});