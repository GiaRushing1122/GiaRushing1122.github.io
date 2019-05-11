/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // assigin animal to an empty object

// using  dot notation let't give our animal object the property species
animal.species = 'cat';
// using bracket notation give animal a prop called noises, with a val of an empty array
animal['name'] = 'Delilah';
animal['noises'] = [];

console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'meow';
noises.push('sniff');
noises.unshift('munch');
noises[noises.length -1] = 'hi';
noises.push('grrrrr');


console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('yummmy');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
var dog = {species: 'dog', name: 'Blitz', noises: ['woof', 'woooah']}
var otter = {species: 'otter', name: 'PJ', noises: ['errrrr', 'hey man!']}
animals.push(duck);
animals.push(dog);
animals.push(otter);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// The best data structure for this list of friends in an array
  // arrays are perfect for a list of friends

var friends = [];

// write a function called get random
function getRandom(array){
 //  this function take in a param of on array
 // returns the index of a random element using Math.random
 // using a random index from this function get a random animal and add its name to friends
return Math.floor(Math.random() * array.length);
   }
// with a random index from this function created, push a random animal into the friends array
var randomAnimalFriend = animals[getRandom(animals)].name;

friends.push(randomAnimalFriend);

// add friends to animal obj

animal.friends = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
