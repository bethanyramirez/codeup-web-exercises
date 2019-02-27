"use strict"

/**
 * Declaring the html variable to a string containing HTML and line by line adding the individual coffee properties.
 */

function renderCoffee(coffee) {
    var lightRoast = 'light';
    var medRoast = 'medium';
    var darkRoast = 'dark';
    var html = '<div class="col-12 col-lg-6 coffee d-flex my-2 custom-border-div">';

    html += '<h4 class="mr-2">' + coffee.name + '</h4>';

    if(coffee.roast === lightRoast) {
        html += '<p class="text-muted"><span class="badge badge-pill badge-light">' + coffee.roast + '</span></p>';
    } else if (coffee.roast === medRoast) {
        html += '<p class="text-muted"><span class="badge badge-pill badge-secondary">' + coffee.roast + '</span></p>';
    } else if (coffee.roast === darkRoast) {
        html += '<p class="text-muted"><span class="badge badge-pill badge-dark">' + coffee.roast + '</span></p>';
    }

    html += '</div>';

    return html;
}


/**
 * Declaring the html variable to an empty string and then looping through the coffee objects array. HTML is getting built every time renderCoffee() is called.
 */


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



/**
 * This is an event function (or handler).
 */

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;   // whatever roast is selected in the dropdown.. //
    var filteredCoffees = [];                // an empty array that gets pushed to (or filled) from the forEach function //


    coffees.forEach(function(coffee) {        // for each "coffee" object (or element in the array)
        if (selectedRoast === allCoffees.value) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }



    });
    coffeesContainer.innerHTML = renderCoffees(filteredCoffees);
}

function inputSearch (e) { //function that makes the search work //
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(searchedCoffee.value.toLowerCase())) {
            html += renderCoffee(coffees[i]);
            // console.log(html);
        }
    }
    coffeesContainer.innerHTML = html;
}


function addCoffee (e) {  //function to add coffee to the array
    var html = ''; //this needs to be done so that the
    e.preventDefault();

    var newCoffeeObject = {};
    newCoffeeObject.id = coffees.length + 1;
    newCoffeeObject.name = newCoffee.value;
    newCoffeeObject.roast = newRoast.value;

    coffees.unshift(newCoffeeObject);

    html += renderCoffees(coffees);

    coffeesContainer.innerHTML = html;
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var coffeesContainer = document.querySelector('#coffees');
var searchedCoffee = document.getElementById('coffee-name');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var allCoffees = document.getElementById("all");

var newCoffee = document.getElementById('add-coffee-name');
var newRoast = document.getElementById('add-roast');
var submitToAdd = document.querySelector('#add-coffee-submit');




coffeesContainer.innerHTML = renderCoffees(coffees);

searchedCoffee.addEventListener('keyup', inputSearch, false);
// submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener("change", updateCoffees);
submitToAdd.addEventListener('click', addCoffee);

