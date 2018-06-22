var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var newColorsButton = document.getElementById("new-colors");
var easyButton = document.getElementById("easy-btn");
var hardButton = document.getElementById("hard-btn");
var header = document.querySelector("#header");

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

//Initial game loop
for(var i = 0; i <squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var colorClicked = this.style.backgroundColor;
        if(colorClicked == pickedColor) {
            messageDisplay.textContent = "Correct."
            changeColor(colorClicked);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again.";
        }
    });
}

// Reset the game
newColorsButton.addEventListener("click", function() {
    messageDisplay.textContent = "";
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    header.style.backgroundColor = "steelblue";

    for(i = 0; i < squares.length; i++) 
        squares[i].style.backgroundColor = colors[i];

});

//Changes the game mode to easy
easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(i = 0; i < squares.length; i++) {
        colors[i] ? squares[i].style.backgroundColor = colors[i] : squares[i].style.display = "none";
    }
});

//Changes the game mode to hard.
hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
});

//Changes the color of the square div
function changeColor(color) {
    header.style.backgroundColor = color;
    for(var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
}

//Returns a random number between 0 and 6
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Creates array of random colors
function generateRandomColors(num) {
    var randomColors = [];
    for(i = 0; i < num; i++) 
        randomColors.push(getRandomColor());
    return randomColors;
}

//creates a single color in RGB form.
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
