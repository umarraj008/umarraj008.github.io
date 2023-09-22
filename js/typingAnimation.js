var i = 0;
var text = "a Software Developer";
function type() {
    if (i < text.length) {
        document.getElementById("typing-animation").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    } else {
        clearTimeout(type);
        setTimeout(function() {
            i = document.getElementById("typing-animation").innerHTML.length;
            untype();
        }, 10000);
    }
}

function untype() {
    if (i > 0) {
        document.getElementById("typing-animation").innerHTML = (document.getElementById("typing-animation").innerHTML).substring(0, document.getElementById("typing-animation").innerHTML.length-1);
        i--;
        setTimeout(untype, 100);
    } else {
        clearTimeout(untype);
        i = 0;
        type();
    }
}

setTimeout(function() {type();}, 1000);