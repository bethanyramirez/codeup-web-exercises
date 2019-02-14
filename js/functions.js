"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.

 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
**/

// function sayHello(name) {
//      return "Hello, " + name;
// }

/** rewriting this as a function expression....

var sayHello = function(name) {
     return "Hello, " + name;
}

 **/


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
//
// var helloMessage = sayHello("Bethany");
//
// console.log(helloMessage);



/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


// var myName = "Bethany";
//
// console.log(sayHello(myName));




// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);





/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(number){
//      return number === 2;
// }
//
//
// console.log(isTwo(random));
// // isTwo(random);



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
//
// function calculateTip(tipPerc,totalBill) {
//      return (tipPerc * totalBill).toFixed(2);
// }
//
// console.log(calculateTip(0.20, 20));
// console.log(calculateTip(0.25, 25.50));
// console.log(calculateTip(0.15, 33.42));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var userBill = prompt("How much was your bill?");
//
// var userTip = prompt("What percentage would you like to tip?");
//
// Number(userTip);
//
// alert(calculateTip(userTip,userBill));
//
//

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


function applyDisc(priceBeforeDisc,discPerc) {

     return  priceBeforeDisc - (priceBeforeDisc * discPerc);
}

console.log(applyDisc(100,0.20));


/** BONUSES **/

function isOdd(number) {

     return number % 2 === 1;

}

console.log( "number is odd:" + isOdd(7));

/** BONUSES **/

var evenNumber = 3;

function isEven(number) {

     return (number % 2) === 0;

     var evenNumber = isEven();
}

console.log("number is even:" + isEven(7));

/** BONUSES
 *
 * Make a function named identity(input) that returns the input exactly as provided.
 * **/
//
// function identity(input) {
//      return input;
//
//      var inputProvided = identity();
// }
//
// identity(exampleInput);
//
// console.log(identiy(inputProvided));

/** Make a function named isFive(input)
 *
 *
 * **/

function isFive(num) {
     return num === 5;
}

/**
 *
 * Make a function named addFive(input) that adds five to some input.
 *
 * **/

function addFive(num) {
     return num + 5;
}

/**
 *
 * Make a function named isMultipleOfFive(input)
 *
 * **/

function isMultipleOfFive(num) {

     return num % 5 === 0;

}

isMultipleOfFive(100);


/**
 *
 * Make a function named isThree(input)
 *
 **/

function isThree(num) {

     return num === 3;
}

/**
 *
 * Make a function named isMultipleOfThree(input)
 *
 **/

function isMultipleOfThree(num) {

     return num % 3 === 0;
}


/**
 *
 * Make a function named isMultipleOfThreeAndFive(input)
 *
 **/

function isMultipleOfThreeAndFive(number) {

     return (number % 3 === 0) && (number % 5 === 0);

}

/**
 *
 * Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
 *
 **/

function isMultipleOf(target, n) {

     return target % n === 0;
}

console.log(isMultipleOf(20,7));

/**
 *
 * Make a function named isTrue(boolean)
 *
 **/

function isTrue(boolean) {

     return boolean || true;
}

console.log(isTrue(false));
/**
 *
 * Make a function named isFalse(boolean)
 *
 **/

function isFalse(boolean) {

     return boolean && false;
}

console.log(isFalse(true));

/**
 *
 * Make a function named isTruthy(input), remember that values other than true will behave like true
 *
 **/

function isTruthy(input) {

     return input == true;
}

console.log(isTruthy("hi"));

/**
 *
 * Make a function named isFalsy(input), remember that values other than false behave like false
 *
 **/



/**
 *
 * Make a function named isVowel(letter)
 *
 **/


/**
 *
 * Make a function named isFalsy(input), remember that values other than false behave like false
 *
 **/


/**
 *
 * Make a function named isFalsy(input), remember that values other than false behave like false
 *
 **/


/**
 *
 * Make a function named isFalsy(input), remember that values other than false behave like false
 *
 **/


/**
 *
 * Make a function named isFalsy(input), remember that values other than false behave like false
 *
 **/

