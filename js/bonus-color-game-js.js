// alert("connected");

var colors = [ generateRandomColors(3);
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");

for(var i= 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked squares
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color) {
    //loop through all squares
    //change each color to match given color
    for(var i= 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

colorDisplay.textContent = pickedColor;

