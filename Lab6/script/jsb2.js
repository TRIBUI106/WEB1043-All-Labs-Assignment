const nutAn = document.querySelectorAll("button");
const pCard = document.querySelector("p")
let positionList = [];

let count = 0;
nutAn.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        el.classList.add("afterClicked");
        // el.setAttribute("disable", "true");
        el.disabled = true;
        count++;
        // console.log("count = ", count);
        if ( count % 2 == 0 ) {
            let posO = "o";
            el.classList.add("blueClicked");
            el.querySelector("h2").innerHTML = "O";
            posO = posO + index;
            positionList.push(posO);
            console.log(posO)
        } else {
            let posX = "x";
            el.classList.add("redClicked");
            el.querySelector("h2").innerHTML = "X";
            posX = posX + index;
            positionList.push(posX);
            console.log(posX)
        }
        if ( count == 9 ) {
            pCard.style.display = "block";
            console.log(positionList);
        }

        checkWinOfX();

    });
});


function reload() {
    location.reload();
}

function checkWinOfX() {
    
        // Kiểm tra nếu X thắng
        if (positionList.indexOf("x0") != -1 && positionList.indexOf("x1") != -1 && positionList.indexOf("x2") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }
        if (positionList.indexOf("x3") != -1 && positionList.indexOf("x4") != -1 && positionList.indexOf("x5") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }
        if (positionList.indexOf("x6") != -1 && positionList.indexOf("x7") != -1 && positionList.indexOf("x8") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }
        if (positionList.indexOf("x0") != -1 && positionList.indexOf("x3") != -1 && positionList.indexOf("x6") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }

        if (positionList.indexOf("x1") != -1 && positionList.indexOf("x4") != -1 && positionList.indexOf("x7") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }
        
        if (positionList.indexOf("x2") != -1 && positionList.indexOf("x5") != -1 && positionList.indexOf("x8") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }
        
        if (positionList.indexOf("x0") != -1 && positionList.indexOf("x4") != -1 && positionList.indexOf("x8") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }
        
        if (positionList.indexOf("x2") != -1 && positionList.indexOf("x4") != -1 && positionList.indexOf("x6") != -1) {
            console.log("X Thắng");
            window.alert("X Thắng");
            pCard.style.display = "block";
            disableAllButton();
        }
}

function checkWinOfO() {
    
    // Kiểm tra nếu O Thắng
    if (positionList.indexOf("o0") != -1 && positionList.indexOf("o1") != -1 && positionList.indexOf("o2") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton();
    }
    if (positionList.indexOf("o3") != -1 && positionList.indexOf("o4") != -1 && positionList.indexOf("o5") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton();
    }
    if (positionList.indexOf("o6") != -1 && positionList.indexOf("o7") != -1 && positionList.indexOf("o8") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton();
    }
    if (positionList.indexOf("o0") != -1 && positionList.indexOf("o3") != -1 && positionList.indexOf("o6") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton(); 
    }

    if (positionList.indexOf("o1") != -1 && positionList.indexOf("o4") != -1 && positionList.indexOf("o7") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton();
    }
    
    if (positionList.indexOf("o2") != -1 && positionList.indexOf("o5") != -1 && positionList.indexOf("o8") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton();
    }
    
    if (positionList.indexOf("o0") != -1 && positionList.indexOf("o4") != -1 && positionList.indexOf("o8") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton();
    }
    
    if (positionList.indexOf("o2") != -1 && positionList.indexOf("o4") != -1 && positionList.indexOf("o6") != -1) {
        console.log("O Thắng");
        window.alert("O Thắng");
        pCard.style.display = "block";
        disableAllButton();
    }
}

function disableAllButton() {
    nutAn.forEach(button => {
        button.disabled = true;
        button.classList.add("disabled-button");
    });
}
