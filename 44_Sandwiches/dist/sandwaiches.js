"use strict";
// Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function 
//  call provides, and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.
function make_sandwich(item) {
    console.log('Making sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Have your sanwich!');
}
make_sandwich(['Cuban ', 'Grilled ', 'Peanut Butter']);
make_sandwich(['Jelly ', 'Ham', 'Tuna']);
make_sandwich(['Cheesesteak', 'Reuben ', 'Butter']);
