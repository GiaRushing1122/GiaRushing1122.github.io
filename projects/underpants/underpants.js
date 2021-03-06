// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = (value) => value;
    // takes an argument of any value
    // simply returns the value

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = (value) => {
 // typeOf takes in a value as an arguement and returns type of
if(typeof value === 'string') return 'string';
else if(value === undefined) return 'undefined';
else if(typeof value === 'number') return 'number';
else if(typeof value === 'boolean') return 'boolean';
else if(value === null) return 'null';
else if(typeof value === 'function') return 'function';
else if(Array.isArray(value)) return 'array';
 
    return 'object';
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = (array, number) => {
// first takes in an array and a number
  // if the array passed is not an array return an empty arrya
if(Array.isArray(array) === false) return [];
else if(!number) return array[0];
else if(number < 0) return [];
else if(number > array.length) return array;
return array.slice(0, number);
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = (array, number) => {
if(Array.isArray(array) === false) return [];
else if(!number) return array[array.length - 1];
else if(number < 0) return [];
else if(number > array.length) return array;
return array.slice(-number);
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = (array, value) => {


for(let i = 0; i < array.length; i++){
    if(array[i] === value){
        return i;
    }
    
  }
  return -1;
 
};
 
 // loop through the array

 // takes in an array and a value
  // return the index of the array that occurs first in given value
  // DO NOT USE INDEX OF!!!! 
 // What if the array has multiple occurences
 // what if value is not in the array // return -1
 

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
  // MUST USE TERNARY OPERATOR
//takes in array and value as param
   // loop through the array
   //array[i] has val?? return true . if not false
   
_.contains = (array, value) => {

if(value !== undefined){
    return _.indexOf(array,value) === -1 ? false: true;
  }

return false;
    
};
    

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = (collection, test) => {
    if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
      test(collection[i], i, collection);  
          
         }
       
      } else {
   for(let key in collection){
   test(collection[key], key, collection);
         }
      }
    
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


// takes in one param.. an array
  // returns a new array
  // loop through the given array
  // using the indexOF I built
  // retrieve the unique elements from the given array
  // push them inside the result array
    // return result

_.unique = (array) => {
    let result = [];
  for(let i = 0; i < array.length; i++){
    if(_.indexOf(result, array[i]) === -1){
        result.push(array[i]);
    }
}
return result;
};




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// filter takes to params an array and a test
  // loop through the given array
  // call the function on each element index and the entire array
  // return a new array of elems that pass the test as truthy
     // what if the fuunction returns something other than true or false
     // use _.each
// create and return a result array

_.filter = (array, test) => {

let result = [];

_.each(array, function(element, index, collection){
    if(test(element, index, collection)) {
        result.push(element);
    }
});

return result;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// _.reject takes in an array and a function as params
   // call the test for each element in the array
   // create a results array and return that array
   // USE FILTER
_.reject = (array, test) => {
    let result = [];
    _.filter(array, function(element, index, collection){
        if(!test(element, index, collection)){
            result.push(element);
        }
    })
    return result;
    
};




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// takes in an array and a function
// return a new array that holds two sub arrays
   // use filter 

_.partition = (array, test) => {

 let truthy = [];
 let falsy = [];

 _.filter(array, function(element, index, array){
     if(test(element, index, array)){
       truthy.push(element);
         
     }else if(!test(element, index, array)){
         falsy.push(element);
       }
 });
 
 return [truthy, falsy];
};





/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//map takes two params a collection and a test
   // use each ... save the return value of each function in a new array 
   // create a new array and return it
_.map = (collection, test) => {
    let result = [];
    
    _.each(collection, function(element, index, collection){
            result.push(test(element, index, collection));
    });
    
    
    return result;
    
    
    
};





/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//takes an array of objects and a prop
  // pluck returns a new array
  // must use map! map returns a new array array.. and runs a function on it
  //  retrive the values from the object in the array

_.pluck = (array, prop) => {
   let result = _.map(array, (obj) => {
       return obj[prop];
   });
   
   return result;
}; 


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/





_.every = (collection, test) => {
// if no test is given... loop thorugh the collection
  // if no element pass return false.
if(!test){
    for(var i = 0; i < collection.length; i++){
        if(!collection[i]){
            return false;
          }
      }
  } else if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
          if(!test(collection[i], i, collection)){
           return false;
            }
        }
    } else{
      for(var key in collection){
      if(!test(collection[key], key, collection)){
          return false;
          } 
        }
      }

 
 return true;
    
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = (collection, test) => {
var result = [];
if(test === undefined){
     for(var i = 0; i < collection.length; i++){
         return collection[i] ? true : false;
        }
   typeof(test) === undefined && typeof(test) === 'boolean' ? true : false;
} else if(collection){
    _.each(collection, function(element, index, collection){
        result.push(test(element, index, collection));
    });
   }
       
      return result.indexOf(true) === -1 ? false : true;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// takes in array, function and a seed
  // edge case.. what if the seed is not givemn
_.reduce = (array, test, seed) => {
    var result;
    if(seed === undefined){
      result = array[0]; 
    _.each(array, (value, index, collection) =>{
      result = index === 0 ? result : test(result, value, index);  
    });
      } else{
          result = seed;
          _.each(array, (value, index, collection) =>{
              result = test(result, value, index);
          });
      }
      
      return result;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = (obj1, obj2,...objs) => {

for(let key in obj2){
    obj1[key] = obj2[key];
}
for(let key of objs){
   for(let keys in key) {
       obj1[keys] = key[keys];
   }    
}

return obj1;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
