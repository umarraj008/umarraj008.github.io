var keys = [];
var lastClicked;

addEventListener("keydown", (e) => {
    var code = [
        "ArrowUp", 
        "ArrowUp", 
        "ArrowDown", 
        "ArrowDown", 
        "ArrowLeft", 
        "ArrowRight", 
        "ArrowLeft", 
        "ArrowRight",
        "KeyB",
        "KeyA"
    ]
    
    keys.push(e.code);
    console.log("KEY PRESSED: " + e.code); 

    var mainImg = document.getElementById("mainImg");
    var nudgeAmmount = "30";

    switch (e.code) {
        case "ArrowUp":
            mainImg.style.transform = "translateY(" + -nudgeAmmount + "px)";
            setTimeout(function() { mainImg.style.transform = "translateY(0px)"; }, 100);
            break;

        case "ArrowDown":
            mainImg.style.transform = "translateY(" + nudgeAmmount + "px)";
            setTimeout(function() { mainImg.style.transform = "translateY(0px)"; }, 100);
            break;

        case "ArrowLeft":
            mainImg.style.transform = "translateX(" + -nudgeAmmount + "px)";
            setTimeout(function() { mainImg.style.transform = "translateX(0px)"; }, 100);
            break;

        case "ArrowRight":
            mainImg.style.transform = "translateX(" + nudgeAmmount + "px)";
            setTimeout(function() { mainImg.style.transform = "translateX(0px)"; }, 100);
            break;

        case "KeyB":
            mainImg.style.transform = "scale(1.1)";
            setTimeout(function() { mainImg.style.transform = "scale(1)"; }, 100);
            break;
        
        case "KeyA":
            mainImg.style.transform = "scale(1.2)";
            setTimeout(function() { mainImg.style.transform = "scale(1)"; }, 100);
            break;
    }

    for (i = 0; i < keys.length || i > code.length; i++) {
        if (keys[i] == code[i]) {
            if (keys.length == code.length) {
                console.log("CODE ACTIVATED");
                gamesLauncher();
                keys = [];
                document.getElementsByTagName("body")[0].style.overflowY = "auto";
                break;
            }
        } else {
            console.log("CODE RESET");
            keys = [];
            document.getElementsByTagName("body")[0].style.overflowY = "auto";
            break;
        }
    }

    if (keys.length >= 2 && keys[0] == "ArrowUp" && keys[1] == "ArrowUp" && keys[2] == "ArrowDown") {
        scrollTo(0, 0);
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    }
});

const gamesLauncher = function() {
    if (document.getElementsByTagName("html")[0].getAttribute("data-theme") == "game") {
        let sections = document.getElementById("contentWrapper").children;
        console.log(sections);

        for (i = 0; i < sections.length; i++) {
            sections[i].style.display = "block";
        }

        mainImg.style.animation = "reverse-spin 0.4s";
        changeTheme(1);
        document.getElementById("gameSection").style.display = "none";
    } else {
        var sections = document.getElementById("contentWrapper").children;
        for (i = sections.length-2; i > 0; i--) {
            sections[i].style.display = "none"
        }
        
        mainImg.style.animation = "spin 0.4s";
        changeTheme(2);
        document.getElementById("gameSection").style.display = "block";
    }
    
}