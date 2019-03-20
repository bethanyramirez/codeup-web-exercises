/**
 *
    Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
 *
 **/


const url = 'https://api.github.com/users/';



function wait(delay) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve()
        }, delay);
    })
}
wait(1000).then(() => console.log(`You\'ll see this after 1 second`));










/** Generate a Personal Access Token for the github api.

 We will use this so that we don't get rate limited when talking to the github api. You can add the token to your requests like this:


 fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
 **/


// fetch(url, {headers: {'Authorization': gitToken}})
//     .then(data => {
//         return data.json(); // this is the response data that comes back when we make the request.  json() will return a js object that we can interact with.
//     })
//     .then((jsonData) => {
//         console.log(jsonData)
//     });







/** Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

 **/
//
// function returnPromise(username){
//     return new Promise((function (resolve, reject){
//         resolve("Brody");
//         reject("Adrien");
//         fetch(url + username + "/events/public", {headers: {'Authorization': gitToken}})
//             .then(data => {
//                 return data.json();
//             })
//             .then((jsonData) => {
//                 console.log(jsonData);
//             })
//     }))
// }
//
// returnPromise("bethanyramirez").then(banana => console.log(banana));



/** daniels way **/
// const getLastPush = (username) => {
//     return fetch(url + username + "/events/public", {headers: {'Authorization': 'token' + gitToken}})
//         .then(data => {
//             return data.json(); // this is the response data that comes back when we make the request.  json() will return a js object that we can interact with.
//
//         })
//         .then((data) => {
//             console.log(data); // logs the array of 30 objects
//             return data.filter((event) => {
//                 return event.type === "PushEvent"; // to filter out only the pushes out of the 30
//             })
//         })
//         .then((data) => {
//             console.log(data);
//             return data[0].created_at; // to filter out the index 0
//         });
// };
//
// getLastPush("bethanyramirez").then((timestamp) => console.log(timestamp)); // 'timestamp' is whatever you want to call it.  Best practice is to call it something that you expect to get returned.

// "fetch" is a promise machine for API calls... what??!


/** me experimenting with making a dashboard **/

let userNameValue = document.getElementById("usernameEntered");
let userNameButton = document.getElementById("submitUserName");
let commitBox = document.getElementById("commit-box"); // the box on the left that will display commits


const getNumCommits = (username) => {
    return fetch(url + username + "/events/public", {headers: {'Authorization': 'token' + gitToken}})
        .then(data => {
            return data.json();
        })
        .then((data) => {
            // console.log(data);  // remove this to see all the data received back.
            return data.filter((event) => {
                return event.type === "PushEvent";
            })
        })
        .then((data) => {
                let counter = 0; // to begin counting commits
            data.forEach(function (element) {
                let commitInfo = element.payload.commits;
                counter += commitInfo.length;
            });
                 return counter; // or console.log the counter
        })

};



userNameButton.addEventListener("click", function() {

    getNumCommits(userNameValue.value);

    results = commitBox.innerText;

});

