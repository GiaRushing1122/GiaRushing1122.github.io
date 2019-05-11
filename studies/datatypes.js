/*
 * DATA TYPES:
 * In Javascript there are two different typpes of data
 *
 * PRIMITIVE && COMPLEX
 * 
 * There are six primitive data types:
 * Boolean
 * Number
 * String
 * Null
 * Undefined 
 * Symbol
 *
 * Primitive Datatypes are immuatable
 * Which means that once created they cannot be modified
 *
 *
 *
 * 
 * Complex datatypes include:
 * Objects
 * Arrays
 * Functions
 *
 * Complex data types are mutable, which mean the state of a compelx datatype can be
 * modified after created
 *
 *
 */

// A boolean is represented by one of two values
// true or false

let bool1 = true;
let bool2 = false;

// Booleans work like an on and off switch 
// or a yes or no switch


// A number represents numerical values in Javascript
// a number can also be +Infinty, -Infinity, and NaN (not a number)
// NaN is rarely used in a program and is typically returned when a Math fucntion fails


let num = 22;
let infiniteNum = +Infinity; // The value of positive infintiy is greater than
// any other numbe in Javascript
infiniteNum = -Infinity // The value of negative infintiy is lower than any other number in Javascript
console.log(typeof NaN) // prints number to console

// Strings are used for storing characters. Strings must be inside of either double
// or single quotes

let string1 = 'Hi';
let string2 = "How are you?"

// Null has one value, It means nothing

let nothingHere = null;

// Variable that have no value are undefined

let myVar;
console.log(myVar); // prints to the console undefined

// Symbol is a new datatype introduced to Javascript in ES6
// Symbol allow us to create a special value that is going to be unique

let sym1 = Symbol('hello');
let sym2 = Symbol('hello');

// when we test for equlity we can see that although both sym1 and sym2
// look the same, they represent different values in Javascript

console.log(sym1 === sym2); // prints false to the console

// accroding to MDN symbol only has one purpose, which is to be used as an identifier
// for object properties



// Objects in Javascript may be defined as an unordered collection
// of related data, of primitive or complex types in the form of key:value pairs

// We can create an empty object by using the following syntax

let obj = {}; // also known as an object literal

// we can add properties to an empty object called key:value pairs

let user ={
    name: 'Jim',
    age: 27,
    active: true
}

// A properties key or identifier has a colon befor it and a value to the right

// We can add remove or view an object property at anytime using bracket or dot notation

//Let's view our properties
console.log(user.name); // prints Jim to console
console.log(user['age']); // prints 27 to console

// Let's add a property
user.website = 'www.Jimlearn27.org'

// Let's remove a property
// we can achieve this by using the delete operator

delete user.active;

// Arrays in Javascript allow us to create an ordered collection, where we have
// 1st, 2nd, 3rd and so on... It is not convenient to use an object here because 
// it provides no methods to manage the order of elements

// To create an array we use the following syntax

let arr = []; // this is an array literal

arr = ['Monday', 'Tuesday', 'Wednesday'];

// We can get a specific element by using sqaure brackets

console.log(arr[0]); //prints Monday to console

// We can replace or add elements to an array using breack notation

arr[3] = 'Thursday';

// Now our array looks like ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// Various properites and methods can be used on array in order to manipulate them

console.log(arr.length); //prints 4 to console

// We can remove elements from an array using the pop method

arr.pop() // removes the last element on the list 'Thursday'

arr.push('Friday') // push adds an element to the end of the list

arr.unshift('Sunday') // unshift adds an element to the beginning of the array

arr.shift() // removes the first element from an array

// Now our array looks like
console.log(arr);
// [ 'Monday', 'Tuesday', 'Wednesday', 'Friday' ]

// Functions are subprograms designed to perform a particular task

// Functions are executed when they are called also known as invoking a function

// To bulid our function, also known as a function declaration
// consists of the function keyword, followed by a function name, a list of parameters
// enclosed in parentheses, and seperated by commas
// The Javascript statements that define a function are enclosed in curly brakets

// Below is a simple function designed to concat two strings seprated by a space

function concatWithSpace(string1, string2){
    return string1 + ' ' + string2;
    // inside our function is a return statement that will give value to our functions
    // functions invoked or called without a return statement will be valued undefined
}

// Let's look at our function in action

let guitarType = concatWithSpace('blues', 'guitar'); // here we set our invoked 
// function to a variable

console.log(guitarType); // prints blues guitaer to console

// Copy by Reference VS. Copy by Value
// Primitive data types are passed by value
// Complex datatypes are passed by reference

// What does this mean?

// By value means creating a COPY of the orginal

let testStr = 'Hello world'
let myPrimReference = testStr; 
// currently Javascript is pointing both variables testStr and myPrimReference
// to the same value string of 'Hello World'
// but what if we change that value simply using a string method?
testStr = testStr.substring(0,5); // now test string is pointing to the value hello
console.log(testStr);
console.log(myPrimReference); // although we chnaged the value of testStr Javascript
// is still pointing to the value of 'Hello world' in the variable myPrimReference

console.log(testStr === myPrimReference); // prints false to the console

// Complex datatypes are copied by reference

let obj1 ={
    name: 'Fred',
}

let obj2 = obj1;
// here we set obj2 eqaul to obj1 
// Now Javascript see's both variables pointing to the same object or reference

obj1.city = 'Los Angeles'
// Here we make a change to that reference using obj1

console.log(obj2.city); // prints Los Angeles to console
// Despite making the change only to obj1, obj2 updates accordingly


console.log(obj1 === obj2); // prints true
// both variable are pointing to the same reference


