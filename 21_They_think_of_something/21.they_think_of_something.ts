import { ADDRGETNETWORKPARAMS } from "dns";


interface person{
    name :string,
    Age : Number,
    Qualification : string ,
    Nationality : string,
    Student : Boolean
}

let person = {
    Name : 'Javaid' ,
    Age : 34,
    Qualification :'Master',
    Nationality : 'Pakistani',
    Student :'True' 
}

console.log(person);
// car object

interface car{
company : string,
color : string,
model : number,
Automatic : boolean
}
let car = {
    company : 'Toyota',
    color : 'white',
    model :1985 ,
    Automatic : 'true'
}

console.log(car);