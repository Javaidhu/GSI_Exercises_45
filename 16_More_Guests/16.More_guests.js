"use strict";
let Guest_List = [' Raza Khan ', ' Imran Ali ', ' Musa Khan '];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n') ;
// }
let absent_Guest = ' Raza Khan ';
let new_Guest = ' Aslam ';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n');
}
console.log(`Dear Dr.'${absent_Guest} is not coming to the celebration party.`);
console.log('\n\n Good News! We have been given a big round table, so I am inviting 3 more guests.\n\n');
Guest_List.unshift(' Khan Zeb ');
Guest_List.splice(2, 0, ' Samiullah ');
Guest_List.push(' Naqibullah ');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n');
}
