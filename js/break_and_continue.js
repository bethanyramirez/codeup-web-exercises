
var userNum = prompt("Type an odd number between 1 and 50 ");


if((userNum % 2 === 1) && (userNum <= 50)) {

    console.log("Number to skip: " + userNum);

}

for(var count = 1; count < 50; count++) {    // Main counter //



    if (count % 2 === 0) {     // filtering out even numbers //

    continue;

    }


    if (userNum == count) {

        console.log("Yikes! Skipping # " + count);

    }


    console.log("Here is an odd number: " + count);

}


///// sophies way ////

var input;

while(true){   //creating infinite loop until breaking our continuing out of the loop. because always true.

    input = prompt("Please enter an odd number from 1 - 50");

    if(isNaN(input)){

        alert("That is not a number. Please try again");

        continue; // continues to prompt OUTSIDE of the if statement.
    }

    if(input < 1 || input > 50) {

        alert("Number is out of range.  Please try again");

        continue;  //continues outside of the if statement
    }

    if(input % 2 === 0) {

        alert("Please enter an odd number.");
        continue;

    } else {
        break;
    }

}

console.log(input);

///---- after prompt ---//

for(var w = 1; w <= 50; w++) {
    if(w % 2 === 0) {
        continue;
    }

    if(w == input) {
        console.log("Yikes! skipping number: " + w);
    } else {
        console.log("Here is an odd number: " + w);
    }

}