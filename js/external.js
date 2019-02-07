"use strict";

console.log("Hello from external javascript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");

alert("Awesome! " + favoriteColor + " is my favorite color too!");

var daysOfMermaid = prompt ("How many days are you renting the Little Mermaid?");

var daysOfBro = prompt("How many days are you renting Brother Bear?");

var daysOfHercules = prompt("How many days are you renting Hercules?");

var pricePerMovie = 3;

var totalPrice = (Number(daysOfMermaid) + Number(daysOfBro) + Number(daysOfHercules)) * pricePerMovie;

alert("Your total is $" + totalPrice.toFixed(2));


/* Next Bullet */

var googleRate = prompt("What is your rate per hour at Google?");

googleRate = Number(googleRate);

var googleHours = prompt("How many hours did you work at Google?");

googleHours = Number(googleHours);

/* Amazon */

var amazonRate = prompt("What is your rate per hour at Amazon?");

amazonRate = Number(amazonRate);

var amazonHours = prompt("How many hours did you work at Amazon?");

amazonHours = Number(amazonHours);

/* Facebook */

var facebookRate = prompt("What is your rate per hour at Facebook?");

facebookRate = Number(facebookRate);

var facebookHours = prompt("How many hours did you work at Facebook?");

facebookHours = Number(facebookHours);

var totalGooglePay = googleRate * googleHours;

var totalAmazonPay = amazonRate * amazonHours;

var totalFacebookPay = facebookRate * facebookHours;

var totalPaycheck = totalGooglePay + totalAmazonPay + totalFacebookPay;

alert("Your total paycheck is $" + totalPaycheck);


/* 3rd bullet point */

var classIsFull = confirm("Confirm is class is full");

var ScheduleConflict = confirm("Confirm if there is a schedule conflict");

if (classIsFull && !ScheduleConflict) {

    console.log("You can enroll in class");

}


/* 4th bullet point */
var username = "codeup";

var password = "notastrongpassword";

var passwordMinChar = true;

var passwordContainsUsername = password.includes(username);

var userNameLess20Char = username.length < 20;

var trimmedUsername = username.trim();

var trimmedPassword = password.trim();
