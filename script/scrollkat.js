var m = document.getElementById("manfooter");
var w = document.getElementById("womanfooter");
var c = document.getElementById("childfooter");

m.addEventListener("click", function() {
    document.getElementById("manOTD").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

w.addEventListener("click", function() {
    document.getElementById("womanOTD").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

c.addEventListener("click", function() {
    document.getElementById("childOTD").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});