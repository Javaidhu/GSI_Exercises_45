// equality and inequality test 1
console.log("Equality test with strings:", "Apple"=== "Apple");
// equality and inequality test 2
console.log("Inequality test with strings:", ("Apple"as string) != "Orange");
// tests using the lower case function
console.log("Lower Case function test: ","Hello".toLowerCase() === "hello");
// Numerical tests equality 
console.log("Equality test with numbers:", 26 === 26);
// Numbericla test with inequality
console.log("inequality test with numbers:", (26 as number) != 24);
// Greater than test
console.log("Greater than test", 10 > 5);
// less than test
console.log("Less than test", 5 < 10);
// Greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
// tests using "and" operator
console.log("And operator test:", 5===5 && 10 > 5);
// tests using "or" operator
console.log("or operator test:", 5===5 || false);
// Test wether an intem is in arry
const fruits :string[] = ['orange','apple','peech'];
console.log('Test"orange" in the array:', fruits.includes("orange"));
// Test wheather an item is not in a array
console.log('Testing "banana" is not in array:', !fruits.includes('banana'));