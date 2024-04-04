"use strict";
// Start with a copy of program from Exercise 41. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
let magician = [' David Blaine', ' Penn and Teller', ' Derren Brown', ' Harry Houdini'];
function make_great(greatMagician) {
    for (let i = 0; i < greatMagician.length; i++) {
        magician[i] = 'The great' + greatMagician[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
