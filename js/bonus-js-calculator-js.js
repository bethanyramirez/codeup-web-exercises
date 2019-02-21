(function(){
    "use strict";

    var inputOne = document.getElementById("left-operand");
    var middleInput = document.getElementById("operator");
    var rightInput = document.getElementById("right-operand");
    var calcArray = document.getElementsByClassName("numbers");
    var operators = document.getElementsByClassName("operand");

    var buildEquation = "";
// <input id="1" value="1" type="button">



console.log(calcArray);


//
// to loop through array and find the number the user clicked...and to add it to the left operand

    for (var i = 0; i < calcArray.length; i++) {

        calcArray[i].addEventListener("click", getNumValue, false);
    }

    function getNumValue(event) {

        inputOne.setAttribute("value", (this.getAttribute("value")));

    }


    /** second loop to push it to the middle one **/

    for(var b = 0; b < operators.length; b++) {

        operators[b].addEventListener("click", getOperatorValue, false);
    }

    function getOperatorValue (event) {
        middleInput.setAttribute("value", (this.getAttribute("value")));
    }


    /** third loop to push it to the right operand **/

    for (var c = 0; c < calcArray.length; c++) {

        if (inputOne.hasAttribute("value")) {
            calcArray[c].addEventListener("click", getSecondNumValue, false);
        }
    }


    function getSecondNumValue(event) {

        rightInput.setAttribute("value", (this.getAttribute("value")));
    }
































})();