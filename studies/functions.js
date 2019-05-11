/*
 * FUNCTIONS:
 * 
 * When we want to make things happen in Javascript we use functions.
 * 
 * Functions are run in blocks of code, self contained in their own scope
 * In Javascript functions are said to be 'First Class Citizens', because 
 * they can be assigned to value, and they can be passed as aruguments, and used 
 * as a return value.
 * 
 * Functions can be written and used in a plethora of ways within Javascript
 * Below we will explore some function types and how to use them.
 *
 * 
 *
 */

// In Javascript there are four ways we can create functions within our code
    // These include:
     // Function Expressions
     // Function Declarations
     // ES6 style or Fat-Arrow functions
     // Anonymous function
     // Immediately Invoked Function Expressions

// Fucntion Expression
  // Functions expressions are functions saved to a variable name
  // Below the function isEven is an example of a function expression
const isEven = function(x){
return x % 2 === 0;
};
console.log(isEven(4)); // returns true

// The functions timesTwo and multiply are written in ES6 style
  // Much like arrow functions these functions are saved to memory using a 
  // variable name as well, where ES6 functions differ is from an expression
  // or declaration is the syntax and lexical scoping
// The syntax for ES6 functions are parenthesis (), 'fat arrow' =>, and a function
// body {};

//ES6 Fat-Arrow Functions
const timesTwo = (x) => {return x * 2};

console.log(timesTwo(2)); 

const multiply10 =  x => x * 10;
// multiply10 is also an ES6 function but if there is one parameter and a simple
// function body we can drop the parenthesis and curly brackets.

const numbers = [1,2,3,4,5];


// Function Declaration
function addEmUp(list){
    let sum = 0; 
    for(let i = 0; i < list.length; i++){
        sum += list[i];
    }
    return sum;
}

console.log(addEmUp(numbers));  // Returns 15

// Function addEmUp is a funcition declartion, this functions are created using
  // the function keyword, parenthesis for parameters, and curly brackets for the
  // function body

function sayHello(name){
    let text = `Hello ${name}`;
    let say = function(){
        console.log(text);
    }
  say();
}

// When working with Javascript functions we may come across closure
// Simply, closure is when a function uses elements outside of its own function scope
// we can see the example in the sayHello function, nested inside the sayHello 
// function is the function say, say uses the variable text which is housed in 
// the sayHello function scope. 
  
  // sayHello is also considered a pure function, like all pure functions
  // this function is deterministic, and given the same input we will always recieve
  // the same output, if we pass the string of 'Joe' to sayHello
  // we will always get back "Hello Joe"

console.log(sayHello('Joe')) // "Hello Joe"

  // Recursion is the the process of a function calling itself within its own body
// We can create the addEmUp function recursively as well
 // Below our summed function produes the same result on the numbers array

function summed (list){
 if(list.length === 0) return 0;
return list.shift() + summed(list);
    }
console.log(summed(numbers)); // Returns 15
    
    
    // [1,2,3,4,5]
    // [2,3,4,5]
    // [3,4,5]
    // [4,5]
    // [5]
    // []
    // 0 + 5
    // 0 + 5 + 4
    // 0 + 5 + 4 + 3
    // 0 + 5 + 4 + 3 + 2
    // 0 + 5 + 4 + 3 + 2 + 1
    
// Functions are powerful and dependable
// Especially when declartive and pure
    

// Higher Order Functions


// Filter method take all the elements in an initial array, and only allow certain elements into a final array.

// Map method run a function on each element in an initial array before storing it in a final array.

// Reduce method combine elements from an initial array into a final value or array of values.

// Below are a few higher order functions in action
    
const sum = numbers.reduce(addEmUp)
// console.log(sum);  // error is thrown

// When sum is called it thrown an error because our summed function we created 
  //  recursively mutated the numbers array in memeory
  // the .shift() method which removes the first element of the arrary is an 
// impure function because it mutates a complex datatype. 
  // this is why creating declartive and pure functions are essential in functional
  // programming

// Below is an example of function composition, we can chain higher order functions
// together in order to manipulate data using less lines of code,
  // filter loops through our array calling our is even function
  // filter produces a new array with the values passing the isEven predicate
  // next we chain map, map calls function timesTwo on the elements that passed 
  // the isEven test. 
  


const list = [4,3,5,6,9,7,1]

const result = list.filter(isEven)
.map(timesTwo)

console.log(result); // [8,12]

// Lexcial Scope

// Lexical scope is the ability of the inner function to access the outer scope
// in which it is defined
// Let's take a look at how this works
  // inside of this Immediately Invoked Function Expression we have two fucntions
                    // say() && act()

// each function has its own scope housed inside it's curly braces {}
// each scope has the variable greet and is desgned to call the variable greet
// although we call the function say within greet the function 'Hey!' will be
// printed and not 'Hello!'
// The inner function has accessed the outer function that it's variable is defined in

 
  (function sayGreeting(){
      let greet = 'Hey!'
      function say(){
          console.log(greet)
      }
      function act(action){
          let greet = 'Hello!'
          action(say)
      }
      
      act(say); //'Hey!' is logged to the console
      
  }) ();
  
  

// Each time a function is created its own scope is created between its
  // "{}" curly braces

// Below is an example of lexical scoping using method invocation
 //The method 'print' is defined in an objects scope, but in order to get 'print'
  // rules to work we must follow certain lexical scoping

// Obj.print() when called will print th string Gia to the console,
// You may wonder why we wrapped out ES6 function into a set timeout
// When using the 'this' key word with an ES6 function this will refer 
// to it's  current surronding scope and no further, it would not bind itself to
// the object placing it inside the setTimeout, binds this to it scope, and allows
// the ES6 function to run within the object


var obj = {
 
name: 'Gia',
print(){
setTimeout(() => {
    console.log(this.name);
}, 1000);
    
  }
    
    
 };



obj.print(); // Gia is logged to the console