var charCounter = 0;
var textIndex = 0;
// var text = [
//     " Software Developer", 
//     " Java Developer", 
//     " Web Developer", 
//     " Full Stack Developer"
// ];
var text = [
    " Software Developer", 
];

function type() {
    if (charCounter < text[textIndex].length) {
        document.getElementById("typing-animation").innerHTML += text[textIndex].charAt(charCounter);
        charCounter++;
        setTimeout(type, getRandomArbitrary(10,100));
    } else {
        clearTimeout(type);
        setTimeout(function() {
            charCounter = document.getElementById("typing-animation").innerHTML.length;
            untype();
        }, 7000);
    }
}

function untype() {
    if (charCounter > 1) {
        document.getElementById("typing-animation").innerHTML = (document.getElementById("typing-animation").innerHTML).substring(0, document.getElementById("typing-animation").innerHTML.length-1);
        charCounter--;
        setTimeout(untype, getRandomArbitrary(10,100));
    } else {
        clearTimeout(untype);
        charCounter = 0;
        textIndex++;
        if (textIndex >= text.length) textIndex = 0;
        type();
    }
}

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

setTimeout(function() {type();}, 1000);