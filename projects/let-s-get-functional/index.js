// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('grushing-lowdown');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
let result = _.filter(array, (customer) => {
    return customer['gender'] === 'male';
});

return result.length;
};


var femaleCount = function(array){
return _.reduce(array, (total, customer)=>{
if(customer.gender === 'female'){
    total += 1;
  }
  return total;
}, 0);
 
};

var oldestCustomer = function(array){
let old = {age: -1};
_.each(array, (customer) =>{
    if(old.age < customer.age){
        old = customer
      }
})
return old.name;
};

var youngestCustomer = function(array){
    let young = {age: 3000}
_.each(array, (customer) => {
    if(young.age > customer.age){
        young = customer
    }
})
return young.name;
};

var averageBalance = function(array){
 let total = 0;
 _.each(array, customer =>{
     let balance = customer.balance;
     balance = balance.split('$').join('').split(',').join('')
     total += Number(balance)
 })
 return (total/customers.length);
};

var firstLetterCount = function(array, letter){
     let count = 0;
    _.each(array, customer =>{
        if(customer.name.split('')[0].toLowerCase() === letter.toLowerCase()){
            count++
        }
    })
    
    return count;
    
};

var friendFirstLetterCount = function(array, customer, letter){
  // The Goal of this function!!  Return the Number of friends with given letter 
      // we need access to each customer using each
const findCustomer = _.filter(array, cust => {
    if(cust.name === customer){
       return customer;
    }
    
});

const friendsArray = findCustomer[0].friends;

return firstLetterCount(friendsArray, letter);


  // first we need to identify the customer using filter
// get access to the customer.friends array using a variable
// use the alredy made firstLetterCount() on the friendsArray. 


};

var friendsCount = function(array, name) {
  // the goal of this function
    // we are passed the customers array
    // and a name.
    // find the customers names that have the given name on their friends list
    // should return an array
 // ie. customers who are friends with 'Olga Newton' 
 
 // first we have to get access to each customers friend list
  // each customer has a friend property
    // if the customer is friends with the given name
    // use a for of loop to loop through the customers.friends array
    // push the customer.name in the friends array

// WHO IS FRIENDS WITH THIS PERSON?? 
    
 
 return _.reduce(array, (friendsOfArr, customer) => {
const customerName = customer.name

const friendsList = customer.friends;

for(const friends of friendsList){
  if(friends.name === name){
      
      friendsOfArr.push(customerName);
      
    }
    
  }

return friendsOfArr;
     
 }, []);
  
    
};

var topThreeTags = function(array){
    
let result = []; // empty array 
// this function will return an array

// map all the customer tags into one Array
 let mapped = array.map(customer =>{
  return customer.tags
});

// Create flatten function in order to flatten 
 // the array matrix

function flatten (arr) {
 return arr.reduce((flatArr, subArray) => flatArr.concat(subArray), [])
}
// create count function in order to count the occurences of each string in an array
function count(arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

let listOfTags = flatten(mapped);
// Now all tags are in a single array using flat function


let tagObj = count(listOfTags);
// Each tag count is saved to an obj using count function


function objectValues(obj) {
    var res = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            res.push(obj[i]);
        }
    }
    return res;
}
//  create function to get object values
let countOccur = objectValues(tagObj)



let numCount = countOccur.sort((a,b)=> b-a)
// Sort the object with the tags functions in decending order using sort

for(const tag in tagObj){
  if(tagObj[tag] >= numCount[2]){
    result.push(tag);
  }
}
// Loop through the tag object using a for in loop and push elements that match the highest tag into result array

return result;
// return result



};

var genderCount = function(array){
 let genders = _.reduce(array, function(prevSum, currentValue, currentIndex) {
      let genderTotal = prevSum;
      if(currentValue.gender === 'transgender') {
          genderTotal.transgender++;
      } else 
      if(currentValue.gender === 'female') {
          genderTotal.female++;
      } else 
      if(currentValue.gender === 'male') {
          genderTotal.male++;
      }
      return genderTotal;
  }, {male: 0, female: 0, transgender: 0});
  return genders;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
