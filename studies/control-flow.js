/*
 * CONTROL FLOW:
 *
 * In computer science making decisions with code is known as control flow
 * 
 * In Javascript, we read code from the first line until the last line of code,
 * unless there is some instructions or statements that changes the control flow
 * 
 * We can control the flow of our code using following: 
 * if...else if.. else statements
 * ternary operator
 * switch statements
 *
 * Control flow statements enable Javascript to make make decisions by executing
 * different code based on various conditions
 *
 */

// if/else statemnts

// We can think of programming as a list of instructions

// using control flow allows us to ask Javascript to make decisions like us

// When writng an if/else statment it's a lot like making everday decions

// if you are really hungy you eat a meal, if not very hungry you may eat a snack,
// if not hungry at all you may just relax
// let's write this out using a conditional

let hungerLevel; // set to a number between 1 and 10

hungerLevel = 5; 


if(hungerLevel => 1 && hungerLevel <= 3){
    console.log('Drink water'); // Prints drink water
} else{
    console.log('Grab some food')
} 


// we can add more condtions to our if/else statement with an else if statement


if(hungerLevel <=3 && hungerLevel >= 1){
    console.log('Relax');  // Prints Relax
} else if(hungerLevel <=6 && hungerLevel >=4){
    console.log('Grab a snack');
}
else{
    console.log('Sit down and eat a meal')
} 

// prints Grab a snack to the console

// In addition to if...else, Javascript has a feature known as a swtich statement
// switch is a type of conditional statement that will evaluate an expression against
// mulitiple possible cases

// We can also use a ternary operator that works similarly to an if..else statement
  // let's take our hunger level conditional as an example
  // we can use one line of code in order to determine if we want to grab a snack
  // or sit down and eat a meal

function hungry(hunger){
    
return hunger <= 5 ? 'Grab a snack': 'Sit down and eat a meal';
}

console.log(hungry(8)); // prints 'Sit down and eat a meal'
  
// We will write a switch statement that will console log the day of the week
// the program will run from top to bottom in search of a match, if no match is found 
// the command will break and evluate the next switch statement
// if no match is found the default case will run

//Set the current day of the week to variable using get Day function
let day  = new Date().getDay();

switch(day) {
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    case 7:
        console.log("It's Sunday!");
        break;
    
    default:
        console.log("Something went wrong.");
}

// Prints the day! 