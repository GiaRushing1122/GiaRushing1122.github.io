/*
 * LOOPS:
 *
 * Loops are useful when you have to execute the same lines of code repeatedly
 * for a specific number of times as long as said condition is true
 * 
 * Loops allow us to avoid DRY (Don't Repeat Yourself) coding
 *
 * Javascript provides many ways to iterate through loops
 *
 */

// For loops
// For Loops have three condtiions in order to run
  // Starting condition // intializer
  // Duration condition
  // What changes each time? // increment
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

for(let i = 0; i < weekdays.length; i++){
  console.log(weekdays[i]); // 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  console.log(i) // 0,1,2,3,4
}

// We can interrupt a for loop using break;
// We can fast forward to the next iteration using continue;

// We can also loop through an array backwards be reversing our start and end condition
// and decrementing
for(let i = weekdays.length -1; i >=0; i--){
  console.log(weekdays[i]); // 'Friday', 'Thursday', 'Wednesday','Tuesday', Monday', 
  console.log(i); // 4,3,2,1,0
}
  

// While loops
// While loops are very similar to For Loops, 


// With While loops we set an execute a block of code while a specific condition 
  // is true

let c = 0;
while (c < weekdays.length){
  console.log(weekdays[c]);
  console.log(c);
  c = c + 1;
}

// Either a while loop or for-loop can be used to iterate, but while loops are 
 // more useful when there is an uncertain number of iterations versus , a for loop
 // which is best when the number of iterations are known.

// Do...While Loops are very similar to while loops with the major difference that
// do...while loops whill always execute once, even if the condition is never true

let x = 0;

do{
  // Increment variable by 1
  x++;
  console.log(x)
} while(false); 
// prints 1 to the console

// if while were true we would run into an infinte loop
// the code would never stop running
 

// For in loops
// for...in loops are used to loop through an object's property's
// in each iteartion one property or key form the object is assigned to a variable 
// name until all properties of the object had been exhausted

let myObj = {
  name: 'Fred',
  city: 'Los Angeles',
  buiness: true,
}

for(let key in myObj){
  console.log(key); // name, city, business
  console.log(myObj[key]) // 'Fred', 'Los Angeles', 'true'
  
}


// For of Loops
// where for ...in loop iterate over keys
// for...of loops iterate over values
// for...of loops are used for arrays

for(let days of weekdays){
  console.log(days[0]);
}

// In the code above M T W T is printed to the console
// we used for...of in order to iterate through each index of the array and return the 
//first character indexed at 0 in the array

