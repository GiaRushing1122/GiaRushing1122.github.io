/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a function named search
// search takea a param of an array representing animals
// this function looks through the animals array and returns the animals object
// if that animal name exists
// return null if no animal exists

function search(animals,name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
        
        return animals[i];
        } 
    }
    
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a function named replace
 // replace takes 3 parameters, an animals array
 // a name of an animal to look for
 // and an object that represents a replacement animal
  // if an animal with a specifc name already exists

function replace(animals, name, replacement){
 for(var i = 0; i < animals.length; i++){
     if(animals[i].name === name){
      
      animals.push(replacement)
     }
 }   

return;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function named remove
  // remove takes two parameters  an array of animals to look through
  // and the name of the animal to find
  // if that animal is found remove it

function remove(animals, name){

for(var i = 0; i < animals.length; i++){
 if(animals[i].name === name){
     
   animals.splice(i,1);
 }
    
}

return null;    
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function called add
  // add takes two parameters 
  // an array of animals
  // and an animal object , representing a new animal to be added
   
function add(animals, animal){
if(animal.hasOwnProperty('name') && animal.hasOwnProperty('species')){
  if(animal.name.length > 0 && animal.species.length > 0){
   
   for(var i = 0; i < animals.length; i++){
    if(animal.name === animals[i].name){
     return null;
      }
   }
    animals.push(animal);
   }
  return null;
     }
      }



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
