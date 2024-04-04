


let Guest_List :string[] = [' Raza Khan ',' Imran Ali ',' Musa Khan '];

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n') ;
}

let absent_Guest :string = ' Raza Khan ' ;
let new_Guest :string = ' Aslam ' ;
Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Dr. ' + Guest_List[i] + ',\n\nIt is my pleasure to invite you in our celerabation party.\n\nThank you!\n\n') ;
}

console.log(`Dear Dr.'${absent_Guest} is not coming to the celebration party.`) ;