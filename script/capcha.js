var capch = document.getElementById("capcha")
var dark = document.getElementById("dark");
var login = document.getElementById("inlogin");
var passin = document.getElementById("inpass");
var nameup = document.getElementById("nametext");
var sur = document.getElementById("sur");
var log = document.getElementById("logup");
var pass = document.getElementById("passup");
var reppass = document.getElementById("reppass");
var nameE = document.getElementById("nameup");
var surE = document.getElementById("surup");
var logE = document.getElementById("errorlogup");
var passE = document.getElementById("errorpassup");
var repE = document.getElementById("errorreppass");

function createCapcha() {
    var s = "";
    var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (i = 0; i < 6; i++) {
        s += alph[alph.length - Math.floor(1 + Math.random() * 52)];
    }
    return s;
};

document.getElementById("capchaText").innerHTML = createCapcha();
document.getElementById("button").addEventListener("click", function() {
    var capcha = document.getElementById("capchaText").innerHTML;
    var enter = document.getElementById("text").value;
    if (enter != capcha) {
        var x = document.getElementById("elem");
        x.innerHTML = "Неверная капча! Попробуйте ещё раз.";
        x.style.color = "red";
        x.style.opacity = "1";
    } else {
        var x = document.getElementById("elem");
        x.innerHTML = "Капча успешно пройдена. Окно автоматически закроется через 1 секунды.";
        login.value = "";
        passin.value = "";
        nameup.value = "";
        sur.value = "";
        log.value = "";
        pass.value = "";
        reppass.value = "";
        x.style.color = "green";
        x.style.opacity = "1";
        setTimeout(clearCapcha, 1000);
    }
});

function clearCapcha() {
    document.getElementById("capchaText").innerHTML = createCapcha();
    document.getElementById("elem").style.opacity = 0;
    document.getElementById("text").value = "";
    capch.style.display = "none";
    dark.style.display = "none";

};
document.getElementById("img").addEventListener("click", clearCapcha);

document.getElementById("close").addEventListener("click", function() {
    capch.style.display = "none";
    dark.style.display = "none";
});

function checkPoint(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ".") {
            return true;
        }
    }
    return false;
}

function checkSobaka(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "@") {
            return true;
        }
    }
    return false;
}

var signin = document.getElementById("sign-in-enter");

signin.addEventListener("click", function() {
    if (login.value.length == 0) {
        document.getElementById("errorlogin").innerHTML = "Это поле должно быть заполнено";
    } else {
        document.getElementById("errorlogin").innerHTML = "";
    }

    if (passin.value.length == 0) {
        document.getElementById("errorpassin").innerHTML = "Это поле должно быть заполнено";
    } else {
        document.getElementById("errorpassin").innerHTML = "";
    }
    if ((checkSobaka(login.value) == false || checkPoint(login.value) == false) && login.value.length != 0) {
        document.getElementById("errorlogin").innerHTML = "Неверный адрес";
    } else if (passin.value.length != 0 && login.value.length != 0) {
        document.getElementById("errorlogin").innerHTML = "";
        document.getElementById("errorpassin").innerHTML = "";
        capch.style.display = "block";
        dark.style.display = "block";
    } else if (login.value.length != 0) {
        document.getElementById("errorlogin").innerHTML = ""
    }
});

document.getElementById("sign-up-b").addEventListener("click", function() {
    if (nameup.value.length == 0) {
        nameE.innerHTML = "Это поле должно быть заполнено";
    } else {
        nameE.innerHTML = "";
    }

    if (sur.value.length == 0) {
        surE.innerHTML = "Это поле должно быть заполнено";
    } else {
        surE.innerHTML = "";
    }

    if (log.value.length == 0) {
        logE.innerHTML = "Это поле должно быть заполнено";
    } else {
        logE.innerHTML = "";
    }

    if (pass.value.length == 0) {
        passE.innerHTML = "Это поле должно быть заполнено";
    } else {
        passE.innerHTML = "";
    }

    if (reppass.value.length == 0) {
        repE.innerHTML = "Это поле должно быть заполнено";
    } else {
        repE.innerHTML = "";
    }

    if ((checkSobaka(log.value) == false || checkPoint(log.value) == false) && log.value.length != 0) {
        logE.innerHTML = "Неверный адрес";
    } else {
        logE.innerHTML = "";
    }

    if (pass.value != reppass.value) {
        repE.innerHTML = "Неверный пароль";
    }

    if (nameE.innerHTML.length == 0 && surE.innerHTML.length == 0 && logE.innerHTML.length == 0 && passE.innerHTML.length == 0 && repE.innerHTML.length == 0) {
        capch.style.display = "block";
        dark.style.display = "block";
    }
});