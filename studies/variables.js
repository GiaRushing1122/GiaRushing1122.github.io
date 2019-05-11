/*
* Variables
*
* In Javascript we can think of variables like containers
* Javascript includes variables which hold both primitive and complex datatypes
* 
* There are three keywords used to decalre a variable
* var, let, and const
* Each one affects how the code will interpret the variable differently
*
* There are three life-cyles of a variable
* 1.) Declaration - registars a variable at the corresponding scope
* 2.) Initialization/Assignment - allocate space in memory for the variable
* 3.) Assignment/Reassignment - assigns a specified value to a variable
*/

// 1. declaration //

var myName;

console.log(myName); // prints => undefined

// 2. initialization 
myName ='Gia'
console.log(myName); // prints => Gia
// variables are assigned using the assignment operator

// 3. re-assignment //
myName = 'Jasmine';
console.log(myName); // prints => Jasmine
// variables using var can be reassigned by using the assignment operator

/*
* Var vs. Let vs. Const
* 
* Prior to ECMAScript 2015 (ES6) language specification that today's JS is 
* derived from, there was only one way to declare a variable -using var keyword
* 
* Below we will go over the diffrences between var, let, const
*
*/

// Assign the boolean value true to the variable name student using let

let student = true;

// This statement consists of a few parts

// 1.) The declaration of a variable using the let keyword
// 2.) The variable name (or identifier), student
// 3.) The assignment operation represented by the = syntax
// 4.) The value being assigned, true

// Naming Variables

// variable names are known as identifiers in Javascript
// variable names can only consist only of letter a-z, numbers, $, _
// variable names cannot contain any whitespace, tabs, or, spaces
// variable name cannot begin with numbers
// reserved Javascript keywords cannot be used
// variable names are case sensitive
// JavaScript also has the convention of using camel case while using var or let
// most variables that are not constants will follow this construct
// variables declared with const are typically written in uppercase.

// The differences between var, let, and const are based on scope, hoisting,
// and reassginment


// NOTE: We can assign and re-assign anything to a variable using var or let
//- we cannot do this with variables declared using const
var myVariable = 1;
console.log(myVariable) // 1
var myVariable = true;
console.log(myVariable) // true
myVariable = "someString";
console.log(myVariable) // something

let aVariable = 'hello';
console.log(aVariable) // hello
aVariable = 'goodbye'; 
console.log(myVariable) // goodbye


const myCollection = [];
//const myCollection = {}; // identifer "my collection" has already been declared

// although we can not reassign the variable const, we can still modify it
// using appropropriate methods

myCollection.push(1,2,3);
console.log(myCollection); // prints [1,2,3]


// The var variable is function scope

function learn () {
    var isLearning = true
    console.log(isLearning);
}

//console.log(isLearning); // isLearning is not defined

// in the example above we can not access the variable isLearning outside of the
// functions scope.


// Unlike var,  both let and const are block scoped

// i IS NOT known here
// j IS NOT known here

function loop(arr) {
    // i IS known here, but undefined
    // j IS NOT known here

    for( var i = 0; i < arr.length; i++ ) {
        // i IS known here, and has a value
        // j IS NOT known here
    };

    // i IS known here, and has a value
    // j IS NOT known here

    for( let j = 0; j < arr.length; j++ ) {
        // i IS known here, and has a value
        // j IS known here, and has a value

    };

    // i IS known here, and has a value
    // j IS NOT known here
  
}

// i IS NOT known here
// j IS NOT known here


// we can not access variables created with let and const outside of their scope

// variables declared with let and var may be reassigned
// let may only be reassigned when not in use strict mode

var a;
a = 'A';
let b;
b = 'B';
// const c; // will throw an erroer to the console 

// const cannot be reassged or be written undeclared


// Hoisting

// When Javascript compiles all of your code, all of the declarations
// using var is hoisted/lifted to the to top of there functional scope
// or to the top of the global scope (if declared outside a function)

// function declarations are also hoisted to the very top above all variable
// declarations

// The difference between var, let and const declarations is their initializaton
// instances of var and let can be initialised without a value

// Below is an example of hoisting
var foo = 1;
function bar() {
	if (!foo) {
		var foo = 10;
	}
	console.log(foo);
}
bar(); // 10 is printed to the console


// below is how the interpreter would read the code
// the function is hoisted first
// second variable declarations
// after hoisting the code will run


function bar(){
    if(!foo){
        var foo = 10;
    }
    console.log(foo);
}

var foo;

bar();

foo = 1;