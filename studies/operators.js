/*
 * OPERATORS:
 *
 * Simply, operators allow us to produce values
 *
 * Operators are used to perform specfic mathematical or logical computations on 
 * operands which typically produce a result.
 *
 * Operands are values or various datatypes in Javascript that are used along side
 * operators to produce outcomes. 
 * 
 * When using operators on operands we can imagine ourselves as an architect
 * who has created a blueprint to build a home. We can think of operators as our 
 * consturction "workers" and operands are the "tools",  
 * all used to build a "structure" or a given result.
 *
 *
 */

//Assignment operators

// Javascript uses the assignment '=' operator to assign a value to a variable or property 

const assignOne = 1; // setting the variable assignOne to the number 1

console.log(assignOne) // prints 1

// besides the normal assignmet operator, Javascript supports other assignement 
// operators that provode short cuts by combining assignment with some other operation
  // for example

let isFive = 5;

console.log(isFive+=1); // prints 6
// this code is the same as wrting 
let equalsSix = isFive + 1;

console.log(equalsSix) // prints 6

// similar operators include (-=, *=, /=, %=, <<=, >>=, >>>=, &=, |=, ^=)

//Arithmetic operators
  // in Javascript, arithmetic operators take numerical values as operands
  // and return a single numerical value
  // there are four standard arithmetic operators

// addition(+)

let add = 1 + 1 // 2

// subtraction(-)

let subtract = 4 - 2 // 2

// multiplication (*)
let multiply = 9 * 9 // 81

// division

let divide = 25/5 // 5

// there is also the remainder operator
let remain = 9 % 4 // 1

// there is also the incrementer and the decrementer
  // The incrementor operator increments (adds one to) its operand and returns a value
  // if used postfix, with operatoer after operand 
 console.log(remain++) // prints 1 to console
 
 // when called with postfix it will return the value before incrementing
  // if used with the prefix with operator before operand
  
console.log(++add) //then it will return the value after incrementing
  // above 3 is printed form ++add
  
 // the decrement operator substract one from its operand and returns that value
console.log(divide--) // prints 5

console.log(--multiply) // prints 80

   //Comparison operators
// comaprison operators compare values that return a boolean
// the operators include > greater than, < less than, >= greater than or equal to
// less than or equal to <=, eqaul to ==, === strictly equal to, != not eqaul to
// !== strictly not equal to

console.log(1 < 1); // prints false // 1 is not less than 1
console.log(1 === 1); //prits true 1 is equal to 1
console.log(1 === '1') // prints false 1 is not strictly equal to the string of 1
console.log(1 == '1') // prints true 1 is loosely equal to the stirng of 1


//Logical operators

// logical operators allow use to assert the equality of a statement with Javascript
// we can compare whether two values or expressions using the operators
// && (and), ||(or), 


// Below I created a function to figure out how many parameters are passed into 
 // the function, using logical operator && and || the computer will log how
 // many parameters are passed into the function.

function parametersPassed(operand1, operand2){

if(operand1 && operand2){
   console.log(`${arguments.length} parameters passed`);
} else if(operand1 || operand2){
    console.log("One parameter passed");
} else{
    console.log('No parameters passed');
}
    
}

parametersPassed('Hello'); // One parameter passed

//Unary operators (!, typeOf, -)

//The unary operators in JavaScript are: 
//unary plus (+), 
//unary minus (-), 
var a = 10;
a = +a; //  10
a = -a; // -10
//prefix / postfix increments (++),
//prefix / postfix decrements (--).
console.log(++a); // prints -9

// delete operator deletes an object, an object's property, or an element at a
// specified index in an array
let myArr = ['a','b','b']
delete myArr[2];
console.log(myArr); // prints [ 'a', 'b',  ]

// The typeof operator returns a string indicating the type of the unevaluated 
//operand. operand is the string, variable, keyword, or object for which the type 
//is to be returned. The parentheses are optional.

console.log(typeof (myArr[0])); // prints string

//If the value is a number, the unary plus operator does not take any effect
//whereas the unary minus negates the value.


// Binaray operators (<, ===, >)
  // Binaray operaters may also be logical operaters
  // These operators take in two operands and compare values
  // We can compare any datatype and the interperter will evaluate them to a boolean
     // below I created a function that strictly campares any datatype passed to it
     // the function will return a boolean (true or false)
function strictCompare(a, b){
    return a === b;
}

const numbers = strictCompare(4,5)
console.log(numbers) // prints false

const complex = strictCompare({},{})
console.log(complex); // prints false

const iAmEqual = strictCompare(1,1);
console.log(iAmEqual); // prints true



//Ternary operator (a ? b : c)

// these operators are a one-line shorst hand for an if-else statement

// first let's write an if else statement determining the amount of times a student
 // has been tardy to class.

let daysLate = 2;

if(daysLate === 0){
    console.log('Always on time!')
}else{
    console.log(`You have been ${daysLate} days late`)
}

// we can write this same statemnt using a ternary operator as well

const studentOnTime = daysLate === 0 ? 'Always on time!' : `You have been ${daysLate} days late`;

console.log(studentOnTime); //  print "You have been 2 days late"