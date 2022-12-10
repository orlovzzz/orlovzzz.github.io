var blocks = document.querySelectorAll(".manblock")
blocks.forEach(function(block) {
    block.addEventListener("click", function() {
        if (block.style.height == '350px') {
            block.style.height = "300px";
            block.querySelector("#buy").style.opacity = "0";
        } else {
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i] == block) {
                    blocks[i].style.height = "350px";
                    blocks[i].querySelector("#buy").style.opacity = "1";
                } else {
                    blocks[i].style.height = "300px";
                    blocks[i].querySelector("#buy").style.opacity = "0";
                }
            }
        }
    })
})

