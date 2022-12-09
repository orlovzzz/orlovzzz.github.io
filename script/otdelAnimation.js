var man = document.getElementById("man");
var woman = document.getElementById("woman");
var child = document.getElementById("child");
var manO = document.getElementById("manO");
var womanO = document.getElementById("womanO");
var childO = document.getElementById("childO");
man.style.background = "black";
man.style.color = "white"
womanO.style.display = "none";
childO.style.display = "none";

man.addEventListener("click", function() {
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

woman.addEventListener("click", function() {
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

child.addEventListener("click", function() {
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