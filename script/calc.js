var gold = document.getElementById("aub")
var silver = document.getElementById("agb")

gold.addEventListener("click", function() {
    gold.style.background = "gold";
    silver.style.background = "white";
    document.getElementById("aupchoice").style.display = "grid";
    document.getElementById("agpchoice").style.display = "none";
})

silver.addEventListener("click", function() {
    gold.style.background = "white";
    silver.style.background = "silver";
    document.getElementById("aupchoice").style.display = "none";
    document.getElementById("agpchoice").style.display = "grid";
})

var goldp = document.querySelectorAll(".aub")
var silverp = document.querySelectorAll(".agb")

goldp.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
        elem.style.background = "gold";
        for (var i = 0; i < goldp.length; i++) {
            if (goldp[i] != elem) {
                goldp[i].style.background = "white"
            }
        }
    })
})

silverp.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
        elem.style.background = "silver";
        for (var i = 0; i < silverp.length; i++) {
            if (silverp[i] != elem) {
                silverp[i].style.background = "white"
            }
        }
    })
})

function checkColorGold(mas) {
    for (var i = 0 ; i < mas.length; i++) {
        if (mas[i].style.background == "gold") {
            return mas[i].innerHTML;
        }
    }
    return false;
}

function checkColorSilver(mas) {
    for (var i = 0 ; i < mas.length; i++) {
        if (mas[i].style.background == "silver") {
            return mas[i].innerHTML;
        }
    }
    return false;
}

document.getElementById("calc").addEventListener("click", function() {
    var x = document.getElementById("sum");
    var w = document.getElementById("weightC");
    if (gold.style.background == "gold") {
        var s = checkColorGold(goldp);
        if (s != false) {
            s = s.slice(0, -1);
            if (w.value.length != 0) {
                switch(s) {
                    case("375"):
                        x.innerHTML =  w.value * 1155;
                        x.innerHTML += "&#8381";
                        break;
                    case("500"):
                        x.innerHTML =  w.value * 1540;
                        x.innerHTML += "&#8381";
                        break;
                    case("583"):
                        x.innerHTML =  w.value * 1800;
                        x.innerHTML += "&#8381";
                        break;
                    case("583"):
                        x.innerHTML =  w.value * 1800;
                        x.innerHTML += "&#8381";
                        break;
                    case("750"):
                        x.innerHTML =  w.value * 2310;
                        x.innerHTML += "&#8381";
                        break;
                    case("850"):
                        x.innerHTML =  w.value * 2615;
                        x.innerHTML += "&#8381";
                        break;
                    case("900"):
                        x.innerHTML =  w.value * 2770;
                        x.innerHTML += "&#8381";
                        break;
                    case("958"):
                        x.innerHTML =  w.value * 2950;
                        x.innerHTML += "&#8381";
                        break;
                 }   
            }
        }
    } else if(silver.style.background == "silver") {
        var s1 = checkColorSilver(silverp);
        if (s1 != false) {
            x.innerHTML =  w.value * 30;
            x.innerHTML += "&#8381";
        }
    }
})