/** ================================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.If the input contains white space or numbers, return the string "INVALID INPUT".**/



// function makeJustinMessage(itsJustinInput) {
//
//     if (itsJustinInput === "justin") {
//         alert("Hey Justin!");
//     } else {
//         alert("Hey stranger");
//     }
//
//     return itsJustinInput;
// }
//
// console.log(makeJustinMessage("justin"));

/**Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.**/

function actionOnColor(streetLightColor) {

    if (streetLightColor === "red") {

        alert("Stoplight color is " + streetLightColor + ". STOP!");

    } else if (streetLightColor === "yellow") {

        alert("Stoplight color is " + streetLightColor + ". Slow down..");

    } else if (streetLightColor === "green") {

        alert("Stoplight color is " + streetLightColor + ". GO!");

    } else {
        alert("That light probably isn't working...");
    }

   return streetLightColor;
}



console.log(actionOnColor("red"));
console.log(actionOnColor("yellow"));
console.log(actionOnColor("green"));
console.log(actionOnColor("blue"));


/**Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."**/


// function inputAsOutput(userInput) {
//
//     if (userInput === "") {
//         return alert("no input provided :(");
//     } else {
//         return alert("You entered: '" + userInput + "'");
//     }
// }
//
// inputAsOutput("");  // results to nothing added
// inputAsOutput("hello!"); // results to "You entered: hello!"
//
// /**Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.**/
//
// var numberEntered = prompt("Enter a number between 1 and 10.");
//
//
//
// function checkDigitLength(checkNumber) {
//
//     if (numberEntered.length > 1) {  // figure out a way to check for the input being a number AND is less than one.  User will return a string and trying to parse that into a number.
//
//         alert("That's too many digits! Calm down.");
//     }
//
//     if (isNaN(numberEntered)) {
//
//         alert("So, remember NUMBERS? Because it seems like you don't.");
//     }
//
//     return checkNumber;
// }
//
// console.log(checkDigitLength(numberEntered)); // should return "too many digits"




/**Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')**/


var favDay;

favDay = prompt("What is your favorite day of the week?").toLowerCase();


function askFavDay(favWeekday) {


    switch (favDay) {

        case "sunday":
            alert("Sundays are for brunch!");
        break;

        case "monday":
            alert("Mondays are cool I guess");
        break;

        case "tuesday":
            alert("Tuesdays are for tacos");
        break;

        case "wednesday":
            alert("Wednesday is halfway to Friday!");
        break;

        case "thursday":
            alert("Thirsty Thursdays! *slams glass on ground*");
        break;

        case "friday":
            alert("Friday! So....Rosellas?");
        break;

        case "saturday":
            alert("Saturdays are the BEST!");
        break;

        default:
            alert("I've never heard of that day before... :| ");
        break;

    }

    return favWeekday;
}


askFavDay(favDay);




/**Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator**/

// var userInput;
//
// function myFunction(input) {
//
//     userInput = prompt("Enter whatever")
//
//     if ((typeof (+userInput)) === typeof 3) {
//
//         alert("Hey!  You entered a number.");
//
//     } else if (isNaN(Number(userInput))) {
//
//         alert("You entered text...");
//     }
//
//     return input;
// }
//
//
// myFunction(userInput);




/** Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months**/


var userSeason;
var userMonth;

function askSeasonAndMonth(seasonAndMonth) {

    userSeason = prompt("What is  your favorite season?");

    userSeason = userSeason.toLowerCase();

    if (userSeason === "spring") {

        userMonth = prompt("Spring is nice! Pick a month out of these: March, April, or May");

        userMonth = userMonth.toLowerCase();

        if (userMonth === "march") {
            alert("March is when Spring starts");
        } else if (userMonth === "april") {
            alert("April is cool");
        } else if (userMonth === "may") {
            alert("May is graduation");
        } else {
            alert("Never heard of that month");
        }

    } else if (userSeason === "summer") {

        userMonth = prompt("Summer is nice! Pick a month out of these: June, July, or August");

        userMonth = userMonth.toLowerCase();

        if (userMonth === "june") {
            alert("June is cool");
        } else if (userMonth === "july") {
            alert("July is cool");
        } else if (userMonth === "august") {
            alert("August is cool");
        } else {
            alert("Never heard of that month");
        }

    } else if (userSeason === "winter") {

        userMonth = prompt("Winter!?! Me too! Pick a month out of these: December, January, or February");

        userMonth = userMonth.toLowerCase();

        if (userMonth === "december") {
            alert("December is cool");
        } else if (userMonth === "january") {
            alert("January is cool");
        } else if (userMonth === "february") {
            alert("February is cool");
        } else {
            alert("Never heard of that month");
        }

    } else if (userSeason === "fall") {

        userMonth = prompt("Fall!??!!?!? Me too! Pick a month out of these: September, October, or November");

        userMonth = userMonth.toLowerCase();

        if (userMonth === "september") {
            alert("September is cool");
        } else if (userMonth === "october") {
            alert("October is cool");
        } else if (userMonth === "november") {
            alert("November is cool");
        } else {
            alert("Never heard of that month");
        }

    } else {

        alert("I've never heard of that season :(");
    }

    return seasonAndMonth;
}


askSeasonAndMonth(userSeason);






/**GOLD STAR BONUS
//
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units**/


// Variables that hold the user input from prompts //

var convertFrom;
var valueToConvert;
var convertTo;


// Aliases //

var convertFromInches;
var convertFromFeet;
var valueToConvertNum;
var convertFromMiles;
var convertFromLightYears;



// Questions to User //


convertFrom = prompt("Enter a unit of measurement to convert from");

valueToConvert = prompt("Enter a value");

valueToConvertNum = +valueToConvert;

convertTo = prompt("Enter a unit of measurement to convert to");



// Switch case to determine which alias to assign to the var convertFrom//


switch(convertFrom) {

    case "inches":
        convertFromInches = convertFrom;
        break;

    case "feet":
        convertFromFeet = convertFrom;
        break;

    case "miles":
        convertFromMiles = convertFrom;
        break;

    case "lightyears":
        convertFromLightYears = convertFrom;
        break;

}



callConversionFunction(convertFrom);



//------------------ Functions------------------- //

function inchesToFeet(fromInches) {

    return fromInches / 12;
}




function feetToMiles(fromFeet) {

    return fromFeet / 5280;
}


function milesToLightYears(fromMiles) {


}



function callConversionFunction (convertFrom) {

    if (convertFrom === convertFromInches) {

        return inchesToFeet(valueToConvertNum);

    } else if (convertFrom === convertFromFeet) {

        return feetToMiles(valueToConvertNum);
    }

}


//
// function conversionSolutionStmt(convertFrom) {
//
//     return alert(valueToConvert + " " + convertFrom + " is " + inchesToFeet(valueToConvert) + " feet");
// }