/*
 * STIRNGS:
 *
 * A string is a sequence of one or more characters that may consists of letters,
 * numbers, or symbols. Each charcter in a Javscript string can be accessed by an 
 * index number, and all string have methods a properties availible to them.
 *
 * Strings are primitive data type in Javascript. The built-in
 * String object allows us to work with a series of characters;
 * We can manipulate Javascript's string primitive data type with a number
 * of helper methods. 
 * 
 * Javascript automatically converts between string primitives and String objects
 * We can call any of the helper methods of the String object on a 
 * string primitive.
 *
 *
 */

let strVal = 'hello'; 

// We can use the typeof operator to determine the type of values 

console.log(typeof strVal); // prints string to console

// We can concatenate strings using operaters
// Both the + and += operator can be used to "add",  strings together


let string1 = 'Good ';
let string2 = 'Day '

let myString = string1 + string2;

console.log(myString); // prints Good Day  to the console

// we can also use the short-hand += to get the same result
let myString2 = string1 += string2; 

console.log(myString2); // prints Good Day  to the console.

// we can also acheive our desired result using the built in concat method

let stringFriend = 'Friend!';

let myStrings = string1.concat(stringFriend);

console.log(myStrings) // Prints Good Day Friend! to console


// Each of the characters in a string corresspond to an index number
// starting with 0

// Using square bracket notation, we can access any character in a string

console.log(stringFriend[0]); // prints F to the console

// We can also use the charAt() method to return the character using the index
// number as a parameter

console.log(stringFriend.charAt(0)) // prints F to console

// We can also use the indexOf() method to return the index number by the first 
// instance of a character in a string

console.log(stringFriend.indexOf('!')); // prints 6 to the console

// Imgine if we only wanted the word friend from our string. Using the built in slice 
// method we have the ablity to 'slice' or string to retrieve a specific part of data

console.log(myStrings.slice(9,15)); // prints Friend to console

// There are also properties like .length which returns the number of characters
// in a string
console.log(myString.length);

// We can also manipulate strings from Uppercase and to Lowercase using methods

console.log(myString.toUpperCase()); // prints GOOD DAY to console

console.log(myString.toLowerCase()); // prints good day to console

// Javascript also has a vary useful method for spliting a string by a character
// and returning a new array

let myFruits = 'apple, banana, orange, pear, avocado';

let fruitList = myFruits.split(',')
console.log(fruitList) // prints [ 'apple', 'banana', 'orange', 'pear', 'avocado' ]
// to console
// Now that we have a new array in the fruitList variable, we can access each section
// by its index

console.log(fruitList[4]) // prints avocado to the console


// Are string methods pure? 

// Strings methods are pure because strings are a primitive datatypes, meaning they
// are saved to the interpreters memory by its value. 
// to prove this, we can use the myFruits string, and get the string of apple only
 
let myApple = myFruits.slice(0,5); 

console.log(myApple) // prints apple
console.log(myFruits) // prints 'apple, banana, orange, pear, avocado'

// Although we made a modification to myFruits in the global scope it has not 
// changed because myFruits in memory is still pointing to the string of fruits
 
 
// String interpolation

//On line 35 the string of 'Good Day', was concatentated, with the introduction
 // to ES6 there is an eaiser way to join lines of string using string interpolation
 
let favFruit = `My favorite fruit is an ${myApple}.`

// We use string interpolation by using backticks, like quotes, between the backticks
// we can simply write out the text without adding a "+" operator
// and we can also dynmically access variables using the syntax, ${varHere},placing
// the variable name within the curly braces. 

// This is a cleaner and more effecient way to write code if there are
// many characters and variables that need to be concatenated. 

console.log(favFruit) // prints "My favorite fruit is an apple."

