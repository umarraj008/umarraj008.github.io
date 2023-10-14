const changeThemeClick = function() {
    var currentTheme = document.getElementsByTagName("html")[0].getAttribute("data-theme");

    if (currentTheme == "light") {
        changeTheme(1);
    } else if (currentTheme == "game") {
        let sections = document.getElementById("contentWrapper").children;
        console.log(sections);

        for (i = 0; i < sections.length; i++) {
            sections[i].style.display = "block";
        }
        document.getElementById("gameSection").style.display = "none";
        changeTheme(1);
    } else {
        changeTheme(0);
    }
    
}

const changeTheme = function(type) {
    switch (type) {
        case 0:
            document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
            // document.getElementById("dot").style.marginLeft = "0px";
            // document.getElementById("dot").style.removeProperty("margin-right");
            document.getElementById("dot").style.transform = "translateX(-15px)";
            document.getElementById("dotImg").style.opacity = 0;
            window.setTimeout(function() {
                document.getElementById("dotImg").src="resources/light.png";
                document.getElementById("dotImg").style.opacity = 1;
            },200);
            localStorage.setItem("theme", "light");
            break;
            
        case 1:
            document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
            // document.getElementById("dot").style.removeProperty("margin-left");
            // document.getElementById("dot").style.marginRight = "0px";
            document.getElementById("dot").style.transform = "translateX(15px)";
            document.getElementById("dotImg").style.opacity = 0;
            window.setTimeout(function() {
                document.getElementById("dotImg").src="resources/dark.png";
                document.getElementById("dotImg").style.opacity = 1;
            },200);
            localStorage.setItem("theme", "dark");
            break;

        case 2:
            document.getElementsByTagName("html")[0].setAttribute("data-theme", "game");
            document.getElementById("dot").style.transform = "translateX(0px)";
            document.getElementById("dotImg").style.opacity = 0;
            window.setTimeout(function() {
                document.getElementById("dotImg").src="resources/games.png";
                document.getElementById("dotImg").style.opacity = 1;
            },200);
            break;
    }
}

const loadTheme = function() {
    const theme = localStorage.getItem("theme");
    document.getElementById("dot").style.transition = "0.2s ease-in-out";
    document.getElementById("b1").style.transition = "0.2s ease-in-out";
    document.getElementById("b2").style.transition = "0.2s ease-in-out";
    document.getElementById("b3").style.transition = "0.2s ease-in-out";
    document.getElementById("b4").style.transition = "0.2s ease-in-out";

    if (theme == "light") {
        changeTheme(0);
    } else if (theme == "dark") {
        changeTheme(1);
    } else {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            changeTheme(1);
        } else {
            changeTheme(0);
        }
    }
}