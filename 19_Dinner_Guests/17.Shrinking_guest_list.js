"use strict";
let Guest_List = [' Raza Khan ', ' Imran Ali ', ' Musa Khan '];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n') ;
// }
let absent_Guest = ' Raza Khan ';
let new_Guest = ' Aslam ';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n') ;
// }
console.log(`Dear Dr.'${absent_Guest} is not coming to the celebration party.`);
console.log('\n\n Good News! We have been given a big round table, so I am inviting 3 more guests.\n\n');
// Here i have added three guests.
Guest_List.unshift(' Khan Zeb ');
Guest_List.splice(2, 0, ' Samiullah ');
Guest_List.push(' Naqibullah ');
//Here i have printed 6 guests array.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n');
}
// Sorry Guest for not inviting.
console.log('\n\nSorry! We could not arrange a big table, Only two guests will be invited.\n\n');
// Here i removed guests.
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`\n\nSorry Dear Dr. ${remove_guest}, you are not invited for the celebration party.\n\n`);
}
// my remainig two guests.  
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Dr. ' + Guest_List[i] + ',\n\nyou are still invited in our celebration party.\n\nThank you!\n\n');
}
//I have removed all guest from array
Guest_List.splice(0, 2);
console.log(Guest_List);
