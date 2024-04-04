// Start with your work from Exercise 42. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians()
//   with each array to show that you have one array of the original names
//  and one array with the Great added to each magician’s name.

let magician : string[] = [' David Blaine', ' Penn and Teller', ' Derren Brown',' Harry Houdini'];

function copyArray(array:string[]){
    return[...array]
}
function make_great(greatMagician:string[]){
    for(let i=0; i<greatMagician.length; i++){
      greatMagician[i] = 'The great' + greatMagician[i]
    }
}
function show_magicians(magicians: string[]){

    magicians.forEach(element => {
    console.log(element);
 });   
}
const copymagicianArray = copyArray(magician);
make_great(copymagicianArray);
console.log('\n\nThis is the origial array.');
show_magicians(magician);

console.log('\n\nThis is the modified copy of the array.');
show_magicians(copymagicianArray);