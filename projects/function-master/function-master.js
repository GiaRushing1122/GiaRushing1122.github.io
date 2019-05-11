//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

let arrayOfValues = []

for(let key in object){
   
  arrayOfValues.push(object[key]);
   
  }
 return arrayOfValues;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

let arrOfKeys = [];

for(let keys in object){
    arrOfKeys.push(keys);
  }
return arrOfKeys.toString().replace(/,/g, ' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

let arrOfValues = [];

for(let key in object){
if(typeof object[key] === 'string' ){
 arrOfValues.push(object[key]);
 } 
  }
  let valsStr = arrOfValues.toString().replace(/,/g, " ");
  return valsStr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if(Array.isArray(collection)){
       return 'array';
   } else{
       return 'object';
   }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 return string[0].toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////


function capitalizeAllWords(string) {

let result = [];

let strArr = string.split(' ');

for(let i = 0; i < strArr.length; i++){
    
    result.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
    
}

return result.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + 
object.species[0].toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(object.hasOwnProperty('noises') && object.noises.length > 0){
    
return object.noises.join(' ');
    
}

return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
let strArr = string.split(' ');

for(let i = 0; i < strArr.length; i++){
    
    if(strArr[i] === word){
        return true;
    }
    
}

return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
if(object.hasOwnProperty('friends')){
    object.friends.push(name);
    
}

return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if(object.hasOwnProperty('friends')){
  for(let i = 0; i < object.friends.length; i++){
      
      if(object.friends[i] === name){
          
          return true;
      }
      
    }  
    
  }

return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// take a name and list from ppl
console.log(name)

const notFriends = [];
// return name array of friends, that are not in name.friends array
for(let i = 0; i < array.length; i++){
console.log(array[i]);
if(array[i].name !== name){
    
if(!isFriend(name, array[i])){
    notFriends.push(array[i].name);
  }
    
}
    
    
}

return notFriends;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
// if key does not exist on object create it

if(!object.hasOwnProperty(key)){

object[key] = value;
    
} else{
    
    object[key] = value;
}

return object

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

// takes an object and an array of strings
//     remove any properties on object that is listed in the array

for(let i = 0; i < array.length; i++){
  for(let key in object){
      
      if(object[key] === object[array[i]]){
          
          delete object[key];
        }
      
         }

           }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// should take an array

  // return the array with all the duplicates removed

return array.filter(function(value, index) { return array.indexOf(value) === index });


}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}