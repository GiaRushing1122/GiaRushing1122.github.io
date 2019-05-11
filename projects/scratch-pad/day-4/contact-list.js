// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
 // creating a factory function
  let obj ={};
  obj.id = id;
  obj.nameFirst = nameFirst;
  obj.nameLast = nameLast;
  
  return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
        return contacts.push(contact);
        },
        findContact: function(fullName){
            // contacts is an array with object on it with contacts
            // loop through for access to each contact's prop's
            // use bracket notation
            for(let i = 0; i < contacts.length; i++){
            if(fullName === contacts[i]['nameFirst'] + ' ' + contacts[i].nameLast){
                return contacts[i];
             }else{
                 return undefined;
             }
          }
        },
        removeContact: function(contact){
           // filter through array to remove contact
           let removedFromContacts = contacts.filter(function(val, i){
               
              if(val === contact) {
                  contacts.splice(i,1);
              }
             
           }) 
            
             return removedFromContacts;
             },
        
        printAllContactNames: function(){
            // create a new array to access both elems
            let prints = [];
          for(let i = 0; i < contacts.length; i++){
             prints.push(contacts[i]['nameFirst'] + ' ' + contacts[i].nameLast);
            
          }
          
          return prints.join('\n');
          //turn to string using join
          // sperate using \n
        }
        
         
     
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
