(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    // var person = {
    //     firstName: "Bethany",
    //     lastName: "Ramirez",
    //     sayHello: sayHello
    // };



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    // function sayHello(){
    //     return "Hello from " + this.firstName + " " + this.lastName + "!";
    // }
    //
    // console.log(person.sayHello());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     *
     *
     * Name paid $111 originally which gives him a discount of 15%. His price with discount is $90
     * */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320
        }
    ];

    var discount = 0.15;
    var discountedPrice;


    for (var i = 0; i < shoppers.length; i++) {

        var originalPrice = shoppers[i].amount;

        if (shoppers[i].amount > 200) {

            discountedPrice = shoppers[i].amount - (shoppers[i].amount * .20);

            console.log(shoppers[i].name + "'s total:  " + originalPrice + "." + "  The discount is:  " + discount + ". Discounted Price:  " + discountedPrice);
        }

    }




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
             title: "Genesis",
             writer: "Moses",
             setting: {
                 placeWritten: "Wilderness",
                 timeCovered: "In the beginning - 1657 B.C.E"
             }
        },
        {
            title: "1 Kings",
            writer: "Jeremiah",
            setting: {
                placeWritten: "Judah",
                timeCovered: "c. 1040 - 911"
            }
        },
        {
            title: "Micah",
            writer: "Micah",
            setting: {
                placeWritten: "Judah",
                timeCovered: "b. 717"
            }
        },
        {
            title: "Acts",
            writer: "Luke",
            setting: {
                placeWritten: "Rome",
                timeCovered: "33-c 61 C.E."
            }
        },
        {
            title: "Romans",
            writer: "Paul",
            setting: {
                placeWritten: "Corinth",
                timeCovered: "c. 56"
            }
        }
    ];






    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



    books.forEach(function(book, i) {

        console.log("Book # " + (i + 1) + "\nTitle:  " + book.title + "\nWriter:  " + book.writer + "\n----");

    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     **/


    function createBook(title, firstName, lastName) {

        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = firstName;
        book.author.firstName = firstName;

        return book;
    }

    createBook("Revelation", "Apostle John");

     /**
    //  * - Create a function named `showBookInfo` that accepts a book object and
    //  *   outputs the information described above. Refactor your loop to use your
    //  *   `showBookInfo` function.
    //  */
    //
    //
    // function showBookInfo(bookObject) {
    //
    //     books.forEach(function(element,index,array){
    //
    //         console.log(element);
    //     })
    //  }
    //
    //
    // showBookInfo(books);

})();
