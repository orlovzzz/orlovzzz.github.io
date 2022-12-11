var blocks = document.querySelectorAll(".manblock")
blocks.forEach(function(block) {
    block.addEventListener("click", e => {
        if (block.style.height == '490px') {
            if (e.target.tagName == "BUTTON") {
                e.target.addEventListener("click", function() {
                    document.getElementById("fon").style.display = "block";
                    document.getElementById("buymodal").style.display = "block";
                });
            } else {
                block.style.height = "300px";
                block.querySelector("#buy").style.opacity = "0";
                block.querySelector("#opis").style.opacity = "0";
            }   
        } else {
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i] == block) {
                    blocks[i].style.height = "490px";
                    blocks[i].querySelector("#buy").style.opacity = "1";
                    blocks[i].querySelector("#opis").style.opacity = "1";
                } else {
                    blocks[i].style.height = "300px";
                    blocks[i].querySelector("#buy").style.opacity = "0";
                    blocks[i].querySelector("#opis").style.opacity = "0";
                }
            }
        }
    })
})

