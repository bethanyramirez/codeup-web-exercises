// const users = [
//     {
//         id: 1,
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript'],
//         yearsOfExperience: 5
//     },
//     {
//         id: 2,
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php'],
//         yearsOfExperience: 6
//     },
//     {
//         id: 3,
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash'],
//         yearsOfExperience: 7
//     },
//     {
//         id: 4,
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql'],
//         yearsOfExperience: 8
//     },
//     {
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//         yearsOfExperience: 9
//     }
// ];
//
//
// /**
//  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.**/
//
//
// const filteredUsers = users.filter( function(element){
//
//     return element.languages.length >= 3
//
//
// } );
//
// console.log(filteredUsers);
//
//
// /** Use .map to create an array of strings where each element is a user's email address **/
//
// const userEmails = users.map(function(element){
//
//     return element.email
// });
//
// console.log(userEmails);
//
// /**Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average. **/
//
//
// const totalYearsOfExp = users.reduce((total, users) => {
//     return total + users.yearsOfExperience
// }, 0);
//
// console.log(totalYearsOfExp);
//
// /** Use reduce to get the longest email from the list of users. **/
//
// const longestEmail = userEmails.reduce((a, b) => {
//
//     return (a.length > b.length) ? a : b;
//
// });
//
// console.log(longestEmail);
//
//
// /** Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin. **/
//
// const singleString = users.reduce((previous, current,) => `${previous} ${current.name}`,"The instructors are:");
//
// console.log(singleString);
//
//
// /** Bonus
//  Use reduce to get the unique list of languages from the list of users. **/
//
// const languageList = users.reduce(function(accumulator, currentValue){
//
// let newArray = [];
//
//  newArray.push(currentValue.languages);
//
//  return newArray;
//
// }, []);
//
// console.log(languageList);

// const myPromise = new Promise((resolve, reject) => {
//     let number = Math.random();
//
//     console.log(`Our number is ${number}`)
//
//
//
// })

// fetch("https://api.github.com/users/bethanyramirez")
//     .then((data) => {
//         let info = data.json();
//         console.log(info)
//     })
//     .catch(error => console.error(error));