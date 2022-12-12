var sam = document.getElementById("sam");
var dost = document.getElementById("dost");
sam.addEventListener("click", function() {
    sam.style.background = "black";
    sam.style.color = "white";
    dost.style.background = "white";
    dost.style.color = "black";
    document.getElementById("sel").style.display = "block";
    document.getElementById("inps").style.display = "none";
});
dost.addEventListener("click", function() {
    sam.style.background = "white";
    sam.style.color = "black";
    dost.style.background = "black";
    dost.style.color = "white";
    document.getElementById("sel").style.display = "none";
    document.getElementById("inps").style.display = "block";
    document.getElementById("modtext").innerHTML = "";
    document.getElementById("modtext").style.opacity = "0";
});
var mas = [];
for (var i = 0; i < 5; i++) {
    var x = (Math.floor(Math.random() * 6));
    if (x == 0) {
        mas.push("Товара нет в наличии. Попробуйте выбрать другой магазин.")
    }
    else {
        mas.push("Товар в наличии " + x + " шт.");
    }
}
document.getElementById("sel").addEventListener("click", function() {
    console.log(document.getElementById("sel").value)
    var x = (Math.floor(Math.random() * 6));
    document.getElementById("modtext").style.opacity = "1";
    document.getElementById("modtext").innerHTML = mas[document.getElementById("sel").value];
    if (mas[document.getElementById("sel").value].length == 56) {
        document.getElementById("modtext").style.color = "red";
    }
    else {
        document.getElementById("modtext").style.color = "green";
    }
});
function closeWindow() {
    document.getElementById("fon").style.display = "none";
    document.getElementById("buymodal").style.display = "none";
}
document.getElementById("close").addEventListener("click", function() {
    closeWindow()
});
document.getElementById("oform").addEventListener("click", function() {
    document.getElementById('zakaz').style.opacity = "1";
    setTimeout(closeWindow, 1000);
})