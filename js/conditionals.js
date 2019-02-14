"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var response = confirm("Would you like to enter a number?");
var userNumber;
var userNumPlus100;

if (response) {
    userNumber = prompt("Enter a number.");
}

if (isNaN(userNumber)) {                // fix this one

    alert("That's not a number!!");
}

if (userNumber % 2 === 0) {

    alert("That number is even");

} else if (userNumber % 2 === 1) {

    alert("That number is odd");

}


/** user number plus 100 **/



userNumPlus100 = +userNumber + 100;

alert(userNumber + " + 100 = " + userNumPlus100);




/** user number is positive or negative **/

if (userNumber >= 0) {
    alert(userNumber + " is positive");

} else if (userNumber < 0) {
    alert(userNumber + " is negative");

}

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];



function analyzeColor(colorNamePlaceholder) {


    if (colorNamePlaceholder === "red") {

        console.log("Red is the color of roses");

    } else if (colorNamePlaceholder === "orange") {

        console.log("Oranges are the color of oranges");

    } else if (colorNamePlaceholder === "yellow") {

        console.log("Yellow is the color of the sun");

    } else if (colorNamePlaceholder === "green") {

        console.log("Green is the color of grass");

    } else if (colorNamePlaceholder === "blue") {

        console.log("Blue is the color of the sky");

    } else if (colorNamePlaceholder === "violet") {

        console.log("Violet is the color of violets");

    } else {
        console.log("I don't know anything with the color indigo");
    }

return colorNamePlaceholder;

}




/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


// function analyzeColor2(colorNamePlaceholder) {
//
//
//     case "red":
//         console.log("Red is the color of roses");
//         break;
//
//     case "orange":
//         console.log("Oranges are the color of oranges");
//         break;
//
//     case "yellow":
//         console.log("Yellow is the color of the sun");
//         break;
//
//     case "green":
//         console.log("Green is the color of grass");
//         break;
//
//     case "blue":
//         console.log("Blue is the color of the sky");
//         break;
//
//     case "violet":
//         console.log("Violet is the color of violets");
//         break;
//     default:
//         console.log("I don't know anything with the color indigo");
//         break;
//     }
//
//     return colorNamePlaceholder;
//
// }
//
//
//
// console.log(analyzeColor2(colorNamePlaceholder));







/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


var userColor = prompt("Please enter a color of the rainbow");

alert("Here is the color you entered: " + analyzeColor(userColor));





/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var luckyNumDiscount;
var discountedPrice;

function calculateTotal (luckyNumber, totalAmount) {

    if (luckyNumber === 0) {
        luckyNumDiscount = 0;

    } else if (luckyNumber === 1) {
        luckyNumDiscount = .10;

    } else if (luckyNumber === 2) {
        luckyNumDiscount = .25;

    } else if (luckyNumber === 3) {
        luckyNumDiscount = .35;

    } else if (luckyNumber === 4) {
        luckyNumDiscount = .50;

    } else if (luckyNumber === 5) {
        luckyNumDiscount = 1.00;
    }

    return discountedPrice = totalAmount - (totalAmount * luckyNumDiscount);
}

console.log("The price you pay is: " + calculateTotal(0,100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("What is your total bill?");

alert("Your lucky number is " + luckyNumber + ".  Your original price was $" + totalBill + ".  Your discounted price is $" + calculateTotal(luckyNumber, totalBill));